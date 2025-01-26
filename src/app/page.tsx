"use client";
import React from "react";
import MainPage from "./main_page";

export default function Page() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return <MainPage />;
}
