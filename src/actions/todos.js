import Axios from 'axios';

export const GET_TODOS_LOADING = 'GET_TODOS_LOADING';
export const GET_TODOS= 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

export const ADD_TODO_LOADING = 'ADD_TODO_LOADING';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const DELETE_TODO_LOADING = 'DELETE_TODO_LOADING';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';


export const TOGGLE_TODO_LOADING = 'TOGGLE_TODO_LOADING';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
export const TOGGLE_TODO_FAILURE = 'TOGGLE_TODO_FAILURE';


export function getTodosLoading() {
    return {
        type: GET_TODOS_LOADING
    }
}
export function getTodos() {
    return {
        type: GET_TODOS,
        payload: Axios.get(`http://localhost:3001/todos`)
    }
}
export function getTodosSuccess(response) {
    return {
        type: GET_TODOS_SUCCESS,
        todos: response
    }
}
export function getTodosFailure(error){
    return {
        type: GET_TODOS_FAILURE,
        error
    }
}

export function addTodoLoading() {
    return {
        type: ADD_TODO_LOADING
    }
}
export function addTodo(content) {
    return {
        type: ADD_TODO,
        payload: Axios.post(`http://localhost:3001/todos`,{content, done: false  })
    }
}
export function addTodoSuccess(response) {
    return {
        type: ADD_TODO_SUCCESS,
        todo : response
    }
}
export function addTodoFailure(error) {
    return {
        type: ADD_TODO_FAILURE,
        error
    }
}

export function deleteTodoLoading(id) {
    return {
        type: DELETE_TODO_LOADING,
        id
    }
}
export function deleteTodo(id){
    return {
        type: DELETE_TODO,
        payload : Axios.delete(`http://localhost:3001/todos/${id}`)
    }
}
export function deleteTodoSuccess(id) {
    return {
        type: DELETE_TODO_SUCCESS,
        id
    }
}
export function deleteTodoFailure(id) {
    return {
        type: DELETE_TODO_FAILURE,
        id
    }
}


export function toggleTodoLoading(id){
    return {
        type: TOGGLE_TODO_LOADING,
        id
    }
}
export function toggleTodo(id, toggle) {
    return {
        type: TOGGLE_TODO,
        payload :  Axios.patch(`http://localhost:3001/todos/${id}`, toggle)

    }
}
export function toggleTodoSuccess(todo) {
    return {
        type: TOGGLE_TODO_SUCCESS,
        todo
    }
}
export function toggleTodoFailure(data) {
    return {
        type: TOGGLE_TODO_FAILURE,
        data
    }
}
