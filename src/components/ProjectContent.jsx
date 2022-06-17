import styled from 'styled-components';
import final from 'assets/final.gif';
import { BsDot, BsLink } from 'react-icons/bs';

const ProjectContent = () => {
  return (
    <StyledContentWrapper>
      <StyledDesc>
        <h2>
          C<em>O</em>EAT : 모두가 행복한, 메뉴 취합 서비스
        </h2>
        <ul>
          <li>
            <span>
              오늘 뭐 먹을래? 아무거나는 이제 그만! 팀원들의 선택을 바탕으로 오늘 코잇할 메뉴가 정해지면 못 먹는 메뉴는
              제외하고, 함께 먹고 싶은 메뉴를 최종 결정해주는 서비스
            </span>
          </li>
          <li>
            <h2>2021년 11월</h2>
          </li>
          <li>
            <p>
              <BsDot />
              솝커톤 COEAT 팀 프론트엔드 개발자로 참여 및 Refactoring 진행중
            </p>
          </li>
          <li>
            <h2>개발 담당 View</h2>
          </li>
          <li>
            <h3>
              <BsDot />
              Landing Page
            </h3>
            <p>
              반응형 화면 구현을 고려한 화면 설계를 하였으며, <em>컴포넌트 및 스타일 재사용성</em> 을 높이기 위한 방법을
              고려하여 화면을 구현하였습니다.
            </p>
          </li>
          <li>
            <h3>
              {' '}
              <BsDot />
              Host Page
            </h3>
            <p>
              Host가 다른 사용자들에게 링크 공유를 하는 페이지로, 링크 복사 및 복사 버튼 클릭 시 모달 창 표시,{' '}
              <em>종이 가루가 흩날리는 듯한 애니메이션</em>을 구헌하였습니다.
            </p>
          </li>
          <li>
            <h3>
              {' '}
              <BsDot />
              Setting Page
            </h3>
            <p>
              사용자의 닉네임을 입력하는 페이지입니다. 애니메이션 라이브러리를 사용하여 자연스러운{' '}
              <em>Fade In 애니메이션</em>을 추가하였습니다.
            </p>
          </li>
        </ul>
        <StyledLink>
          <a href="https://github.com/CO-EAT/CO-EAT-CLIENT" target="_blank" rel="noopener noreferrer">
            <BsLink /> <span>Github Repository</span>
          </a>
          <a
            href="https://time-knee-9fd.notion.site/COEAT-44d4a363242c4742809743dc03f17f91"
            target="_blank"
            rel="noopener noreferrer">
            <BsLink /> <span>솝커톤 회고 기록</span>
          </a>
        </StyledLink>
      </StyledDesc>
      <StyledImgWrapper>
        <img src={final} alt="" />
        <StyledTags>
          <ul>
            <li>SOPT</li>
            <li>솝커톤</li>
            <li>React</li>
            <li>Styled-component</li>
            <li>Animation</li>
          </ul>
        </StyledTags>
      </StyledImgWrapper>
    </StyledContentWrapper>
  );
};

export default ProjectContent;

export const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: calc(100% - 29rem);
  height: 100%;
  color: white;
  position: relative;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    width: calc(100% - 4rem);
  }
`;

export const StyledDesc = styled.div`
  width: 100%;
  margin-right: 2.3rem;
  font-size: 1.7rem;

  & > h2 {
    font-family: 'TmonMonsori';
    font-size: 3.1rem;
    margin-bottom: 2rem;

    & > em {
      color: orange;
    }
  }

  & > ul {
    font-weight: bolder;

    & > li:first-child {
      font-weight: lighter;
    }
    & > li + li {
      margin-top: 2rem;
    }

    & > li {
      & > svg {
        fill: orange;
        margin-left: 1rem;
        font-size: 2rem;
      }
      & > span {
        font-size: 1.4rem;
        font-style: italic;
      }

      & > h2 {
        font-size: 1.8rem;
        color: orange;
      }

      & > h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      & > p {
        line-height: 1.8;
        font-weight: normal;

        & > em {
          background-color: #ffa60065;
          padding: 0.5rem 0.8rem;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    position: absolute;
    top: 24rem;
    left: 0;
    font-size: 1.4rem;

    & > h2 {
      font-size: 2.2rem;
    }

    & > ul {
      & > li {
        & > svg {
          margin-left: 0;
          font-size: 1.4rem;
        }
        & > span {
          font-size: 1.2rem;
        }

        & > h2 {
          font-size: 1.5rem;
        }

        & > h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        & > p {
          line-height: 1.3;

          & > em {
            padding: 0.2rem 0.5rem;
          }
        }
      }
    }
  }
`;

export const StyledImgWrapper = styled.div`
  margin-right: 2rem;
  width: 100%;

  & > img {
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    position: absolute;
    top: 4rem;
    left: 0;
  }
`;

export const StyledTags = styled.div`
  margin-top: 4rem;

  & > ul {
    display: flex;
    flex-wrap: wrap;

    & > li {
      color: white;
      font-size: 1.5rem;
      background-color: orange;
      padding: 0.3rem 1rem;
      border-radius: 0.5rem;
      text-align: center;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    & > li + li {
      margin-left: 1rem;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 0;
    & > ul {
      display: none;
    }
  }
`;

export const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  & > a {
    background-color: orange;
    padding: 0.6rem 1rem;
    width: 100%;
    margin-right: 1rem;
    text-decoration: none;
    text-align: center;
    color: white;
    font-weight: bolder;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
