import Head from "next/head";
import Image from "next/image";
import { MainLayout } from "../components/common/Layout";
import { Header } from "../components/common/Header";
import { HomePageGrid } from "../components/common/Layout";
import { Albums } from "../components/common/Albums";
import { AlbumData } from "../sampleData";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>nartefacts</title>
        <meta
          name="description"
          content="A collection of color palettes inspired by african music"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <HomePageGrid>
          {AlbumData.map((album, id) => (
            <Albums key={id} album={album} />
          ))}
        </HomePageGrid>
      </main>
    </MainLayout>
  );
}
