import { createLazyFileRoute } from "@tanstack/react-router";
import { TablePage } from "../pages/table/Page.tsx";

export const Route = createLazyFileRoute("/table")({
  component: Table,
});

function Table() {
  return <TablePage />;
}
