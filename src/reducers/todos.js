import { GET_TODOS_LOADING, GET_TODOS_SUCCESS, GET_TODOS_FAILURE,
		 ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_FAILURE,
         DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE,
         TOGGLE_TODO_LOADING, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAILURE} from '../actions/todos';


const INITIAL_STATE = {
	todos : [],
	loading : false,
	error : null
}


export default function (currentState = INITIAL_STATE, action){
    switch (action.type) {
        case GET_TODOS_LOADING:
            return {...currentState, loading: true}
        case GET_TODOS_SUCCESS:
            return {...currentState, loading: false, todos: action.todos}
        case GET_TODOS_FAILURE:
            return {...currentState, loading: false, error: action.error}
   		
		case ADD_TODO_LOADING:
            return {...currentState, loading: true}
        case ADD_TODO_SUCCESS:
            return {...currentState, todos: [...currentState.todos, action.todo],loading: false}
        case ADD_TODO_FAILURE:
            return {...currentState, loading: false, error: action.error}
   		
        case DELETE_TODO_LOADING:
            var newItems = currentState.todos.map(item => {
                if (item.id === action.id) item.loading = true;
                return item;
            })
            return {...currentState, todos: newItems}
        case DELETE_TODO_SUCCESS:
            var newItems = currentState.todos.filter(item => {
                return item.id !== action.id
            })
            return {...currentState, todos: newItems}
        case DELETE_TODO_FAILURE:
            var newItems = currentState.todos.map(item => {
                if (item.id === action.id) {item.loading = false; item.error = action.error}
                return item;
            })
            return {...currentState, todos: newItems}

        case TOGGLE_TODO_LOADING:
            var newItems = currentState.todos.map(item => {
                if (item.id === action.id) {item.loading = true};
                return item;
            })
            return {...currentState, todos: newItems}
        case TOGGLE_TODO_SUCCESS:
            var newItems= currentState.todos.slice(0);
            newItems = newItems.map(item =>{ 
                if(item.id === action.todo.id) { 
                    item.done = !(item.done);
                };
                return item;
            })
            return {...currentState, todos: newItems}
        case TOGGLE_TODO_FAILURE:
            var newItems = currentState.todos.map(item => {
                if (item.id === action.id) {item.loading = false; item.error = action.error}
                return item;
            })
            return {...currentState, todos: newItems}

   		default:
            return currentState;
    }
}