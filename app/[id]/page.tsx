import { ArrowLeftIcon } from "@radix-ui/react-icons";
import axios from "axios";
import Link from "next/link";
import { Fragment } from "react";
import Header from "~/components/header";
import { Post } from "~/models";

async function getPost({ id }: { id: string }): Promise<{ post: Post }> {
  // const response = await fetch(
  //   `http://localhost:3000/api/posts?search=${search}`
  // );
  // const data = await response.json();
  const response = await axios.get<Post>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`
  );

  return { post: response.data };
}

interface Props {
  params: { id: string };
}

export default async function Home({ params: { id } }: Props) {
  const { post } = await getPost({ id });
  return (
    <Fragment>
      <Header className="gap-10 md:gap-[4.375rem]">
        <div className="w-full flex gap-4 items-center">
          <Link href={"/"}>
            <ArrowLeftIcon
              className="cursor-pointer text-white"
              width={24}
              height={24}
            />
          </Link>
          <h1 className="text-lg md:text-2xl text-white">{post.title}</h1>
        </div>
      </Header>
      <main className="container mt-[5.9063rem] md:mt-28 max-w-[calc(max-x-4xl + 4px)] py-[3.125rem] md:py-[6.25rem]">
        <section className="h-full w-full text-justify text-sm md:text-lg text-[#717171]">
          {post.content}
        </section>
      </main>
    </Fragment>
  );
}
