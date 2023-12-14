import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    InputAdornment,
    TablePagination
} from '@mui/material';
import { Search, ArrowUpward, ArrowDownward } from '@mui/icons-material';
import './TableComponent.css';

const TableComp = ({ data }) => {
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortColumn, setSortColumn] = useState('');

    const handleSearch = (event) => {
        setSearchText(event.target.value);
        setPage(0);
    };

    const handleSort = (column) => {
        const newSortOrder = column === sortColumn ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc';
        console.log(column);
        setSortOrder(newSortOrder);
        setSortColumn(column);
        setPage(0);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
        console.log(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        const newRowsPerPage = parseInt(event.target.value, 10);
        console.log('New Rows Per Page:', newRowsPerPage);
        setRowsPerPage(newRowsPerPage);
        setPage(0);
    };

    const filteredData = data.filter((row) =>
        Object.values(row).some((value) =>
            value.toString().toLowerCase().includes(searchText.toLowerCase())
        )
    );

    const sortedData = filteredData.sort((a, b) => {
        console.log(a, b);
        if (sortColumn === '') return 0;
        const order = sortOrder === 'asc' ? 1 : -1;
        return a[sortColumn] < b[sortColumn]
            ? -1 * order
            : a[sortColumn] > b[sortColumn]
                ? order
                : 0;
    });

    const columns = Object.keys(data[0]);

    return (
        <TableContainer component={Paper} className="table-container">
            <TextField
                label="Search"
                value={searchText}
                onChange={handleSearch}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}
            />
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column} className="table-header" onClick={() => handleSort(column)}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span>{column}</span>
                                    {sortColumn === column && (
                                        sortOrder === 'asc' ? <ArrowUpward /> : <ArrowDownward />
                                    )}
                                </div>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <TableRow key={index} className="table-row">
                            {columns.map((column) => (
                                <TableCell key={column} className="table-cell">
                                    {row[column]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[10, 25, 35]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleRowsPerPageChange}
            />
        </TableContainer>
    );
};

export default TableComp;
