import styled from "styled-components";

const SimpleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media screen and (max-width: 600px) {
    padding: 0 32px;
  }
`;

export default SimpleWrapper;
