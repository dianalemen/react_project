const initialState = [];

export default function messages(state = initialState, action) {
    switch (action.type) {
        case 'GET_MESSAGES':
            state = [];
            action.messages.forEach(current => {
                state.push(current);
            });
            //console.log(state);
            return state;
        case 'NEW_MESSAGE':
            //state.push(action.message);
            return [...state, action.message];
        default:
            return state;
    }
}