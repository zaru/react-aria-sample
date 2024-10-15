"use client";

import { CompanySearchBox } from "@/app/(default)/combo-box/_components/CompanySearchBox";
import { SimpleComboBox } from "@/app/(default)/combo-box/_components/SimpleComboBox";

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">シンプル ComboBox</div>
        <div className="px-4 py-5 sm:p-6">
          <SimpleComboBox />
        </div>
      </div>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">企業インクリメンタルサーチ</div>
        <div className="px-4 py-5 sm:p-6">
          <CompanySearchBox />
        </div>
      </div>
    </>
  );
}
