import { useState } from "react";
import { Button } from "../Aria/Button.tsx";
import { Dialog } from "../Aria/Dialog.tsx";
import { Form } from "../Aria/Form.tsx";
import { Heading } from "../Aria/Heading.tsx";
import { Modal } from "../Aria/Modal.tsx";

export function SampleModal() {
  const [open, setOpen] = useState(false);

  const setOpenModal = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <Button onPress={() => setOpenModal(true)}>Open Modal</Button>
      <Modal isOpen={open} onOpenChange={setOpenModal} isEntering={true}>
        <Dialog>
          {({ close }) => (
            <Form className="" method="get">
              <Heading slot="title">Edit</Heading>
              <div className="flex-1 overflow-auto">
                <div>modal content</div>
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
    </>
  );
}
