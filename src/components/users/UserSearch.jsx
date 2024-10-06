import React, { useState, useContext, useEffect } from 'react';
import { GithubContext } from '../../context/github/GithubContextPro';
import { AlertContext } from '../../context/alert/AlertContextPro';
import { searchUsers } from "../../context/github/GithubActsions"
const UserSearch = () => {
    const [text, setText] = useState("")
    const { setAlert, alert } = useContext(AlertContext)

    const handleChenge = (e) => {
        setText(e.target.value)
    }

    const { dispatch, setFade, state } = useContext(GithubContext)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setFade(true)
        if (!text || !text.trim()) {
            setAlert("must not be empty", "error")
            setFade(null)

        } else {

            dispatch({ type: "LOADING" })
            setTimeout(async () => {
                dispatch({
                    type: "SEARCH_USERS",
                    payload: await searchUsers(text)
                })
            }, 1000)


        }
        setTimeout(() => dispatch({
            type: "CLEAR",

        }), 500)

        setTimeout(() => setFade(false), 1800)
    }
    const handleKey = (e) => {
        if (e.target.value == "") {
            dispatch({ type: "CLEAR" })
        }
    }



    return (
        <div className='flex items-center justify-center mt-2 mb-10 transition-all'>
            <div className='w-full flex justify-center max-sm:flex-col items-center '>
                <form onSubmit={(e) => { handleSubmit(e) }} className=' w-[50%] max-xl:w-6/12 max-lg:w-8/12 max-md: px-8 max-xl:px-9 max-lg:px-8 max-md:px-4 max-sm:px-7   max-sm:w-full ' >
                    <div className="form-control w-full ">
                        <div className='relative'>
                            <input
                                value={text}
                                onChange={handleChenge}
                                onKeyUp={handleKey}
                                className=' transition-all input-bordered focus:border-none focus:input-primary text-base  w-full    neutral-content bg-base-200  input input-xl '
                                placeholder='Search'
                            />
                            <button type='submit' className='  absolute  w-24 rounded-s-none top-[0px] right-[0px]  btn'>GO</button>
                        </div>
                    </div>
                </form>

                <div className={` overflow-hidden transition duration-[430ms] ${state.items.length > 0 || text ? "scale-100" : "scale-0"} ${state.loading ? "!scale-0" : ""}`} >
                    <button onClick={(e) => { dispatch({ type: "CLEAR" }); setText("") }} className="text-base btn btn-ghost content-center  btn-sm hover:bg-transparent self-center max-sm:my-4 hover:text-[#c02323]" >Clear</button>
                </div>



            </div>
        </div>

    );
};

export default UserSearch;