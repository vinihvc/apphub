import { ImageResponse } from "next/og";

async function loadAssets(): Promise<
  { name: string; data: Buffer; weight: 400 | 600; style: "normal" }[]
> {
  const [{ base64Font: normal }, { base64Font: semibold }] = await Promise.all([
    import("./sen-regular-otf.json").then((mod) => mod.default || mod),
    import("./sen-semibold-otf.json").then((mod) => mod.default || mod),
  ]);

  return [
    {
      name: "Sen",
      data: Buffer.from(normal, "base64"),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Sen",
      data: Buffer.from(semibold, "base64"),
      weight: 600 as const,
      style: "normal" as const,
    },
  ];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const [fonts] = await Promise.all([loadAssets()]);

  return new ImageResponse(
    <div
      style={{ fontFamily: "Sen", backgroundColor: "#090b0c" }}
      tw="flex h-full w-full text-white"
    >
      <div tw="flex border absolute border-stone-700 border-dashed inset-y-0 left-16 w-[1px]" />
      <div tw="flex border absolute border-stone-700 border-dashed inset-y-0 right-16 w-[1px]" />
      <div tw="flex border absolute border-stone-700 inset-x-0 h-[1px] top-16" />
      <div tw="flex border absolute border-stone-700 inset-x-0 h-[1px] bottom-16" />
      <div tw="flex absolute flex-row bottom-28 right-28 text-white">
        <svg
          aria-hidden="true"
          fill="none"
          height="64"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          style={{ color: "#059669" }}
          viewBox="0 0 24 24"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 13v8l-4-4" />
          <path d="m12 21 4-4" />
          <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
        </svg>
      </div>
      <div tw="flex flex-col absolute w-full justify-center bottom-28 left-28">
        <div tw="flex items-center">
          <div tw="flex flex-col">
            <div
              style={{
                textWrap: "balance",
                fontWeight: 600,
                fontSize: 96,
                letterSpacing: "-0.04em",
              }}
              tw="tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]"
            >
              {title}
            </div>
            <div
              style={{
                fontWeight: 400,
                textWrap: "balance",
              }}
              tw="text-[40px] leading-[1] flex-grow-1 text-stone-400"
            >
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 628,
      fonts,
    }
  );
}
