import { ComplexTable } from "../../components/ComplexTable/ComplexTable.tsx";
import { tableData } from "../../components/ComplexTable/tableData.ts";
import { AppLayout } from "../../components/Layout/AppLayout.tsx";
import { SideMenu } from "../../components/Side/SideMenu.tsx";
import { SideProfileMenu } from "../../components/Side/SideProfileMenu.tsx";

export function TablePage() {
  return (
    <AppLayout>
      <AppLayout.Header />
      <AppLayout.Body>
        <AppLayout.Side>
          <SideMenu />
          <SideProfileMenu />
        </AppLayout.Side>

        <AppLayout.Main fullHeight={true}>
          <div className="bg-white p-4">pagination</div>

          {/* テーブルを残りの余白分いっぱいに広げる */}
          <div className="flex-1 overflow-auto rounded-lg bg-white shadow-lg">
            <ComplexTable tableData={tableData} />
          </div>

          <div className="bg-white p-4">pagination</div>
        </AppLayout.Main>
      </AppLayout.Body>
    </AppLayout>
  );
}
