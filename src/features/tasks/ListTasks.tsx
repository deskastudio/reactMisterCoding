import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Icon,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";
import { useLazyGetTaskQuery } from "../../store/api/taskApi"; // Changed to useLazyGetTasksQuery
import { useEffect } from "react";

const ListTasks = () => {
  const [getTasks, { data, isFetching, isLoading, isSuccess }] = useLazyGetTaskQuery();

  useEffect(() => {
    getTasks(); // Trigger API call when component mounts
  }, [getTasks]);

  if (isLoading || isFetching) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" /> {/* Loading spinner while fetching data */}
      </Flex>
    );
  }

  if (!isSuccess) {
    return <Text>Error fetching tasks</Text>; // Handle error state
  }

  return (
    <Box my={3}>
    {data?.map((item, index) => (
      <Card key={index} my={4}>
        <CardBody>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text>{item.task_name}</Text>
            <Text>{item.task_description}</Text>
            <ButtonGroup>
              <Button>
                <Icon as={BsPencilSquare} />
              </Button>
              <Button
                bg={"red.400"}
                color={"white"}
                _hover={{ bg: "red/300" }}
              >
                <Icon as={BsFillTrash3Fill} />
              </Button>
            </ButtonGroup>
          </Flex>
        </CardBody>
      </Card>
    ))}
  </Box>
  );
};

export default ListTasks;
