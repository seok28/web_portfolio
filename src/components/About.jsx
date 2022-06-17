import styled from 'styled-components';
import bearImg from 'assets/bear.png';
import Fade from 'react-reveal/Fade';
import { ReactComponent as ReactLogo } from 'assets/react.svg';
import { ReactComponent as HtmlLogo } from 'assets/html.svg';
import { ReactComponent as CssLogo } from 'assets/css.svg';
import { ReactComponent as GitLogo } from 'assets/git.svg';
import { ReactComponent as JSLogo } from 'assets/js.svg';
import { ReactComponent as JavaLogo } from 'assets/java.svg';
import Progress from './Progress';
import { useRef } from 'react';

const MainBody = () => {
  const aboutRef = useRef();

  return (
    <StyledWrapper ref={aboutRef}>
      <Fade left>
        <StyledLeft>
          <div>
            <ReactLogo />
            <Progress percent="70" />
          </div>
          <div>
            <HtmlLogo />
            <Progress percent="80" />
          </div>
          <div>
            <CssLogo />
            <Progress percent="80" />
          </div>
          <div>
            <JSLogo />
            <Progress percent="80" />
          </div>
          <div>
            <GitLogo />
            <Progress percent="60" />
          </div>
          <div>
            <JavaLogo />
            <Progress percent="60" />
          </div>
        </StyledLeft>
      </Fade>

      <StyledRight>
        <StyledContent>
          <Fade bottom>
            <img src={bearImg} alt="" />
            <h3>About Me </h3>
            <h2>석 준 수 | Junsu Seok</h2>
            {/* <h3>
              SOPT 29th YB <span>Web</span> Part
            </h3> */}
            <br />
            <div>
              <p>
                반갑습니다! 저는 웹 프론트엔드 개발자를 꿈꾸고 있는 , 석준수입니다.
                <br />
                <br />
                웹잼에 참여하기 위해 SOPT에 들어왔고, 만나는 다른 파트원들 모두에게 웹을 영업할 정도로{' '}
                <em>웹에 진심</em>인 프론트엔드 개발자입니다. 아직 배울 것이 많은 개발자이지만, 주어지는 과제, 프로젝트
                하나 하나 모두 성장을 위한 기회로 삼고 항상 <em>최선을 다해 노력하고 몰입하는 개발자</em>입니다.
                <br />
                <br />
                주로 <em>React</em>를 사용하여 개발합니다. <em>HTML</em>, <em>CSS</em>와 <em>JS</em> 또한 다양한 사이드
                프로젝트 경험이 있어 능숙하게 사용할 수 있습니다. SOPT 애니메이션 스터디에 참여하여, 다양한 애니메이션을
                구현하고, 적절한 라이브러리를 사용하여 원하는 <em>애니메이션</em>을 적용할 수 있습니다. 합동 세미나,
                솝커톤 등에 참여하며 개발자 간 협업 뿐 아니라, 다른 파트 분들과도 협업을 경험해보며,{' '}
                <em>원활한 협업</em>을 할 준비도 되어있습니다.
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
