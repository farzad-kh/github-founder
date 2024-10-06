import React,{useContext,useEffect} from 'react';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/github/theme/ThemeContextPro';
import { GithubContext } from '../../context/github/GithubContextPro';
import { motion } from 'framer-motion';
const UserItem = ({ user: { login, avatar_url,id } ,index}) => {
    const{ theme}=useContext(ThemeContext)
   const {dispatch}=useContext(GithubContext)
   useEffect(()=>{

   },[])

    return (

       <motion.div transition={{delay:0.1 * index}}
       initial={{opacity:0,y:28}}
       animate={{opacity:1,y:20}}
       exit={{opacity:0,y:20}}
       key={id}
       
       >

        <div className= {theme ? " trans-bg card shadow-md shadow-base-300 bg-[#fcfcfc] compact p-1 hover:ring hover-color-info":" trans-bg  hover:ring hover-color-info card shadow-md bg-base-300 compact p-1"} >

            <div className='flex-row items-center space-x-4 card-body'>
                <div className=" w-16 h-16 overflow-hidden avatar  rounded-full ">
               {avatar_url.length>=0 ?  <img  className='rounded-full  ' src={avatar_url} /> : <img src="" className='skeleton' />}
                  
                </div>

                <div className=" flex-1 w-[55%] text-center leading-6 !ml-0 max-sm:!mr-12 px-2 overflow-hidden max-w[155px] max-sm:max-w-[155px] ">
                    <h2 className=" card-title justify-center !block overflow-hidden text-ellipsis whitespace-nowrap max-w[155px]  ">{login}</h2>
                    <Link onClick={()=> {dispatch({type:"CLEAR_USER"});dispatch({type:"CLEAR_REPOS"})}} to={`/user/${login}`} className=' text-base-content text-opacity-40 text-center  '>visit profile</Link>
                </div>
            </div>


        </div>
       </motion.div>
    );
};

export default UserItem;