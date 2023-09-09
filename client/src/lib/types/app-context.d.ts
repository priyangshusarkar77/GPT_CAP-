import * as React from "react";
import { AppValue } from "./app-value";

export type AppContextValue = {
  state: AppValue;
  setState: React.SetStateAction<React.Dispatch<AppValue>>;
};
