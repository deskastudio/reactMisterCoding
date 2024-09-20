import {
    Button,
    Card,
    CardBody,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
  } from "@chakra-ui/react";
  import { FormEvent, useState } from "react";
  
  interface User {
    name: string;
    email: string;
    password: string;
  }
  const ContohForm = () => {
    const defaultState: User = {
      name: "",
      email: "",
      password: "",
    };
  
    const [form, setForm] = useState<User>(defaultState);
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      console.log("form", form);
    };
    return (
      <>
        <Card w={"xl"}>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <FormControl mb={4}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm((f) => {
                      return {
                        ...f,
                        name: e.target.value,
                      };
                    });
                  }}
                />
                <FormHelperText>We'll never share your name.</FormHelperText>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => {
                    setForm((f) => {
                      return {
                        ...f,
                        email: e.target.value,
                      };
                    });
                  }}
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => {
                    setForm((f) => {
                      return {
                        ...f,
                        password: e.target.value,
                      };
                    });
                  }}
                />
                <FormHelperText>We'll never share your password.</FormHelperText>
              </FormControl>
              <Button type="submit">Submit Button</Button>
            </form>
          </CardBody>
        </Card>
      </>
    );
  };
  
  export default ContohForm;