import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, editTodo, deleteTodo  } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(
			toggleComplete({ id: id, completed: !completed})
			);
	};

	const handleEditClick = () => {
		 dispatch(editTodo({id : id}));
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodo({id: id}));
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input 
					type='checkbox' 
					className='mr-3' 
					checked={completed}
					onChange={handleCompleteClick}></input>
					{title}
				</span>
				<div class="widget-content-right">
				<div class="badge badge-success ml-1">Completed</div>
				</div>
				<div className='justify-content-right'>
				<button onClick={handleEditClick} className='btn btn-danger'>Edit</button>
				</div>
				<div className='justify-content-right'>
				<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
				</div>
				{/* <span style={completed ? completed : null}></span> */}
			</div>
		</li>
	);
};

export default TodoItem;
