export type ReactRef<T> = React.RefCallback<T> | React.RefObject<T>

// biome-ignore lint/suspicious/noExplicitAny: <knows what we are doing>
export function assignRef<T = any>(
  ref: ReactRef<T> | null | undefined,
  value: T,
) {
  if (ref == null) return

  if (typeof ref === 'function') {
    ref(value)
    return
  }

  try {
    ref.current = value
  } catch (_error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}

export const mergeRefs = <T>(...refs: (ReactRef<T> | null | undefined)[]) => {
  return (node: T | null) => {
    for (const ref of refs) {
      assignRef(ref, node)
    }
  }
}
