import { ParticleProvider } from "@particle-network/provider";
import ParticleInit, { ParticleConnector } from "./utils/particle-init";
import { NextRouter } from "next/router";

interface ParticleServiceProps {
  login(): Promise<string | undefined>;
  logout(): Promise<void>;
  particleProvider: ParticleProvider;
  address?: string;
}

class ParticleService implements ParticleServiceProps {
  private static instance: ParticleService;

  public static getInstance = (): ParticleService => {
    if (!ParticleService.instance) {
      ParticleService.instance = new ParticleService();
    }
    return ParticleService.instance;
  };

  address?: string = "";

  particleProvider: ParticleProvider = new ParticleProvider(ParticleInit.auth);

  async login(): Promise<string | undefined> {
    try {
      ParticleConnector.connect();
      let currAddress = await ParticleInit.auth.getEVMAddress();
      return currAddress;
    } catch (err) {
      console.error(err);
    }
  }

  async logout(): Promise<void> {
    try {
      await ParticleConnector.disconnect();
    } catch (err) {
      console.error(err);
    }
  }
}
