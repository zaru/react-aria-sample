"use client";

import { buttonStyle } from "@/app/_components/Aria/Button";
import { useFocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { type AriaLinkOptions, useLink } from "@react-aria/link";
import NextLink from "next/link";
import { type AnchorHTMLAttributes, useRef } from "react";
import type { ReactNode } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "destructive";
  isDisabled?: boolean;
  scroll?: boolean;
}

export function LinkButton(props: LinkProps) {
  // MEMO: next/linkとReact AriaのLinkでpropsの型定義が異なるので無理やり合わせている
  // どんなリスクが有るかは不明だが、普通のリンクとして使うなら大丈夫そう
  const ref = useRef(null);
  const { linkProps, isPressed } = useLink(
    { ...props, elementType: "a" } as AriaLinkOptions,
    ref,
  );
  const { focusProps, isFocused, isFocusVisible } = useFocusRing();
  const { hoverProps, isHovered } = useHover({});
  return (
    <NextLink
      className={buttonStyle({
        variant: props.variant,
        isDisabled: props.isDisabled,
        isFocusVisible,
        isPressed,
        isHovered,
        class: props.className,
      })}
      data-focused={isFocused || undefined}
      data-focus-visible={isFocusVisible || undefined}
      data-hovered={isHovered || undefined}
      data-pressed={isPressed || undefined}
      scroll={props.scroll}
      {...(linkProps as LinkProps)}
      {...focusProps}
      {...hoverProps}
    >
      {props.children}
    </NextLink>
  );
}
