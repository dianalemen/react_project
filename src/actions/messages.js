export const getMessages = () => dispatch => {
    fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/messages')
        .then((response) => response.json())
        .then(res => {
            dispatch({ type: 'GET_MESSAGES', messages: res })
        })
}