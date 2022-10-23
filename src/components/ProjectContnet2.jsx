import styled from 'styled-components';
import board from 'assets/map_board.gif';
import { BsDot, BsLink } from 'react-icons/bs';
import { StyledContentWrapper, StyledDesc, StyledLink, StyledTags } from 'components/ProjectContent';

const ProjectContent2 = () => {
  return (
    <StyledContentWrapper>
      <CustomStyledDesc>
        <h2>
          가족같은 2남 1녀 <br />: Map_Board
        </h2>
        <ul>
          <li>
            <span>한국성서대학교 웹 시스템 설계 및 개발2(NodeJs) 시간에 진행한 게시판 프로젝트 </span>
          </li>
          <li>
            <h2>2021년 09월 ~ 12월</h2>
          </li>
          <li>
            <h3>
              {' '}
              <BsDot />
              Board
            </h3>
            <p>
              {' '}
              게시판 페이지로 일반적인 게시판 페이지로 사용할 수 있고 게시판 기능의 기본적인 <em>CRUD</em> 기능을 구현함
            </p>
            <br />
            <h3>
              {' '}
              <BsDot />
              Map
            </h3>
            <p>
              <em> 지도 페이지</em> : 기본적인 지도의 기능을 가지고 있고 검색시 그 주변의 마커가 형성되고 데이터 클릭시
              마커로 이동하는 기능구현 및 등록할 수 있음 지도에서 자신의 특별한 장소가 있으면 등록하여서 게시판을
              이용하여 다른 사람들과 교류할 수 있는 시스템입니다.
            </p>
            <br />
            <h3>
              {' '}
              <BsDot />
              ETC
            </h3>
            <p>
              이 프로젝트는 수업을 들으면서 가장 흔한게 접했던 게시판 기능과 지도의 데이터를 불러오는 기능을 조합해서
              하면 도움이 될 것 같아서 계획했던 프로젝트 입니다.
            </p>
          </li>
        </ul>
        <CustomStyledLink>
          <a href="https://github.com/seok28/map" target="_blank" rel="noopener noreferrer">
            <BsLink /> <span>깃허브 저장소</span>
          </a>
        </CustomStyledLink>
      </CustomStyledDesc>
      <StyledImgWrapper>
        <img src={board} alt="" />
        <CustomStyledTags>
          {/* <ul>
            <li>SOPT</li>
            <li>합동 세미나</li>
            <li>Re-Design</li>
            <li>REST API</li>
            <li>댓글</li>
            <li>좋아요</li>
          </ul> */}
        </CustomStyledTags>
      </StyledImgWrapper>
    </StyledContentWrapper>
  );
};

// #4a2c2c(갈색 계열)
export default ProjectContent2;

const CustomStyledDesc = styled(StyledDesc)`
  & > ul {
    & > li {
      & > svg {
        fill: #f8df8b;
      }
      & > h2 {
        color: #f8df8b;
      }
      & > p {
        & > em {
          color: #f8df8b;
          background-color: transparent;
          padding: 0;
        }

        & > i {
          background-color: #f8df8ba2;
          padding: 0.5rem 0.8rem;
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    & > ul {
      & > li {
        & > h2 {
          color: #f8df8b;
        }
        & > p {
          font-size: 1.4rem !important;
          line-height: 1.8 !important;

          & > i {
            padding: 0.2rem 0.5rem;
          }
        }
      }
    }
  }
`;

const CustomStyledTags = styled(StyledTags)`
  & > ul {
    & > li {
      color: #4a2c2c;
      background-color: #f8df8b;
    }
  }
`;

const CustomStyledLink = styled(StyledLink)`
  & > a {
    background-color: #f8df8b;
    color: #4a2c2c;
  }
`;

const StyledImgWrapper = styled.div`
  & > img {
    width: 75%;
    float: right;
    margin-right: 10rem;
  }
`;
