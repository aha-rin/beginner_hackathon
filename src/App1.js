import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import {useState, useRef, useCallback} from "react";

const App = () => {

  const nextId = useRef(4);
  const [todos, setTodos] = useState([{
    id:1, todo_text:'react', checked:true
  }, {
    id:2, todo_text:'wedding', checked:true
  }, {
    id:3, todo_text:'total', checked:false
  }]);

  const onInsert = useCallback(
    todo_text => {
      const todo = {id: nextId.current, todo_text, checked:false};
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]
  )

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked}:todo)
      );
    }, [todos]
  );

  return <TodoTemplate>
    <TodoInsert onInsert={onInsert}/><TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>
};

export default App;

