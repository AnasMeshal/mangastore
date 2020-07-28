//Styled components
import styled from "styled-components";

export const ChangeViewButton = styled.h5`
  color: #2ecc72;
  font-size: 20px;
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  :hover {
    cursor: pointer;
    color: #26ae60;
  }
`;

export const VendorDetailWrapper = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.vendorBg};
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2em;
  border: ${({ theme }) => theme.borderColor} solid;
  width: 60%;
  border-radius: 15px;
  margin-bottom: 2em;

  h1 {
    font-size: 50px;
    font-weight: bold;
    margin-top: 0.2em;
    margin-bottom: 0.3em;
  }

  .VendorImage {
    border-radius: 10px;
    border-bottom: ${({ theme }) => theme.borderColor} solid;
    height: 190px;
    width: 190px;
  }
`;
