"use client";

import { Button } from "@/app/_components/Aria/Button";
import { toastQueue } from "@/app/_components/Aria/Toast/GlobalToastRegion";

export function ToastButton() {
  return (
    <Button
      onPress={() =>
        toastQueue.add({
          title: "Success!",
          description: "Toast is done.",
        })
      }
    >
      Show toast
    </Button>
  );
}
