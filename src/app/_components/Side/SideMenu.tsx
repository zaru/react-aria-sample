export function SideMenu() {
  return (
    <div className="flex-1 overflow-auto">
      <ul className="flex flex-col gap-4 p-4">
        <li>
          <a
            href="/"
            className="flex gap-x-3 rounded-md bg-white p-2 pl-3 font-semibold text-gray-700 text-sm leading-6 hover:bg-gray-50 hover:text-indigo-600"
          >
            通常のページDemo
          </a>
        </li>
        <li>
          <a
            href="/table"
            className="flex gap-x-3 rounded-md bg-white p-2 pl-3 font-semibold text-gray-700 text-sm leading-6 hover:bg-gray-50 hover:text-indigo-600"
          >
            テーブルDemo
          </a>
        </li>
        <li>
          <a
            href="/toast"
            className="flex gap-x-3 rounded-md bg-white p-2 pl-3 font-semibold text-gray-700 text-sm leading-6 hover:bg-gray-50 hover:text-indigo-600"
          >
            Toast Demo
          </a>
        </li>
        <li>
          <a
            href="/other"
            className="flex gap-x-3 rounded-md bg-white p-2 pl-3 font-semibold text-gray-700 text-sm leading-6 hover:bg-gray-50 hover:text-indigo-600"
          >
            Components Demo
          </a>
        </li>
        <li>
          <a
            href="/combo-box"
            className="flex gap-x-3 rounded-md bg-white p-2 pl-3 font-semibold text-gray-700 text-sm leading-6 hover:bg-gray-50 hover:text-indigo-600"
          >
            ComboBox・インクリメンタルサーチ
          </a>
        </li>
        <li>
          <a
            href="/modal/parallel"
            className="flex gap-x-3 rounded-md bg-white p-2 pl-3 font-semibold text-gray-700 text-sm leading-6 hover:bg-gray-50 hover:text-indigo-600"
          >
            モーダル（ParallelRoutes）
          </a>
        </li>
        {[...Array(100)].map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li key={i}>
            <a
              href="/public"
              className="flex gap-x-3 rounded-md bg-white p-2 pl-3 font-semibold text-gray-700 text-sm leading-6 hover:bg-gray-50 hover:text-indigo-600"
            >
              menu {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
