import { createLazyFileRoute } from "@tanstack/react-router";
import { ComponentsPage } from "../pages/components/Page.tsx";

export const Route = createLazyFileRoute("/components")({
  component: Index,
});

function Index() {
  return <ComponentsPage />;
}
