import { Box, Heading } from "@chakra-ui/react";
import AddTodoList from "./AddTodoList";
import ListTodoList from "./ListTodoList";

const TodoListApp = () => {
  return (
    <>
      <Box p={4}>
        <Heading>Todo List App</Heading>
        <Box my={3}>
          <AddTodoList />
        </Box>
        <Box my={3}>
          <ListTodoList />
        </Box>
      </Box>
    </>
  );
};

export default TodoListApp;