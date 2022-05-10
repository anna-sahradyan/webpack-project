import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRepos} from '../components/actions/repos';
import Repo from '../components/repo/Repo';
import '../components/repo/Repo.less';
import Loading from '../components/Loading';
import Table from 'react-bootstrap/Table';
import InputSearch from '../components/boxInput/InputSearch';
import {setCurrentPage} from '../redux/reposReducer';
import {createPages} from '../components/pageUtilis/index';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const ReposList = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const isFetchError = useSelector(state => state.repos.isFetchError);
    const currentPage = useSelector(state => state.repos.currentPage);
    const perPage = useSelector(state => state.repos.perPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const pagesCount = Math.ceil(totalCount / perPage);

    const pages = [];
    createPages(pages, pagesCount, currentPage)
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        dispatch(getRepos(inputValue, currentPage, perPage))
    }, [dispatch, currentPage]);

    return (
        <>
            <div className={'contentDiv'}>
                <div className={'content'}>
                    <InputSearch inputValue={inputValue} setInputValue={setInputValue} currentPage={currentPage}/>
                    <div className={'repoContainer'}>
                        {isFetchError &&  <Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">Server Error!!!</Alert>
                        </Stack>}
                        <div className={'repoContent'}>
                            {isFetching === false ? (repos.map(repo => <Repo key={repo.id} repo={repo}/>)) : (
                                <div className='loading'><Loading/></div>)}
                        </div>
                    </div>
                    <div className={'pagination'}>
                        {pages.map((item, index) => <span key={`${item}_${index}`}
                                                          className={currentPage === item ? "current-page" : "page"}
                                                          onClick={() => dispatch(setCurrentPage(item))}>{item}</span>)}
                    </div>

                </div>
            </div>

        </>
    );
};
export default ReposList;

