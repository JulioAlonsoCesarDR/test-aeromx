import { SET_FLIGHT_COLLECTION, SET_LOADING } from "./types";

export default function reducer(state, { payload, type }) {
    switch (type) {
        case SET_FLIGHT_COLLECTION:
            return {
                ...state,
                flightCollection: payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: payload
            }
        default:
            return state;
    }
}
