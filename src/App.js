import { useEffect, useState } from 'react';

import Image1 from './assets/scrollPhotos/programming.webp';
import Image2 from './assets/scrollPhotos/buildingRocket.webp';
import Image3 from './assets/scrollPhotos/curtinGroupPhoto.webp';
import Image4 from './assets/scrollPhotos/hackathonGroup.webp';
import Image5 from './assets/scrollPhotos/diatechAlex.webp';
import Image6 from './assets/scrollPhotos/nearAstronaut.webp';
import Image7 from './assets/scrollPhotos/buildingLego.webp';

import ResumeBlock from './Resume';

import './App.css';

const testimonials = [
  {
    name: "Mr. Ateeb Mohammed",
    description: "Digital Design teacher",
    content: `Hafid is a truly exceptional individual who stands out as an ace student in our program. Hafid is not only an outstanding coder and digital designer but also a remarkably respectful and diligent student.
    His technical skills in coding and designing digital products are nothing short of impressive. Hafid consistently demonstrates a deep understanding of complex concepts and an ability to apply them creatively. His projects have consistently displayed innovation and a keen eye for design aesthetics.
    Hafid has been an asset throughout the MYP Digital Design course, and I have no doubt that his future holds remarkable achievements in the world of coding and digital design.`
  },
  {
    name: "Ruhaan Malhotra",
    description: "Capture@DIA president, DIAPAIR co-founder, Ecoclub head of events",
    content: "Throughout my working relationship with Hafid, I have been consistently impressed by his attention to detail, sheer work ethic, and distinguished passion; all of which he brings to the table regardless of the magnitude of the task. As such, Hafid has demonstrated excellent time management and digital design tropes, cultivating his knowledge through applications, whilst educating the rest of the DIAPAIR team through insightful anecdotes. I truly recommend Hafid as a staple of any initiative, and do wish him the best in his future endeavours."
  },
  {
    name: "Atharva Khule",
    description: "DIAPAIR co-founder",
    content: "Hafid is a great team member, demonstrating a great skillset. Amongst which, his fullstack development skills are to be noted. He has played an essential role to the development of our ogranization, and is a key member of the team. He is able to accurately comprehend requests from us as non-developers, which, from experience is probably the hardest part. Understanding is something that is quintessential to a developer and hafid embodies this nature. As a Developer, Hafid also requires Critical Thinking skills, and time-management, which he has demonstrated in his time with us. He is able to develop a website that we thought would be quite challenging. He utilizes his skillset in an efficient manner allowing for highly intricate and systematically organized websites, which look highly professional. Furthermore, Hafid is able to develop not only the frontend, but also the backend of a complex website, which is very challenging for one person. I think very highly of Hafid and wish him the best in his years ahead."
  },
  {
    name: "Mayankh Agarwal",
    description: 'F1 Debates developer, competitive programmer',
    content: "I have spent time and worked with Hafid on multiple occasions, including hackathons and projects. Throughout the time I've known him, he's been generous, helpful, and a fantastic friend. His dedication, discipline, and knowledge show in every task he undertakes. Hafid has a very strong work ethic and I wish him success and luck for the future."
  },
  {
    name: "Fadil Eledath",
    description: "Electrical Engineer, DMC, Inc.",
    content: "I told Hafid I made a fancy portfolio for myself in React and of course that meant that he had to immediately make one that was better in every single way. He just couldn’t let me win this one little thing."
  }
]

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
          entry.target.classList.add("show");
         }
      });
    });

    const hiddenElements = document.querySelectorAll(".Resume h2, .Resume h3, .Resume p");
    hiddenElements.forEach((el) => observer.observe(el));
  }, [])

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const incrementTestimonial = () => {
    setTestimonialIndex(testimonialIndex + 1 < testimonials.length ? testimonialIndex + 1 : 0);
  }

  const decrementTestimonial = () => {
    setTestimonialIndex(testimonialIndex - 1 >= 0 ? testimonialIndex - 1: testimonials.length - 1);
  }

  return (
    <div className="App" style={{"--scroll-position": scrollTop}}>
      <div id="hero">
        <h1>HAFID</h1>
        <h2 id='subheader'>Full-Stack Web-Developer and Programmer</h2>

        <h2 id="scrollReminder">Scroll! Scroll!</h2>
      </div>

      <main>
        <div id="carousel">
          <div className="carousel-item" style={{"--index": 1}}>
            <div className='caption'>
              <p>busybusy.jpg</p>
              <div className="symbols-wrapper">
                <span className="material-symbols-outlined">remove</span>
                <span className="material-symbols-outlined">check_box_outline_blank</span>
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>
            <img src={Image1} alt="Carousel image" />
          </div>
          <div className="carousel-item" style={{"--index": 2}}>
            <div className='caption'>
              <p>cool-3d-print.jpg</p>
              <div className="symbols-wrapper">
                <span className="material-symbols-outlined">remove</span>
                <span className="material-symbols-outlined">check_box_outline_blank</span>
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>
            <img src={Image2} alt="Carousel image" />
          </div>
          <div className="carousel-item" style={{"--index": 3}}>
            <div className='caption'>
              <p>lets_win_this.jpg</p>
              <div className="symbols-wrapper">
                <span className="material-symbols-outlined">remove</span>
                <span className="material-symbols-outlined">check_box_outline_blank</span>
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>
            <img src={Image3} alt="Carousel image" />
          </div>
          <div className="carousel-item" style={{"--index": 4}}>
            <div className='caption'>
              <p>hackathon_group.jpg</p>
              <div className="symbols-wrapper">
                <span className="material-symbols-outlined">remove</span>
                <span className="material-symbols-outlined">check_box_outline_blank</span>
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>
            <img src={Image4} alt="Carousel image" />
          </div>
          <div className="carousel-item" style={{"--index": 5}}>
            <div className='caption'>
              <p>won_diatechbackend_YAY.jpg</p>
              <div className="symbols-wrapper">
                <span className="material-symbols-outlined">remove</span>
                <span className="material-symbols-outlined">check_box_outline_blank</span>
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>
            <img src={Image5} alt="Carousel image" />
          </div>
          <div className="carousel-item" style={{"--index": 6}}>
            <div className='caption'>
              <p>cool_astronaut.png</p>
              <div className="symbols-wrapper">
                <span className="material-symbols-outlined">remove</span>
                <span className="material-symbols-outlined">check_box_outline_blank</span>
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>
            <img src={Image6} alt="Carousel image" />
          </div>
          <div className="carousel-item" style={{"--index": 7}}>
            <div className='caption'>
              <p>littleProgrammer.jpg</p>
              <div className="symbols-wrapper">
                <span className="material-symbols-outlined">remove</span>
                <span className="material-symbols-outlined">check_box_outline_blank</span>
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>
            <img src={Image7} alt="Carousel image" />
          </div>
        </div>

        <h2>Hey, my name's Hafid. And for the past <span className="gradient">six years</span>, I've been in love with everything Compsci.</h2>

        <div className="testimonial">
          <span className="material-symbols-outlined arrow" onClick={decrementTestimonial}>navigate_before</span>
          <span className="material-symbols-outlined arrow" onClick={incrementTestimonial}>navigate_next</span>
          <h2>{testimonials[testimonialIndex].name}</h2>
          <h3>{testimonials[testimonialIndex].description}</h3>
          <p>{testimonials[testimonialIndex].content}</p>
        </div>

        <ResumeBlock />
      </main>

      <footer><span className="material-symbols-outlined">copyright</span> 2023 Hafid Eledath | contact: dia210210@diaestudents.com</footer>
    </div>
  );
}

export default App;