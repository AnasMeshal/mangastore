//Styled components
import styled from "styled-components";

export const DeleteButtonStyled = styled.h5`
  color: #e74c3c;
  font-size: 20px;
  text-align: center;
  margin-top: 0.5vh;
  margin-bottom: 5vh;
  :hover {
    cursor: pointer;
    color: #c0392b;
  }
`;

export const UpdateButtonStyled = styled.h5`
  color: #e74c3c;
  font-size: 20px;
  text-align: center;
  margin-top: 0.5vh;
  margin-bottom: 1vh;
  :hover {
    cursor: pointer;
    color: #c0392b;
  }
`;

export const SignupButtonStyled = styled.button`
  font-size: 20px;
  background: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.textColor};
  border: ${({ theme }) => theme.borderColor} solid;
  border-radius: 1vw;
  padding: 1vh 2vw;
  margin=right: 2vw;
  margin-left: 2vw;
  :hover {
    cursor: pointer;
    opacity: 0.4;
    transition: ease-out 300ms;
  }
`;

export const SigninButtonStyled = styled.button`
  font-size: 20px;
  background: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.textColor};
  border: ${({ theme }) => theme.borderColor} solid;
  border-radius: 1vw;
  padding: 1vh 2vw;
  margin=right: 2vw;
  margin-left: 2vw;
  :hover {
    cursor: pointer;
    opacity: 0.4;
    transition: ease-out 300ms;
  }
`;
