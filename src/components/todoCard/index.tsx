import React from 'react';
import Todo from 'core/types/todo';
import UserInfo from 'components/user';
import { Card, Status, Task } from './styles';

interface ITodo{
  todo: Todo
}
const ToDoCard: React.FC<ITodo> = ({todo}) => {
  return(
    <Card>
      <Status className={todo.completed ? 'completed' : 'not-completed'}>
        Status: {todo.completed ? 'Concluído' : 'Não concluído'}
      </Status>
      <Task>{todo?.title}</Task>
      <UserInfo userId={`${todo.userId}`}/>
    </Card>
  );
}

export default ToDoCard;