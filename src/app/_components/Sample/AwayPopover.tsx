"use client";

import { DialogTrigger } from "@/app/_components/Aria/Dialog";
import { useRef } from "react";
import { Button } from "../Aria/Button";
import { Popover } from "../Aria/Popover";

export function AwayPopover() {
  const ref = useRef(null);
  return (
    <DialogTrigger>
      <div className="flex items-center justify-between">
        <Button type="button">Open Popover →</Button>
        <div ref={ref}>popover is here</div>
      </div>

      <Popover placement="top" style={{ zIndex: "10" }} triggerRef={ref}>
        <div className="p-4">Popover content</div>
      </Popover>
    </DialogTrigger>
  );
}
