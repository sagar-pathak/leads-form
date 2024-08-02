"use client";

import React, { useState, useMemo } from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation'

import { JsonForms } from '@jsonforms/react';
import {
    materialCells,
    materialRenderers,
} from '@jsonforms/material-renderers';

import schema from './schema.json';
import uischema from './uischema.json';

import schema1 from './schema1.json';
import uischema1 from './uischema1.json';

import schema3 from './schema3.json';
import uischema3 from './uischema3.json';

const initialData = {
    firstname: "",
    lastname: "",
    email: "",
    linkedin: "",
    o1: false,
    eb1a: false,
    eb2niw: false,
    idk: false,
    description: ""
};

const renderers = [
    ...materialRenderers,
    //register custom renderers
    // { tester: ratingControlTester, renderer: RatingControl },
];

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

export default function FormComponent() {
    const [data, setData] = useState(initialData);
    const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

    const clearData = () => {
        setData({});
    };

    const router = useRouter()
    const handleSubmit = () => {
        // router.push('/', { scroll: false })
        console.log('all data');
        console.log(data);
        router.push('/thankyou', { scroll: false })
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
                                        Want to understand your visa options?
                                    </Grid>
                                    <Grid item sx={contentTextStyleSmall}>
                                        Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals.
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={formBox}>
                                <JsonForms
                                    schema={schema}
                                    uischema={uischema}
                                    data={data}
                                    renderers={renderers}
                                    cells={materialCells}
                                    onChange={({ data }) => setData(data)}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box>
                                <IconComponent source={'dice-icon.png'} width={64} height={64} />
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
                                        Visa categories of interest?
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box sx={formBox}>
                                <JsonForms
                                    schema={schema1}
                                    uischema={uischema1}
                                    data={data}
                                    renderers={renderers}
                                    cells={materialCells}
                                    onChange={({ data }) => setData(data)}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box>
                                <IconComponent source={'love-icon.png'} width={64} height={64} />
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
                                        How can we help you?
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box sx={formBox}>
                                <JsonForms
                                    schema={schema3}
                                    uischema={uischema3}
                                    data={data}
                                    renderers={renderers}
                                    cells={materialCells}
                                    onChange={({ data }) => setData(data)}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box>
                                <Button variant="contained" sx={submitButton} onClick={()=>handleSubmit()}>Submit</Button>
                            </Box>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Box>
    )
}