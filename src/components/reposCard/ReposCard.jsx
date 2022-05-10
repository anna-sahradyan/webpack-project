import React, {useState, useEffect} from 'react';
import '../reposCard/ReposCard.less';
import {useNavigate, useParams} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import Button from '@mui/material/Button';
import {getCurrentRepo, getContributors} from '../actions/repos';
import Loading from '../Loading';
import { useSelector} from 'react-redux';
const ReposCard = () => {
    const navigate = useNavigate();
    const {userName, repoName} = useParams();
    const [repo, setRepo] = useState({owner: {}});
    const [contributors, setContributors] = useState([]);
    const isFetching = useSelector(state => state.repos.isFetching);
    useEffect(() => {
        getCurrentRepo(userName, repoName, setRepo);
        getContributors(userName,repoName,setContributors);
    }, []);


    return (
        <>
            <div className="contentCard">
                <div className="cardBox">
                    <div className={'card'}>
                        <Card style={{
                            width: '35rem',
                            height: "20rem",
                            boxShadow: "0 2px 5px #a3a3a3",
                            border: "2px solid #e4e4e450"
                        }}>
                            <Card.Body>
                                {/*<Card.Title style={{marginLeft: '200px'}}>Repo</Card.Title>*/}
                                <Card.Img variant="top" src={repo.owner.avatar_url}
                                          style={{width: '7rem', height: "7rem"}} alt={''}/>
                                <Card.Text style={{
                                    fontSize: "18px",
                                    fontWeight: 'bold',
                                    position: "absolute",
                                    marginLeft: '200px',
                                    marginTop: '-70px'
                                }}>
                                    {repo.name}
                                </Card.Text>
                                <hr/>
                                <Card.Text style={{
                                    fontSize: "18px",
                                    fontWeight: 'bold',
                                    position: "absolute",
                                    marginLeft: '10px',
                                    marginTop: '30px'
                                }}>
                                    Star Count: {repo.stargazers_count}
                                </Card.Text>
                                <Button variant="contained" onClick={() => navigate("/")} style={{
                                    fontSize: "18px",
                                    fontWeight: 'bold',
                                    position: "absolute",
                                    marginTop: '80px',
                                    marginLeft: '200px'
                                }}>Go To Home</Button>

                            </Card.Body>
                        </Card>
                        <Card.Body>
                            {isFetching === false ? (contributors.map((item,index)=> <Card.Text key={`${index}_${item}`}>{index+1}:{item.login}</Card.Text>)) : (
                                <div className='load'><Loading/></div>)}

                        </Card.Body>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ReposCard;