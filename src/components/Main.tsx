import React, {useEffect, useState} from 'react';
import MovieCard from "./MovieCard";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Pagination,
    Select,
    SelectChangeEvent
} from "@mui/material";
import Modal from "./Modal";

const Main = () => {

    const {moviesList, movieInfo} = useAppSelector(({data}) => data),
        [movePerPage, setMovePerPage] = useState('10'),
        [page, setPage] = useState(1),
        [up, setUp] = useState(0),
        [isOpened, setIsOpened] = useState(false),
        [pLength, setPlength] = useState(1);

    useEffect(() => {
        moviesList.Search && setPlength(moviesList.Search.length / +movePerPage || 1);
        setPage(1);
        setUp((+movePerPage * page));
    }, [movePerPage]);

    const handleChangePerPage = (event: SelectChangeEvent) => {
        setPage(1);
        setMovePerPage(event.target.value);
        setUp((+movePerPage * page));
    }
    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
        setUp((+movePerPage * page));
    }

    return (
        <div className={'w-100 position-relative'}>
            <div className={'d-flex justify-content-evenly'}>
                {isOpened && <Modal switchModal={setIsOpened}/>}
                <div className={'pt-3'}>
                    <div className={'w-100 d-flex justify-content-around gap-5 align-items-center'}>
                        {moviesList.Search &&
                            <Box sx={{marginLeft: 30, minWidth: 220, maxWidth: 300}}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Moves per page</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={movePerPage}
                                        label="Moves per page"
                                        onChange={handleChangePerPage}
                                    >
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>}
                        {moviesList.Search &&
                            <Pagination
                                onChange={handleChangePage}
                                page={page}
                                count={pLength}
                                variant="outlined"
                                color="secondary"/>}
                    </div>
                    <div className={'d-flex p-5 flex-row flex-wrap gap-5 justify-content-evenly'}>
                        {moviesList.Search && moviesList.Search.map((e, i) =>
                            (i >= (up - +movePerPage) && i < up) &&
                            <MovieCard switchModal={setIsOpened} key={i} Title={e.Title} Year={e.Year} Type={e.Type}
                                       Poster={e.Poster} imdbID={e.imdbID}/>)}
                    </div>
                    <div className={'w-100 d-flex justify-content-around'}>
                        {moviesList.Search &&
                            <Pagination defaultPage={1} onChange={handleChangePage} page={page} count={pLength}
                                        variant="outlined" color="secondary"/>}</div>
                </div>
            </div>
        </div>
    );
};

export default Main;