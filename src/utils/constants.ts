const API_KEY: string = '41ed8c8e';
export enum RPARAMS {IMBDBID = 'i=', TITLE = 's=', IMDBID = 'i=', YEAR = 'y=', TYPE = 'type=', PLOT = 'p='};

export enum TYPE { MOVIE = 'movie', SERIES = 'series', EPISODE = 'episode'};
export enum PLOT {FULL = 'full', SHORT = 'short', UNSET = ''};
export const BASE_URL: string = `http://www.omdbapi.com/?apikey=${API_KEY}&`