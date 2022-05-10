import React from 'react';
import './Repo.less';
import Table from 'react-bootstrap/Table';
import {NavLink} from 'react-router-dom';

const Repo = (props) => {
    const repo = props.repo;
    return (
        <>
            <div className={'repo'}>
                <div className="repo-header">
                <div className="repo-header-name"><NavLink to={`/repo/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink></div>
                <div className="repo-header-stars"><span>Star count:</span>{repo.stargazers_count}</div>
                <div className="repo-last-commit"><span>Last commit:</span>{repo.updated_at}</div>
                <div className="repo-last-commit"><span>Link to repository:</span><NavLink to={`/${repo.html_url}`}>{repo.html_url}</NavLink></div>
                </div>
            </div>

        </>
    );
};

export default Repo;