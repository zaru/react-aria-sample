import { createLazyFileRoute } from "@tanstack/react-router";
import { ToastPage } from "../pages/toast/Page.tsx";

export const Route = createLazyFileRoute("/toast")({
  component: Table,
});

function Table() {
  return <ToastPage />;
}
