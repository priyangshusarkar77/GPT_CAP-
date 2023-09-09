import { ParticleNetwork, WalletEntryPosition } from "@particle-network/auth";
import { ParticleProvider } from "@particle-network/provider";
import { Ethereum, PolygonMumbai } from "@particle-network/chains";
import { ParticleConnect } from "@particle-network/connect";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY;

const ParticleInit = new ParticleNetwork({
  appId: "",
  projectId: "",
  clientKey: "",
  chainName: PolygonMumbai.name,
  chainId: PolygonMumbai.id,
  wallet: {
    displayWalletEntry: true,
    uiMode: "dark",
    supportChains: [
      {
        id: PolygonMumbai.id,
        name: PolygonMumbai.name,
      },
    ],
    defaultWalletEntryPosition: WalletEntryPosition.BL,
  },
});

export const ParticleConnector: ParticleConnect = new ParticleConnect({
  appId: "",
  projectId: "",
  clientKey: "",
  chains: [PolygonMumbai],
  particleWalletEntry: {
    displayWalletEntry: true,
    defaultWalletEntryPosition: WalletEntryPosition.BR,
    supportChains: [PolygonMumbai],
  },
});

export default ParticleInit;
