import React from 'react'
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './About.css'

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container about__container">
                    <div className="about__left">
                        <div className="about__portrait">
                            <img src={AboutImage} alt="About Image" />
                        </div>
                    </div>

                    <div className="about__right">
                        <h3>About Me</h3>
                        <div className="about__cards">
                            {
                                data.map((item) => (
                                    <Card key={item.id} className="about__card">
                                        <span className='about__card-icon'>{item.icon}</span>
                                        <h5>{item.title}</h5>
                                        <small>{item.desc}</small>
                                    </Card>
                                ))
                            }
                        </div>
                        <p>Lorem first dolor sit amet consectetur adipisicing elit. Quis obcaecati dolorum atque libero delectus sit ex quo cumque nulla ratione! A commodi repudiandae sequi, explicabo totam ipsa soluta! Magnam, quos.</p>                        
                        <p>Lorem second dolor sit amet consectetur adipisicing elit. Quis obcaecati dolorum atque libero delectus sit ex quo cumque nulla ratione! A commodi repudiandae sequi, explicabo totam ipsa soluta! Magnam, quos.</p>
                        <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About