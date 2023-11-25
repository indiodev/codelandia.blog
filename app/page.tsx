import axios from "axios";
import { Fragment } from "react";
import Header from "~/components/header";
import PostCard from "~/components/post-card";
import { Post } from "~/models";
import SearchInput from "./search-input";

async function getPosts({
  search,
}: {
  search: string;
}): Promise<{ posts: Post[] }> {
  // const response = await fetch(
  //   `http://localhost:3000/api/posts?search=${search}`
  // );
  // const data = await response.json();
  const response = await axios.get<Post[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
    {
      params: {
        search,
      },
    }
  );
  return { posts: response.data };
}

interface Props {
  searchParams: { search: string };
}

export default async function Home({ searchParams: { search = "" } }: Props) {
  const { posts } = await getPosts({ search: search });

  return (
    <Fragment>
      <Header className="gap-10 md:gap-[4.375rem]">
        <div className="w-full flex justify-between">
          <h1 className="text-lg md:text-2xl text-white">Codelandia</h1>
          <h1 className="text-lg md:text-2xl text-white">blog</h1>
        </div>
        <SearchInput />
      </Header>
      <main className="container mt-[10.2813rem] md:mt-[15.375rem] max-w-[calc(max-x-4xl + 4px)] py-[3.125rem] md:py-[6.25rem]">
        <section className="h-full w-full flex flex-col gap-[1.5625rem] md:gap-[3.125rem]">
          {posts.length > 0 &&
            posts.map((post) => <PostCard key={post.id} data={post} />)}
        </section>
      </main>
    </Fragment>
  );
}
