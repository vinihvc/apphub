export const IosIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height="16px"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      width="16px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        fill="none"
        height="480"
        rx="48"
        ry="48"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        width="256"
        x="128"
        y="16"
      />
      <path
        d="M176 16h24a8 8 0 0 1 8 8h0a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16h0a8 8 0 0 1 8-8h24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};
