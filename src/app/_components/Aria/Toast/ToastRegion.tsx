import type { AriaToastRegionProps } from "@react-aria/toast";
import { useToastRegion } from "@react-aria/toast";
import type { ToastState } from "@react-stately/toast";
import { useRef } from "react";
import type { MyToast } from "./GlobalToastRegion";
import { Toast } from "./Toast";

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
      className="fixed top-0 right-0 m-4 flex flex-col gap-4"
    >
      {state.visibleToasts.map((toast) => (
        <Toast key={toast.key} toast={toast} state={state} />
      ))}
    </div>
  );
}
