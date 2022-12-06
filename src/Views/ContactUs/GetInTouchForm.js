import styled from "styled-components";
import { StyledRequestButton } from "./style";
import React from "react";

const StyledForm = styled.form`
  height: calc(100% - 120px);
  min-width: 450px;
  padding: 45px  45px 20px;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

const StyledInput = styled.input`
  padding: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  width: calc(100% - 16px);
  gap: 16px;
`;

const StyledButton = styled(StyledRequestButton)`
  background-color: #0e54c4;
  border-color: transparent;
  padding: 12px;
  font-size: 14px;
  color: #fff;
  &:hover {
    border-color: black;
    color: #0e54c4;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  max-height: 150px;
  overflow: auto;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  padding: 8px;
  margin-bottom: 32px;
`;

const GetInTouchForm = ({ onFormSubmit }) => {
  return (
    <StyledForm>
      <StyledInputGroup>
        <StyledInput placeholder="First Name*" />
        <StyledInput placeholder="Last Name*" />
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledInput placeholder="Job title*" />
        <StyledInput placeholder="Company name*" />
      </StyledInputGroup>
      <StyledInput placeholder="Business email" />
      <StyledInput placeholder="Please select Country" />
      <StyledTextArea placeholder="Leave us a message" />
      <StyledButton onClick={onFormSubmit}>GET IN TOUCH</StyledButton>
    </StyledForm>
  );
};

export default GetInTouchForm;
