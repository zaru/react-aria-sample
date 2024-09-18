import { useState } from "react";
import { Heading, type Selection } from "react-aria-components";
import { Button } from "../Aria/Button.tsx";
import { Dialog } from "../Aria/Dialog.tsx";
import { Popover } from "../Aria/Popover.tsx";
import { EditFormModal } from "./EditFormModal.tsx";

interface Props {
  open: boolean;
  selected: Selection;
  triggerRef: React.RefObject<HTMLDivElement>;
}

export function CommandPopover(props: Props) {
  const [openModal, setOpenModal] = useState(false);

  const selectedNum = () => {
    if (props.selected === "all") {
      return "All selected";
    }
    return `${props.selected.size} selected`;
  };

  return (
    <Popover
      isOpen={props.open}
      placement="end"
      triggerRef={props.triggerRef}
      isNonModal={true}
      style={{ zIndex: "10" }}
    >
      <Dialog>
        <Heading slot="title" className="flex flex-nowrap items-center gap-4">
          {selectedNum()} selected.
          <Button
            variant="secondary"
            type="button"
            onPress={() => setOpenModal(true)}
          >
            Edit
          </Button>
        </Heading>
        <EditFormModal
          selected={props.selected}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </Dialog>
    </Popover>
  );
}
