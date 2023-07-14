import React from "react";

import TopNavbar from "./top-navbar";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="mb-8">
      <TopNavbar />
      <Navbar />
    </header>
  );
}
