import { Heading, type Selection } from "react-aria-components";
import { Button } from "../Aria/Button.tsx";
import { Dialog } from "../Aria/Dialog.tsx";
import { Form } from "../Aria/Form.tsx";
import { Modal } from "../Aria/Modal.tsx";
import { EditComplexTable } from "./EditComplexTable.tsx";
import { tableData } from "./tableData.ts";

interface Props {
  openModal: boolean;
  selected: Selection;
  setOpenModal: (open: boolean) => void;
}

function selectedData(selected: Selection) {
  if (selected === "all") {
    return tableData;
  }
  return tableData.filter((row) => selected.has(row.id));
}

export function EditFormModal(props: Props) {
  return (
    <Modal
      isOpen={props.openModal}
      onOpenChange={props.setOpenModal}
      isEntering={true}
    >
      <Dialog>
        {({ close }) => (
          <Form className="h-full" method="get">
            <Heading slot="title">Edit</Heading>
            <div className="flex-1 overflow-auto">
              <div className="h-full">
                <EditComplexTable tableData={selectedData(props.selected)} />
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="secondary" onPress={close}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                Update
              </Button>
            </div>
          </Form>
        )}
      </Dialog>
    </Modal>
  );
}
