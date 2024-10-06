// import React,{useContext} from 'react';
// import PropTypes from "prop-types"
// import { Link } from 'react-router-dom';
// import { ThemeContext } from '../../context/github/theme/ThemeContextPro';

// const SearchItem = ({ user: { login, avatar_url } }) => {
//     const{ theme}=useContext(ThemeContext)
//     return (

       
//         <div className= {theme ? " trans-bg card shadow-md bg-[#f9f9f9] compact p-1 hover:ring hover-color-info":" trans-bg  hover:ring hover-color-info card shadow-md bg-base-300 compact p-1"} >

//             <div className='flex-row items-center space-x-4 card-body'>
//                 <div className=" w-16 h-16 overflow-hidden avatar  rounded-full ">
//                     <img className='rounded-full' src={avatar_url} />
//                 </div>

//                 <div className="w-[55%] text-center leading-6 ">
//                     <h2 className="card-title justify-center">{login}</h2>
//                     <Link to={`/users/${login}`} className=' text-base-content text-opacity-40 text-center  '>visit profile</Link>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default SearchItem;