import React from 'react'
import EmmaDash from '../MrEmmaComp/EmmaDash'
import {Link} from 'react-router-dom'
import EmmaHero from '../MrEmmaComp/EmmaHero';

function MrEmma() {
    const topics = [
    "Introduction to Graphic Design",
    "Design Principles and Elements",
    "Typography Fundamentals",
    "Color Theory and Application",
    "Adobe Photoshop Basics",
    "Adobe Illustrator and Vector Graphics",
    "Layout and Composition Design",
    "Branding and Logo Design",
    "UI/UX Design Fundamentals",
    "Portfolio Development and Presentation",
    "Digital Illustration Techniques",
    "Motion Graphics and Animation Basics",
    "Print and Publication Design",
    "Design Thinking and Creative Process",
    "Freelancing and Career Development in Design" 
    ];

  return (
    <div>
      <EmmaDash />
      <EmmaHero topics={topics} />
    </div>
  )
}

export default MrEmma
