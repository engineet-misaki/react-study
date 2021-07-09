
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Input, InputGroup, InputGroupAddon, Button, Table } from 'reactstrap'
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    console.log(todos)
  }

  const addTodo = text => {
    const newTodos = [...todos, {text: text, complete: false}]
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo List</h1>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input type="text"
              value={value}
              onChange={e => setValue(e.target.value)} />
              <InputGroupAddon addonType="append">
                <Button type="submit" color="primary">追加</Button>
              </InputGroupAddon>
          </InputGroup>
        </Form>
      </Container>
      <Container>
        <Table>
          <tbody>
            {todos && todos.map( (todo, index) => {
              return (<tr key={index}>
                <th className="text-start" style={{ textDecoration: todo.complete ? "line-through" : ""}}>
                  {todo.text}
                </th>
                <td className="text-end">
                  <Button color={todo.complete ? "secondary" : "success"} className="me-2" onClick={ ()=> completeTodo(index)}>
                    {todo.complete ? "完了" : "未完了"}
                    </Button>
                  <Button color="danger" onClick={ () => removeTodo(index)}>削除</Button>
                </td>
              </tr>)
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default App;