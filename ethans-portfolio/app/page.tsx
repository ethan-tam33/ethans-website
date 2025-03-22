import Main from "../components/Main";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Navbar></Navbar>
      <Main></Main>
    </main>
  );
}
