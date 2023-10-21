import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Notes Demo" },
    { name: "description", content: "Welcome to Notes demo built with cloudflare and remix" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Notes Demo</h1>
      <h2>Built with Remix and Cloudflare</h2>
    </div>
  );
}
