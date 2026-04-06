# Ultracite Code Standards

This project uses **Ultracite**, a zero-config preset that enforces strict code quality standards through automated formatting and linting.

## Quick Reference

- **Format code**: `pnpm dlx ultracite fix`
- **Check for issues**: `pnpm dlx ultracite check`
- **Diagnose setup**: `pnpm dlx ultracite doctor`

Biome (the underlying engine) provides robust linting and formatting. Most issues are automatically fixable.

---

## Adding an app (content)

**Goal:** The app appears in the catalog with correct types, a matching icon at `/images/apps/{slug}.webp`, and install hints that match what the UI generates (see `hooks/use-command.ts`).

### Checklist

1. **Categories** — If you need a new tag, update [`content/categories.ts`](content/categories.ts): add the literal to the `CategoriesType` union **and** to the `CATEGORIES` array. Keep them in sync; the array drives listing/filter behavior.
2. **App entry** — Append a new object to the `APPS` array in [`content/apps.ts`](content/apps.ts). Follow the field contract below and mirror the property order of neighboring entries when practical.
3. **Icon** — Add `public/images/apps/{slug}.webp` (create `public/images/apps` if missing). The public URL is `/images/apps/{slug}.webp`.
4. **Quality** — Run `pnpm dlx ultracite fix` and `pnpm dlx ultracite check`.

### Field contract (`AppType`)

| Field | Rules |
| --- | --- |
| `slug` | Lowercase kebab-case, unique, URL-safe. Must match the icon basename: `{slug}.webp`. |
| `name` | Display name as published by the developer. |
| `description` | Short, accurate summary (no trailing fluff). |
| `developer` | Legal or brand name of the vendor. |
| `category` | One or more `CategoriesType` values; only use literals that exist in `categories.ts` (or add them in step 1). |
| `platform` | Subset of `mac`, `windows`, `linux`, `ios`, `android` from [`content/platforms.ts`](content/platforms.ts). |
| `website` | Canonical product URL (`https://`). |
| `download` | Official downloads or app store landing page (`https://`). |
| `command` | Per-OS install hints. **mac** / **windows** / **linux:** package identifiers (see below). **ios** / **android:** full `https://` App Store or Play Store (or official mobile install) URLs when the app lists that platform. Only include keys that match `platform`. |

### How `command` is interpreted

The copy-to-clipboard string is built in `hooks/use-command.ts`. With **multiple apps** (cart): **mac** uses one `brew install --cask` with all cask tokens space-separated; **linux** uses one `apt install` with all package names space-separated; **windows** chains `winget install -e --id …` with ` && `; **ios** / **android** still use one store/download URL per app, joined with newlines.

- **mac:** `brew install --cask <command.mac>` — use the Homebrew **cask** token (verify on [formulae.brew.sh](https://formulae.brew.sh/cask/) or `brew search --cask <name>`).
- **windows:** `winget install -e --id <command.windows>` — use the Winget package id (verify with `winget search <name>`).
- **linux:** `apt install <command.linux>` — use a package name valid for Debian/Ubuntu-style `apt`, or **omit** `command.linux` if there is no good match (the UI string would be wrong).
- **ios** / **android:** the value is copied **verbatim** (full URL). If omitted, `use-command` falls back to `download` when it is an `https://` URL; otherwise the platform is treated as unsupported for that app.

### Image spec

- **Path:** `public/images/apps/{slug}.webp`
- **Format / size:** WebP, **192×192** pixels (square app icon).
- **Behavior:** Missing or broken files still build; `ShimmerImage` falls back to `/images/placeholder.svg` on load error.

---

## Core Principles

Write code that is **accessible, performant, type-safe, and maintainable**. Focus on clarity and explicit intent over brevity.

### Type Safety & Explicitness

- Use explicit types for function parameters and return values when they enhance clarity
- Prefer `unknown` over `any` when the type is genuinely unknown
- Use const assertions (`as const`) for immutable values and literal types
- Leverage TypeScript's type narrowing instead of type assertions
- Use meaningful variable names instead of magic numbers - extract constants with descriptive names

### Modern JavaScript/TypeScript

- Use arrow functions for callbacks and short functions
- Prefer `for...of` loops over `.forEach()` and indexed `for` loops
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access
- Prefer template literals over string concatenation
- Use destructuring for object and array assignments
- Use `const` by default, `let` only when reassignment is needed, never `var`

### Async & Promises

- Always `await` promises in async functions - don't forget to use the return value
- Use `async/await` syntax instead of promise chains for better readability
- Handle errors appropriately in async code with try-catch blocks
- Don't use async functions as Promise executors

### React & JSX

- Use function components over class components
- Call hooks at the top level only, never conditionally
- Specify all dependencies in hook dependency arrays correctly
- Use the `key` prop for elements in iterables (prefer unique IDs over array indices)
- Nest children between opening and closing tags instead of passing as props
- Don't define components inside other components
- Use semantic HTML and ARIA attributes for accessibility:
  - Provide meaningful alt text for images
  - Use proper heading hierarchy
  - Add labels for form inputs
  - Include keyboard event handlers alongside mouse events
  - Use semantic elements (`<button>`, `<nav>`, etc.) instead of divs with roles

### Error Handling & Debugging

- Remove `console.log`, `debugger`, and `alert` statements from production code
- Throw `Error` objects with descriptive messages, not strings or other values
- Use `try-catch` blocks meaningfully - don't catch errors just to rethrow them
- Prefer early returns over nested conditionals for error cases

### Code Organization

- Keep functions focused and under reasonable cognitive complexity limits
- Extract complex conditions into well-named boolean variables
- Use early returns to reduce nesting
- Prefer simple conditionals over nested ternary operators
- Group related code together and separate concerns

### Security

- Add `rel="noopener"` when using `target="_blank"` on links
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Don't use `eval()` or assign directly to `document.cookie`
- Validate and sanitize user input

### Performance

- Avoid spread syntax in accumulators within loops
- Use top-level regex literals instead of creating them in loops
- Prefer specific imports over namespace imports
- Avoid barrel files (index files that re-export everything)
- Use proper image components (e.g., Next.js `<Image>`) over `<img>` tags

### Framework-Specific Guidance

**Next.js:**
- Use Next.js `<Image>` component for images
- Use `next/head` or App Router metadata API for head elements
- Use Server Components for async data fetching instead of async Client Components

**React 19+:**
- Use ref as a prop instead of `React.forwardRef`


---

## Testing

- Write assertions inside `it()` or `test()` blocks
- Avoid done callbacks in async tests - use async/await instead
- Don't use `.only` or `.skip` in committed code
- Keep test suites reasonably flat - avoid excessive `describe` nesting

## When Biome Can't Help

Biome's linter will catch most issues automatically. Focus your attention on:

1. **Business logic correctness** - Biome can't validate your algorithms
2. **Meaningful naming** - Use descriptive names for functions, variables, and types
3. **Architecture decisions** - Component structure, data flow, and API design
4. **Edge cases** - Handle boundary conditions and error states
5. **User experience** - Accessibility, performance, and usability considerations
6. **Documentation** - Add comments for complex logic, but prefer self-documenting code

---

Most formatting and common issues are automatically fixed by Biome. Run `pnpm dlx ultracite fix` before committing to ensure compliance.
