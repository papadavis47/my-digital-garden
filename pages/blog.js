import styled from "styled-components";

const TitleWrapper = styled.h2`
  color: blue;
  font-style: italic;
`;

const Blog = () => {
  return (
    <div>
      <h1>This is the blog</h1>
      <TitleWrapper>I am going to use MDX here.</TitleWrapper>
    </div>
  );
};

export default Blog;
