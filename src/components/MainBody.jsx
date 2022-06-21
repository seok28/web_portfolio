import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import mainImg from 'assets/seokjoon.png';
import { VscGithubAlt } from 'react-icons/vsc';
import { GoMail } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { FaVimeoSquare } from 'react-icons/fa';
import Nav from './Nav';

const MainBody = () => {
  const mainRef = useRef();
  const textRef = useRef();
  const bgRef = useRef();
  const textRef2 = useRef();
  const bgRef2 = useRef();
  const nameRef = useRef();

  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(bgRef.current, 0.3, { scaleX: 1 })
      .to(bgRef2.current, 0.3, { scaleX: 1 })
      .to(textRef.current, 0.2, { opacity: 1 }, '-=0.1')
      .to(textRef2.current, 0.2, { opacity: 1 }, '-=0.1')
      .to(bgRef.current, 0.3, { scaleX: 0 })
      .to(bgRef2.current, 0.3, { scaleX: 0 })
      .to(nameRef.current, 0.5, { opacity: 1 }, '-=0.1');
  }, []);

  return (
    <StyledWrapper ref={mainRef}>
      <StyledRightNav>
        <a href="https://github.com/seok28" target="_blank" rel="noopener noreferrer">
          <VscGithubAlt size="24" />
        </a>
        <a href="https://velog.io/@seok28" target="_blank" rel="noopener noreferrer">
          <FaVimeoSquare size="24" />
        </a>
        <a href="seokjoonsoo1@gmail.com" target="_blank" rel="noopener noreferrer">
          <GoMail size="24" />
        </a>
      </StyledRightNav>
      <StyledImgContainer>
        <img src={mainImg} alt="" />
      </StyledImgContainer>
      <StyledDesc>
        <div>
          <span ref={textRef}>Front-end</span>
          <span ref={bgRef}></span>
        </div>
        <div>
          <span ref={textRef2}>Developer</span>
          <span ref={bgRef2}></span>
        </div>
        <span ref={nameRef}>Junsu Seok | 석준수</span>
        <IoIosArrowDown></IoIosArrowDown>
      </StyledDesc>
      <Nav location={mainRef.current} />
    </StyledWrapper>
  );
};

export default MainBody;

const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  & > svg {
    color: white;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    overflow-y: hidden;
  }
  & > IoIosArrowDown {
    color: white;
    top: 20;
  }
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -11rem;
  left: -15rem;
  font-family: 'TmonMonsori';
  font-size: 8rem;
  z-index: 10;
  color: blue;
  line-height: 1.205;

  & > div:first-child {
    position: relative;

    & > span:first-child {
      opacity: 0;
    }

    & > span:last-child {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 100;
      transform-origin: left;
      transform: scaleX(0);
      background-color: #f8df8b;
    }
  }

  & > div:nth-child(2) {
    position: relative;

    & > span:first-child {
      opacity: 0;
    }

    & > span:last-child {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 100;
      transform-origin: left;
      transform: scaleX(0);
      background-color: #090910;
    }
  }

  & > span {
    margin-top: 4rem;
    font-size: 2.8rem;
    opacity: 0;
    text-align: right;
  }

  & > svg {
    fill: #f8df8b;
    opacity: 0.5;
  }

  @media (min-width: 320px) and (max-width: 370px) {
    top: -25rem;
    left: 0.3rem;
    font-size: 3.8rem;

    & > span {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 370px) and (max-width: 480px) {
    top: -31.5rem;
    left: 0.3rem;
    font-size: 5rem;

    & > span {
      font-size: 2rem;
    }
  }
`;

const StyledImgContainer = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  background-color: #f8df8b;
  overflow: hidden;

  & > img {
    position: absolute;
    top: 0;
    left: -0.1rem;
    width: 100%;
    z-index: 2;
  }

  @media (min-width: 320px) and (max-width: 370px) {
    top: 27rem;
    width: 100%;
    height: 50%;

    & > img {
      position: absolute;
      top: -12rem;
      left: -1rem;
      width: 100%;
      overflow-y: hidden;
    }
  }

  @media (min-width: 370px) and (max-width: 480px) {
    top: 28rem;
    width: 100%;
    height: 50%;

    & > img {
      position: absolute;
      top: -9rem;
      left: -1rem;
      width: 100%;
      overflow-y: hidden;
    }
  }
`;

const StyledRightNav = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 5rem;

  & > a {
    text-decoration: none;
    margin-bottom: 1rem;
    color: white;

    & > svg {
      margin-top: 2rem;
    }

    & > svg:hover {
      fill: #f8df8b;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
