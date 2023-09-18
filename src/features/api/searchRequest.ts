import {createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL, RPARAMS} from "../../utils/constants";
import {searchData} from "../../utils/types";


export const fetchList = createAsyncThunk(
    'list/fetch',
    async (data : searchData)=> {
        return await fetch(`${BASE_URL}${RPARAMS.TITLE}${data.title}&${RPARAMS.YEAR}${data.year}&${RPARAMS.TYPE}${data.type}&${RPARAMS.PLOT}${data.plot}`).then(e => e.json()).catch(e => console.log(e));
    }
)

export const fetchInfo = createAsyncThunk(
    'info/fetch',
    async (data : searchData)=> {
        console.log(data);
        return await fetch(`${BASE_URL}${RPARAMS.IMBDBID}${data.imdbID}`).then(e => e.json()).catch(e => console.log(e));
    }
)
