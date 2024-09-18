import { createLazyFileRoute } from "@tanstack/react-router";
import { IndexPage } from "../pages/index/Page.tsx";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <IndexPage />;
}
