import styled from 'styled-components';
import bearImg from 'assets/bear.png';
import Fade from 'react-reveal/Fade';
import { ReactComponent as ReactLogo } from 'assets/react.svg';
import { ReactComponent as HtmlLogo } from 'assets/html.svg';
import { ReactComponent as CssLogo } from 'assets/css.svg';
import { ReactComponent as GithubLogo } from 'assets/github.svg';
import { ReactComponent as JSLogo } from 'assets/js.svg';

import Progress from './Progress';
import { useRef } from 'react';

const MainBody = () => {
  const aboutRef = useRef();

  return (
    <StyledWrapper ref={aboutRef}>
      <Fade left>
        <StyledLeft>
          <h1>Skills</h1>
          <div>
            <ReactLogo />
            <Progress percent="75" />
          </div>
          <div>
            <HtmlLogo />
            <Progress percent="80" />
          </div>
          <div>
            <CssLogo />
            <Progress percent="70" />
          </div>
          <div>
            <JSLogo />
            <Progress percent="80" />
          </div>
          <div>
            <GithubLogo />
            <Progress percent="60" />
          </div>
          {/* <div>
            <JavaLogo />
            <Progress percent="60" />
          </div> */}
        </StyledLeft>
      </Fade>

      <StyledRight>
        <StyledContent>
          <Fade bottom>
            <img src={bearImg} alt="" />
            <h3>About Me </h3>
            <h2>석 준 수 | Junsu Seok</h2>
            {}
            <br />
            <div>
              <p>
                반갑습니다! 저는 <em>웹 프론트엔드 개발자</em>를 꿈꾸고 있는 , 석준수입니다.
                <br />
                <br />
                저는 대학교에서 4년동안 배운 기술들을 바탕으로 좀 더 나은 웹 프론트엔드 개발자가 되기위해
                <div className=""></div> 열심히 배우고 노력하는 개발자고 되고 싶습니다.
                <br />
                <br />
                주로 <em>React</em>를 사용하여 개발합니다. <em>HTML</em>, <em>CSS</em>와 <em>JS</em> 또한 대학교에서
                많은 프로젝트 경험이 있어 기술을 다루는데 있어서 문제가 없습니다.
                <br />
              </p>
            </div>
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
  & > h1 {
    font-size: 3rem;
    font-weight: bolder;
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
  font-size: 2rem;
  color: white;
  line-height: 2;

  & > h2 {
    font-size: 3rem;
    font-weight: bolder;
  }

  & > h3 {
    font-size: 2.5rem;
    & > span {
      color: #f8df8b;
    }
  }

  & > img {
    width: 6rem;
    height: 6rem;
  }

  & > div {
    font-size: 1.5rem;
    width: 50rem;
    & > p {
      font-size: 2rem;
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
