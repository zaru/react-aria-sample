"use server";

import { revalidatePath } from "next/cache";

export async function revalidateAction() {
  console.log("revalidate action");
  revalidatePath("/");
  return {
    success: true,
  };
}

export async function normalAction() {
  console.log("normal action");
  return {
    success: true,
  };
}
