import Head from "next/head";
import Image from "next/image";
import Card from "../components/styled/Card.js";
import SimpleWrapper from "../components/styled/SimpleWrapper.js";

export default function Home() {
  return (
    <SimpleWrapper>
      <Head>
        <title>my digital sandbox</title>
        <meta name='description' content='Digital sandbox for papadavis47' />
        <link rel='icon' href='/surfing.ico' />
      </Head>
      <Card />
    </SimpleWrapper>
  );
}
