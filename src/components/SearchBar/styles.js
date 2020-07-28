//Styled components
import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Search = styled.input`
  margin-top: 2em;
  margin-bottom: 2em;
  width: 400px;
  font-size: 18px;
  padding: 11px;
  border: ${({ theme }) => theme.borderColor} 3px solid;
  border-radius: 15px;
  outline: none;
`;
