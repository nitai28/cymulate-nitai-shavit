import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #202039;
  min-height: 800px;
`;

const StyledGlobalLocation = styled.div`
  padding: 80px 0;
  width: 100%;
  height: 500px;
  background-color: #070723;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 32px;
`;

const StyledTitle = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 45px;
`;

const StyledGlobalLocationImage = styled.div`
  background-image: url("https://cymulate.com/wp-content/uploads/2021/09/map.png");
  width: 60%;
  height: 80%;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledGlobalLocation>
        <StyledTitle>Global Location</StyledTitle>
        <StyledGlobalLocationImage />
      </StyledGlobalLocation>
    </StyledFooter>
  );
};

export default Footer;
