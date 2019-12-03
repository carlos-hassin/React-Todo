import React from 'react';


class TodoForm extends React.Component {

    render(){
        return(
            <div>
                <input 
                type="text" 
                name="todo"
                />
                <button>Add Todo</button>
                <button>Clear completed</button>
            </div>
        )
    }
}

export default TodoForm;