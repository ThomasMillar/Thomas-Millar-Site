import React from 'react';
import Layout from '@theme/Layout';
import styles from './project.module.css';

export default function FootballAnalyticsProject() {
  return (
    <Layout title="Football Analytics Platform">
      <main className={styles.page}>
        <section
          className={styles.hero}
          style={{'--project-image': "url('/img/site/football-atmosphere.jpg')"} as React.CSSProperties}
        >
          <div className={styles.heroInner}>
            <p className={styles.kicker}>PROJECT 02 • API / CLOUD / BI</p>
            <h1>Football Analytics Platform</h1>
            <p className={styles.lede}>
              A multi-league football analytics platform using API-Football,
              Python, Azure SQL and Power BI. The final dashboard covers the top
              three divisions in England, Spain, France and Germany, plus the top
              two divisions in Italy.
            </p>
            <div className={styles.actions}>
              <a href="https://github.com/ThomasMillar/Football-Analytics-Platform" target="_blank" rel="noreferrer">
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
                This started as a Power BI project but grew into a wider data pipeline.
                I ingest league, fixture, standings, player, match event, lineup, injury
                and transfer data before modelling it in Azure SQL for reporting.
              </p>
              <div className={styles.stack}>
                {['Python','Azure SQL','Power BI','GitHub Actions','REST API','SQL'].map(x => <span key={x}>{x}</span>)}
              </div>
            </div>
          </section>

          <section className={styles.block}>
            <h2>Pipeline</h2>
            <div className={styles.flow}>
              API-Football → Python ingestion → Azure SQL staging → MERGE / upsert → Power BI
            </div>
          </section>

          <section className={styles.block}>
            <h2>Engineering challenge</h2>
            <p>
              The API plan could not return the full historical dataset across every league
              and endpoint in one load. I handled this by loading the data in controlled
              stages by league and season while keeping the same ingestion and transformation
              process.
            </p>
          </section>

          <section className={styles.block}>
            <h2>Dashboard</h2>
            <ul>
              <li>League overview with standings, scorers, assists and team metrics.</li>
              <li>Team breakdown with results, progression and squad performance.</li>
              <li>Player comparison across attacking, passing and defensive metrics.</li>
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}
