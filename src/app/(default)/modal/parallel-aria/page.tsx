import { ClientModal } from "@/app/(default)/modal/parallel-aria/_components/ClientModal/ClientModal";
import { LinkButton } from "@/app/_components/Aria/LinkButton";

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">キャッシュ更新確認用</div>
        <div className="px-4 py-5 sm:p-6">
          <p>Date.now {Date.now()}</p>
        </div>

        <div className="px-4 py-5 sm:px-6">Clientモーダル</div>
        <div className="px-4 py-5 sm:p-6">
          <ClientModal />
        </div>
        <div className="px-4 py-5 sm:px-6">ParallelRoutesモーダル</div>
        <div className="px-4 py-5 sm:p-6">
          <LinkButton href="/modal/parallel-aria/modal" scroll={false}>
            Open Modal
          </LinkButton>
        </div>
      </div>
    </>
  );
}
