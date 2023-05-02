import React from "react";
import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;



const LeftGrid = styled.div`
background: ${(props) => props.theme.thirdBg};
height: 100%;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${(props) => props.theme.text};
overflow: hidden;
`;

const Image = styled.img`
  width: 60%; 
  object-fit: cover; 
  border-radius: 50%;
  height: 70%;
  display: block;
  object-position: center center;
  background-repeat: no-repeat;
  `;
//   border-radius: 240px 240px 0 0;
const RightGrid = styled.div`
background: ${(props) => props.theme.body};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.thirdBg};
`;

const Box = styled.div`
width: 60%;
text-align: center;
`

const Brand = styled.h1`
  font-size: 3rem;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 600;
`;

const Vision = styled.p`
font-size: 1.5em;
margin: 40px 0;
font-weight: 100;
line-height: 1.2em;
`
const Button =styled.button`
padding: 20px;
font-size: 1em;
background: ${(props) => props.theme.secondBg};
color: ${(props) => props.theme.text};
border: 1px solid ${(props) => props.theme.text};
cursor: pointer;
transition: background-color 1s ease, color 1s ease;
background-color: transparent;

&:hover{
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.secondBg};
}
`


const Home3rdPage = () => {
  return (
    <Container>

        <LeftGrid>
        <Image src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg" alt="" />
        </LeftGrid>
        <RightGrid>
            <Box>
            <Brand>RENTALITY</Brand>
            <Vision>
            At Rentality, our vision is to revolutionize the property management 
            landscape by empowering landlords and fostering transparent relationships 
            with their tenants. 
            </Vision>
            <Vision>

            We strive to create a seamless and intuitive platform 
            that simplifies property management, enhances communication, 
            and optimizes tenant experiences, fostering trust and satisfaction 
            for all parties involved.
            </Vision>
            <Button>THE VISION</Button>
            </Box>
        </RightGrid>
    </Container>
  );
};

export default Home3rdPage;

// Rentality revolutionizes the landlord-tenant experience, 
// fostering a harmonious relationship that elevates the rental journey.

// Experience Rentality's efficient property management solution, covering tenant onboarding, communication, rent collection, and maintenance requests.

// join satisfied landlords, optimize your rental properties, and build a thriving community with trust, transparency, and convenience, as Rentality guides you to a successful property management future.