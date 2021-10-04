import styled from "styled-components";
import Link from "next/link";
import {
  RiGithubFill,
  RiStackOverflowFill,
  RiTwitterFill,
} from "react-icons/ri";

const StyledCard = styled.div`
  background: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  border-radius: 0.5rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 16px;
    color: hsl(222.2, 65.8%, 52.9%);
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 16px;
    font-style: italic;
    color: hsl(133.3, 62.7%, 67.5%);
  }

  .icons {
    font-size: 3rem;
    margin-bottom: 16px;
  }

  a {
    color: hsl(356.6, 96.4%, 67.5%);
  }

  p {
    font-size: 1.5rem;
    color: hsl(26.6, 97.9%, 62.9%);
  }
`;

const Card = () => {
  return (
    <StyledCard>
      <h1>papadavis47</h1>
      <h2>my digital garden</h2>
      <div className='icons'>
        <a href='https://twitter.com/papadavis47'>
          <RiTwitterFill />
        </a>
        <a href='https://github.com/papadavis47'>
          <RiGithubFill />
        </a>
        <a
          href='https://stackoverflow.com/users/9111781/jwdavis?tab=profile'
          rel='noreferrer'
          target='_blank'
        >
          {" "}
          <RiStackOverflowFill />
        </a>
      </div>
      <p>Under construction 🛠️</p>
    </StyledCard>
  );
};

export default Card;
