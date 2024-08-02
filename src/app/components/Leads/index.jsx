"use client";
import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import TableComponent from '@/components/TableComponent'

const selectStyle = {
    minWidth: '150px'
}

function createData(name, submitted, status, country) {
    return { name, submitted, status, country };
}

const leadsData = [
    createData('Jorge Ruiz', '2024-05-12', 'PENDING', 'Nepal'),
    createData('Bahar Zamir', '2023-05-15', 'PENDING', 'India'),
    createData('Mary Lopez', '2023-06-21', 'REACHED_OUT', 'China'),
    createData('Jane Ma', '2021-05-26', 'REACHED_OUT', 'Japan'),
    createData('Anna Vonorova', '2024-05-21', 'PENDING', 'China'),
];

export default function Leads() {
    const statusRef = useRef();
    const searchRef = useRef();
    const [status, setStatus] = useState()

    const [filteredData, setFilteredData] = useState(leadsData);

    const handleStatusChange = (e) => {
        let newStatus = e.target.value;
        setStatus(newStatus)
    }

    const handleSearchChange = (e) => {
        console.log(e.target.value);
        let searchText = e.target.value;
        // debounce can be implemented here
        let newData = leadsData.filter((d)=> (d.name).includes(searchText))
        setFilteredData(newData)
    }

    useEffect(() => {
        if (status === 'PENDING') {
            let newData = leadsData.filter((d) => d.status == 'PENDING')
            console.log('newData', newData);
            setFilteredData(newData)
        }else if(status === 'ALL'){
            setFilteredData(leadsData)
        }else if(status === 'REACHED_OUT'){
            let newData = leadsData.filter((d) => d.status == 'REACHED_OUT')
            setFilteredData(newData)
        }
    }, [status])

    return (
        <Box>
            <Grid container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
            >
                <Grid item xs={12}>
                    <Typography variant="h4">Leads</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container
                        direction="row"
                        spacing={2}
                    >
                        <Grid item >
                            <TextField
                                onChange={(e)=>{handleSearchChange(e)}}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment>
                                            <IconButton>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item >
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    label="Select Status"
                                    sx={selectStyle}
                                    ref={statusRef}
                                    onChange={handleStatusChange}
                                    input={<OutlinedInput label="Name" />}
                                >
                                    <MenuItem value={'ALL'}>All</MenuItem>
                                    <MenuItem value={'PENDING'}>Pending</MenuItem>
                                    <MenuItem value={'REACHED_OUT'}>Reached Out</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>


                    </Grid>

                    <Grid item>
                        {filteredData && <TableComponent data={filteredData} />}
                    </Grid>
                </Grid>
            </Grid>




        </Box>
    )
}