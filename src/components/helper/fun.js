
// const resizeBurger=(setHumber)=>{
// // console.log(window.innerWidth);
//     window.onresize = () => {
//         if (window.innerWidth < 1024 ) {

//           setHumber(true)
//         } else if (window.innerWidth >=1024 ) {
//             setHumber(false)
//         }
//     }
//   }
//   const showHum=()=>{
//     window.onresize=()=>{



//         if (window.innerWidth < 1024) {

//             return true
//         } else if (window.innerWidth >= 1024) {
//             return false
//         }
//     }
//   }
import { data } from "autoprefixer"
import moment from "moment"

const a = () => {
  if (window.innerWidth < 1024) {
    return true
  } else if (window.innerWidth >= 1024) {
    return false
  }

}
const urlFilter = (blog) => {
  const blogFilter = blog.split("://")



  if (blogFilter.length > 1) {

    return blogFilter[1]
  } else {
    return blogFilter[0]
  }




}
const pushUpdate = (timePush) => {
  const relativeTime = moment(timePush).fromNow()
  const date = timePush.split("T")
  let dateFormat = date[0].split("-")
  const monthName = moment(new Date(dateFormat[0], dateFormat[1], 0)).format("MMM")
  // const day = Dates[2].split("t")

  // const time =moment().format(`${dateFormat[1].toLocaleString("en-us")} ${dateFormat[0]}`);     

  if (dateFormat[1] < 10) {
    dateFormat[1] = dateFormat[1].slice(-1)
    dateFormat[1]
  } else {
    dateFormat[1]
  }

  const overYear = `${monthName} ${dateFormat[2]} ${dateFormat[0]}`



  return moment(timePush).fromNow()


}

const btnRepo = (state) => {


}

export { a, urlFilter, pushUpdate, btnRepo }