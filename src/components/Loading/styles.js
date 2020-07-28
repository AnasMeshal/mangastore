import styled from "styled-components";

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  flex-wrap: wrap;

  h1 {
    color: ${({ theme }) => theme.textColor};
    font-size: 4em;
    margin-top: 5vh;
  }

  .spinner {
    position: relative;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    width: 100px;
    height: 100px;
  }
`;
