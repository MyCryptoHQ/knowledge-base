import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    /**
     * `@mycrypto/ui` theme.
     */
    name: string;
    actionPanelBackground: string;
    actionPanelBorder: string;
    background: string;
    cardText: string;
    controlBackground: string;
    controlBorder: string;
    headline: string;
    link: string;
    linkHover: string;
    outline: string;
    panelBackground: string;
    panelBackgroundDark: string;
    primary: string;
    primaryDark: string;
    primaryDarker: string;
    tableHeadBackground: string;
    tableHeadBorder: string;
    switchBackgroundGreyable: string;
    text: string;

    /**
     * Own theme.
     */
    secondary: string;
    textMuted: string;
    textInverted: string;
    border: string;
    borderRadius: string;
    borderRadiusLarge: string;
    subHeaderBackground: string;

    fontFamily: string;
    monoFontFamily: string;
  }
}
