const initialState = [];

export default function messages(state = initialState, action) {
    switch (action.type) {
        case 'GET_MESSAGES':
            state = [];
            console.log('called get_messages');
            action.messages.forEach(current => {
                state.push(current);
                console.log(current);
            });
        default:
            return state;
    }
}