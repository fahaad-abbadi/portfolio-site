import React, { useState } from 'react'
import './Portfolio.css'
import Projects from './Projects'
import data from './data'

const Portfolio = () => {
	const [projects, setProjects] = useState(data)

	return (
		<section id="portfolio">
			<h3>Portfolio</h3>

			<p>Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.</p>

			<div className="container portfolio__container">
				<Projects projects={projects}/>
			</div>
		</section>
	)
}

export default Portfolio