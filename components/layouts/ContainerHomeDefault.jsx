import Head from "next/head";

export default function ContainerHomeDefault({ children, title }) {
    let titleView;
    if (title !== null) {
      titleView = process.env.title + " | " + title;
    } else {
      titleView = process.env.title + " | " + process.env.titleDescription;
    }
    return (
      <>
        <Head>
          <title>{titleView}</title>
        </Head>
        <div className="flex min-h-screen flex-col">
          <main>{children}</main>
        </div>
      </>
    );
  }