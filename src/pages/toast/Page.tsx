import { Button } from "../../components/Aria/Button.tsx";
import {
  GlobalToastRegion,
  toastQueue,
} from "../../components/Aria/Toast/GlobalToastRegion.tsx";
import { AppLayout } from "../../components/Layout/AppLayout.tsx";
import { SideMenu } from "../../components/Side/SideMenu.tsx";
import { SideProfileMenu } from "../../components/Side/SideProfileMenu.tsx";

export function ToastPage() {
  return (
    <AppLayout>
      <AppLayout.Header />
      <AppLayout.Body>
        <AppLayout.Side>
          <SideMenu />
          <SideProfileMenu />
        </AppLayout.Side>

        <AppLayout.Main fullHeight={true}>
          <Button
            onPress={() =>
              toastQueue.add({
                title: "Success!",
                description: "Toast is done.",
              })
            }
          >
            Show toast
          </Button>
          <GlobalToastRegion />
        </AppLayout.Main>
      </AppLayout.Body>
    </AppLayout>
  );
}
