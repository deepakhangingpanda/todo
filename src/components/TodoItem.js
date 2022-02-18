import React from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { toggleComplete, editTodo, deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(
			toggleComplete({ id: id, completed: !completed })
		);
	};

	const handleEditClick = () => {
		dispatch(editTodo({ id: id }));
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id: id }));
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

				<div className='todo-btn'>
					<IconButton title="Edit" onClick={handleEditClick}
					className="btn btn-danger"><EditIcon /></IconButton>

					<IconButton title="Delete" onClick={handleDeleteClick}
					className="btn btn-danger"><DeleteIcon /></IconButton>
				</div>
			</div>
		</li>

	);
};

export default TodoItem;
