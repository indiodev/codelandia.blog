import { Fragment } from "react";
import { Card, Header } from "~/components";
import { SearchInput } from "./search-input";

export default function Home() {
  return (
    <Fragment>
      <Header className="gap-10 md:gap-[4.375rem]">
        <div className="w-full flex justify-between">
          <h1 className="text-lg md:text-2xl text-white">Codelandia</h1>
          <h1 className="text-lg md:text-2xl text-white">blog</h1>
        </div>
        <SearchInput />
      </Header>
      <main className="container overflow-hidden mt-[10.2813rem] md:mt-[15.375rem] max-w-[calc(max-x-4xl + 4px)] py-[3.125rem] md:py-[6.25rem]">
        <section className="h-full overflow-y-auto w-full flex flex-col gap-[1.5625rem] md:gap-[3.125rem]">
          <Card.Root className="shadow-md">
            <Card.Header></Card.Header>
            <Card.Content>
              <article className="flex flex-col gap-2">
                <Card.Title className="text-lg md:text-[1.625rem] text-[#1A202C] ">
                  Agora é oficial: o Windows 11 está vindo
                </Card.Title>
                <Card.Description className="text-sm md:text-lg text-[#717171]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
                  lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
                  Praesent et auctor justo. Vestibulum nisl orci, lacinia
                  venenatis leo sit amet, pulvinar tincidunt risus. Phasellus
                  nisl dui, cursus a lectus et, interdum ullamcorper libero.
                </Card.Description>
              </article>
            </Card.Content>
          </Card.Root>

          <Card.Root className="shadow-md">
            <Card.Header></Card.Header>
            <Card.Content>
              <article className="flex flex-col gap-2">
                <Card.Title className="text-lg md:text-[1.625rem] text-[#1A202C] ">
                  Agora é oficial: o Windows 11 está vindo
                </Card.Title>
                <Card.Description className="text-sm md:text-lg text-[#717171]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
                  lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
                  Praesent et auctor justo. Vestibulum nisl orci, lacinia
                  venenatis leo sit amet, pulvinar tincidunt risus. Phasellus
                  nisl dui, cursus a lectus et, interdum ullamcorper libero.
                </Card.Description>
              </article>
            </Card.Content>
          </Card.Root>

          <Card.Root className="shadow-md">
            <Card.Header></Card.Header>
            <Card.Content>
              <article className="flex flex-col gap-2">
                <Card.Title className="text-lg md:text-[1.625rem] text-[#1A202C] ">
                  Agora é oficial: o Windows 11 está vindo
                </Card.Title>
                <Card.Description className="text-sm md:text-lg text-[#717171]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
                  lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
                  Praesent et auctor justo. Vestibulum nisl orci, lacinia
                  venenatis leo sit amet, pulvinar tincidunt risus. Phasellus
                  nisl dui, cursus a lectus et, interdum ullamcorper libero.
                </Card.Description>
              </article>
            </Card.Content>
          </Card.Root>

          <Card.Root className="shadow-md">
            <Card.Header></Card.Header>
            <Card.Content>
              <article className="flex flex-col gap-2">
                <Card.Title className="text-lg md:text-[1.625rem] text-[#1A202C] ">
                  Agora é oficial: o Windows 11 está vindo
                </Card.Title>
                <Card.Description className="text-sm md:text-lg text-[#717171]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
                  lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
                  Praesent et auctor justo. Vestibulum nisl orci, lacinia
                  venenatis leo sit amet, pulvinar tincidunt risus. Phasellus
                  nisl dui, cursus a lectus et, interdum ullamcorper libero.
                </Card.Description>
              </article>
            </Card.Content>
          </Card.Root>

          <Card.Root className="shadow-md">
            <Card.Header></Card.Header>
            <Card.Content>
              <article className="flex flex-col gap-2">
                <Card.Title className="text-lg md:text-[1.625rem] text-[#1A202C] ">
                  Agora é oficial: o Windows 11 está vindo
                </Card.Title>
                <Card.Description className="text-sm md:text-lg text-[#717171]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
                  lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
                  Praesent et auctor justo. Vestibulum nisl orci, lacinia
                  venenatis leo sit amet, pulvinar tincidunt risus. Phasellus
                  nisl dui, cursus a lectus et, interdum ullamcorper libero.
                </Card.Description>
              </article>
            </Card.Content>
          </Card.Root>

          <Card.Root className="shadow-md">
            <Card.Header></Card.Header>
            <Card.Content>
              <article className="flex flex-col gap-2">
                <Card.Title className="text-lg md:text-[1.625rem] text-[#1A202C] ">
                  Agora é oficial: o Windows 11 está vindo
                </Card.Title>
                <Card.Description className="text-sm md:text-lg text-[#717171]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
                  lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
                  Praesent et auctor justo. Vestibulum nisl orci, lacinia
                  venenatis leo sit amet, pulvinar tincidunt risus. Phasellus
                  nisl dui, cursus a lectus et, interdum ullamcorper libero.
                </Card.Description>
              </article>
            </Card.Content>
          </Card.Root>
        </section>
      </main>
    </Fragment>
  );
}
