import { ToastQueue, useToastQueue } from "@react-stately/toast";
import { createPortal } from "react-dom";
import { ToastRegion } from "./ToastRegion.tsx";

export interface MyToast {
  title: string;
  description: string;
}

// Create a global toast queue.
export const toastQueue = new ToastQueue<MyToast>({
  maxVisibleToasts: 5,
  hasExitAnimation: true,
});

export function GlobalToastRegion() {
  // Subscribe to it.
  const state = useToastQueue<MyToast>(toastQueue);

  // Render toast region.
  return state.visibleToasts.length > 0
    ? createPortal(<ToastRegion state={state} />, document.body)
    : null;
}
