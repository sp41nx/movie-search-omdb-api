import {SetStateAction} from "react";

export interface CardProps {
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    imdbID: string;
    switchModal: React.Dispatch<SetStateAction<boolean>>
}


export interface searchData {
    title?: string,
    imdbID?: string,
    year?: string,
    plot?: string
    type?: string
}

export interface movieSpoiler{
    "Title": string,
    "Year": string,
    "imdbID": string,
    "Type": string,
    "Poster": string
}

export interface ResponseList{
    Response: string,
    Search: movieSpoiler[],
    totalResults: string
}

type MovieInfo = {
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascope: string;
    Plot: string;
    Poster: string;
    Production: string;
    Rated: string;
    Ratings: Object[]
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Website: string;
    Writer: string;
    Year: string;
    imbdID: string;
    imdbRating: string;
    imdbVotes: string;
}

