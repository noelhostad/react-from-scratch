import { useState } from "react";

import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";

import { type Puppy } from "./types";
import { puppies } from "./data/puppies";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWrapper>
  );
}

function Main() {
  const [liked, setLiked] = useState<Puppy["id"][]>([1,3]);

  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search />
        <Shortlist liked={liked} puppies={puppies} setLiked={setLiked} />
      </div>
      <PuppiesList puppies={puppies} liked={liked} setLiked={setLiked} />
      <NewPuppyForm />
    </main>
  );
}
