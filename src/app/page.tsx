"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header"
import FormComponent from '@/components/FormComponent'
import Grid from '@mui/material/Grid';

import { wrapper } from "@/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import Montserrat2ExtraBold from '@/fonts/Montserrat-ExtraBold.woff2';
// import Montserrat2Bold from '@/fonts/Montserrat-Bold.woff2';
// import Montserrat2Regular from '@/fonts/Montserrat-Regular.woff2'

// import CssBaseline from '@mui/material/CssBaseline';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// const theme = createTheme({
//     typography: {
//       fontFamily: 'Montserrat, Arial',
//     },
//     components: {
//       MuiCssBaseline: {
//         styleOverrides: `
//           @font-face {
//             font-family: 'Montserrat';
//             font-style: normal;
//             font-display: swap;
//             font-weight: 400;
//             src: url(${Montserrat2Bold}), url(${Montserrat2Regular}), url(${Montserrat2ExtraBold}) format('woff2');
//             unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
//           }
//         `,
//       },
//     },
//   });

const Home = (props) => {
    // const store = useStore();

    return (

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Header></Header>
                </Grid>
                <Grid item xs={12}>
                    <FormComponent></FormComponent>
                </Grid>
            </Grid>
    )
    // return (
    //     <ThemeProvider theme={theme}>
    //     <CssBaseline />
    //     <div>
    //       Hell world
    //     </div>
    //   </ThemeProvider>
    // )
}

export default Home;
// export default wrapper.withRedux(Home);
