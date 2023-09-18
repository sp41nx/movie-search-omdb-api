import React, {useState} from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {useAppDispatch} from "../app/hooks";
import {fetchList} from "../features/api/searchRequest";
import {PLOT, TYPE} from "../utils/constants";

const Header = () => {

    const [title, setTitle] = useState(''),
        [year, setYear] = useState(''),
        [type, setType] = useState(''),
        [plot, setPlot] = useState(''),
        dispatch = useAppDispatch();

    const fetchRequestHandler = () => {
        dispatch(fetchList({title, year, plot, type}));
    }
    const handleChangePlot = (event: SelectChangeEvent) => {
        setPlot(event.target.value);
    };
    const handleChangeType = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };

    return (
        <div
            style={{height: '100px'}}
            className={'w-100 m-0 border border-1 d-flex justify-content-evenly align-items-center'}>
            <TextField
                onChange={({target: {value}}) => {
                    setTitle(value)
                }}
                style={{width: "300px"}} id="outlined-search" label="Search by name" type="search"/>
            <TextField
                onChange={({target: {value}}) => {
                    setYear(value)
                }}
                style={{width: "300px"}} id="outlined-search" label="Search by year" type="search"/>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select plot"
                        onChange={handleChangeType}
                    >
                        <MenuItem value={TYPE.MOVIE}>Movie</MenuItem>
                        <MenuItem value={TYPE.SERIES}>Series</MenuItem>
                        <MenuItem value={TYPE.EPISODE}>Episode</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Plot</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select plot"
                        onChange={handleChangePlot}
                    >
                        <MenuItem value={PLOT.UNSET}>Unselected</MenuItem>
                        <MenuItem value={PLOT.FULL}>Full</MenuItem>
                        <MenuItem value={PLOT.SHORT}>Short</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Button
                onClick={() => {
                    fetchRequestHandler();
                }}
                size={'large'}
                variant="outlined">Search</Button>
        </div>
    );
};

export default Header;