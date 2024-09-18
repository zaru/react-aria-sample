import { useRef, useState } from "react";
import type { Selection } from "react-aria-components";
import { Checkbox } from "../Aria/Checkbox.tsx";
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "../Aria/Table.tsx";
import { CommandPopover } from "./CommandPopover.tsx";
import type { TableData } from "./tableData.ts";

interface Props {
  tableData: TableData;
}

export function ComplexTable(props: Props) {
  const [openCommandPopover, setOpenCommandPopover] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());

  const handleSelection = (keys: Selection) => {
    if (keys === "all") {
      setOpenCommandPopover(true);
    } else {
      setOpenCommandPopover(keys.size > 0);
    }
    setSelectedKeys(keys);
  };

  const triggerRef = useRef(null);
  return (
    <>
      <CommandPopover
        open={openCommandPopover}
        selected={selectedKeys}
        triggerRef={triggerRef}
      />
      <Table
        aria-label="Files"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelection}
      >
        <TableHeader>
          <Column>
            <div className="flex gap-2">
              <Checkbox slot="selection" />
              <div ref={triggerRef}>ID</div>
            </div>
          </Column>
          <Column isRowHeader>Name</Column>
          <Column>Status</Column>
          <Column>Created At</Column>
        </TableHeader>
        <TableBody>
          {props.tableData.map((row) => (
            <Row key={row.id} id={row.id}>
              <Cell>
                <Checkbox slot="selection" name="id">
                  {row.id}
                </Checkbox>
              </Cell>
              <Cell>{row.name}</Cell>
              <Cell>{row.status}</Cell>
              <Cell>{row.createdAt}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
