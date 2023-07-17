import React, { ReactNode } from "react";

export default function HeaderLayout({ children }: { children: ReactNode }) {
  return <header className="mb-8">{children}</header>;
}
