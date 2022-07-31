import { GET_CONTACTS } from '../actions/types';

const initialState = {
    contacts: [
        {
            id: 1,
            name: "John Doe",
            email: "jdoe@gmail.com",
            phone: "555-555-5555"
        },
        {
            id: 2,
            name: "Karen Smith",
            email: "karen@gmail.com",
            phone: "333-333-3333"
        },
        {
            id: 3,
            name: "Sherlock Holmes",
            email: "sherlock@gmail.com",
            phone: "888-888-8888"
        }
    ],
};


export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state
            };
        default:
            return state;
    }
}