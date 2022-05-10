import axios from 'axios';
import {setRepos, setIsFetching,setFetchError} from "../../redux/reposReducer";

export const getRepos = (searchQuery = 'stars:%3E1', currentPage, perPage) => {
    if (searchQuery == '') {
        searchQuery = 'stars:%3E1';
    }
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
            dispatch(setRepos(response.data));

        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false));
            setTimeout(()=>{
                dispatch(setFetchError(false))
            },2000)
        }


    }
}
export const getCurrentRepo = async (userName, repoName, setRepo) => {
    const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`);
    setRepo(response.data)
}
export const getContributors = async (userName, repoName, setContributors) => {
    const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}/contributors?page=1&per_page=10`)
    setContributors(response.data)
}