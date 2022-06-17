import MainBody from 'components/MainBody';
import About from 'components/About';
import Nav from 'components/Nav';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import Projects from 'components/Projects';
import Contact from 'components/Contact';

const MainPage = () => {
  const outerRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();

      const { deltaY } = e;
      const { scrollTop } = outerRef.current; // 스크롤 윗쪽 끝부분
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        // 스크롤 내리는 경우
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //now Page 1
          outerRef.current.scroll({
            top: pageHeight,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //now Page 2
          outerRef.current.scroll({
            top: pageHeight * 2,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //now Page 3
          outerRef.current.scroll({
            top: pageHeight * 3,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(4);
        }
      } else {
        // 스크롤 올리는 경우
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // now Page 1
          outerRef.current.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(1);
        } else if (scrollTop >= 0 && scrollTop < pageHeight * 2) {
          // now Page 2
          outerRef.current.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(1);
        } else if (scrollTop >= 0 && scrollTop < pageHeight * 3) {
          // now Page 3
          outerRef.current.scroll({
            top: pageHeight,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(2);
        } else if (scrollTop >= 0 && scrollTop < pageHeight * 4) {
          // now Page 4
          outerRef.current.scroll({
            top: pageHeight * 2,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(3);
        }
      }
    };
    const outerRefCurrent = outerRef.current;
    outerRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      outerRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return (
    <StyledWrapper ref={outerRef}>
      <MainBody />
      <About />
      <Projects />
      <Contact />
      <Nav scrollIndex={scrollIndex} />
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  overflow-y: scroll;
  z-index: 2;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    overflow-x: hidden;
  }
`;
