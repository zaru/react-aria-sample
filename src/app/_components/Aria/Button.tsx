import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./utils";

export interface ButtonProps extends AriaButtonProps {
  variant?: "primary" | "secondary" | "destructive" | "icon";
}

export const buttonStyle = tv({
  extend: focusRing,
  base: "inline-block px-5 py-2 text-sm text-center transition rounded-lg border border-black/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]  cursor-default",
  variants: {
    variant: {
      primary: "bg-blue-600 hover:bg-blue-700 pressed:bg-blue-800 text-white",
      secondary:
        "bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800    ",
      destructive: "bg-red-700 hover:bg-red-800 pressed:bg-red-900 text-white",
      icon: "border-0 p-1 flex items-center justify-center text-gray-600 hover:bg-black/[5%] pressed:bg-black/10 disabled:bg-transparent",
    },
    isPressed: {
      true: "active:ring-4",
      false: "active:ring-0",
    },
    isDisabled: {
      true: "bg-gray-100  text-gray-300  forced-colors:text-[GrayText] border-black/5 ",
    },
    isHovered: {
      true: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Button(props: ButtonProps) {
  return (
    <AriaButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        buttonStyle({ ...renderProps, variant: props.variant, className }),
      )}
    />
  );
}
