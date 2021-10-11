import styled from 'styled-components';

export const ProjectsCardsContainer = styled.section`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: space-evenly;
  margin-bottom: 10em;
  width: 80%;
`;

export const ProjectCard = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: space-evenly;
  margin-bottom: 3em;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProjectCardInfo = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  color: #FFFFFF;
  font-size: 26px;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Description = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 400;
  text-align: justify;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TagsContainer = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Tags = styled.li`
  font-size: 16px;
  line-height: 1.5em;
  margin-left: 2em;
  text-align: center;
  padding: 2px;
`;

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;

  @media only screen and (max-width: 768px) {
    margin-bottom: 1em;
  }
`;

export const ProjectLink = styled.a`
  align-items: center;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: 1px solid #000000;
  border-radius: .2rem;
  color: #FFFFFF;
  cursor:pointer;
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin: 0.2em;
  height: 1.2em;
  text-decoration: none;
  overflow: hidden;
  outline:none;
  padding: 0.5em;
  width: 8.5vw;

  &:hover {
    background-color: black;
    opacity: 0.8;
  }

  @media only screen and (max-width: 768px) {
    font-size: 10px;
    width: 15vw;
  }
`;

export const ButtonLogo = styled.img`
  margin-right: 0.4em;
  padding: 0.2em;
  width: 15px;
`;

export const ProjectImage = styled.img`
  border: 1px solid black;
  border-radius: 10px;
  height: 300px;
  margin-left: 3em;
  margin-top: 2em;
  width: 250px;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;
