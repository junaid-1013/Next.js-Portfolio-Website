import Head from "next/head";

import { About, CTA, Projects } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Junaid Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <CTA />
      <About />
      <Projects />

      {/* <TransitionEffect /> */}
    </>
  );
}
