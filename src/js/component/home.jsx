import React from "react";
import TodoList from './TodoList.jsx';
const Home = () => {
	return (
		<div className="AppWrapper container shadow">
        
		<div className='TodoApp'>
			<TodoList />
		</div>
        </div>
	);
};

export default Home;
