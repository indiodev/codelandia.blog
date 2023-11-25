"use client";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";
import Input from "~/components/ui/input";

export default function SearchInput(): ReactElement {
  const router = useRouter();
  return (
    <Input
      placeholder="Pesquisar no blog"
      className="bg-[rgba(255,255,255,0.2)] text-white border-transparent placeholder:text-gray-200 h-10 md:h-16 text-sm md:text-lg"
      onChange={(event) => {
        if (event.target.value === "") {
          router.push("/");
          return;
        }

        router.push(`?search=${event.target.value}`);
      }}
    />
  );
}
