import Link from "next/link";

export default function Page() {
  return (
    <div className="m-auto mt-10 w-1/3">
      <p>Nested parallel routes demo.</p>
      <p>Date.now {Date.now()}</p>
      <div className="mt-4">
        <Link
          href="/modal/parallel/drawer"
          className="rounded bg-sky-600 p-2 text-white"
        >
          Open Drawer
        </Link>
      </div>
      <div className="mt-4">
        <Link
          href="/modal/parallel/modal"
          className="rounded bg-sky-600 p-2 text-white"
        >
          Open Modal
        </Link>
      </div>
    </div>
  );
}
