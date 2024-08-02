"use client";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation'


export function IconComponent({ source, width, height }) {
    return <Image src={`/${source}`} alt={"logo"} width={width} height={height} />
}

const boxContainer = {
    width: '95vw',
    margin: '40px',
    flexGrow: 1
}

const gridContainer = {
    marginTop: '40px',
    flexGrow: 1
}

const contentTextStyle = {
    fontWeight: 700,
    fontSize: '24px'
}

const contentTextStyleSmall = {
    fontWeight: 700,
    fontSize: '16px',
    textAlign: 'center'
}

const formBox = {
    minWidth: '400px'
}

const submitButton = {
    backgroundColor: 'black',
    color: 'white',
    width: '400px',
    '&:hover': {
        backgroundColor: 'black',
        borderColor: 'black',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: 'black',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,0,0,.5)',
    },
}

export default function ThankYou() {
    const router = useRouter()
    const goBack = () => {
        router.push('/', { scroll: false })
    }
    return (
        <Box sx={boxContainer}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                sx={gridContainer}
            >
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={4}
                    >
                        <Grid item xs={12}>
                            <Box>
                                <IconComponent source={'info-icon.png'} width={64} height={64} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={contentTextStyle}>
                                <Grid container
                                    alignItems="center"
                                    justifyContent="center"
                                    spacing={2}
                                    direction="column">
                                    <Grid item>
                                        Thank you
                                    </Grid>
                                    <Grid item sx={contentTextStyleSmall}>
                                        Your information was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Button variant="contained" sx={submitButton} onClick={() => goBack()}>Go Back To Homepage</Button>
                            </Box>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Box>
    )
}