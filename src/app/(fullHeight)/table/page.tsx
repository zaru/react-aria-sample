import { ComplexTable } from "@/app/_components/ComplexTable/ComplexTable";
import { tableData } from "@/app/_components/ComplexTable/tableData";

export default function Page() {
  return (
    <>
      <div className="bg-white p-4">pagination</div>

      {/* テーブルを残りの余白分いっぱいに広げる */}
      <div className="flex-1 overflow-auto rounded-lg bg-white shadow-lg">
        <ComplexTable tableData={tableData} />
      </div>

      <div className="bg-white p-4">pagination</div>
    </>
  );
}
