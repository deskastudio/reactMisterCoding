import { useRecoilState } from "recoil";
import { todoState } from "../../state/todoState";
import { Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";

const ListTodoList = () => {
  const [todoLists, setTodoList] = useRecoilState(todoState);

  const handleDelete = (index: number) => {
    const lists = [...todoLists];
    lists.splice(index, 1);
    setTodoList(lists);
  };
  return (
    <>
      {todoLists.map((todo, index) => (
        <Card key={index} my={3}>
          <CardBody>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{todo.title}</Text>
              <Button
                bg={"red.400"}
                color={"white"}
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </Button>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default ListTodoList;