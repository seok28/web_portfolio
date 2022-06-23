import styled from 'styled-components';

const Nav = ({ scrollIndex }) => {
  return (
    <StyledWrapper>
      <ul>
        <li>
          <Dot num={1} scrollIndex={scrollIndex}>
            Home
          </Dot>
        </li>
        <li>
          <Dot num={2} scrollIndex={scrollIndex}>
            About
          </Dot>
        </li>
        <li>
          <Dot num={3} scrollIndex={scrollIndex}>
            Projects
          </Dot>
        </li>
        <li>
          <Dot num={4} scrollIndex={scrollIndex}>
            Careers
          </Dot>
        </li>
        <li>
          <Dot num={5} scrollIndex={scrollIndex}>
            Contact
          </Dot>
        </li>
      </ul>
    </StyledWrapper>
  );
};

export default Nav;

const StyledWrapper = styled.nav`
  position: fixed;
  top: 50%;
  right: -16rem;
  color: white;
  z-index: 3;

  & > ul {
    display: flex;
    font-size: 2rem;
    font-weight: bolder;
    transform: rotate(90deg);

    & > li {
      position: relative;

      & > div {
        display: flex;
        width: 100%;
        height: 100%;
      }
    }

    & > li + li {
      margin-left: 5rem;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    justify-content: center;
    width: 100%;

    position: fixed;
    top: 2rem;
    right: 0;
    color: white;

    & > ul {
      justify-content: center;
      font-size: 1.5rem;
      transform: rotate(0deg);

      & > li + li {
        margin-left: 3rem;
      }
    }
  }
`;

const Dot = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  color: ${(props) => {
    if (props.scrollIndex === props.num) {
      return '#f8df8b';
    } else {
      return 'white';
    }
  }};

  @media (min-width: 320px) and (max-width: 480px) {
    color: white;
  }
`;
