import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState, todoListState } from "./TodoStore";
import TodoItem from "./TodoItem";
import TodoListCreator from "./TodoListCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  // useEffect(() => {
  //   console.log(`todoList : ${JSON.stringify(todoList)}`);
  // }, [todoList]);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoListCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
