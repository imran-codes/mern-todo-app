import React from "react";
import { AuthorContainer } from "./styles";

function Author() {
  return (
    <AuthorContainer>
      Created by{" "}
      <a href="http://imrancodes.com" target="_blank" rel="noopener noreferrer">
        Imran Codes
      </a>
    </AuthorContainer>
  );
}

export default Author;
