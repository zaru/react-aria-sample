import { AppLayout } from "@/app/_components/Layout/AppLayout";

// テーブル内をスクロールさせるために画面全体はスクロールさせないレイアウト
// fullHeight={true} で画面全体まで高さを広げてスクロールさせないようになっている
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppLayout.Main fullHeight={true}>{children}</AppLayout.Main>;
}
