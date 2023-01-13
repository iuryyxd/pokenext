import Head from "next/head";

export default function PageHead() {
  return (
    <Head>
      <title>Pokenext</title>
      <meta name="description" content="Pokedex with nextjs" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
  );
}
