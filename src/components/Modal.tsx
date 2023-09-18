import React, {SetStateAction, useEffect, useState} from 'react';
import shadows from "@mui/material/styles/shadows";
import {MovieInfo} from "../utils/types";
import {useAppSelector} from "../app/hooks";
import {Box, CircularProgress} from "@mui/material";


const Modal = ({switchModal}: { switchModal: React.Dispatch<SetStateAction<boolean>> }) => {

    const [movieData, setData] = useState([]),
        [infoArr, setInfoArr] = useState([] as [string, string | Object[]][]),
        {movieInfo, pending} = useAppSelector(state => state.data);


    useEffect(() => {
        fillData();
    }, [movieInfo.Title]);

    const fillData = async () => {
        const tmp: [string, string | Object[]][] = await Object.entries(movieInfo);
        setInfoArr([...tmp]);
    }

    return (
        <div
            onClick={() => {
                setInfoArr([]);
                switchModal(false);
            }}
            style={{
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                zIndex: '2',
                backdropFilter: 'blur(3px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {pending ?
                <Box sx={{
                    display: 'flex'
                }}>
                    <CircularProgress/>
                </Box> :
                <div
                    style={{
                        minWidth: '900px',
                        maxWidth: '1200px',
                        height: '600px',
                        position: 'absolute',
                        border: '1px solid skyblue',
                        borderRadius: '10px',
                        background: 'white',
                        boxShadow: '2px 2px 5px grey',
                        opacity: '100%',
                        zIndex: '10',
                        display: 'flex',
                    }}>
                    <img
                        style={{
                            height: '70%',
                            margin: '60px',
                            border: '10px solid black',
                            borderRadius: '15px',
                            boxShadow: '3px 3px 20px grey'
                        }}
                        src={movieInfo.Poster}/>
                    <div
                        style={{
                            minWidth: '400px',
                            margin: '60px',
                            display: 'flex',
                            flexFlow: 'column wrap',
                            justifyContent: 'start',
                            alignItems: 'start',
                            gap: '2px'
                        }}>
                        {    // @ts-ignore
                            !pending && <h1>{movieInfo.Title}</h1>}
                        <table cellPadding={6}>
                            {!pending && infoArr.map((e, i) =>
                                (i > 0 && i !== 2 && i < 13) &&
                                <tr style={{textAlign: 'start', lineHeight: '30px'}} key={i}>
                                    <th style={{lineHeight: '20px'}}>{`${e[0]}:`}</th>
                                    {` ${e[1]}`}</tr>)}
                        </table>
                    </div>
                </div>}
        </div>
    );
};

export default Modal;