import { NbpStepDimension } from "./enum";

export interface INbpProgressConfiguration {
    active: boolean;
    fillPercent: number;
    label: string;
    stepDimension?: NbpStepDimension;
}
  