import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  type DialogProps,
  type DialogTriggerProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Dialog(props: DialogProps) {
  return (
    <AriaDialog
      {...props}
      className={twMerge(
        "relative h-full max-h-[inherit] overflow-auto p-6 outline outline-0 [[data-placement]>&]:p-4",
        props.className,
      )}
    />
  );
}

export function DialogTrigger({ children, ...props }: DialogTriggerProps) {
  return <AriaDialogTrigger {...props}>{children}</AriaDialogTrigger>;
}
