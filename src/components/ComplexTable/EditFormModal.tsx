import { useState } from "react";
import { Heading } from "react-aria-components";
import { Button } from "../Aria/Button.tsx";
import { Dialog } from "../Aria/Dialog.tsx";
import { Form } from "../Aria/Form.tsx";
import { Modal } from "../Aria/Modal.tsx";
import { TextField } from "../Aria/TextField.tsx";

interface Props {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

export function EditFormModal(props: Props) {
  // MEMO: エラーメッセージをカスタマイズする方法のデモ
  const [errors, setErrors] = useState({
    email: "This email is already taken",
  });

  return (
    <Modal
      isOpen={props.openModal}
      onOpenChange={props.setOpenModal}
      isEntering={true}
    >
      <Dialog>
        {({ close }) => (
          <Form validationErrors={errors}>
            <Heading slot="title">Edit</Heading>
            <TextField autoFocus name="name" label="Name" />
            <TextField name="email" label="Email" />
            <Button variant="primary" onPress={close}>
              Submit
            </Button>
          </Form>
        )}
      </Dialog>
    </Modal>
  );
}
