import { tv } from "tailwind-variants";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex h-screen flex-col bg-blue-50">{children}</div>;
}

AppLayout.Header = () => (
  <div className="flex-none bg-amber-50 p-4">header</div>
);

AppLayout.Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-1 overflow-hidden">{children}</div>;
};

AppLayout.Side = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex w-60 flex-col bg-red-50">{children}</div>;
};

AppLayout.Main = ({
  children,
  fullHeight = false,
}: { children: React.ReactNode; fullHeight?: boolean }) => {
  const layout = tv({
    base: "flex flex-col gap-4 p-10",
    variants: {
      fullHeight: {
        true: "h-full",
      },
    },
  });
  return (
    <div className="flex-1 overflow-auto bg-green-50">
      <div className={layout({ fullHeight })}>{children}</div>
    </div>
  );
};
