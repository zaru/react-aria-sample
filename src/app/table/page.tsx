import { ComplexTable } from "@/app/_components/ComplexTable/ComplexTable";
import { tableData } from "@/app/_components/ComplexTable/tableData";
import { AppLayout } from "@/app/_components/Layout/AppLayout";
import { SideMenu } from "@/app/_components/Side/SideMenu";
import { SideProfileMenu } from "@/app/_components/Side/SideProfileMenu";

export default function Page() {
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
