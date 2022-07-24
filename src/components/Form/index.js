import React from "react";
import { FormContainer, Input, Button } from "./styles";

function Form({ input, setInput, addTodo }) {
  return (
    <FormContainer>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        role="input"
      />
      <Button type="submit" onClick={(e) => addTodo(e)}>
        Add
      </Button>
    </FormContainer>
  );
}

export default Form;
