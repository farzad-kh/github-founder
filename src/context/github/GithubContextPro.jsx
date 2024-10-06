// import React, { createContext, useReducer, useEffect, useState } from 'react';
// import axios from 'axios';
// import githubReducer from './GithubReducer';
// export const GithubContext = createContext()
// const GithubContextPro = ({ children }) => {
//     const initialState = {
//         users: [],
//         items: [],
//         user: {},
//         repos:[],
//         searchActive: false,
//         loading: false,

        


//     }
//     const [fade, setFade] = useState("")
//     const [humber, setHumber] = useState(false)
//     const [isOpen, setIsopen] = useState(false)
//     const [closeOver, setCloseOver] = useState(true)

//     const token = import.meta.env.VITE_GITHUB_TOKEN


//     const isLoading = () => {
//         dispatch({ type: "LOADING" })
//     }
//     const [state, dispatch] = useReducer(githubReducer, initialState)

//     const config = {
//         headers: { Authorization: `Bearer ${token}` }
//     };
//     const fetchUsers = async () => {

//         const res = await axios.get(`${import.meta.env.VITE_GITHUB_URL}/users`, config)
//        setTimeout(()=>{
//         dispatch({
//             type: "GET_USERS",
//             payload: res.data
//         })
//        },1400)
//         return res.data
//     }

//     const searchUsers = async (text) => {
//         isLoading()
//         const params = new URLSearchParams({
//             q: text
//         })
//         const res = await axios.get(`${import.meta.env.VITE_GITHUB_URL}/search/users?${params}`, config)
//         setTimeout(() => dispatch({
//             type: "SEARCH_USERS",
//             payload: res.data.items
//         }), 1500)


//         return res.data.items
//     }
  
//     const getUser = async (login) => {
//         isLoading()

//         const res = await axios.get(`${import.meta.env.VITE_GITHUB_URL}/users/${login}`, config)

        
//         setTimeout(()=>{
//             dispatch({
//                 type: "GET_USER",
//                 payload: res.data
//             })
//         },300)
            
       

//         return res.data
//     }
//     const getUserRepos = async (login,perPage) => {
//         isLoading()
//         const params = new URLSearchParams({
//           sort:"created",
          
//         })
//         const res = await axios.get(`${import.meta.env.VITE_GITHUB_URL}/users/${login}/repos?${params}&per_page=${perPage}`, config)

        
//         setTimeout(()=>{
//             dispatch({
//                 type: "GET_REPOS",
//                 payload: res.data
//             })
//         },950)
            
       

//         return res.data
//     }


//     useEffect(() => {

//         // if (window.innerWidth >= 1024) {
//         //     setIsopen(false)
//         // }
//     }, [])

//     return (
//         < GithubContext.Provider value={{
//             state,
//             fetchUsers,
//             searchUsers,
//             dispatch,
//             isLoading,
//             fade,
//             setFade,
//             isOpen,
//             setIsopen,
//             closeOver,
//             setCloseOver,
//             humber,
//             setHumber,
//             getUser,
//             getUserRepos
//         }}>
//             {children}
//         </GithubContext.Provider>
//     );
// };

// export default GithubContextPro;
import React, { createContext, useReducer, useEffect, useState } from 'react';

import githubReducer from './GithubReducer';
export const GithubContext = createContext()
const GithubContextPro = ({ children }) => {
    const initialState = {
        users: [],
        items: [],
        user: {},
        repos:[],
        searchActive: false,
        loading: false,

        


    }
    const [fade, setFade] = useState("")
    const [humber, setHumber] = useState(false)
    const [isOpen, setIsopen] = useState(false)
    const [closeOver, setCloseOver] = useState(true)

    const token = import.meta.env.VITE_GITHUB_TOKEN

 
    const isLoading = () => {
        dispatch({ type: "LOADING" })
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    
    return (
        < GithubContext.Provider value={{
            state,
         
            dispatch,
            isLoading,
            fade,
            setFade,
            isOpen,
            setIsopen,
            closeOver,
            setCloseOver,
            humber,
            setHumber,
           
          
        }}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubContextPro;