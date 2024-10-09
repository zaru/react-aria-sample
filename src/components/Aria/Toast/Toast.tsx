import type { AriaToastProps } from "@react-aria/toast";
import { useToast } from "@react-aria/toast";
import type { QueuedToast, ToastState } from "@react-stately/toast";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { Button } from "../Button.tsx";
import type { MyToast } from "./GlobalToastRegion.tsx";

interface ToastProps<T> extends AriaToastProps<T> {
  state: ToastState<T>;
  toast: QueuedToast<T>;
}

export function Toast<T extends MyToast>({ state, ...props }: ToastProps<T>) {
  const ref = useRef(null);
  const { toastProps, contentProps, titleProps, closeButtonProps } = useToast(
    props,
    state,
    ref,
  );

  const enteringAnimation =
    "data-[animation=entering]:fade-in data-[animation=entering]:animate-in";
  const exitingAnimation =
    "data-[animation=exiting]:fade-out data-[animation=exiting]:animate-out";
  const toastStyle = tv({
    base: twMerge(
      "flex max-w-xs items-center gap-4 rounded-xl bg-white px-4 py-2 shadow-md",
      enteringAnimation,
      exitingAnimation,
    ),
  });
  return (
    <div
      {...toastProps}
      ref={ref}
      data-animation={props.toast.animation}
      onAnimationEnd={() => {
        if (props.toast.animation === "exiting") {
          state.remove(props.toast.key);
        }
      }}
      className={toastStyle()}
    >
      <div {...contentProps}>
        <div {...titleProps}>
          <div className="font-bold">{props.toast.content.title}</div>
          <div>{props.toast.content.description}</div>
        </div>
      </div>
      <Button variant="icon" {...closeButtonProps}>
        x
      </Button>
    </div>
  );
}
