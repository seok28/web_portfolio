import styled from 'styled-components';
import Profile from 'assets/contact_3.png';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaVimeoSquare } from 'react-icons/fa';
import { VscGithubAlt } from 'react-icons/vsc';

const Contact = () => {
  const paperArr = ['#63CEE5', '#799EFF', '#7CDDBA', '#9C5FFF', '#F36BFF', '#FF8484', '#FF9A84', '#FFAA5C', '#FFE486'];

  const flakeElArr = [];
  const randomPaperFlakes = () => {
    for (let i = 0; i < 20; i++) {
      const idx = Math.floor(Math.random() * 9);
      const imgSrc = paperArr[idx];
      flakeElArr.push(<Flake key={i} color={imgSrc} />);
    }

    return flakeElArr;
  };

  return (
    <StyledContactWrapper>
      <StyledDecoration>{randomPaperFlakes()}</StyledDecoration>
      <StyledLeft>
        <img src={Profile} alt="" />
      </StyledLeft>
      <StyledRight>
        <StyledContact>
          <h1>석 준 수</h1>
          <p>
            <em>구인 구직 중에 있습니다 </em>
            <br /> 궁금하신점이 있다면 밑의 연락처로 연락주세요!
          </p>
          <StyledContactInfo>
            <div>
              <BsPhone />
              <span>010-7527-0349</span>
            </div>
            <div>
              <AiOutlineMail />
              <span>seokjoonsoo@gmail.com</span>
            </div>
            <div>
              <a href="https://velog.io/@seok28" target="_blank" rel="noopener noreferrer">
                <FaVimeoSquare size="40" color="white" />
              </a>
              <span> &nbsp; seok28</span>
            </div>
            <div>
              <a href="https://github.com/seok28" target="_blank" rel="noopener noreferrer">
                <VscGithubAlt size="50" color="white" />
              </a>
              &nbsp; seok28
            </div>
          </StyledContactInfo>
        </StyledContact>
      </StyledRight>
    </StyledContactWrapper>
  );
};

export default Contact;

const StyledContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #f08080;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
  }
`;

const StyledLeft = styled.div`
  position: relative;
  top: 0rem;
  left: -39rem;
  width: 120%;
  height: 200%;
  border-radius: 50%;
  background-color: #5f9ea0;

  & > img {
    width: 130%;
    position: relative;
    bottom: -5rem;
    left: 3rem;
  }

  @media (min-width: 320px) and (max-width: 370px) {
    top: 50rem;
    left: 0;
    height: 100%;
    background-color: #f8df8b;

    & > img {
      width: 120%;
      bottom: 18rem;
      left: -13rem;
    }
  }

  @media (min-width: 370px) and (max-width: 480px) {
    top: 60rem;
    left: 0;
    height: 120%;
    background-color: #f8df8b;

    & > img {
      width: 150%;
      bottom: 18rem;
      left: -13rem;
    }
  }
`;

const StyledRight = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  line-height: 1.8;

  @media (min-width: 320px) and (max-width: 480px) {
    width: calc(100% - 5rem);
  }
`;

const StyledContact = styled.div`
  position: relative;
  top: 20rem;
  right: 10rem;
  color: white;
  height: 100%;

  & > h1 {
    font-family: 'TmonMonsori';
    font-size: 5rem;
  }

  & > p {
    font-size: 1.8rem;

    & > em {
      font-size: 2.3rem;
      font-weight: 800;
      color: #f8df8b;
    }
  }

  @media (min-width: 320px) and (max-width: 370px) {
    top: -27.5rem;
    right: 0;

    & > h1 {
      font-size: 3.5rem;
    }

    & > p {
      font-size: 1.4rem;

      & > em {
        font-size: 1.7rem;
      }
    }
  }
  @media (min-width: 370px) and (max-width: 480px) {
    top: -38rem;
    right: 0;

    & > h1 {
      font-size: 3.5rem;
    }

    & > p {
      font-size: 1.5rem;

      & > em {
        font-size: 2rem;
      }
    }
  }
`;

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.3rem;
  width: 50rem;

  & > div {
    display: flex;
    align-items: center;
    font-size: 2.5rem;

    & > svg {
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;
    }
  }

  & > div + div {
    margin-top: 1rem;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    & > div {
      & > svg {
        width: 2.5rem;
        height: 2.5rem;
      }

      & > span {
        font-size: 2rem;
      }
    }
  }
`;

const StyledDecoration = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  position: absolute;
  top: -6rem;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Flake = styled.div`
  background-color: ${(props) => props.color};

  width: 6rem;
  height: 6rem;
  display: inline-block;
  animation: paperflakes 2s linear;

  &:nth-child(3n) {
    animation-duration: 2s;
    animation-iteration-count: 30;
    transform-origin: right -45px;
  }

  &:nth-child(3n + 1) {
    animation-duration: 3s;
    animation-iteration-count: 45;
    transform-origin: right -30px;
  }

  &:nth-child(3n + 2) {
    animation-duration: 4s;
    animation-iteration-count: 60;
    transform-origin: right -15px;
  }

  /* 모두 같은 시간에 시작하지 않도록, 시간차이를 둔다. */
  &:nth-child(7n) {
    opacity: 0.3;
    animation-delay: 0s;
    animation-timing-function: ease-in;
  }
  &:nth-child(7n + 1) {
    opacity: 0.4;
    animation-delay: 0.1s;
    animation-timing-function: ease-out;
  }
  &:nth-child(7n + 2) {
    opacity: 0.5;
    animation-delay: 0.2s;
    animation-timing-function: linear;
  }
  &:nth-child(7n + 3) {
    opacity: 0.6;
    animation-delay: 0.3s;
    animation-timing-function: ease-in;
  }
  &:nth-child(7n + 4) {
    opacity: 0.7;
    animation-delay: 0.4s;
    animation-timing-function: linear;
  }
  &:nth-child(7n + 5) {
    opacity: 0.8;
    animation-delay: 0.5s;
    animation-timing-function: ease-out;
  }
  &:nth-child(7n + 6) {
    opacity: 0.9;
    animation-delay: 0.8s;
    animation-timing-function: ease-in;
  }

  @keyframes paperflakes {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg) scale(0.6);
    }
    100% {
      transform: translate3d(15px, 1200px, 0px) rotate(180deg) scale(0.6);
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
  }
`;
