"use client";
import {
  normalAction,
  revalidateAction,
} from "@/app/(default)/modal/parallel/@modal/modal/action";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleNormalSubmit = async () => {
    const result = await normalAction();
    if (result.success) {
      close();
    }
  };

  const handleRevalidateSubmit = async () => {
    const result = await revalidateAction();
    if (result.success) {
      close();
    }
  };

  const close = () => {
    router.back();
  };

  return (
    <div className="fixed top-20 right-0 left-0 z-10 m-auto w-96 rounded border-2 bg-gray-50 p-5 shadow-2xl">
      <p>Modal</p>
      <div className="mt-4 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => close()}
          className="rounded border bg-gray-100 p-2"
        >
          close
        </button>
        <form action={handleNormalSubmit}>
          <button type="submit" className="rounded bg-sky-600 p-2 text-white">
            Normal submit
          </button>
        </form>
        <form action={handleRevalidateSubmit}>
          <button type="submit" className="rounded bg-sky-600 p-2 text-white">
            Revalidate submit
          </button>
        </form>
      </div>
    </div>
  );
}
