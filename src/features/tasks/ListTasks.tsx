import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Flex,
    Icon,
    Text,
  } from "@chakra-ui/react";
  import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";
  
  const ListTasks = () => {
    return (
      <>
        <Box my={3}>
          {[1, 2, 3, 4].map((item, index) => (
            <Card key={index} my={4}>
              <CardBody>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Text>Task Name {item}</Text>
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
      </>
    );
  };
  
  export default ListTasks;