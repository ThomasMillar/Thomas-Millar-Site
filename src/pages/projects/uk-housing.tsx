import React from 'react';
import Layout from '@theme/Layout';
import styles from './project.module.css';

export default function UKHousingProject() {
  return (
    <Layout title="UK Housing Data Platform">
      <main className={styles.page}>
        <section
          className={styles.hero}
          style={{'--project-image': "url('/img/site/housing-atmosphere.jpg')"} as React.CSSProperties}
        >
          <div className={styles.heroInner}>
            <p className={styles.kicker}>PROJECT 01 • DATA ENGINEERING</p>
            <h1>UK Housing Data Platform</h1>
            <p className={styles.lede}>
              An end-to-end platform using HM Land Registry transaction data,
              PostgreSQL, FastAPI, Docker and Streamlit to turn a large public
              dataset into something that can be explored quickly.
            </p>
            <div className={styles.actions}>
              <a href="https://github.com/ThomasMillar/UK-housing-data-platform" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>
        </section>

        <div className={styles.content}>
          <section className={styles.block}>
            <h2>The idea</h2>
            <div>
              <p>
                I wanted to build a project that covered the full data journey rather
                than stopping at analysis. The platform downloads housing transactions,
                loads them into PostgreSQL, prepares analytical datasets and exposes them
                through an API and dashboard.
              </p>
              <div className={styles.stack}>
                {['Python','PostgreSQL','Docker','FastAPI','Streamlit','SQL'].map(x => <span key={x}>{x}</span>)}
              </div>
            </div>
          </section>

          <section className={styles.block}>
            <h2>Pipeline</h2>
            <div className={styles.flow}>
              HM Land Registry → Python ingestion → PostgreSQL → FastAPI → Streamlit
            </div>
          </section>

          <section className={styles.block}>
            <h2>What I worked on</h2>
            <ul>
              <li>Downloading and processing large Land Registry files.</li>
              <li>Designing PostgreSQL tables, views and materialised views for analytics.</li>
              <li>Containerising the services with Docker Compose.</li>
              <li>Building a FastAPI layer for filtered access to the data.</li>
              <li>Creating a multi-page Streamlit dashboard for housing trends and geography.</li>
            </ul>
          </section>

          <section className={styles.block}>
            <h2>What I learned</h2>
            <p>
              This project improved my understanding of working with large static datasets,
              separating raw and analytical layers, designing data for reporting, and making
              several services work together as one reproducible application.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
