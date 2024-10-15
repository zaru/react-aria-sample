"use client";

import { revalidateAction } from "@/app/(default)/modal/parallel/@modal/modal/action";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

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
    <div className="fixed top-0 right-0 bottom-0 h-screen w-1/3 bg-gray-50 p-10 shadow-2xl">
      <p>Date.now {Date.now()}</p>

      <button
        type="button"
        onClick={() => close()}
        className="rounded border bg-gray-100 p-2"
      >
        close
      </button>
      <p className="mt-4">Drawer</p>
      <div className="mt-4">
        <Link
          href="/modal/parallel/modal"
          className="rounded bg-sky-600 p-2 text-white"
        >
          Open modal
        </Link>
        <form action={handleRevalidateSubmit}>
          <button type="submit" className="rounded bg-sky-600 p-2 text-white">
            Revalidate submit
          </button>
        </form>
      </div>
    </div>
  );
}
