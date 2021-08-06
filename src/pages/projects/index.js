import React from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/projects.module.css';

export default function Projects() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects and stuff I've worked on</h3>
      </div>
    </Layout>
  );
}
