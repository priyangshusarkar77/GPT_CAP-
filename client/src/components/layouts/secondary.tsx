import * as React from "react";
import Head from "next/head";
import Navbar from "../navbar";

interface MainProps {
  children: React.ReactNode;
  title?: string;
}

const Main: React.FC<MainProps> = ({ children, title = "Home" }) => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="author" content="Ranaco" />
        <meta name="author" content="https://github.com/Ranaco/" />
        <meta
          name="description"
          content="AI-enabled Custom onboarding process!! Powered by Rakuten"
        />
        <title>{"GPTCAP | " + title}</title>
      </Head>
      <Navbar />
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default Main;
