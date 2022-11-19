"use client";

import { theme } from "./theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export const ThemeProvider = ({ children }) => {
	return <MuiThemeProvider theme={theme}>{children} </MuiThemeProvider>;
};
