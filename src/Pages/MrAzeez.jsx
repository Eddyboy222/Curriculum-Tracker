import React from 'react'
import AzeezDash from '../MrAzeezComp/AzeezDash'
import { Link } from 'react-router-dom';
import AzeezHero from '../MrAzeezComp/AzeezHero';

function MrAzeez() {
    const topics = [
    "HTML Fundamentals",
    "CSS Basics",
    "JavaScript Intro",
    "React Basics",
    "DOM Manipulation",
    "State Management",
    "React Router",
    "Node.js Introduction",
    "Express.js Setup",
    "Routing & Middleware",
    "Database Design",
    "Authorization",
    "API Security",
    "Testing & Debugging",
    "Cloud Deployment",
  ];

  return (
    <div>
      <AzeezDash />

      <AzeezHero topics={topics} />
    </div>
  )
}

export default MrAzeez
