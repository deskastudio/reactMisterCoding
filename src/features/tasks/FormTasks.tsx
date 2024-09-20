import {
    Button,
    Card,
    CardBody,
    FormControl,
    FormLabel,
    Input,
    Textarea,
  } from "@chakra-ui/react";
  
  const FormTasks = () => {
    return (
      <>
        <Card>
          <CardBody>
            <FormControl>
              <FormLabel>Task Name</FormLabel>
              <Input placeholder="Task name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Task Name</FormLabel>
              <Textarea placeholder="Task description" rows={3} />
            </FormControl>
            <Button mt={4}>Submit</Button>
          </CardBody>
        </Card>
      </>
    );
  };
  
  export default FormTasks;