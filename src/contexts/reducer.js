import { SET_FLIGHT_COLLECTION } from "./types";

export default (state, action) => {
    switch (action.type) {
        case SET_FLIGHT_COLLECTION:
            return {
                ...state,
                flightCollection: action.payload
            }
        default:
            return state;
    }
}