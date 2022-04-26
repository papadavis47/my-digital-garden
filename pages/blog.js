import styled from "styled-components";

const TitleWrapper = styled.h2`
  color: ${(props) => (props.blue ? "blue" : "green")};
  font-style: italic;
`;

const Blog = () => {
  return (
    <div>
      <h1>This is the blog</h1>
      <TitleWrapper>
        I am going to use MDX here.
        <div>
          <h2>Testing This</h2>
        </div>
      </TitleWrapper>
    </div>
  );
};

export default Blog;
