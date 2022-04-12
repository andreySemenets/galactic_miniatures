import { createTheme } from '@mui/material';
import {
	purple, orange, red, yellow, green,
} from '@mui/material/colors';

const primaryColor = '#141517';
const secondaryColor = '#0054FF';
const dangerColor = red[900];
const appBarBckgrColor = '#1E1F24';
const appappBarColor = '#FFFFFF';

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
    MuiInputBase: {
      styleOverrides: {
        input: {
          minWidth: 500,
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: secondaryColor,
        }
      }
    },
    // MuiPaper: {
    //   styleOverrides: {
    //     elevation6: {
    //       background: primaryColor,
    //     }
    //   }
    // }
	},
});

export default theme;
