import initState from '../initState'

export const EditProfileInputsReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'EDITING_TYPING':
            return {...state, ...payload}
        default:
            return state
    }
}