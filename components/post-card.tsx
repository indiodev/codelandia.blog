import { HeartIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { toShortDate } from "~/lib";
import { Post } from "~/models";
import Card from "./ui/card";

interface Props {
  data: Post;
}
export default function PostCard({ data }: Props) {
  return (
    <Card.Root className="shadow-md h-full w-full">
      <Card.Header className="flex-row justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className="text-sm md:text-base text-[#717171]">
            {toShortDate("pt-BR", data.created_at?.toString())}
          </span>
          <Link href={"/"}>
            <span className="text-white  bg-[#574AE855] rounded-sm px-1">
              @jhollyferr
            </span>
          </Link>
        </div>
        <span className="flex items-center gap-1 text-[#574AE8] opacity-75 hover:opacity-100">
          <HeartIcon className="cursor-pointer" />
          {data.like_count}
        </span>
      </Card.Header>
      <Card.Content>
        <article className="flex flex-col gap-2 w-full">
          <Card.Title className="text-lg md:text-[1.625rem] text-[#1A202C] ">
            {data.title}
          </Card.Title>
          <Card.Description className="text-sm md:text-lg text-[#717171] text-ellipsis line-clamp-3 text-justify">
            {data.content}
          </Card.Description>
        </article>
      </Card.Content>
      <Card.Footer className="justify-end">
        <Link href={`/${data.id}`}>
          <span className="text-[#574AE8] cursor-pointer opacity-70  hover:opacity-100">
            ver mais
          </span>
        </Link>
      </Card.Footer>
    </Card.Root>
  );
}
