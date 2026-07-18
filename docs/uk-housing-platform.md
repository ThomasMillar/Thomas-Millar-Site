# UK Housing Data Platform

## Overview

A data analytics platform exploring UK property market trends using HM Land Registry Price Paid Data.

The project demonstrates the process of taking raw public datasets and transforming them into structured analytical data ready for analysis and visualisation.

## Objectives

* Collect housing transaction data
* Clean and transform raw datasets
* Store analytical data in PostgreSQL
* Build dashboards to explore trends
* Create a repeatable data workflow

## Tech Stack

* Python
* PostgreSQL
* Docker
* FastAPI
* Streamlit
* Git

## Data Pipeline

The platform follows this workflow:

1. **Data Source**

   * HM Land Registry Price Paid Data

2. **Data Processing**

   * Python scripts used for downloading, cleaning and transforming raw datasets

3. **Data Storage**

   * PostgreSQL database containing structured analytical tables

4. **API & Dashboard Layer**

   * FastAPI provides access to processed data
   * Streamlit provides interactive analysis and visualisation

5. **Analytics**

   * Explore housing trends, regional changes and market insights

## Key Features

### Data Ingestion

Automated processes to download and process housing transaction data.

### Data Modelling

Designed database structures to support analytical queries and reporting.

### Visualisation

Created interactive dashboards to explore:

* Regional price trends
* Property types
* Transaction volumes
* Market changes

## Future Improvements

* Cloud deployment
* Automated scheduling
* Data quality monitoring
* Additional economic datasets
