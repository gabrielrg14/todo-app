const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'DESCRIPTION_CLEARED':
            return { ...state, description: '' }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        default:
            return state

    }
}