import React from 'react';
import {Card, Button, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {fetchInfo} from "../features/api/searchRequest";
import {useAppDispatch} from "../app/hooks";
import {CardProps} from "../utils/types";

const MovieCard = ({Title, Year, Type, Poster, imdbID, switchModal}: CardProps) => {

    const dispatch = useAppDispatch();

    const fetchInfoHandler = () => {
        dispatch(fetchInfo({imdbID}));
    }

    return (
        <Card
            onClick={() => {
                fetchInfoHandler();
                switchModal(true);
            }}
            sx={{ width: 250 }}>
            <CardMedia
                sx={{ height:
                        350 }}
                image={Poster}
                title={Title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Year}
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
};

export default MovieCard;