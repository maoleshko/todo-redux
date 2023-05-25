import './App.css';
import {TodoList } from './components/todo-list';
import { AddTodo } from "./components/add-todo";
// import {Filters} from "./components/filters"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <TodoList />
        {/* <Filters /> */}
      </header>
    </div>
  );
}

export default App;