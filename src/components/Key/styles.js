import styled from "styled-components";

export const KeyContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.8rem;
  list-style-type: square;
  border: 1px solid #ef7360;
  padding: 5px;
  border-radius: 8px;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const BulletPoint = styled.li`
  :last-child {
    color: red;
  }
  @media (max-width: 420px) {
    padding: 5px 0;
  }
`;
