import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import FormTodoList from "./FormTodoList";

const AddTodoList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Todo List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormTodoList onSuccess={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Button onClick={onOpen}>Add Toto List</Button>
    </>
  );
};

export default AddTodoList;