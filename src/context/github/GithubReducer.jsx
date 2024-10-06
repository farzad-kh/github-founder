// const initialState = {
//     users: [],
//     user: {},
//     repos: [],
//     loading: false,
//   }
// const notAc = (e) => {
//   console.log(state.map(item=>item));
//   if (!!e.target && state.searchActive) {

//   }
// }
const githubReducer = (state, action) => {

  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,

        loading: false,


        //or  users:action.payload
      }
    case "SEARCH_USERS":
      state.items.push({
        ...action.payload
      })
      return {
        ...state,
        items: action.payload,
        searchActive: true,
        loading: false,

      }
    case "GET_USER": {

      return {
        ...state,

        loading: false,
        user: { ...action.payload }
      }


    }
    case "GET_REPOS": {
     
      return {
        ...state,
        loading: false,
        repos: [...action.payload]
      }
    }
    case "CLEAR_REPOS": {
     
      return {
        ...state,
      
        repos: []
      }
    }
    case "LOADING":
      return {
        ...state,
        loading: true,

      }
    case "CLEAR":
      return {
        ...state,

        items: [],
        searchActive: false,


      }
    case "CLEAR_USER":
      return {
        ...state,
        user: {}



      }



    default:
      return state

  }


}

export default githubReducer