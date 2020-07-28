//Styled components
import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border: ${({ theme }) => theme.borderColor} solid 3px;
  margin: 4px;
  border-radius: 10px;
  background: ${({ theme }) => theme.mainColor};

  p {
    color: ${({ theme }) => theme.textColor};
    margin-top: 1em;
    font-weight: Bolder;
    text-align: center;
    font-size: 1.5em;
    :hover {
      cursor: default;
    }
  }

  .item-price {
    color: #27ae60;
    font-weight: bold;
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 1.5vh;
    margin-top: 0vh;
  }
`;

export const ShopImage = styled.img`
  height: 200px;
  width: 200px;
  border-bottom: ${({ theme }) => theme.borderColor} solid 3px;
  border-radius: 1vw;
`;

export const ItemWrapperWrapper = styled.div`
  display: flex
  flex-direction: coulmn;
  justify-content: center;
`;
