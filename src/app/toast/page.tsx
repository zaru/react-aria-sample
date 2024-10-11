import { AppLayout } from "@/app/_components/Layout/AppLayout";
import { SideMenu } from "@/app/_components/Side/SideMenu";
import { SideProfileMenu } from "@/app/_components/Side/SideProfileMenu";
import { ToastButton } from "@/app/toast/_components/ToastButton";

export default function Page() {
  return (
    <AppLayout>
      <AppLayout.Header />
      <AppLayout.Body>
        <AppLayout.Side>
          <SideMenu />
          <SideProfileMenu />
        </AppLayout.Side>

        <AppLayout.Main>
          <ToastButton />
        </AppLayout.Main>
      </AppLayout.Body>
    </AppLayout>
  );
}
