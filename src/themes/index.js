import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: 'rgba(255,0,0,0.4)',
            main: 'rgba(255,0,0,0.8)',
            dark: 'rgba(255,0,0,1)',
        },
        secondary: {
            main: 'rgba(255,255,0)'
        },
        background: {
            grey: {
                light: '#d7d7d7',
                main: '#c6c6c6',
                dark: '#979797',
            },
            text: {
                primary: '#00ff00',
                secondary: '#000fff',
                brown: '#795548'
            }
        }
    },
    typography: {
        h1: {
            fontSize: 50,
            fontWeight: 600,
        },
        h2: {
            fontSize: 40,
            fontWeight: 700,
        }
    },
    spacing: 10
})

export default theme;