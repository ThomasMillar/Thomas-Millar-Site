import React from 'react';
import Layout from '@theme/Layout';
import styles from './project.module.css';

const repoUrl = 'https://github.com/ThomasMillar/Football-Analytics-Platform';
const powerBiFileUrl =
  'https://github.com/ThomasMillar/Football-Analytics-Platform/blob/main/dashboard/Football%20Analytics%20Dashboard.pbix';

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
              An end-to-end football data platform that ingests API-Football data with Python,
              models it in Azure SQL and turns it into league, team and player analysis in Power BI.
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryAction} href={powerBiFileUrl} target="_blank" rel="noreferrer">
                View Power BI file ↗
              </a>
              <a className={styles.secondaryAction} href={repoUrl} target="_blank" rel="noreferrer">
                View GitHub ↗
              </a>
            </div>

            <div className={styles.heroMeta}>
              <span>Python</span>
              <span>Azure SQL</span>
              <span>Power BI</span>
              <span>GitHub Actions</span>
              <span>REST API</span>
            </div>
          </div>
        </section>

        <div className={styles.content}>
          <section className={styles.introGrid}>
            <div className={styles.introCard}>
              <p className={styles.cardLabel}>SCOPE</p>
              <h2>14 competitions</h2>
              <p>
                The reporting dataset covers the top three divisions in England, Spain,
                France and Germany, plus the top two divisions in Italy.
              </p>
            </div>

            <div className={styles.introCard}>
              <p className={styles.cardLabel}>PIPELINE</p>
              <h2>API to reporting model</h2>
              <p>
                Python ingestion loads API responses into Azure SQL staging before SQL MERGE
                logic updates fact and dimension tables used by Power BI.
              </p>
            </div>

            <div className={styles.introCard}>
              <p className={styles.cardLabel}>AUTOMATION</p>
              <h2>Scheduled ingestion</h2>
              <p>
                GitHub Actions runs the ingestion outside my local machine, with credentials
                and configuration managed through environment variables and secrets.
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>Architecture</h2>
            <div>
              <div className={styles.flow}>
                API-Football → Python ingestion → Azure SQL staging → MERGE / upsert → Power BI
              </div>
              <p className={styles.supportingCopy}>
                Separate ingestion modules handle leagues, teams, fixtures, standings, players,
                match statistics, events, lineups, injuries and transfers.
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>Engineering challenge</h2>
            <div>
              <p>
                The API request allowance was not large enough to load every historical league,
                season and detailed endpoint in a single run. I handled this by batching historical
                ingestion by league and season while keeping the same pipeline and transformation logic.
              </p>
              <p>
                Staging tables made it easier to inspect extracted data before updating the reporting
                model, while SQL upserts kept changing football data current without repeatedly
                inserting duplicates.
              </p>
            </div>
          </section>

          <section className={styles.dashboardShowcase}>
            <div className={styles.dashboardHeader}>
              <div>
                <p className={styles.kicker}>POWER BI DASHBOARD</p>
                <h2>From league overview to player comparison</h2>
                <p>
                  The report moves from competition-level performance into individual team and player
                  analysis. Select a dashboard view to open the screenshot at full size.
                </p>
              </div>
              <a className={styles.dashboardLink} href={powerBiFileUrl} target="_blank" rel="noreferrer">
                Open Power BI file ↗
              </a>
            </div>

            <a
              className={styles.featuredShot}
              href="/img/projects/football-overview.webp"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/projects/football-overview.webp"
                alt="Football Analytics Power BI overview dashboard"
              />
              <span>
                <strong>Overview</strong>
                <small>Standings, scorers, assists, ratings and team metrics</small>
              </span>
            </a>

            <div className={styles.shotGrid}>
              <a
                className={styles.dashboardShot}
                href="/img/projects/football-team-breakdown.webp"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/projects/football-team-breakdown.webp"
                  alt="Football Analytics team breakdown dashboard"
                />
                <span>
                  <strong>Team Breakdown</strong>
                  <small>Results, progression, squad statistics and player performance</small>
                </span>
              </a>

              <a
                className={styles.dashboardShot}
                href="/img/projects/football-player-comparison.webp"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/projects/football-player-comparison.webp"
                  alt="Football Analytics player comparison dashboard"
                />
                <span>
                  <strong>Player Comparison</strong>
                  <small>Side-by-side attacking, passing and defensive metrics</small>
                </span>
              </a>
            </div>
          </section>

          <section className={styles.block}>
            <h2>Data model</h2>
            <div>
              <p>
                The SQL model separates data by grain so league standings, matches and player
                performance can coexist cleanly in the same reporting model.
              </p>
              <div className={styles.modelGrid}>
                {[
                  'dim_competition',
                  'dim_team',
                  'dim_player',
                  'dim_date',
                  'fact_match',
                  'fact_standing',
                  'fact_player_season',
                  'fact_player_match',
                  'fact_player_event',
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.block}>
            <h2>What I learned</h2>
            <p>
              This project gave me a much better understanding of how source-system limits,
              data grain, staging, incremental updates and automation affect the design of a
              real data pipeline rather than a one-off dashboard.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
