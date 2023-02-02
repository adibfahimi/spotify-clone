import React from "react";

export default function Button({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={"flex h-8 w-8 items-center justify-center " + className}>
      {icon}
    </button>
  );
}
