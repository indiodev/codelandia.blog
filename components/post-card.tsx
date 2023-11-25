import { Post } from "~/models";
import Card from "./ui/card";

interface Props {
  data: Post;
}
export default function PostCard({ data }: Props) {
  return (
    <Card.Root className="shadow-md">
      <Card.Header></Card.Header>
      <Card.Content>
        <article className="flex flex-col gap-2">
          <Card.Title className="text-lg md:text-[1.625rem] text-[#1A202C] ">
            {data.title}
          </Card.Title>
          <Card.Description className="text-sm md:text-lg text-[#717171]">
            {data.content}
          </Card.Description>
        </article>
      </Card.Content>
    </Card.Root>
  );
}
