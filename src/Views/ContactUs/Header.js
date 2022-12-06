import styled from "styled-components";
import { StyledRequestButton } from "./style";
import GetInTouchForm from "./GetInTouchForm";
import React from "react";

const StyledHeader = styled.div`
  display: flex;
  height: 500px;
  padding: 20px 20%;
  justify-content: space-between;
  align-items: center;
  background-color: #070723;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 20px;
  color: #fff;
  max-width: 250px;
`;

const StyledTitle = styled.div`
  font-size: 65px;
  letter-spacing: 3px;
`;
const StyledDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

const StyledToast = styled.div`
  text-align: center;
  height: 20px;
  width: 100px;
  border-radius: 16px;
  padding: 10px 30px;
  position: absolute;
  background-color: white;
  top: 10px;
  color: green;
  font-weight: bold;
  left: 50%;
  transform: translateX(-50%);
`;

const Header = () => {
  const [showToast, setShowToast] = React.useState(false);

  const handleFormSubmit = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <StyledHeader>
      <StyledInfo>
        <StyledTitle>Contact Us</StyledTitle>
        <StyledDescription>
          Please complete the request form and we will contact you shortly.
        </StyledDescription>
        <StyledRequestButton>Request 1:1 Demo</StyledRequestButton>
      </StyledInfo>
      {showToast && <StyledToast>Success</StyledToast>}
      <GetInTouchForm onFormSubmit={handleFormSubmit} />
    </StyledHeader>
  );
};

export default Header;
