

import React, { useContext, useEffect, useState } from 'react';
import { GithubContext } from '../../context/github/GithubContextPro';
import RepoItem from './RepoItem';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/github/theme/ThemeContextPro';
import style from "../shared/loadingAnime.module.css"
import styleLight from "../shared/loadingAnimeLight.module.css"
import { btnRepo } from '../helper/fun';
import { getUserRepos } from '../../context/github/GithubActsions';
const RepoList = ({ login }) => {
    const { state, dispatch } = useContext(GithubContext)
    const { theme } = useContext(ThemeContext)
    const [perPage, setPerPage] = useState(20)
    useEffect(() => {


        
        const userRepos = async () => {

            
            dispatch({ type: "LOADING" })
            dispatch({
                type: "GET_REPOS",
                payload: await getUserRepos(login, perPage)
            })
        }
        
            userRepos()


    }, [perPage])

    // perPage <= state.repos.length
    const rep = () => {

        if (state.user.public_repos > 20) {

            return <div className='w-full justify-center items-center flex mb-4 px-4 sm:px-8'>
                <button className={`relative btn    ${state.loading && "load"}`} onClick={() => setPerPage(perPage + 10)}>More</button>
            </div>
        } else if (state.user.public_repos <= 20) {
            return ""
        }


    }




    console.log(state.user.public_repos);
    if (state.user.public_repos <= 0) return null


    return (
        <div className='my-8'>
            <div className={`w-full flex-col  card  rounded-lg    md:flex-row  flex justify-between align-middle gap-5 flex-wrap p-0 md:p-4 
            ${theme ? "bg-[#fcfcfc] shadow-md" : " bg-base-300"}`}>
                <div className='card-body py-4 px-4 sm:px-8 '>




                    {state.repos.length === 0 ?

                        <div className='flex justify-center'>
                            <span className={theme ? styleLight.loaderThreeCircle : style.loaderThreeCircle}></span>
                        </div>


                        :

                        <>

                            <h2 className="text-2xl font-bold card-title mb-6">
                            Latest Repositories
                            </h2>

                            {state.repos.map((item, i) =>
                                <RepoItem key={item.id} repo={item} index={i} />
                            )}
                        </>
                    }




                </div>



                {state.repos.length >= 1 ?

                    state.user.public_repos === state.repos.length && state.user.public_repos > 20 ? <div className="w-full text-warning justify-center !pt-0 py-4 px-4 sm:px-8 items-center flex-col flex font-semibold ">There is no more repositories !</div> :

                        state.repos.length >= 50 ? <div className="w-full justify-center items-center flex-col flex  !pt-0 py-4 px-4 sm:px-8">
                            <p className='mb-2 text-info'> You Wana See More ?</p>
                            <a className='btn btn-md btn-outline w-full  sm:btn sm:btn-outline sm:w-fit !border-2  ' href={state.user.html_url}
                                target='_blank'
                                rel="noreferrer"
                            >Visit Github Profile</a>
                        </div> : rep()

                    :
                    ""
                }








            </div>


        </div>
    );
};

export default RepoList;


