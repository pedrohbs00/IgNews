import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import styles from "./styles.module.scss";
import { GetStaticProps } from "next";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | IgNews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>05 de janeiro de 2023</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </a>
          <a href="#">
            <time>05 de janeiro de 2023</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </a>
          <a href="#">
            <time>05 de janeiro de 2023</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "posts")],
    {
      fetch: ["posts.tittle", "posts.content"],
      pageSize: 100,
    }
  );

  console.log(response);

  return {
    props: {},
  };
};
