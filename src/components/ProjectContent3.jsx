import styled from 'styled-components';
import Site from 'assets/portfolio.gif';

const ProjectContent3 = () => {
  return (
    <StyledContentWrapper>
      <StyledDesc>
        <h1> 개인 포트폴리오 </h1>
        <ul>
          <li>
            <h2>나의 웹 페이지 제작 </h2>
          </li>
          <li>
            <div>
              <h3>메인화면 구성</h3>
              <p>좌측에 링크 구성과 우측에는 나의 이름과 네비게이션 바 구성</p>
            </div>
          </li>
          <li>
            <div>
              <h3> 총 5개의 화면 구성 </h3>
              <p>
                메인화면, 나의 기술과 나에 대한 간략한 소개, 나의 프로젝트 설명, 자격증 및 학교 설명 <br /> 나의 연락처
                기술{' '}
              </p>
            </div>
          </li>
          <li>
            <h2>부제목</h2>
          </li>
          <li>
            <div>
              <h3> 나의 포트폴리오를 보여주기 위한 웹 페이지 </h3>

              <p>
                {' '}
                간략한 나의 포트폴리오를 보여주기 위한 웹 페이지를 제작함으로써 scroll index 를 이용하여 다음 페이지로
                이동하고 이동하고 총 5개의 페이지로 구성하였습니다..
              </p>
            </div>
          </li>
        </ul>
      </StyledDesc>
      <StyledDescPost>
        <h2>My PortFoilo</h2>
        <StyledCardWrapper>
          <CardImgWrapper>
            <img src={Site} alt="" />
          </CardImgWrapper>
        </StyledCardWrapper>
      </StyledDescPost>
    </StyledContentWrapper>
  );
};

export default ProjectContent3;

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  width: calc(100% - 29rem);
  height: 100%;
  color: blue;
  position: relative;
  padding-top: 12rem;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    margin: 0 auto;
    width: calc(100% - 3rem);
  }
`;

const StyledDesc = styled.div`
  width: 100%;
  margin-right: 2.3rem;
  font-size: 1.7rem;
  margin-top: 3rem;

  & > h1 {
    font-family: 'TmonMonsori';
    font-size: 3.3rem;
    margin-bottom: 2rem;
    color: blue;
  }

  & > ul {
    font-weight: bolder;

    & > li + li {
      margin-top: 2rem;
    }

    & > li {
      & > span {
        cursor: pointer;
        font-weight: bolder;
        color: #f8df8b;
      }

      & > h2 {
        font-size: 1.8rem;
        color: green;
      }

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & > h3 {
          font-size: 2rem;
          margin-bottom: 0.3rem;
          border: 2px solid green;
          padding: 0.8rem 1rem;
        }

        & > a {
          text-decoration: none;
        }

        & > p {
          line-height: 1.8;
          font-weight: normal;
          text-align: center;

          & > em {
            background-color: #ffa60065;
            padding: 0.5rem 0.8rem;
          }
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-right: 2.3rem;
    margin-bottom: 10rem;
    font-size: 1.5rem;
    height: 100%;

    & > h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    & > ul {
      & > li + li {
        margin-top: 1rem;
      }

      & > li {
        & > h2 {
          font-size: 1.8rem;
        }

        & > div {
          & > h3 {
            font-size: 2rem;
            margin-bottom: 0.3rem;
            padding: 0.8rem 1rem;
          }

          & > p {
            line-height: 1.8;
            margin-bottom: 0.5rem;

            & > em {
              padding: 0.5rem 0.8rem;
            }
          }
        }
      }
    }
  }
`;

const StyledDescPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 2.3rem;
  font-size: 1.7rem;

  & > h2 {
    font-family: 'TmonMonsori';
    font-size: 3.3rem;
    margin-bottom: 2rem;
    margin-left: 6rem;
    color: blue;
  }

  & > p {
    line-height: 1.8;
    margin: 3rem 0;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;

  & > a {
    text-decoration: none;
  }
`;

const CardImgWrapper = styled.div`
  position: relative;
  padding-top: 62.1921%;
  margin-bottom: 16px;

  & > img {
    position: absolute;
    top: 5rem;
    left: 0;
    width: 160%;
    height: 230%;
    margin-left: 7rem;
  }
`;
