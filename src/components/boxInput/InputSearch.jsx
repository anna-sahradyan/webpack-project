import React, {useEffect, useState} from 'react';
import {Box, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import {useDispatch} from 'react-redux';
import {getRepos} from '../../components/actions/repos';
import {setCurrentPage} from '../../redux/reposReducer';

const InputSearch = ({setInputValue,inputValue,currentPage}) => {
    const dispatch = useDispatch();
    const handlerSearch = () => {
        dispatch(setCurrentPage(1));
        if (inputValue) {
        dispatch(getRepos(inputValue));

        }
        setInputValue('');

    }
    useEffect(() => {
        dispatch(getRepos(inputValue))
    }, [dispatch]);
    return (
        <>
            <Box
                component="form"

                style={{margin: "auto", marginTop: "10px", marginLeft: '300px'}}>
                <TextField onChange={(e) => setInputValue(e.target.value)}
                           autoFocus
                           value={inputValue}
                           style={{backgroundColor: '#5A5C66', width: '700px'}}/>

                <IconButton type="submit" aria-label="search" onClick={(e) => handlerSearch(e.preventDefault())}>
                    <SearchIcon style={{marginTop: "10px", marginLeft: '-140px'}}/>
                </IconButton>

            </Box>

        </>
    );
};

export default InputSearch;