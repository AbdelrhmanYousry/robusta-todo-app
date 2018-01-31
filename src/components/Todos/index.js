import React, {Component} from 'react';
import Todo from '../Todo';
import {Input, List } from 'antd';

import 'antd/lib/input/style/index.css';
import 'antd/lib/list/style/index.css';
import 'antd/lib/button/style/index.css';
const Search = Input.Search;

export default class Todos extends Component {
	constructor(){
		super();
		this.state = {
			newTodo: ''
		}
	}
	componentWillMount(){
        this.props.getTodos();
    }

    render(){
    	const {todos, addTodo, deleteTodo,toggleTodo} = this.props;
    	return(
	    	<div>
				 	<Search
                        placeholder="What do you want to do?"
                        enterButton="+"
                        value={this.state.newTodo}
                        onChange={event => this.setState({newTodo: event.target.value})}
                        onSearch={value => {addTodo(value, () => this.setState({newTodo: ''}));}}
                    />
                    {
                        todos.map(todo => {
                            return(
                                <Todo todo={todo} handleDelete={deleteTodo} handleChange={toggleTodo} />
                            )
                        })
                    }
			

			</div>
		)
    }
}


         