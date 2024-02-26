import React from 'react';
import './Service.css'

const Services = () => {

 
const data = [
  {
    id: '01',
    heading: 'Web Designing And Development',
    desc: 'Many websites choose to display a short explanatory text in a prominent position of their web page layouts to inform visitors what the purpose of the site is. This introductory text, when crafted well, can help users quickly decide whether they’re in the right place or not.  The field encompasses a broad range of tasks including everything from coding, to technical design, to the performance of a website or application running on the internet.'
  },
  {
    id: '02',
    heading: "Mobile App Solutions",
    desc: "Android App Development, React Native App Development, Flutter App Development, IOS/iPhone App Development",
  },
  {
    id: '03',
    heading: "Web Development Solutions",
    desc: "Custom Application Development, Content, Management System(CMS), Ecommerce Development, MERN Stack Development, MEAN Stack Development, Social Media Apps.",
  },
  {
    id: '04',
    heading: 'Mobile App Development',
    desc: 'Web development is the act of building, creating and maintaining websites. The field encompasses a broad range of tasks including everything from coding, to technical design, to the performance of a website or application running on the internet'
  },
  {
    id: '05',
    heading: "Digital Marketing Services",
    desc: "Inbound Marketing, SEO, SEM & PPC, Social Media Optimization, Analystics Consultation, Online Reputation Management, Content Marketing, Email Marketing.",
  },
  {
    id : '06',
    heading : "Graphic Designing and Branding",
    desc : "Logo & Brand Identity, Graphic Design, Explainer Videos, Infographics Design, Print Design, Creative Content Writing.",
  }
];

return (
  <div>
    <section className="about">
        <div className="container grid">
          {
            data.map((value) => {
              return(
                <div className="box flex">
                  <div className="text">
                    <h1>{value.id}</h1>
                  </div>
                  <div className="para">
                    <h2>{value.heading}</h2>
                    <p>{value.desc}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
    </section>
  </div>
)
}

export default Services;
