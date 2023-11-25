import { NextRequest, NextResponse } from "next/server";
import prisma from "~/prisma/client";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const post = await prisma.post.findFirst({
    where: {
      id,
    },
  });

  if (!post)
    return NextResponse.json({ message: "Post not found" }, { status: 404 });

  return NextResponse.json(post);
}
