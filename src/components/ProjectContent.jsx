import styled from 'styled-components';
import travel from 'assets/travel.gif';
import { BsDot, BsLink } from 'react-icons/bs';

const ProjectContent = () => {
  return (
    <StyledContentWrapper>
      <StyledDesc>
        <h2>대학교 4학년 졸업작품 여행 계획 앱(Flutter)</h2>
        <ul>
          <li>
            <span>
              코로나로 인해 힘들어 하던 시기 중 국내 여행에 대한 지표가 필요하였고, 많은 주변 사람들의 조사결과 대다수가
              여행을 가고 있어 이를 방지하고자 이 프로젝트에 대해 생각하였고 여행계획에 관련된 앱을 만들게 되었습니다.
            </span>
          </li>
          <li>
            <h2>2022년 3월~ ing</h2>
          </li>
          <li>
            <p>
              <BsDot />
              대학교 마지막 작품으로 진행된 졸업 프로젝트(진행중에 있음 )
            </p>
          </li>
          <li>
            <h2>개발 페이지(Travel,Favorite,Plan)</h2>
          </li>
          <li>
            <h3>
              <BsDot />
              Travel Page
            </h3>
            <p>
              공공데이터포털에 여행 데이터를 조회 및 검색과 데이터 클릭시 <em>구글 맵 기능과 게시판 기능</em> 있는
              상세페이지로 이동할 수 있음
            </p>
          </li>
          <li>
            <h3>
              {' '}
              <BsDot />
              favorite Page
            </h3>
            <p>
              travel page에서 더블 클릭시 즐겨찾기가 추가되었습니다 라는 문구와 함께 즐겨찾기 페이지로 &nbsp; &nbsp;
              데이터가 저장되어 페이지에서 즐겨찾기한 데이터를 볼 수 있고, 더블클릭시 삭제 기능 구현
            </p>
          </li>
          <li>
            <h3>
              {' '}
              <BsDot />
              Plan Page
            </h3>
            <p>
              사용자의 여행 계획을 만들 수 있는 페이지, 계획의 <em>CRUD</em> 구현 예정
            </p>
          </li>
        </ul>
        <StyledLink>
          <a href="https://github.com/seok28/travel" target="_blank" rel="noopener noreferrer">
            <BsLink /> <span>깃허브 오픈 소스</span>
          </a>
          {/* <a
            href="https://time-knee-9fd.notion.site/COEAT-44d4a363242c4742809743dc03f17f91"
            target="_blank"
            rel="noopener noreferrer">
            <BsLink /> <span>솝커톤 회고 기록</span>
          </a> */}
        </StyledLink>
      </StyledDesc>
      <StyledImgWrapper>
        <img src={travel} alt="" />
        <StyledTags>
          {/* <ul>
            <li>SOPT</li>
            <li>솝커톤</li>
            <li>React</li>
            <li>Styled-component</li>
            <li>Animation</li>
          </ul> */}
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
        color: blue;
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

const StyledImgWrapper = styled.div`
  margin-right: 2rem;
  width: 100%;

  & > img {
    width: 60%;
    height: 500;
    margin-left: 15rem;
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
