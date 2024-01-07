/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { FC, ReactNode } from "react";

declare global {
  type FCC<PROPS = object> = FC<{ children?: ReactNode } & PROPS>;
}
