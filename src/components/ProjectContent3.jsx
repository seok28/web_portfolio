import styled from 'styled-components';
import Site from 'assets/portfolio.gif';

const ProjectContent3 = () => {
  return (
    <StyledContentWrapper>
      <StyledDesc>
        <h1> 개인 포트폴리오 </h1>
        <ul>
          <li>
            <h2>웹 페이지 제작 </h2>
          </li>
          <li>
            <div>
              <h3>소제목 자리1</h3>
              <p>설명1</p>
            </div>
          </li>
          <li>
            <div>
              <h3> 소제목 자리2 </h3>
              <p>설명2</p>
            </div>
          </li>
          <li>
            <h2>부제목</h2>
          </li>
          <li>
            <div>
              <h3> 소제목 자리3 </h3>

              <p>설명3</p>
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
  color: white;
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
