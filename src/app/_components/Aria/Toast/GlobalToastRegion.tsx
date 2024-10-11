"use client";

import { ToastQueue, useToastQueue } from "@react-stately/toast";
import { createPortal } from "react-dom";
import { ToastRegion } from "./ToastRegion";

export interface MyToast {
  title: string;
  description: string;
}

export const toastQueue = new ToastQueue<MyToast>({
  maxVisibleToasts: 5,
  hasExitAnimation: true,
});

export function GlobalToastRegion() {
  const state = useToastQueue<MyToast>(toastQueue);
  return state.visibleToasts.length > 0
    ? createPortal(<ToastRegion state={state} />, document.body)
    : null;
}
