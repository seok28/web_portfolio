import styled from 'styled-components';
import bearImg from 'assets/bear.png';
import Fade from 'react-reveal/Fade';
import { useRef } from 'react';

const MainBody = () => {
  const aboutRef = useRef();

  return (
    <StyledWrapper ref={aboutRef}>
      <StyledRight>
        <StyledContent>
          <Fade bottom>
            <h3> My Careers </h3>
            <h2>석 준 수 | Junsu Seok</h2>
            {}
            <br />
            <div>
              <p> 자격증 및 학력사항 </p>
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
      position: absolute;
      right: 100px;
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
