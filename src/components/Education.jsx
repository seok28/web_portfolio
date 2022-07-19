import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { ReactComponent as Highschool } from 'assets/Dongdaebugo.svg';
import { ReactComponent as Middle } from 'assets/middle.svg';
import { ReactComponent as University } from 'assets/university.svg';
import Progress from './Progress';
import { useRef } from 'react';

const MainBody = () => {
  const aboutRef = useRef();

  return (
    <StyledWrapper ref={aboutRef}>
      <Fade left>
        <StyledLeft>
          <h1>Education (학교)</h1>
          <br />
          <div>
            <Middle />
            <Progress percent="100" />
          </div>
          <p> 대광중학교 (2011.03 ~ 2014.02) </p>
          <br /> <br /> <br /> <br />
          <div>
            <Highschool />
            <Progress percent="100" />
          </div>
          <p>동국대학교 사범대학 부속고등학교 (2014.03 ~ 2017.02) </p>
          <br /> <br /> <br /> <br />
          <div>
            <University />
            <Progress percent="87.5" />
          </div>
          <p> 한국성서대학교 (2017.03 ~ ing) </p>
        </StyledLeft>
      </Fade>

      <StyledRight>
        <StyledContent>
          <Fade bottom>
            <h2>License(자격증)</h2>
            <p> 현재까지 취득한 자격증 현황 </p>
            <br />
            <h2> 자동차 운전 면허증 | 서울특별시 경찰청 | 2021.08 </h2>
            <br />
            <h2> Linux Essentials | Linux Professional Institute | 2021.11 </h2>
            <br />
            <h2> GTQ (그래픽 기술 자격) | 한국생산성본부 | 2022.06 </h2>
            <br />
          </Fade>
        </StyledContent>
      </StyledRight>
    </StyledWrapper>
  );
};

export default MainBody;

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 320px) and (max-width: 370px) {
    flex-direction: column;
    height: 150%;
  }

  @media (min-width: 370px) and (max-width: 480px) {
    flex-direction: column;
  }
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 9rem;
  margin-left: 5rem;
  color: white;
  align-items: center;
  & > p {
    font-size: 1.5rem;
    font-weight: bolder;
    margin-left: 5rem;
  }
  & > h1 {
    font-size: 3rem;
    font-weight: bolder;
    margin-left: 3rem;
    text-align: center;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg {
      width: 9rem;
      height: 9rem;
      margin-right: 2rem;
    }
  }

  @media (min-width: 320px) and (max-width: 370px) {
    margin-top: 3.9rem;
    margin-left: 1rem;

    & > div {
      padding-bottom: 0.4rem;

      & > svg {
        width: 3rem;
        height: 3rem;
      }
    }
  }

  @media (min-width: 370px) and (max-width: 480px) {
    margin-top: 3.9rem;
    margin-left: 1rem;

    & > div {
      padding-bottom: 0.4rem;

      & > svg {
        width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  color: white;
  line-height: 2;

  & > h2 {
    font-size: 2.4rem;
    font-weight: bolder;
  }

  // & > h3 {
  //   font-size: 2.2rem;
  //   & > span {
  //     color: #f8df8b;
  //   }
  // }

  & > img {
    width: 6rem;
    height: 6rem;
  }

  & > div {
    font-size: 1.5rem;
    width: 35rem;

    & > p {
      & > em {
        color: #f8df8b;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 380px) {
    text-align: center;
    font-size: 1rem;
    line-height: 1.4;
    z-index: 3;

    & > h2 {
      font-size: 1.5rem;
    }

    & > h3 {
      font-size: 1.3rem;
    }

    & > img {
      width: 3rem;
      height: 3rem;
      margin-top: 3rem;
      margin-bottom: 1rem;
    }

    & > div {
      font-size: 1.4rem;
      width: calc(100% - 3rem);
    }
  }

  @media (min-width: 380px) and (max-width: 480px) {
    text-align: center;
    font-size: 1rem;
    line-height: 1.6;
    z-index: 3;

    & > h2 {
      font-size: 2rem;
    }

    & > h3 {
      font-size: 1.7rem;
    }

    & > img {
      width: 4rem;
      height: 4rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    & > div {
      font-size: 1.4rem;
      width: calc(100% - 4rem);
    }
  }
`;
