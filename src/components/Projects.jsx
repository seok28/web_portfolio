import styled from 'styled-components';
import React from 'react';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import '../styles/slick-theme.css';
import '../styles/slick.css';
import ProjectContent from './ProjectContent';
import ProjectContent2 from './ProjectContnet2';
import ProjectContent3 from './ProjectContent3';
import bearImg from 'assets/bear.png';
import { useState } from 'react';
import { useEffect } from 'react';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 480) {
      console.log('mobile');
      setIsMobile(true);
    } else {
      console.log('not mobile');
      setIsMobile(false);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledProjectWrapper>
      {!isMobile && (
        <Fade bottom>
          <Slider {...settings}>
            <StyledContentFirst>
              <ProjectContent />
            </StyledContentFirst>
            <StyledContentSecond>
              <ProjectContent2 />
            </StyledContentSecond>
            <StyledContentLast>
              <ProjectContent3 />
            </StyledContentLast>
          </Slider>
        </Fade>
      )}
      {isMobile && (
        <StyledMobile>
          <img src={bearImg} alt="" />
          <p>앗, 화면이 너무 작아요!</p>
          <p>
            <em>프로젝트</em>에 대한 자세한 내용은
          </p>
          <p>컴퓨터에서 확인해주세요!</p>
          <p>감사합니다. </p>
        </StyledMobile>
      )}
    </StyledProjectWrapper>
  );
};

export default Projects;

const StyledProjectWrapper = styled.div`
  height: 100%;
  width: 100%;
  font-size: 3rem;
  position: relative;
  z-index: 2;
`;
const StyledContentFirst = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 3rem;
  background-color: black;
`;

const StyledContentSecond = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 3rem;
  background-color: #4a2c2c;
`;

const StyledContentLast = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 3rem;
  background-color: #a9333a;
`;

const StyledMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
  color: white;
  font-size: 1.7rem;
  line-height: 1.8;
  z-index: 2;
  background-color: black;

  & > p {
    & > em {
      color: #f8df8b;
    }
  }

  & > img {
    margin-bottom: 1rem;
    width: 6rem;
    height: 6rem;
  }
`;
