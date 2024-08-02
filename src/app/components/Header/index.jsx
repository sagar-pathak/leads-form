"use client";
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image'

export function Logo() {
    return <Image src={`/logo.png`} alt={"logo"} width={65} height={24} />
}

// const commonStyles = {
//     bgcolor: 'background.paper',
//     m: 1,
//     borderColor: 'text.primary',
//     width: '5rem',
//     height: '5rem',
// };

const BackgroundWrapper = styled('div')({
    color: '000000',
    backgroundColor: '#D9DEA5',
    padding: 8,
    borderRadius: 4
});

const boxStyle = {
    backgroundImage: "url('background-icon.png')",
    backgroundPosition: `left top`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `200px`,
    height: "300px",
    width: "100%",
    backgroundColor: '#D9DEA5',
}

const headerText = {
    flexGrow: 1,
    fontWeight: '700',
    marginLeft: '240px',
    height: "300px",
    textAlign: 'center'
}

// const GridItem = styled('div')({
//     alignItems: 'center',
//     justifyContent: 'center'
// });

const gridContainer = {
    height: '280px'
}

const headerTextStyle = {
    fontWeight: 800,
    fontSize: '36px'
}


export default function Header() {
    return (
        <Box sx={boxStyle}>
            <Box sx={headerText}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={gridContainer}
                >
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                        >
                            <Grid item>
                                <Logo />
                            </Grid>
                            <Grid item>
                                <Box sx={headerTextStyle}>
                                    <Grid container
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                        direction="column">
                                        <Grid item>
                                            Get An Assessment
                                        </Grid>
                                        <Grid item>
                                            Of Your Immigration Case
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}