import React from 'react'
import './About.css'

const About = () => {

    const data = [
        {
            title: "What We Do...",
            desc1: "Web Development: Web development involves creating and maintaining websites or web applications using technologies such as HTML, CSS, JavaScript, and frameworks for both front-end and back-end development.",
            desc2: "Mobile Development: Mobile development is the process of designing and building applications for smartphones and tablets, utilizing platform-specific languages like Swift and Kotlin or cross-platform frameworks such as React Native and Flutter.",
            desc3: "Graphic Designing: Graphic designing is the art of visually communicating ideas through the creation of compelling designs using tools like Adobe Creative Cloud, encompassing areas such as logo design, branding, and user interface design.",
            desc4 : "Digital Marketing: Digital marketing encompasses strategies and techniques to promote products or services online, including SEO, social media marketing, email campaigns, and analytics, with the goal of reaching and engaging a target audience.",
            cover: "https://www.chandigarhhelp.com/wp-content/uploads/2019/04/List-of-Software-Development-Companies-in-Chandigarh.jpg"
        }
    ]

    return (
        <div>
            <section className="AboutSection topMargin">
                <div className="container flex">
                    {
                        data.map((value) => {
                            return (
                                <>
                                    <div className="left mtop">
                                        <div className="heading">
                                            <h3>About Us</h3>
                                            <h1>{value.title}</h1>
                                        </div>
                                        <p className='description'>{value.desc2}</p>
                                        <p className='description'>{value.desc2}</p>
                                        <p className='description'>{value.desc3}</p>
                                        <p className='description'>{value.desc4}</p>
                                    </div>
                                        <div className="img">
                                            <img src={value.cover} alt="" />
                                        </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default About
