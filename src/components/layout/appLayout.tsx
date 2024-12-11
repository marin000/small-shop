import { PropsWithChildren } from 'react';

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-black">
      {children}
    </div>
  );
};

AppLayout.Header = function AppHeader({
  children,
}: PropsWithChildren) {
  return <>{children}</>;
};

AppLayout.Main = function AppMain({ children }: PropsWithChildren) {
  return (
    <main className="flex flex-col flex-1 w-full py-4 px-12 overflow-auto bg-spring-wood">
      {children}
    </main>
  );
};

export default AppLayout;
