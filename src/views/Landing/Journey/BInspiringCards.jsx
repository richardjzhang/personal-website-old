import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { FADE_DELAY } from '.';
import { MiniCard, Card } from '../../../components/Card';
import b_inspiring_logo from '../../../static/b_inspiring_logo.png';

const TITLE = 'B.Inspiring Inc.';
const ROLE = 'Conference Leader';
const LABEL = '2015 - 2016';
const Image = () => (
  <img
    src={b_inspiring_logo}
    alt=""
    width={45}
    height={45}
    style={{ borderRadius: '100px' }}
  />
);

type MiniCardProps = {|
  onClick: () => void
|};

export const BInspiringMiniCard = ({ onClick }: MiniCardProps) => (
  <Fade delay={FADE_DELAY}>
    <MiniCard title={TITLE} label={LABEL} onClick={onClick}>
      <Image />
    </MiniCard>
  </Fade>
);

type CardProps = {|
  direction: ?string
|};

export const BInspiringCard = ({ direction, show }: CardProps) => (
  <Slide
    right={direction === 'right'}
    left={direction === 'left'}
    top={direction === 'top'}
    duration={1500}
  >
    <Card title={ROLE} label={LABEL} image={<Image />}>
      <p>
        B.Inspiring Incorporated is a not for profit organisation that aims to
        Inspire young people with confidence to use their passions, skills and
        talents to make a positive impact in their communities.
      </p>
      <p>
        During my time here, I was given the opportunity to develop and run what
        would eventually become the STEM and Leadership conference. Students who
        attend this conference are given the opportunity to interact with
        industry and academic professionals in the STEM field, and hone their
        leadership skills through workshops and pitching sessions.
      </p>
    </Card>
  </Slide>
);
