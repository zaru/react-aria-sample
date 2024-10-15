"use client";

import { revalidateAction } from "@/app/(default)/modal/parallel-aria/_components/ClientModal/action";
import { Button } from "@/app/_components/Aria/Button";
import { Dialog } from "@/app/_components/Aria/Dialog";
import { Form } from "@/app/_components/Aria/Form";
import { Heading } from "@/app/_components/Aria/Heading";
import { Modal } from "@/app/_components/Aria/Modal";
import { useState } from "react";

export function ClientModal() {
  const [open, setOpen] = useState(false);

  const handleRevalidateSubmit = async () => {
    const result = await revalidateAction();
    if (result.success) {
      setOpen(false);
    }
  };

  const setOpenModal = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <Button onPress={() => setOpenModal(true)}>Open Modal</Button>
      <Modal isOpen={open} onOpenChange={setOpenModal} isEntering={true}>
        <Dialog>
          {({ close }) => (
            <Form action={handleRevalidateSubmit}>
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
