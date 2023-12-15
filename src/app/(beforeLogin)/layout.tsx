import React, { ReactNode } from "react";

type Props = { children: ReactNode; modal: ReactNode };

export default function Layout({ children, modal }: Props) {
  return (
    <main className="flex flex-row bg-white w-full h-screen">
      {children}
      {modal}
    </main>
  );
}
