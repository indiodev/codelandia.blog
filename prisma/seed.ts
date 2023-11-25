// import { PrismaClient } from "@prisma/client";

import prisma from "./client";

// const prisma = new PrismaClient();
async function main() {
  const posts = await prisma.post.findMany();

  if (posts.length > 0) return;

  await prisma.post.createMany({
    data: [
      {
        title: "Agora é oficial: o Windows 11 está vindo",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
      },
      {
        title: "Tim Berners-Lee vai leiloar código-fonte da web",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
      },
      {
        title: "Tem Firefox novo no pedaço e você vai querer migrar",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.",
      },
      {
        title: "John McAfee, criador do antivírus McAfee, morre",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
