import styled from "styled-components";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const StyledContactUsContainer = styled.div`
    width: 100vw;
  font-family: 'Arial', sans-serif;
`

const ContactUs = () => {
    return (
        <StyledContactUsContainer>
            <Header/>
            <MainContent/>
            <Footer/>
        </StyledContactUsContainer>
    )
}

export default ContactUs;