import React from 'react';
import './app.less';
import {useDispatch,useSelector} from 'react-redux';
import {Route, Routes,Navigate} from "react-router-dom";
import Main from './main';
import Header from './header';
import ReposList from '../containers/ReposList';
import ReposCard from '../components/reposCard/ReposCard';
const App = () => {
    const dispatch = useDispatch();



    return (
        <div className="weapper">
<Header/>
            <div className={'main'}>
                <Routes>
                    <Route  path={'/'} element={<Main/>}/>
                    <Route path={'/repo'} element={<ReposList/>}/>
                    <Route path={'/repo/:userName/:repoName'} element={<ReposCard/>}/>
                    <Route path="*" element={<Navigate replace to="/"/>} />
                </Routes>
            </div>

        </div>
    );
};

export default App;