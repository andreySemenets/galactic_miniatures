import initState from '../initState'

export const EditProfileInputsReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'USER_PROFILE':
            return {payload}
        case 'USER_EDITING':
            return {...state, ...payload}
        default:
            return state
    }
}