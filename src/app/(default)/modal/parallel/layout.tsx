export default function Layout({
  children,
  modal,
  drawer,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  drawer: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
      {drawer}
    </>
  );
}
