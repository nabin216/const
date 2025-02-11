import React from "react";
import Title from "./Title";
import "../Styles/AboutUsPage.css";
import qualityImage1 from "../assets/about-best-cost.png";
import qualityImage2 from "../assets/about-best-quality.png";
import qualityImage3 from "../assets/about-best-rated.png";
import aboutCompanyBanner from "../assets/about-banner.png";
import director1 from "../assets/worker.webp";
import director2 from "../assets/worker2.avif";

export default function AboutUsPage() {
  return (
    <>
      <Title content="About Us" />
      <div className="about-company-container">
        <div className="about-company">
          <div>
            <h3>
              <span className="yellow-text">INNOVATIVE</span> AND QUALITY DRIVEN
              COMPANY
            </h3>
            <div className="about-company-info-para">
              <p>
                Welcome to Uttara Construction, where a commitment to excellence
                and innovation drives everything we build. With a strong
                foundation in the construction industry, we have been shaping
                environments, exceeding expectations, and delivering
                high-quality structures that stand the test of time. Our team of
                highly skilled architects, engineers, and craftsmen is dedicated
                to bringing expertise, precision, and creativity to every
                project.
                <br />
                At Uttara Construction, we take pride in our diverse portfolio,
                which spans residential, commercial, and industrial
                developments, reflecting our ability to turn visions into
                reality. Our journey is defined by integrity, innovation, and an
                unwavering focus on client satisfaction, earning us a trusted
                reputation in the construction industry.
                <br />
                As we continue to grow, our commitment to quality, efficiency,
                and cutting-edge construction technologies remains at the core
                of our work. We strive to set new benchmarks for excellence and
                invite you to partner with us on a journey where expertise meets
                innovation.
                <br />
              </p>
            </div>
          </div>
        </div>
        {/* <div className="about-companny-banner">
          <img src={aboutCompanyBanner} alt="" />
        </div> */}
      </div>
      <section className="quality-bar">
        <div className="quality">
          <div className="quality-box">
            <div className="quality-image">
              <img src={qualityImage1} alt="" />
            </div>
            <div className="quality-details">
              <div className="quality-heading">TOP RATED</div>
              <div className="quality-info">
                On the other hand, we denounce with righteous indignation and
                dislike men who are
              </div>
            </div>
          </div>
          <div className="quality-box">
            <div className="quality-image">
              <img src={qualityImage2} alt="" />
            </div>
            <div className="quality-details">
              <div className="quality-heading">BEST QUALITY</div>
              <div className="quality-info">
                On the other hand, we denounce with righteous indignation and
                dislike men who are
              </div>
            </div>
          </div>
          <div className="quality-box">
            <div className="quality-image">
              <img src={qualityImage3} alt="" />
            </div>
            <div className="quality-details">
              <div className="quality-heading">LOW COST</div>
              <div className="quality-info">
                On the other hand, we denounce with righteous indignation and
                dislike men who are
              </div>
            </div>
          </div>
        </div>
      </section>

      <h3>
        <span className="yellow-text">The Strength of </span>Uttara Construction
      </h3>

      <div className="dirctor-message-container">
        <div className="directors-message">
          <h4 className="director-name">
            Skilled & Trained Workforce{" "}
            <span className="position">- Certified</span>{" "}
          </h4>
          <p>
            "At Uttara Construction, we believe that a strong foundation starts
            with a highly skilled and trained workforce. Our team consists of
            certified engineers, experienced architects, expert masons,
            electricians, plumbers, carpenters, and heavy machinery operators,
            all dedicated to delivering the highest standards of construction
            excellence. We invest in continuous training programs to keep our
            workers updated on modern construction techniques, safety protocols,
            and the latest industry innovations. This ensures that every project
            we undertake meets strict quality standards, durability, and
            precision."
          </p>
        </div>
        <div className="directors-image">
          <img src={director1} alt="" />
        </div>
      </div>
      <div className="dirctor-message-container">
        <div className="directors-message">
          <h4 className="director-name">
            Why Our Trained Workforce Matters<span className="position"></span>{" "}
          </h4>
          <p>
            "Our commitment to maintaining a safe and efficient work environment
            enables us to handle projects of all scales—whether it’s
            residential, commercial, or industrial construction. By adhering to
            international best practices, we ensure that our workforce is always
            ready to build a stronger, safer, and more sustainable future. With
            Uttara Construction, you can trust that your project is in the hands
            of trained professionals who bring expertise, dedication, and
            craftsmanship to every construction endeavor."
          </p>
        </div>
        <div className="directors-image">
          <img src={director2} alt="" />
        </div>
      </div>
    </>
  );
}
