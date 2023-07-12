import Head from "next/head";
import { createContext, useState } from "react";
import FooterDefault from "../shared/footer/FooterDefault";
import HeaderDefault from "../headers/HeaderDefault ";

export const GeneralContext = createContext(null);

export default function DefaultLayout({ children, title }) {
  const [token, setToken] = useState();
  let titleView;
  if (title !== undefined) {
    titleView = process.env.title + " | " + title;
  } else {
    titleView = process.env.title + " | " + process.env.titleDescription;
  }
  return (
    <>
      <Head>
        <title>{titleView}</title>
        <meta name="description" content="SwipePay" />
      </Head>
      <GeneralContext.Provider
        value={{
          token,
          setToken,
        }}
      >
        <HeaderDefault />
        <div>{children}</div>
        <FooterDefault />
      </GeneralContext.Provider>
    </>
  );
}
