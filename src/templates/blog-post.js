import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import BlogPostStyles from '../templates/blog-post.module.scss';

export default ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className={BlogPostStyles.blogPostContainer}>
        <div className={BlogPostStyles.blogPost}>
          <h1>{frontmatter.title}</h1>
          <div
            className={BlogPostStyles.blogPostContent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
