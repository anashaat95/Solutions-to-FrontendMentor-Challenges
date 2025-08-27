import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    accent: string;
    accentLighter: string;
    slate100: string;
    slate300: string;
    slate500: string;
    slate700: string;
    slate900: string;
    slate950: string;
    error: string;
    text: string;
    white: string;
    fontFamily: string;
    spaceXs: string;
    spaceSM: string;
    spaceLg: string;
    spaceXL: string;
    spaceXXL: string;
    borderRadiusXs: string;
    borderRadiusSM: string;
    borderRadiusLg: string;
    borderRadiusXL: string;
    borderRadiusXXL: string;
    borderRadiusXXXXL: string;
  }
}
