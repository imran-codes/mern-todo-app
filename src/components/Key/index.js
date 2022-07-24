import React from "react";
import { KeyContainer, BulletPoint } from "./styles";

function Key() {
  return (
    <KeyContainer role="list">
      <BulletPoint role="listitem">Not Completed</BulletPoint>
      <BulletPoint role="listitem">Completed</BulletPoint>
    </KeyContainer>
  );
}

export default Key;
