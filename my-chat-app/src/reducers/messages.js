const initialState = [];

export default function messages(state = initialState, action) {
    switch (action.type) {
        case 'GET_MESSAGES':
            state = [];
            action.messages.forEach(current => {
                state.push(current);
            });

        case 'NEW_MESSAGES':
            [
                ...state,
                action.messages
            ]
        default:
            return state;
    }
}