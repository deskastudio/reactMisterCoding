import { atom } from "recoil";
import { TodoList } from "../model/todoList";

const todoState = atom<TodoList[]>({
  key: "todoState",
  default: [],
});

export { todoState };