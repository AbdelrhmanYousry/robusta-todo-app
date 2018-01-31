import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { getTodosLoading, getTodos, getTodosSuccess, getTodosFailure,
         addTodoLoading, addTodo, addTodoSuccess, addTodoFailure,
         deleteTodoLoading, deleteTodo, deleteTodoSuccess, deleteTodoFailure,
         toggleTodoLoading, toggleTodo, toggleTodoSuccess, toggleTodoFailure } from '../actions/todos';

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: function() {
            dispatch(getTodosLoading());
            dispatch(getTodos()).then(response => {
                if(response.payload.status < 400){
                    dispatch(getTodosSuccess(response.payload.data));
                }else{
                    dispatch(getTodosFailure(response.payload.message));
                }
            })
        },
        addTodo: (content, callback) => {
            dispatch(addTodoLoading());
            dispatch(addTodo(content)).then(response => {
                if(response.payload.status < 400){
                    dispatch(addTodoSuccess(response.payload.data));
                    callback();
                }else{
                    dispatch(addTodoFailure(response.payload.message));
                }
            })
        },
        toggleTodo: (id, type, value) => {
            dispatch(toggleTodoLoading(id));
            dispatch(toggleTodo(id, {[type]: value})).then(response => {
                if(response.payload.status < 400){
                    dispatch(toggleTodoSuccess(response.payload.data));
                }else{
                    dispatch(toggleTodoFailure(response.payload.message));
                }
            })
        },
        deleteTodo: (id) => {
            dispatch(deleteTodoLoading(id));
            dispatch(deleteTodo(id)).then(response => {
                if(response.payload.status < 400){
                    dispatch(deleteTodoSuccess(id));
                }else{
                    dispatch(deleteTodoFailure(id));
                }
            })
   
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
