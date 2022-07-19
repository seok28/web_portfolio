import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import mainImg from 'assets/contact_3.png';
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
  const bgRef3 = useRef();
  const descRef = useRef();
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(bgRef.current, 0.3, { scaleX: 1 })
      .to(bgRef2.current, 0.3, { scaleX: 1 })
      .to(bgRef3.current, 0.3, { scaleX: 1 })
      .to(textRef.current, 0.2, { opacity: 1 }, '-=0.1')
      .to(textRef2.current, 0.2, { opacity: 1 }, '-=0.1')
      .to(bgRef.current, 0.3, { scaleX: 0 })
      .to(bgRef2.current, 0.3, { scaleX: 0 })
      .to(bgRef3.current, 0.3, { scaleX: 0 })
      .to(descRef.current, 0.5, { opacity: 1 }, '+=0.2')
      .to(nameRef.current, 0.3, { opacity: 1 }, '-=0.9');
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
        <img src={''} alt="" />
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
        <div>
          <span ref={nameRef}>Junsu Seok | 석준수</span>
          <span ref={bgRef3}></span>
          <span ref={descRef}> 아래로 스크롤</span>
        </div>
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
  color: #f8df8b;
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
      background-color: #50bcdf;
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
      background-color: black;
    }
  }
  & > div:nth-child(3) {
    & > span:first-child {
      margin-top: 4rem;
      font-size: 3rem;
      opacity: 0;
      text-align: right;
    }
    & > span:nth-child(2) {
      width: 75%;
      height: 20%;
      position: absolute;
      right: 6rem;
      top: 20rem;
      z-index: 100;
      transform-origin: left;
      transform: scaleX(0);
      background-color: white;
    }
    & > span:last-child {
      position: absolute;
      margin-top: 4rem;
      font-size: 3rem;
      display: block;
      opacity: 0;
      right: 3rem;
      bottom: -20rem;
    }
  }
  // arrowdown
  & > svg {
    @keyframes ball {
      0% {
        top: 40rem;
      }
      95% {
        opacity: 0.7;
        width: 90px;
      }
      to {
        top: 30rem;
        width: 115px;
        height: 90px;
      }
    }
    fill: #f8df8b;
    opacity: 0;
    position: relative;
    left: 100px;
    top: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    animation: ball 1s ease-in Infinite Alternate;
    animation-delay: 2s;
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
  width: 50%;
  height: 100%;
  background-color: #5f9ea0;
  overflow: hidden;

  & > img {
    position: absolute;
    top: 10rem;
    left: -30rem;
    width: 150%;
    height: 100%;
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
