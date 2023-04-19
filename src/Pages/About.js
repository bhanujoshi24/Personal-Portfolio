import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const { scaleXProgess } = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  console.log(scaleXProgess);
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      ></motion.div>
      <div className="about">
        <h2 className="mb-3">
          <br></br>
          <span className="contentele">About Us</span>
        </h2>
        <div>
          <p>Software Developer at Synpulse India with passion of coding. </p>
          <p>
            <font>ACCP (Avaloq Certified Customization professional)</font>{" "}
            certified with Major in core Technologies.{" "}
          </p>
          <p>
            Skills in Distributed Systems, Algorithm, Problem Solving, Java, Web
            Development, Sql, Avaloq Scripting Language.
          </p>
          <p>
            Strong engineering professional with a Bachelor degree focused in
            Computer Engineering
          </p>
        </div>
        <h2 className="mb-3">
          <span className="contentele">Corporate Experience</span>
        </h2>
        <div>
          <h4>
            <font>Synpulse</font>
          </h4>
          <h6>
            <p>
              Full-time · 1 yr 11 mos<br></br>
              Analyst, Software Engineer<br></br>{" "}
            </p>
            <font>External Client Project:</font>
            <br></br> HSBC Private Bank (Wealth Management) , Pune - India
            <br></br>
            <p>
              Project: GPR Asia Project , Go Live, Stabilization, Avaloq
              Upgrade, Avaloq Improvement [August 2021 - Present]
            </p>{" "}
            <br></br>Extended and enhanced the core business functionality of
            the Avaloq core banking system based on Oracle PL/SQL.
            <ul>
              <li>
                Analyse, design, and develop new functionalities, interface, and
                enhancements to the product core.
              </li>
              <li>
                Gathered an extensive hands-on for Avaloq Parameterization -
                Addition, Classes, Keys, Workflow Action, Context Action, Order
                validation, Access Security and an AMI part, etc.
              </li>
              <li>
                Developed File Upload task from scratch so user can perform Bulk
                Order Creation Responsibility
              </li>
              <li>
                Working on different types of financial products like Stock
                Exchange, FX Trade, FX Swap, OOFX, OOOT, Corporate Actions,
                Settlement, Reconciliation and many others as part of new
                requirements, bug fixing, parameterization and enhancements.
              </li>
              <li>
                Developed scripts related to user creation and providing access
                to relational and functional roles assigned to users.{" "}
              </li>
              <li>
                Comfortable working on different types of Avaloq sources ranging
                from Script Packages, Functions, Procedures, Code Tab, Doc
                Valid, BTC, Migr (before/after) Hist, XSD, NETW, MSG IN/OUT,
                TASK DEF, TASK TEMPL etc{" "}
              </li>
              <li>
                Gain better understanding of Private Banking and different
                parties involved in it ranging from BP, RM, Counter Parties,
                Custodians, communication channels like SWIFT etc.
              </li>
            </ul>
            <font>Internal Project:</font>
            <br></br> Synpulse8/Profect Gmph
            <br></br>Project: Business Radar v7 [February 2022 - Present]{" "}
            <br></br>
            <ul>
              <li>
                Designed and developed workflow for digital onboarding Customer
                and given POC to Business
              </li>
            </ul>
          </h6>
        </div>
      </div>
    </>
  );
};

export default About;
