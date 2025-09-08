import React from 'react'
import { Link } from 'react-router-dom';
import PeluDash from '../MrsPelumiComp/PeluDash';
import PeluHero from '../MrsPelumiComp/PeluHero';

function MrsPelumi() {
    const topics = [
    "Excel",
    "Introduction to Data Analysis",
    "Statistics and Probability for Data Science",
    "Data Wrangling and Cleaning",
    "Exploratory Data Analysis (EDA)",
    "Data Visualization Techniques",
    "SQL for Data Analysis",
    "Python/R for Data Analysis",
    "Machine Learning Fundamentals",
    "Big Data Tools and Technologies",
    "Data Storytelling and Communication",
    ];


  return (
    <div>
      <PeluDash />
      <PeluHero topics={topics}/>
    </div>
  )
}

export default MrsPelumi
