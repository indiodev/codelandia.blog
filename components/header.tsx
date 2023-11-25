import { HTMLAttributes, ReactElement } from "react";
import { cn } from "~/lib";

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

export default function Header({
  className,
  children,
}: HeaderProps): ReactElement {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#574AE8] to-[#3EA1DB]">
      <section
        className={cn(
          "container max-w-[calc(max-x-4xl + 4px)] flex-1 py-10 flex flex-col",
          className
        )}
      >
        {children}
      </section>
    </header>
  );
}
