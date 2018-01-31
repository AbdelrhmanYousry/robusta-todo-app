import React, { Component } from 'react';
import { Button } from 'antd';
import './style.css';


import 'antd/lib/button/style/index.css';

export default class Todo extends Component {

	render(){
		const {todo, handleDelete, handleChange} = this.props;
		return(
			<div style={{opacity:
				todo.done? 
				'0.4' :
				'1'
			}}>
				<input type="checkbox" onChange={(e) => {handleChange(todo.id,'done', e.target.checked)}} checked={todo.done}/>
				<p className="todo_content">{todo.content}</p>
                <Button size="small" type="danger" onClick={() => handleDelete(todo.id)}>Delete</Button>
			</div>
		)
	}
}




