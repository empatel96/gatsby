import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/projects.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Projects({ data }) {
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects and stuff I've worked on</h3>
        <div className={styles.projects}>
          {projects.map((project) => {
            const image = project.frontmatter.thumb.childrenImageSharp[0].gatsbyImageData;
            return (
              <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
                <div>
                  <GatsbyImage image={image} />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <p>Like what you see? Email me at: {contact}</p>
      </div>
    </Layout>
  );
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
