import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import { useState } from "react"
import styles from './index.module.css';

export const TodoList = () => {
 
  const [showUncompleted, setShowUncompleted] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

   const todos = useSelector(todosSelector);

  const uncompletedTodos = todos.filter((todo) => !todo.completed);
  const CompleteTodos = todos.filter((todo) => todo.completed );

  const todosToDisplay = showUncompleted ? uncompletedTodos : showCompleted ? CompleteTodos : todos;

  return (
    <>
        <ul className={styles.list}>
            {todosToDisplay.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
        <div className={styles.checkbox_wrapper}>
          <label >
            <input type="checkbox" checked={showUncompleted} onChange={() => setShowUncompleted(!showUncompleted)} />
            Active
          </label>
          <label >
            <input type="checkbox" checked={showCompleted} onChange={() => setShowCompleted(!showCompleted)} />
            Complete
          </label>
        </div>
       
        
    </>
)
}