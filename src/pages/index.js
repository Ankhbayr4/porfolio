import Head from "../components/Head";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Skill from "../components/Skill";
import { Work } from "@/components/Work";
// import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <div class="container">
      <Head />
      <Hero />
      <Container />
      <Skill />
      <Work />
    </div>
  );
}
