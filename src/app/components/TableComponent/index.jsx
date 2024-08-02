import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const statusValue ={
    'PENDING': 'Pending',
    'REACHED_OUT': 'Reached Out',
    'ALL': 'All'
}

function formatDate(dateStr) {
    let date = new Date(dateStr)
    var optionsDate = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
  
    var optionsTime = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
  
    var formattedDate = date.toLocaleDateString('en-US', optionsDate);
    var formattedTime = date.toLocaleTimeString('en-US', optionsTime);
  
    return formattedDate + ', ' + formattedTime;
  }

export default function TableComponent({data:rows}) {

    return (
        <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Submitted</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Country</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{formatDate(row.submitted)}</TableCell>
                            <TableCell align="right">{statusValue[row.status]}</TableCell>
                            <TableCell align="right">{row.country}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}