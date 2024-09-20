import { 
    Button, 
    Card, 
    CardBody, 
    FormControl, 
    FormLabel, 
    Input 
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { TodoList } from "../../model/todoList";
import { useSetRecoilState } from "recoil";
import { todoState } from "../../state/todoState";

interface Props {
    onSuccess: () => void;
}

const FormTodoList: FC<Props> = ({ onSuccess }) => {
    const setState = useSetRecoilState(todoState);
    const [form, setForm] = useState<TodoList>({ title: "" });

    const handleSubmit = () => {
        setState((s) => [...s, form]);
        setForm({ title: "" }); // Reset form setelah submit
        onSuccess(); // Panggil onSuccess untuk menutup modal
    };

    return (
      <Card>
        <CardBody>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Title Todo List"
              value={form.title}
              onChange={(e) => {
                setForm({ title: e.target.value });
              }}
            />
          </FormControl>
          <Button mt={4} onClick={handleSubmit}>Submit</Button>
        </CardBody>
      </Card>
    );
};

export default FormTodoList;
