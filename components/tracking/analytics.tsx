import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

export const Analytics = () => {
  if (process.env.NODE_ENV === "development") {
    return null;
  }

  return <VercelAnalytics />;
};
