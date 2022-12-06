import styled from "styled-components";
import { mockData } from "./mock";
import TouchProfile from "./TouchProfile";
import {StyledRequestButton} from "../style";

const StyledMainContentContainer = styled.div`
  background: #f6f6f6;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const StyledHeadLine = styled.div`
  font-weight: 500;
  font-size: 45px;
  margin-bottom: 50px;
`;

const StyledTouchProfiles = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
`;

const StyledButton=styled(StyledRequestButton)`
  background-color: #0e54c4;
  border-color: transparent;
  padding: 12px 40px;
  font-size: 16px;
  color: #fff;
  font-weight: bolder;
  &:hover {
    border-color: black;
    color: #0e54c4;
  }
`

const MainContent = () => {
  return (
    <StyledMainContentContainer>
      <StyledHeadLine>Get in Touch With Us</StyledHeadLine>
      <StyledTouchProfiles>
        {mockData.length > 0 &&
          mockData.map((item) => <TouchProfile key={item.id} profile={item} />)}
      </StyledTouchProfiles>
        <StyledButton>Company Leadership Team</StyledButton>
    </StyledMainContentContainer>
  );
};
export default MainContent;
