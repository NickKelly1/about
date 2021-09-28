---
order: 5
layout: ../../layouts/project.astro
title: Ci Flux
company: Corporate Initiatives
date: 2019-2020

description: |
  Near-real-time cross-integration business reporting service that joins and aggregates data across separate services and provides convenient and configurable business-ready reports.

technology: |
  Real-time client-server architecture. React SPA client written in TypeScript. NodeJS Express server written in TypeScript. PostgreSQL database.

role:
  - Lead architect and full-stack developer
  - Solely architected and developed the initial prototype
  - Primary developer and architect of the solution

tags:
  - TypeScript
  - NodeJS
  - Express
  - React
  - PostgreSQL
---



Server maintained a directed acyclic graph (DAG) of sources, intermediate states, and aggregated reports. The server periodically or on-demand pulled the latest data from its sources and performed differental data transformations through the DAG to update all down-stream reports.

--

Streamlined report generation process

--
