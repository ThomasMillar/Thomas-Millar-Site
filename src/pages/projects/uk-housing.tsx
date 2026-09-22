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
              An end-to-end data platform built around HM Land Registry transaction data,
              with automated ingestion, PostgreSQL modelling, an API layer and an interactive
              Streamlit dashboard.
            </p>

            <div className={styles.actions}>
              <a
                className={styles.primaryAction}
                href="https://uk-housing-data-platform.streamlit.app/"
                target="_blank"
                rel="noreferrer"
              >
                Open live dashboard ↗
              </a>
              <a
                className={styles.secondaryAction}
                href="https://github.com/ThomasMillar/UK-housing-data-platform"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub ↗
              </a>
            </div>

            <div className={styles.heroMeta}>
              <span>Python</span>
              <span>PostgreSQL</span>
              <span>FastAPI</span>
              <span>Docker</span>
              <span>Streamlit</span>
            </div>
          </div>
        </section>

        <div className={styles.content}>
          <section className={styles.introGrid}>
            <div className={styles.introCard}>
              <p className={styles.cardLabel}>FOCUS</p>
              <h2>End-to-end delivery</h2>
              <p>
                The project covers ingestion, storage, analytical modelling, API access
                and a deployed dashboard rather than stopping at a single analysis.
              </p>
            </div>
            <div className={styles.introCard}>
              <p className={styles.cardLabel}>DATA</p>
              <h2>HM Land Registry</h2>
              <p>
                Large-scale Price Paid Data is downloaded, loaded and shaped into datasets
                designed for fast exploration of market trends and geography.
              </p>
            </div>
            <div className={styles.introCard}>
              <p className={styles.cardLabel}>DEPLOYMENT</p>
              <h2>Public interactive app</h2>
              <p>
                The dashboard is deployed with Streamlit and backed by PostgreSQL, with
                automated keep-alive checks supporting the public portfolio demo.
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>Architecture</h2>
            <div>
              <div className={styles.flow}>
                HM Land Registry → Python ingestion → PostgreSQL → FastAPI → Streamlit
              </div>
              <p className={styles.supportingCopy}>
                PostgreSQL views and materialised views prepare analytical datasets for the
                application, while Docker keeps the local services reproducible.
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>What I built</h2>
            <ul>
              <li>Automated ingestion for large Land Registry files.</li>
              <li>PostgreSQL tables, views and materialised views for analytical workloads.</li>
              <li>A FastAPI layer for filtered access to the underlying data.</li>
              <li>A multi-page Streamlit application covering trends, geography and market behaviour.</li>
              <li>Containerised local services using Docker Compose.</li>
              <li>A deployed PostgreSQL-backed portfolio version of the application.</li>
            </ul>
          </section>

          <section className={styles.liveDashboard}>
            <div className={styles.dashboardHeader}>
              <div>
                <p className={styles.kicker}>LIVE PROJECT</p>
                <h2>Explore the platform</h2>
                <p>
                  The full Streamlit application is embedded below. Use the dashboard sidebar
                  to move between Overview, Price Trends, Geography, COVID Era Analysis,
                  Data Explorer and the other pages.
                </p>
              </div>
              <a
                className={styles.dashboardLink}
                href="https://uk-housing-data-platform.streamlit.app/"
                target="_blank"
                rel="noreferrer"
              >
                Open in new tab ↗
              </a>
            </div>

            <div className={styles.dashboardShell}>
              <div className={styles.dashboardBar}>
                <span className={styles.liveDot} />
                Live dashboard
              </div>
              <iframe
                src="https://uk-housing-data-platform.streamlit.app/?embed=true&embed_options=dark_theme"
                title="UK Housing Data Platform live dashboard"
                loading="lazy"
                className={styles.dashboardFrame}
                allowFullScreen
              />
            </div>
          </section>

          <section className={styles.block}>
            <h2>What I learned</h2>
            <p>
              Building the platform strengthened my understanding of handling large static
              datasets, separating raw and analytical layers, designing data for reporting
              and connecting several services into one reproducible application.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
