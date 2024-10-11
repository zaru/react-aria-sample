import { Select, SelectItem } from "../Aria/Select";
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "../Aria/Table";
import type { TableData } from "./tableData.ts";

interface Props {
  tableData: TableData;
}

export function EditComplexTable(props: Props) {
  return (
    <>
      <Table aria-label="Files" selectionMode="none">
        <TableHeader>
          <Column>
            <div className="flex gap-2">
              <div>ID</div>
            </div>
          </Column>
          <Column isRowHeader>Name</Column>
          <Column>Status</Column>
          <Column>Created At</Column>
        </TableHeader>
        <TableBody>
          {props.tableData.map((row) => (
            <Row key={row.id} id={row.id}>
              <Cell>{row.id}</Cell>
              <Cell>{row.name}</Cell>
              <Cell>
                <Select name={`status-${row.id}`} aria-label="select status">
                  <SelectItem id="suspend">Suspend</SelectItem>
                  <SelectItem id="active">Active</SelectItem>
                  <SelectItem id="other">Other</SelectItem>
                </Select>
              </Cell>
              <Cell>{row.createdAt}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
