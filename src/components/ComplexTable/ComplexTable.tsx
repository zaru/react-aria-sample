import "./ComplexTable.css";
import "./Popover.css";
import "./Modal.css";
import "./Menu.css";
import { useRef, useState } from "react";
import {
  Cell,
  Column,
  Label,
  ModalOverlay,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";
import {
  Button,
  Heading,
  Input,
  Modal,
  TextField,
} from "react-aria-components";
import { Menu, MenuItem, MenuTrigger } from "react-aria-components";

import { Dialog, DialogTrigger, Popover } from "react-aria-components";
import { Checkbox } from "./Checkbox.tsx";
const data = [
  {
    id: 1000,
    name: "Foo Bar",
    status: "Active",
    createdAt: "2024/09/11 20:12:00",
  },
  {
    id: 1001,
    name: "John Doe",
    status: "Inactive",
    createdAt: "2024/09/12 09:30:00",
  },
  {
    id: 1002,
    name: "Jane Smith",
    status: "Pending",
    createdAt: "2024/09/13 14:45:00",
  },
  {
    id: 1003,
    name: "Alice Johnson",
    status: "Active",
    createdAt: "2024/09/14 11:20:00",
  },
  {
    id: 1004,
    name: "Bob Brown",
    status: "Inactive",
    createdAt: "2024/09/15 18:50:00",
  },
  {
    id: 1005,
    name: "Charlie Davis",
    status: "Active",
    createdAt: "2024/09/16 13:15:00",
  },
  {
    id: 1006,
    name: "Eve Miller",
    status: "Pending",
    createdAt: "2024/09/17 07:05:00",
  },
  {
    id: 1007,
    name: "Frank White",
    status: "Inactive",
    createdAt: "2024/09/18 22:30:00",
  },
  {
    id: 1008,
    name: "Grace Lee",
    status: "Active",
    createdAt: "2024/09/19 16:00:00",
  },
  {
    id: 1009,
    name: "Henry Clark",
    status: "Pending",
    createdAt: "2024/09/20 08:55:00",
  },
];
export function ComplexTable() {
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);
  const handleSelect = (id: number) => {
    if (selected.includes(id)) {
      setSelected((prev) => {
        if (prev.length === 1) {
          setOpen(false);
        }
        return prev.filter((i) => i !== id);
      });
    } else {
      setSelected([...selected, id]);
      setOpen(true);
    }
  };
  const triggerRef = useRef(null);
  return (
    <>
      <DialogTrigger isOpen={openModal} onOpenChange={setOpenModal}>
        <ModalOverlay>
          <Modal>
            <Dialog>
              {({ close }) => (
                <form>
                  <Heading slot="title">Sign up</Heading>
                  <TextField autoFocus>
                    <Label>First Name:</Label>
                    <Input />
                  </TextField>
                  <TextField>
                    <Label>Last Name:</Label>
                    <Input />
                  </TextField>
                  <Button onPress={close}>Submit</Button>
                </form>
              )}
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
      <Table aria-label="Files" selectionMode="multiple">
        <TableHeader>
          <Column>
            <div className="column">
              <div ref={triggerRef}>ID</div>
              <DialogTrigger isOpen={open}>
                <Popover
                  placement="end"
                  triggerRef={triggerRef}
                  isNonModal={true}
                  style={{ zIndex: "10" }}
                >
                  <Dialog>
                    <span>{selected.length} selected.</span>
                    <MenuTrigger>
                      <Button aria-label="Menu">☰</Button>
                      <Popover>
                        <Menu>
                          <MenuItem onAction={() => alert("open")}>
                            Active
                          </MenuItem>
                          <MenuItem onAction={() => alert("rename")}>
                            Suspend
                          </MenuItem>
                          <MenuItem onAction={() => setOpenModal(true)}>
                            Delete
                          </MenuItem>
                        </Menu>
                      </Popover>
                    </MenuTrigger>
                  </Dialog>
                </Popover>
              </DialogTrigger>
            </div>
          </Column>
          <Column isRowHeader>Name</Column>
          <Column>Status</Column>
          <Column>Created At</Column>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <Row key={row.id}>
              <Cell>
                <Label>
                  <Checkbox
                    slot="selection"
                    onClick={() => handleSelect(row.id)}
                  />{" "}
                  {row.id}
                </Label>
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
