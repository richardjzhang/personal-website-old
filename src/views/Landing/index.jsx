// @flow
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Journey from './Journey';
import SideMenu from './SideMenu';
import Panel from '../../components/Panel';
import {
  BASE_UNIT,
  borderRadius,
  breakPoints,
  colors,
  fontSize,
  fontWeight
} from '../../utils/themes.jsx';
import logo from '../../static/personal_logo.png';
import { urls } from '../../utils/urls.jsx';

export const PANEL_MIN_HEIGHT = '100vh';
const BUTTON_POSITION = 60;

const Container = styled.div`
  background-color: ${colors.ebony};
`;

const Button = styled.div`
  position: fixed;
  top: ${BUTTON_POSITION}px;
  right: ${BUTTON_POSITION}px;
  height: 40px;
  width: 150px;
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.light};
  border: ${BASE_UNIT / 2}px solid ${colors.dodgerBlue};
  border-radius: ${borderRadius.circle}px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${colors.dodgerBlue};
    transition: background-color 0.5s ease;
  }

  @media (max-width: ${breakPoints.large}px) {
    position: absolute;
    top: ${BUTTON_POSITION / 2}px;
    right: ${BUTTON_POSITION / 2}px;
    height: 35px;
    width: 100px;
    font-size: ${fontSize.normal}px;
  }
`;

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: ${colors.dodgerBlue};

  &:hover {
    color: ${colors.white};
    transition: background-color 0.5s ease;
  }
`;

const Content = styled.div`
  background-color: ${colors.athensGrey};
`;

const Image = styled.img`
  margin-bottom: ${12 * BASE_UNIT}px;
  width: 30%;
  max-width: 200px;
  max-height: 200px;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 20%;
  text-align: center;
  max-width: 85%;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: ${fontSize.xxxxlarge}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.white};

  @media (max-width: ${breakPoints.large}px) {
    font-size: ${fontSize.xlarge}px;
  }
`;

const Description = styled.div`
  margin-top: ${6 * BASE_UNIT}px;
  max-width: 750px;
  font-size: ${fontSize.large}px;
  font-weight: ${fontWeight.light};
  color: ${colors.white};

  @media (max-width: ${breakPoints.large}px) {
    font-size: ${fontSize.medium}px;
  }
`;

const PanelWrapper = styled.div`
  color: ${colors.outerSpace};
`;

const handleTransition = (ref: any) => {
  return ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Landing = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const creationsRef = useRef(null);
  const thoughtsRef = useRef(null);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  });

  return (
    <Container>
      <SideMenu
        aboutRef={aboutRef}
        creationsRef={creationsRef}
        thoughtsRef={thoughtsRef}
        scroll={scroll}
        handleTransition={handleTransition}
      />
      <Button>
        <ButtonLink href={urls.mailTo}>Say Hello!</ButtonLink>
      </Button>
      <Content
        style={{
          backgroundColor:
            aboutRef.current != null && scroll >= aboutRef.current.offsetTop
              ? colors.porcelain
              : colors.ebony,
          transition: 'background-color 0.5s ease'
        }}
      >
        <div ref={homeRef} />
        <Panel minHeight={PANEL_MIN_HEIGHT} isCentered>
          <TitleWrapper>
            <Fade delay={300}>
              <Image src={logo} alt="" />
            </Fade>
            <Fade bottom delay={400}>
              <Title>Hey, I'm Richard</Title>
              <Description>
                I craft code that executes people's dream's into reality
              </Description>
            </Fade>
          </TitleWrapper>
        </Panel>
        <div id="aboutRef" ref={aboutRef} />
        <Journey
          setAboutRef={() =>
            aboutRef.current != null && handleTransition(aboutRef)
          }
        />
        <div ref={creationsRef} />
        <Panel minHeight={PANEL_MIN_HEIGHT} isCentered>
          <PanelWrapper>My creations coming soon...</PanelWrapper>
        </Panel>
        <div ref={thoughtsRef} />
        <Panel minHeight={PANEL_MIN_HEIGHT} isCentered>
          <PanelWrapper>My thoughts coming soon...</PanelWrapper>
        </Panel>
      </Content>
    </Container>
  );
};
export default Landing;
