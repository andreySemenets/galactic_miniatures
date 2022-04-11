import { createTheme } from '@mui/material';
import {
	purple, orange, red, yellow, green,
} from '@mui/material/colors';

const primaryColor = purple[600];
const secondaryColor = orange[500];
const dangerColor = red[900];
const appBarBckgrColor = yellow.A200;
const appappBarColor = green[800];

const theme = createTheme({
	palette: {
		primary: {
			main: primaryColor,
		},
		secondary: {
			main: secondaryColor,
		},
		error: {
			main: dangerColor,
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				colorPrimary: {
					background: appBarBckgrColor,
					color: appappBarColor,

				},
				colorSecondary: {
					background: dangerColor,
					marginBottom: 50,
				},
			},
		},
	},
});

export default theme;
