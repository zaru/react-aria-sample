import { ChevronDown } from "lucide-react";
import type React from "react";

import {
  Select as AriaSelect,
  type SelectProps as AriaSelectProps,
  type ListBoxItemProps,
  SelectValue,
  type ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Button } from "./Button";
import { Description, FieldError, Label } from "./Field";
import { DropdownItem, ListBox } from "./ListBox";
import { Popover } from "./Popover";
import { composeTailwindRenderProps, focusRing } from "./utils";

const styles = tv({
  extend: focusRing,
  base: "flex items-center text-start gap-4 w-full cursor-default border border-black/10  shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]  rounded-lg pl-3 pr-2 py-2 min-w-[150px] transition bg-gray-50 ",
  variants: {
    isDisabled: {
      false:
        "text-gray-800  hover:bg-gray-100 pressed:bg-gray-200   group-invalid:border-red-600 forced-colors:group-invalid:border-[Mark]",
      true: "text-gray-200  forced-colors:text-[GrayText]   forced-colors:border-[GrayText]",
    },
  },
});

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-1",
      )}
    >
      {label && <Label>{label}</Label>}
      <Button className={styles}>
        <SelectValue className="flex-1 text-sm placeholder-shown:italic" />
        <ChevronDown
          aria-hidden
          className="h-4 w-4 text-gray-600 group-disabled:text-gray-200 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
        />
      </Button>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="min-w-[--trigger-width]">
        <ListBox
          items={items}
          className="max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_.75rem)]"
        >
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export function SelectItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}
