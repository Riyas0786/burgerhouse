import React from 'react';
import { motion } from 'framer-motion';
import chennaiimage from '../Assets/BRANCH/chennaicentral.png';
import hyderabadimage from '../Assets/BRANCH/hyderabad.png';
import maduraiimage from '../Assets/BRANCH/madurai.png';
import bangaloreimage from '../Assets/BRANCH/bangalore.png';

const Branch = () => {
  return (
    <section className="header">
      <h2 className="text-center fw-bold  mt-2 my-3 fs-2">
        WE HAVE MULTIPLE BRANCHES </h2>
        <h2 className='text-center fw-bold text-warning  fs-2'>IN TOP CITIES OF INDIA
      </h2>
      <div className="container text-center">
        <div className="row py-5">

          {/* Chennai */}
          <div className="col-12 col-sm-7 col-md-6 col-lg-4 my-4">
            <motion.div
              className=" rounded p-4"
              style={{ height: '350px',boxShadow: "0px 8px 20px rgba(255, 174, 0, 0.39)"  }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(255, 174, 0, 0.39)" }}
            >
              <motion.img
                src={chennaiimage}
                alt="chennai"
                className="d-block mx-auto"
                width={200}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <h4 className="text-center text-warning mt-3">CHENNAI</h4>
              <p><i className="bi bi-shop-window"></i> 30+</p>
            </motion.div>
          </div>

          {/* Hyderabad */}
          <div className="col-12 col-sm-7 col-md-6 col-lg-4 my-4">
            <motion.div
              className="rounded  p-4"
              style={{ height: '350px',boxShadow: "0px 8px 20px rgba(255, 174, 0, 0.39)"  }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(255, 174, 0, 0.39)" }}
            >
              <motion.img
                src={hyderabadimage}
                alt="hyderabad"
                className="d-block mx-auto"
                width={200}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <h4 className="text-center text-primary mt-3">HYDERABAD</h4>
              <p><i className="bi bi-shop-window"></i> 30+</p>
            </motion.div>
          </div>

          {/* Madurai */}
          <div className="col-12 col-sm-7 col-md-6 col-lg-4 my-4">
            <motion.div
              className="rounded p-4"
              style={{ height: '350px',boxShadow: "0px 8px 20px rgba(255, 174, 0, 0.39)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(255, 174, 0, 0.39)" }}
            >
              <motion.img
                src={maduraiimage}
                alt="madurai"
                className="d-block mx-auto mt-3"
                width={200}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <h4 className="text-center text-success mt-3">MADURAI</h4>
              <p><i className="bi bi-shop-window"></i> 10+</p>
            </motion.div>
          </div>

          {/* Bangalore */}
          <div className="col-12 col-sm-7 col-md-6 col-lg-4 my-4">
            <motion.div
              className="rounded  p-4"
              style={{ height: '350px',boxShadow: "0px 8px 20px rgba(255, 174, 0, 0.39)"  }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(255, 174, 0, 0.39)"  }}
            >
              <motion.img
                src={bangaloreimage}
                alt="bangalore"
                className="d-block mx-auto"
                width={200}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <h4 className="text-center text-danger mt-3">BANGALORE</h4>
              <p><i className="bi bi-shop-window"></i> 25+</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Branch;
