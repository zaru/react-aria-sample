import {
  CheckboxGroup as AriaCheckboxGroup,
  type CheckboxGroupProps,
} from "react-aria-components";
import { composeTailwindRenderProps } from "./utils.ts";

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-2",
      )}
    />
  );
}
