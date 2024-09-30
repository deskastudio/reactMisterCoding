import React, { FC, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Task } from "../../model/task";
import { useCreateTaskMutation, useUpdateTaskMutation } from "../../store/api/taskApi";

// Props interface
interface Props {
  onSuccess: () => void;
  task?: Task;
  formType?: string;
}

const FormTasks: FC<Props> = ({ onSuccess, task, formType }) => {
  // Schema validasi dengan yup
  const schema = yup.object().shape({
    task_name: yup.string().required("Task name is required"),
    task_description: yup
      .string()
      .required("Task description is required"),
  });

  // Default values untuk form
  const defaultValues: Task = {
    task_name: "",
    task_description: "",
  };

  // Menggunakan useForm dengan yupResolver
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // RTK Query mutation hook
  const [createTask, { isLoading }] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  useEffect(()=>{
    if(task){
      setValue("task_name",task.task_name);
      setValue("task_description",task.task_description);
    }
  },[setValue, task])

  // Fungsi untuk submit form
  const submithandler = (v: Task) => {
    if (formType === "update") {
      if (task) {
        updateTask({ id: task.id, data: v }).then(()=>{
          onSuccess();
        })
      }
    } else {
      createTask(v).then(() => {
        onSuccess();
      });
    }
  };

  return (
    <Card>
      <CardBody>
        <form onSubmit={handleSubmit(submithandler)}>
          <FormControl isInvalid={!!errors.task_name}>
            <FormLabel>Task Name</FormLabel>
            <Input
              placeholder="Task name"
              {...register("task_name")}
            />
            {/* Menampilkan pesan error jika ada */}
            {errors.task_name && <p>{errors.task_name.message}</p>}
          </FormControl>

          <FormControl mt={4} isInvalid={!!errors.task_description}>
            <FormLabel>Task Description</FormLabel>
            <Textarea
              placeholder="Task description"
              rows={3}
              {...register("task_description")}
            />
            {/* Menampilkan pesan error jika ada */}
            {errors.task_description && (
              <p>{errors.task_description.message}</p>
            )}
          </FormControl>

          <Button mt={4} type="submit" isLoading={isSubmitting || isLoading}>
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default FormTasks;
