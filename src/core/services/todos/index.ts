import httpClient from "core/htttp-client";
import Todo from "core/types/todo";

const getAllTodos = async (filters?: Object): Promise<Todo[]> => {
  const todos = (await httpClient.get<Todo[]>('todos', {
    params: filters
  })).data;
  return todos;
}

const getTodo = async (todoId: number): Promise<Todo> => {
  const todo = (await httpClient.get<Todo>(`todos/${todoId}`)).data;
  return todo;
}

export {
  getAllTodos,
  getTodo
}