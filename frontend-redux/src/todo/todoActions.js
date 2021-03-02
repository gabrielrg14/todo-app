import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

// Action Creator
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

// Action Creator - Retorna duas actions para fazer o dispatch aos reducers de forma assíncrona (Middleware Multi)
export const clearDescription = () => {
    return [{ type: 'DESCRIPTION_CLEARED' }, search()]
}

// Action Creator - Acessa a store através de getState para obter o atributo description (Middleware Thunk)
export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/i` : ''
    
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
    }
}

/* Action Creator - Retornando 2 Actions (Middleware Multi), mas não síncronas (search executava antes da realização do post)
export const addTodo = description => {
    const request = axios.post(URL, { description })
    return [
        { type: 'TODO_ADDED', payload: request },
        search()
    ]
} */

// Action Creator - Retornando 2 Actions de forma síncrona (Middleware Thunk)
export const addTodo = description => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clearDescription()))
    }
}

// Action Creator
export const markTodoAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

// Action Creator
export const markTodoAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

// Action Creator
export const removeTodo = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}