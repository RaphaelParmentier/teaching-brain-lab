# Teaching Brain Lab

Interactive teaching portfolio designed to demonstrate applied education in Data Science, Statistics, Machine Learning and Artificial Intelligence.

Rather than presenting teaching through static descriptions, this project visualizes a complete pedagogical system built around realistic projects, analytical reasoning and professional deliverables.

---

## Overview

Teaching Brain Lab showcases how learners progressively acquire technical and analytical skills through structured learning paths and practical missions.

The experience is built around an interactive brain metaphor where each node represents a key competency domain and each pathway illustrates the progression from fundamental concepts to professional-level outputs.

The objective is to answer a simple question:

> What can students actually produce after completing a training program?

The platform therefore focuses on concrete outputs rather than theoretical content.

---

## Key Features

### Interactive Teaching Brain

An interactive visualization connecting:

- Data Strategy & Management
- Statistical Reasoning
- Machine Learning Strategy
- AI-Augmented Workflows
- Professional Communication
- Learning Philosophy

Each node can be explored individually to understand how knowledge is structured and connected.

---

### Teaching Program Explorer

Dedicated interface presenting:

- program objectives
- expected outcomes
- skills developed
- core concepts
- software ecosystem
- teaching philosophy

The system highlights both technical competencies and analytical reasoning.

---

### Applied Teaching Missions

The MVP currently includes six realistic missions:

#### FoodTech Expansion Strategy

Students clean, structure and analyze commercial datasets to support market expansion decisions.

Deliverables include:

- data quality assessment
- reproducible cleaning workflow
- KPI calculation
- ggplot visualizations
- business recommendation

---

#### European Economic Indicators

Exploration of macroeconomic indicators using European open datasets.

Deliverables include:

- data preparation workflow
- comparative visualizations
- country benchmarking
- analytical interpretation
- insight presentation

---

#### Renault vs Tesla Analytics

Exploratory analysis comparing two major automotive companies.

Deliverables include:

- financial indicators analysis
- trend exploration
- visualization portfolio
- business interpretation
- executive summary

---

#### Healthcare Statistical Reasoning

Introduction to statistical thinking in healthcare and life sciences.

Deliverables include:

- descriptive analysis
- uncertainty quantification
- hypothesis testing
- interpretation report

---

#### Healthcare Prediction

Applied machine learning workflow based on healthcare data.

Deliverables include:

- feature engineering
- model training
- evaluation metrics
- prediction report

---

#### AI Assistant Design

Design and evaluation of AI-assisted workflows.

Deliverables include:

- prompt architecture
- context management strategy
- workflow mapping
- AI evaluation framework

---

### Student Output Viewer

Each mission provides realistic previews of student work:

- RMarkdown excerpts
- R code chunks
- console outputs
- tibble outputs
- ggplot visualizations
- analytical recommendations

The objective is to showcase authentic educational outcomes rather than generic demonstrations.

---

## Educational Philosophy

The project is based on four principles:

### Learning by Doing

Students learn through realistic projects and concrete deliverables.

### Evidence-Based Thinking

Every analytical conclusion must be supported by data and explicit reasoning.

### Professional Workflows

Activities reproduce workflows commonly used in industry.

### Communication of Results

Technical analysis must ultimately support decision-making.

---

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Visualization

- Framer Motion
- Custom node graph system

### Deployment

- Vercel

---

## Project Structure

```text
app/
components/
  brain/
  journey/
  teaching/
data/
lib/
public/
```

Main modules:

- Brain visualization system
- Teaching program explorer
- Mission exploration interface
- Student output modal
- Educational content datasets

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/RaphaelParmentier/teaching-brain-lab.git
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Deployment

Production deployment is performed through Vercel.

Build command:

```bash
npm run build
```

Production start:

```bash
npm run start
```

---

## Current Status

### MVP Complete

Implemented:

- interactive teaching brain
- teaching philosophy explorer
- learning pathways
- mission system
- student deliverable previews
- modal-based mission exploration
- responsive desktop experience

Planned improvements:

- richer mission artifacts
- embedded visual outputs
- real notebook screenshots
- improved mobile responsiveness
- portfolio integration
- enhanced Open Graph assets

---

## Why This Project Matters

Most educational portfolios describe teaching activities.

Teaching Brain Lab demonstrates outcomes.

The goal is to provide recruiters, institutions and learners with a transparent view of:

- pedagogical approach
- technical expertise
- analytical rigor
- expected student achievements

---

## Author

**Raphaël Parmentier**

AI Consultant  
Data Scientist  
University Lecturer

Portfolio:

https://raphaelparmentier.dev

LinkedIn:

https://www.linkedin.com/in/raphaelparmentier

---

## License

MIT License

Copyright (c) 2026 Raphaël Parmentier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.