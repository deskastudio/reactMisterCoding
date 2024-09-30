import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useLazyGetTasksQuery } from "../../store/api/taskApi"; // Digunakan dengan benar
import { useEffect } from "react";
import EditTasks from "./EditTasks";
import DeleteTasks from "./DeleteTaska";

const ListTasks = () => {
  const [getTasks, { data, isFetching, isLoading, isError }] = useLazyGetTasksQuery();

  useEffect(() => {
    getTasks(); // Trigger API call when component mounts
  }, [getTasks]);

  // Render spinner jika data sedang dimuat
  if (isLoading || isFetching) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  // Render error message jika ada error
  if (isError) {
    return <Text>Error fetching tasks</Text>;
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
                  <EditTasks id={item.id} />
                  <DeleteTasks id={item.id} />
              </ButtonGroup>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
};

export default ListTasks;
