import { NextRequest, NextResponse } from "next/server";
import { Post } from "~/models";
import prisma from "~/prisma/client";
import { Post as Schema } from "~/schemas";

export async function POST(
  request: NextRequest
): Promise<NextResponse<Post | unknown>> {
  try {
    const body = await request.json();
    const { title, content } = Schema.Create.parse(body);

    const new_post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(new_post, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const search = searchParams.get("search");

  const posts = await prisma.post.findMany({
    where: {
      title: {
        contains: search ?? undefined,
        mode: "insensitive",
      },
    },
    orderBy: {
      created_at: "asc",
    },
  });

  return NextResponse.json(posts);
}
