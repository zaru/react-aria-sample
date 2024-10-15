"use client";
import { revalidateAction } from "@/app/(default)/modal/parallel-aria/@modal/modal/action";
import { Button } from "@/app/_components/Aria/Button";
import { Dialog } from "@/app/_components/Aria/Dialog";
import { Form } from "@/app/_components/Aria/Form";
import { Heading } from "@/app/_components/Aria/Heading";
import { Modal } from "@/app/_components/Aria/Modal";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleRevalidateSubmit = async () => {
    const result = await revalidateAction();
    if (result.success) {
      close();
    }
  };

  const close = () => {
    router.back();
  };

  return (
    <Modal isOpen={true} onOpenChange={close} isEntering={true}>
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
  );
}
