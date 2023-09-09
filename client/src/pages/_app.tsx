import * as React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/main";
import ParticleInit from "@/lib/utils/particle-init";
import { AppContextValue, AppValue } from "@/lib/types";

const AppContext = React.createContext<AppContextValue | undefined>(undefined);

export default function App({ Component, pageProps, router }: AppProps) {
  const initAppState: AppValue = {
    address: "",
    nftID: "",
  };

  const [state, setState] = React.useState<AppValue>(initAppState);

  const initAuth = async () => {
    // if (!localStorage.getItem("logged")) {
    //   router.replace("/");
    // } else {
    //   const address = await particle.auth.login();
    // }
  };

  React.useEffect(() => {
    initAuth();
  }, []);

  return (
    <AppContext.Provider value={{ state, setState }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
