import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ThemeContext } from '../../context/github/theme/ThemeContextPro';
import { GithubContext } from '../../context/github/GithubContextPro';
import styles from "../shared/loadingAnime.module.css"
import stylesLight from "../shared/loadingAnimeLight.module.css"
import { Link } from 'react-router-dom';
import UserItem from './UserItem';
import { fetchUsers } from "../../context/github/GithubActsions"
// import SearchItem from './SearchItem';


const UserResults = () => {

    const { theme } = useContext(ThemeContext)
    const { state, fade, dispatch } = useContext(GithubContext)




    useEffect(() => {

        const getUsers = async () => {
         
            dispatch({
                type: "GET_USERS",
                payload: await fetchUsers()
            })
       
        }
      setTimeout(()=>{
        getUsers()
      },1400)





    }, [])

    // users.map(item =>
    //     <h3 className="text-center">{item.login}</h3>
    // )







    return (
        <div className={` ${fade ? "a op" : "a"} ${state.items.length === 0 && state.searchActive && "!flex "} ${(state.users.length === 0 ? "flex justify-center items-center" : '  grid  gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 p-3 max-sm:px-7')}`} >



            <>

                {

                    state.searchActive && state.items.length >= 0 ?
                        state.items.length === 0 && state.searchActive ? <p className=' text-xl font-semibold text-error flex justify-center flex-col w-full text-center  '>Sorry ! Your search did not match any users <Link onClick={() => dispatch({ type: "CLEAR" })} className='link text-lg text-center text-primary my-3' to="/" >BACK TO HOME</Link> </p>
                            :



                            state.items.map((item, i) =>

                                <UserItem key={item.id} user={item} index={i} />

                            )

                        :

                        state.loading ? "" :
                            state.users.map((item, i) =>
                                <UserItem key={item.id} user={item} index={i} />
                            )

                }

            </>

        </div>

    );
};

export default UserResults;



