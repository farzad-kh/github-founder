
import React, { useContext } from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/github/theme/ThemeContextPro";

import { pushUpdate } from "../helper/fun";
import icons from "../../assets/icons";
const RepoItem = ({ repo, index }) => {
  const { theme } = useContext(ThemeContext);
  //* language

   
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`transition-colors  duration-100 mb-4  px-4 card-body sm:!p-7 sm:!py-0   !py-0   rounded-md bg-base-100   
            ${
              theme
                ? " shadow-slate-300 shadow-md    hover:bg-[#f6f6f6]"
                : " shadow-slate-950  bg-base-100 shadow-lg  hover:bg-neutral"
            }`}
    >
      <div className=" card py-5">
        {repo.pushed_at && (
          <div className=" stat-title  text-xs pb-[2px] align-middle flex flex-col self-end ">
            Updated
            <div
              className={`text-xs sm:text-base stat-value  font-bold  flex items-center max-w-fit ${
                theme ? "text-slate-500" : "text-slate-400"
              }`}
            >
              {pushUpdate(repo.pushed_at)}
            </div>
          </div>
        )}
        <h3 className=" text-sm md:text-xl mb-2 font-semibold flex justify-between  py-3 ">
          <a
            target="_blank"
            href={repo.html_url}
            className="hover:text-accent mx-repo-name  "
          >
            <FaLink className="inline mr-2" />
            {repo.name}
          </a>
        </h3>
        <p className="mb-3 text-sm sm:text-base">{repo.description}</p>

        <div className="flex mt-3 ju  items-center">
          <div className="flex-1">
            <div
              className={`mr-2 badge   badge-sm sm:badge-lg bg-base-200 border-base-200 ${
                theme
                  ? " text-neutral  border-info"
                  : "mr-2 badge  text-info  bg-base-200 border-base-200"
              }`}
            >
              <FaEye className="mr-2 mt-[1px]" />
              {repo.watchers_count}
            </div>
            <div
              className={`mr-2 badge   badge-sm sm:badge-lg bg-base-200 border-base-200 ${
                theme
                  ? " text-neutral   border-success"
                  : "mr-2 badge  text-success  bg-base-200 border-base-200"
              }`}
            >
              <FaStar className="mr-2 mt-[1px]" />
              {repo.stargazers_count}
            </div>
            <div
              className={`mr-2 badge   badge-sm sm:badge-lg bg-base-200 border-base-200 ${
                theme
                  ? " text-neutral   border-error "
                  : "mr-2 badge  text-error bg-base-200 border-base-200"
              }`}
            >
              <FaInfo className="mr-2 mt-[1px]" />
              {repo.open_issues}
            </div>
            <div
              className={`mr-2 badge   badge-sm sm:badge-lg bg-base-200 border-base-200 ${
                theme
                  ? " text-neutral  bg-base-100 border-warning "
                  : "mr-2 badge  text-warning  bg-base-200 border-base-200"
              }`}
            >
              <FaUtensils className="mr-2 mt-[1px]" />
              {repo.forks}
            </div>
          </div>

          {repo.language === null ? (
            ""
          ) : (
            <div>{icons[repo.language.toLowerCase()]}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RepoItem;
