import React, { useContext, useEffect, useRef } from 'react';
import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';
import { GithubContext } from '../context/github/GithubContextPro';
import { ThemeContext } from '../context/github/theme/ThemeContextPro';
import styles from "../../src/components/shared/loadingAnime.module.css"
import stylesLight from "../../src/components/shared/loadingAnimeLight.module.css"
import Alert from '../components/layout/Alert';
import { motion } from 'framer-motion';
const Home = () => {
  const { state, searchUsers } = useContext(GithubContext)
  const { theme } = useContext(ThemeContext)

  return (

    <div  className='w-full'>


      <Alert />
      {state.users.length === 0 ? <div className='flex justify-center items-center w-full'>
        <span className={theme ? stylesLight.loader : styles.loader}></span>
      </div> :

        <UserSearch />

      }
      {state.loading && <div className='flex justify-center items-center w-full'>
        <span className={theme ? stylesLight.loader : styles.loader}></span>
      </div>}
      <UserResults />




    </div>
  );
};

export default Home;
