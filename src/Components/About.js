import React from 'react';
import { motion } from 'framer-motion';
import burgerimg from '../Assets/Menu/Burger13.webp';
import burger2 from '../Assets/Menu/Burger14.webp';
import burger3 from '../Assets/Menu/Burger_12.webp';

function About() {
  return (
    <section className="about">
      <div className="container text-center">
        <div className="row">
          {/* Main Image */}
          <div className="col-12 my-4">
            <motion.img
              src={burgerimg}
              alt="burger"
              width={400}
              className="d-block mx-auto"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1,delay:0.01 }}
            />
          </div>

          {/* Left Side Image */}
          <div className="col-sm-7 col-md-4 col-lg-4">
            <motion.img
              src={burger2}
              alt="burger"
              width={200}
              className="d-block mx-auto"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </div>

          {/* Center Text */}
          <div className="col-sm-7 col-md-4 col-lg-4 my-4">
            <motion.h2
              className="text-warning fw-bold "
              style={{ fontSize: "50px" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              BETTER FOOD FOR ALL PEOPLE<br/> <span className='text-dark '>SINCE 2017</span>
            </motion.h2>
          </div>

          {/* Right Side Image */}
          <div className="col-sm-7 col-md-4 col-lg-4 my-5">
            <motion.img
              src={burger3}
              alt="burger"
              width={500}
              className="d-block mx-auto"
              style={{ transform: "rotate(50deg)" }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* About Content */}
        <motion.h2
          className="mt-5 fw-bold fs-1 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ABOUT BURGER HOUSE
        </motion.h2>

        <motion.p
          className="fs-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Burger House is a fast-growing food brand dedicated to delivering the
          perfect burger experience. Founded on the belief that great food begins
          with great ingredients, we are committed to using only the freshest
          produce, premium meats, and carefully blended spices to craft our
          signature burgers. Each meal is made with care, ensuring a balance of
          flavor and quality.
        </motion.p>

        <motion.p
          className="fs-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Burger House aims to create a welcoming space where people can come
          together. Whether it’s families sharing dinner, friends enjoying a
          casual outing, or individuals stopping by for a quick meal, we provide
          more than just food—we create moments.
        </motion.p>

        <motion.p
          className="fs-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Our menu is designed to suit every taste, featuring not only burgers
          but also sides, beverages, and seasonal specials. Yet at the heart of
          everything we do is our promise of freshness, consistency, and passion
          for flavor. As Burger House continues to grow, we remain focused on
          our mission: to serve happiness, one burger at a time, while building
          trust and long-lasting connections with our community.
        </motion.p>
        <motion.h4 className=' fs-4 w-25 mx-auto mb-5 '
         initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
            <div className='abouttext'>
            <span className='bi bi-emoji-smile   '>Think Burger,<br/>Think Burger House</span>
            </div></motion.h4>
      </div>
    </section>
  );
}

export default About;
