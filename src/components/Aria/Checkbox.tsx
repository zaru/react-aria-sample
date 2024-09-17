import { Check } from "lucide-react";
import {
  Checkbox as AriaCheckbox,
  type CheckboxProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./utils.ts";

const checkboxStyles = tv({
  base: "flex gap-2 items-center group text-sm transition",
  variants: {
    isDisabled: {
      false: "text-gray-800 ",
      true: "text-gray-300 forced-colors:text-[GrayText]",
    },
  },
});

const boxStyles = tv({
  extend: focusRing,
  base: "w-5 h-5 flex-shrink-0 rounded flex items-center justify-center border-2 transition",
  variants: {
    isSelected: {
      false:
        "bg-white  border-[--color] [--color:theme(colors.gray.400)]  group-pressed:[--color:theme(colors.gray.500)] ",
      true: "bg-[--color] border-[--color] [--color:theme(colors.gray.700)] group-pressed:[--color:theme(colors.gray.800)]   forced-colors:![--color:Highlight]",
    },
    isInvalid: {
      true: "[--color:theme(colors.red.700)]  forced-colors:![--color:Mark] group-pressed:[--color:theme(colors.red.800)] ",
    },
    isDisabled: {
      true: "[--color:theme(colors.gray.200)]  forced-colors:![--color:GrayText]",
    },
  },
});

const iconStyles =
  "w-4 h-4 text-white group-disabled:text-gray-400   forced-colors:text-[HighlightText]";

export function Checkbox(props: CheckboxProps) {
  return (
    <AriaCheckbox
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        checkboxStyles({ ...renderProps, className }),
      )}
    >
      {({ isSelected, ...renderProps }) => (
        <>
          <div
            className={boxStyles({
              isSelected: isSelected,
              ...renderProps,
            })}
          >
            {isSelected ? <Check aria-hidden className={iconStyles} /> : null}
          </div>
          {props.children}
        </>
      )}
    </AriaCheckbox>
  );
}
