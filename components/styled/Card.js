import styled from "styled-components";
import Link from "next/link";
import { RiGithubFill, RiStackOverflowFill, RiTwitterFill, RiLinksFill } from "react-icons/ri";

const StyledCard = styled.div`
  background: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  border: 5px solid hsl(222.2, 65.8%, 52.9%);
  border-radius: 0.25rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 16px;
    color: hsl(222.2, 65.8%, 52.9%);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 16px;
    font-style: italic;
    color: hsl(133.3, 62.7%, 67.5%);
    letter-spacing: 4px;
    text-transform: capitalize;
  }

  .icons {
    font-size: 2rem;
    margin-bottom: 16px;
    display: flex;
  }

  .entry {
    display: flex;
    font-size: 1.25rem;
    padding: 10px;
  }

  .enter-text {
    margin-right: 10px;
  }

  a {
    color: hsl(356.6, 96.4%, 67.5%);
  }

  p {
    font-size: 1rem;
    color: hsl(26.6, 97.9%, 62.9%);
  }

  @media screen and (max-width: 500px) {
    max-width: 300px;
    h2 {
      font-size: 1rem;
    }
  }
`;

const Card = () => {
  return (
    <StyledCard>
      <h1>papadavis47</h1>
      <h2>a developer sandbox</h2>
      <div className='icons'>
        <a href='https://twitter.com/papadavis47' rel='noreferrer' target='_blank'>
          <RiTwitterFill />
        </a>
        <a href='https://github.com/papadavis47' rel='noreferrer' target='_blank'>
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
      <Link href='/sandbox'>
        <a>
          <div className='entry'>
            <p className='enter-text'>Enter Sandbox</p>

            <RiLinksFill color='red' />
          </div>
        </a>
      </Link>
    </StyledCard>
  );
};

export default Card;
