const AlertReducer = (state, action) => {
    switch (action.type) {
        case "SET_ALERT":
            return action.payload
        case "REMOVE_ALERT":
            return false
        default:
            return state
    }
}
export default AlertReducer