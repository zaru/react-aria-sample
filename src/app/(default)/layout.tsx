import { AppLayout } from "@/app/_components/Layout/AppLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppLayout.Main>{children}</AppLayout.Main>;
}
