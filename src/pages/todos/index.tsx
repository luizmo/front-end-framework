import React, { useEffect, useState } from 'react';
import Todo from 'core/types/todo';
import ToDoCard from 'components/todoCard';
import Loading from 'components/loading';
import { getAllTodos } from 'core/services/todos';
import { Container, Grid, Header, ListTitle, Select } from './styles';
import Breadcrumb from 'components/breadcrumb';
import { Link } from 'react-router-dom';
import { HOME } from 'core/routes/constants';

const ToDos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>();
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>();

  useEffect(() => {
    const fetchTodos = async () => {
      const remoteTodos = await getAllTodos();
      setTodos(remoteTodos);
    }
    fetchTodos();
  },[])

  const selectFilter = (e: any) => {
    const condition = e.target.value === 'true' ? true : false;
    const filtered = todos && todos?.filter( (todo: any) => todo?.completed === condition  );
    setFilteredTodos(filtered)
  }

  const todosToRender = filteredTodos ?  filteredTodos : todos ;

  if(!todosToRender){
    return <Loading/>
  }

  return(
    <Container>
      <Breadcrumb
        crumbs={[
          <Link to={`${HOME}`}>Home</Link>,
          <span>To Dos</span>
        ]}
      />
      <Header>
        <ListTitle>To Dos</ListTitle>
        <Select defaultValue={0} onChange={(e) => selectFilter(e)}>
          <option disabled value={0}>Selecione um filtro</option>
          <option value="true">Concluídos</option>
        <option value="false">Não concluídos</option>
        </Select>
      </Header>
      <Grid>
        {todosToRender?.map((todo:Todo, key: number) => (
          <ToDoCard todo={todo} key={`todo-${key}-${todo.id}`}/>
        ))}
      </Grid>
    </Container>
  );
}

export default ToDos;