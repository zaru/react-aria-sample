import { dropdownItemStyles } from "@/app/_components/Aria/ListBox";
import type React from "react";
import {
  ComboBox as AriaComboBox,
  type ComboBoxProps as AriaComboBoxProps,
  ListBox,
  type ValidationResult,
} from "react-aria-components";
import { Description, FieldError, FieldGroup, Input, Label } from "./Field";
import { Popover } from "./Popover";
import { composeTailwindRenderProps } from "./utils";

export interface BaseIncrementalSearchBoxProps<T extends object>
  extends Omit<AriaComboBoxProps<T>, "children"> {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  children: React.ReactNode | ((item: T) => React.ReactNode);
  popoverOpen: boolean;
}

export function BaseIncrementalSearchBox<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  popoverOpen,
  ...props
}: BaseIncrementalSearchBoxProps<T>) {
  return (
    <AriaComboBox
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-1",
      )}
    >
      <Label>{label}</Label>
      <FieldGroup>
        <Input />
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="w-[--trigger-width]" isOpen={popoverOpen}>
        <ListBox
          items={items}
          className="max-h-[inherit] overflow-auto p-1 outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]"
          renderEmptyState={() => (
            <span className={dropdownItemStyles()}>見つかりませんでした</span>
          )}
        >
          {children}
        </ListBox>
      </Popover>
    </AriaComboBox>
  );
}
