import React, { useContext, useEffect, useRef, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { urlFilter } from "../components/helper/fun";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiLink } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { TfiTwitter } from "react-icons/tfi";
import { GithubContext } from "../context/github/GithubContextPro";
import { ThemeContext } from "../context/github/theme/ThemeContextPro";
import styles from "../../src/components/shared/loadingAnime.module.css";
import stylesLight from "../components/shared/loadingAnimeLight.module.css";
import { motion } from "framer-motion";
import RepoList from "../components/repos/RepoList";
import { getUser } from "../context/github/GithubActsions";
const User = () => {
  const ref = useRef();
  const { theme } = useContext(ThemeContext);
  const params = useParams();
  const loginParams = params.login;
  const { state, dispatch } = useContext(GithubContext);

  console.log(state.repos);

  console.log(ref.current);
  useEffect(() => {
    console.log(ref.current);
    const getUserSingel = async () => {
      dispatch({ type: "LOADING" });
      dispatch({
        type: "GET_USER",
        payload: await getUser(loginParams),
      });
    };
    setTimeout(() => {
      getUserSingel();
    }, 500);
  }, [loginParams]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    email,
    followers,
    twitter_username,
    login,
    html_url,
    following,
    follwers,
    public_repos,
    public_gists,
    hireable,
  } = state.user;

  if (Object.keys(state.user).length === 0) {
    return <span className={theme ? stylesLight.loader : styles.loader}></span>;
  }

  return (
    <motion.div
      className="w-full flex justify-center lg:w-10/12 p-5 md:p-6  items-center flex-col"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
    >
      <div className="mb-4 w-full">
        <Link
          to="/"
          className="btn btn-ghost hover:bg-transparent hover:text-primary"
        >
          Back To Home
        </Link>
      </div>

      <div className="flex justify-center  w-full  py-6 transition-all duration-200 flex-col  ">
        <div
          className={`${
            theme
              ? " shadow-md   w-full flex flex-col max-width-custom bg-[#fcfcfc] p-5 gap-5 rounded-md"
              : "shadow-lg flex-col  w-full flex max-width-custom bg-base-300 p-5 gap-5 rounded-md"
          } `}
        >
          <div className="flex w-full gap-3  max-width-user ">
            <div className="avatar w-60   transition-all duration-200 max-width-img-container ">
              <div
                className={`rounded-full ring  self-baseline    ring-offset-2 max-width-img max-md ${
                  theme
                    ? "ring-indigo-400 ring-offset-gray-100 "
                    : "ring-indigo-900 ring-offset-gray-800"
                }`}
              >
                <img className="transition-all duration-200" src={avatar_url} />
                <div className="absolute bottom-3 right-5 w-4/5 max-w-[80%] block opacity-0 transition-opacity duration-300 "></div>
              </div>
            </div>
            <div className="w-full   px-5  py-3 max-width-padding  ">
              <h1 className="flex gap-2 items-baseline flex-wrap max-width-name-container mb-4">
                <div className=" flex flex-col text-2xl font-bold mr-3">
                  {name}
                  <p className="text-sm text-ellipsis whitespace-nowrap z-10  opacity-60 ">
                    {login}
                  </p>
                </div>

                <div className="flex  gap-2 mt-1">
                  {hireable && (
                    <div className=" badge badge-sm badge-outline badge-success pt-1 pb-[0.4rem]">
                      hireable
                    </div>
                  )}

                  <div className="  badge badge-sm badge-primary badge-outline  pt-1 pb-[0.4rem]">
                    {type}
                  </div>
                  {+followers >= 1000 && (
                    <div className="  badge badge-sm badge-accent badge-outline  pt-1 pb-[0.4rem]">
                      popular
                    </div>
                  )}
                </div>
              </h1>
              <div className="">
                <p className="opacity-90 ">{bio}</p>
                <div className="mt-7 card-actions">
                  <a
                    className="btn btn-md btn-outline w-full  sm:btn sm:btn-outline sm:w-fit !border-2  "
                    href={html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Github Profile
                  </a>
                </div>
              </div>

              {!email && !blog && !location === true ? (
                ""
              ) : (
                <div
                  ref={ref}
                  className="w-full border-b-2 border-b-base-content  shadow-base-200 mt-10 flex justify-between align-middle gap-5 flex-wrap "
                >
                  {location && (
                    <div className=" flex-1 pb-3 px-4 ">
                      <div className=" stat-title  text-xs pb-[2px]">
                        Locations
                      </div>

                      <div className=" text-sm sm:text-base  flex items-center  stat-value font-bold">
                        <IoLocationOutline className="mr-2 mt-1" />

                        {location}
                      </div>
                    </div>
                  )}
                  {blog && (
                    <div className=" flex-1 pb-3 px-4   ">
                      <div className=" stat-title  text-xs pb-[2px] ">Blog</div>
                      <div>
                        <a
                          className="text-sm sm:text-base   mx-repo-name stat-value font-bold hover:text-accent flex items-center max-w-fit"
                          target="_blank"
                          rel="noreferrer"
                          href={`http://${urlFilter(state.user.blog)}`}
                        >
                          <HiLink className="mr-2 mt-1" />
                          {urlFilter(state.user.blog)}
                        </a>
                      </div>
                    </div>
                  )}

                  {!twitter_username && !email === true ? (
                    ""
                  ) : (
                    <>
                      {twitter_username ? (
                        <div className=" flex-1 pb-3 px-4   ">
                          <div className=" stat-title  text-xs pb-[2px] ">
                            Twitter
                          </div>
                          <div>
                            <a
                              className="text-sm sm:text-base  stat-value font-bold hover:text-accent flex items-center max-w-fit"
                              target="_blank"
                              rel="noreferrer"
                              href={`http://twitter.com/${urlFilter(
                                state.user.twitter_username
                              )}`}
                            >
                              <TfiTwitter className="mr-2 mt-1" />
                              {urlFilter(state.user.twitter_username)}
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className=" flex-1 pb-3 px-4  ">
                          <div className=" stat-title  text-xs pb-[2px]">
                            Email
                          </div>

                          <div className="flex items-center text-sm sm:text-base  stat-value font-bold">
                            <MdOutlineEmail className="mr-2 mt-1" />
                            {email}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="w-full indicator    mt-10  rounded-lg  overflow-hidden ">
            <div className="w-full flex-col    md:flex-row  flex justify-between align-middle gap-5 flex-wrap p-0 md:p-4">
              <div className=" flex-auto pb-3 pr-0 sm:pr-7 border-custom !border-base-content !border-opacity-60 ">
                <div className=" stat-title  text-xs pb-[2px]">Followers</div>

                <div className="flex items-center   text-2xl sm:text-3xl stat-value font-bold justify-between">
                  {followers}
                  <FaUsers className="text-secondary " />
                </div>
              </div>

              <div className=" flex-auto pb-3  pr-0 sm:pr-7  border-custom !border-base-content !border-opacity-60 ">
                <div className=" stat-title  text-xs pb-[2px]">Following</div>

                <div className="flex items-center text-2xl sm:text-3xl stat-value font-bold justify-between">
                  {following}
                  <FaUserFriends className="text-secondary" />
                </div>
              </div>
              <div className=" flex-auto pb-3 pr-0 sm:pr-7 border-custom  ">
                <div className=" stat-title  text-xs pb-[2px]">
                  Public Repos
                </div>

                <div className="flex items-center  text-2xl sm:text-3xl stat-value font-bold justify-between">
                  {public_repos}

                  <FaCodepen className="text-secondary" />
                </div>
              </div>
              <div className=" flex-auto pb-3 pr-0 sm:pr-7 border-custom  ">
                <div className=" stat-title  text-xs pb-[2px]">Public Gits</div>

                <div className="flex items-center  text-2xl sm:text-3xl stat-value font-bold justify-between">
                  {public_gists}

                  <FaStore className="text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <RepoList login={login} />
      </div>
    </motion.div>
  );
};

export default User;
