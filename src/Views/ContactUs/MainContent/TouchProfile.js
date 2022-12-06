import styled from "styled-components";

const StyledTouchProfile = styled.div`
  position: relative;
  background: #fff;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  padding: 0 16px 30px;
  border-bottom: 14px solid #0e54c4;
  margin-bottom: 32px;
`;
const StyledJobTitle = styled.div`
  font-size: 18px;
  color: #070723;
`;

const StyledName = styled(StyledJobTitle)`
  font-size: 19px;
  font-weight: bolder;
  margin-bottom: 16px;
`;

const StyledProfileImage = styled.div`
  position: relative;
  background-color: #e7e9eb;
  top: -30px;
  height: 118px;
  width: 118px;
  margin: 0 auto;
  border-radius: 50%;
`;

const TouchProfile = ({ profile }) => {
  return (
    <StyledTouchProfile>
      <StyledProfileImage>
        <img src={profile.src} alt={profile.name} />
      </StyledProfileImage>
      <StyledName>{profile.name}</StyledName>
      <StyledJobTitle>{profile.jobTitle}</StyledJobTitle>
    </StyledTouchProfile>
  );
};
export default TouchProfile;
