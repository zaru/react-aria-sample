import type { AriaToastRegionProps } from "@react-aria/toast";
import { useToastRegion } from "@react-aria/toast";
import type { ToastState } from "@react-stately/toast";
import { useRef } from "react";
import type { MyToast } from "./GlobalToastRegion.tsx";
import { Toast } from "./Toast.tsx";

interface ToastRegionProps<T> extends AriaToastRegionProps {
  state: ToastState<T>;
}

export function ToastRegion<T extends MyToast>({
  state,
  ...props
}: ToastRegionProps<T>) {
  const ref = useRef(null);
  const { regionProps } = useToastRegion(props, state, ref);

  return (
    <div
      {...regionProps}
      ref={ref}
      className="-translate-x-1/2 absolute start-1/2 bottom-0 flex flex-col gap-4"
    >
      {state.visibleToasts.map((toast) => (
        <Toast key={toast.key} toast={toast} state={state} />
      ))}
    </div>
  );
}
