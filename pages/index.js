import Head from "next/head";
import Image from "next/image";
import Card from "../components/styled/Card.js";
import SimpleWrapper from "../components/styled/SimpleWrapper.js";

export default function Home() {
  return (
    <SimpleWrapper>
      <Head>
        <title>my digital garden</title>
        <meta name='description' content='digital garden for papadavis47' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Card />
    </SimpleWrapper>
  );
}
