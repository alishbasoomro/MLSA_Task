/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../office.jpeg";

const imageAltText = "desktop with book and coffee on table";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My A&A Movie Ticket Booking(UI/UX Project)",
    description:
      "Discover the future of movie ticket booking with A&A - a sleek prototype app designed to redefine your cinema experience. Seamlessly browse movies, check showtimes, and reserve seats with ease. Stay tuned for updates as we continue to perfect your ticket booking journey. Say goodbye to long queues and hello to hassle-free cinema experiences. ",
    url: "https://alishbasoomro.github.io/UI-UX-project/ ",
  },
  {
    title: "Games related to Computer Networks",
    description:
      "Explore the intersection of gaming and computer networks. Enhance your understanding of computer networks while immersing yourself in thrilling gameplay. Get ready to level up your knowledge with games related to computer networks.",
    url: "https://alishbasoomro.github.io/Games/"
  },
  {
    title: "My Portfolio Site",
    description:
      "Elevate your brand with stunning visuals and innovative design solutions showcased in my graphic design portfolio. From logos to web graphics, I bring creativity to life, one pixel at a time.",
    url: "https://alishbasoomro.github.io/Portfolio/",
  },
  {
    title: "My Resume",
    description:"Dedicated and detail-oriented professional with expertise in Designing, leadership and volunteering.",
    url: " https://alishbasoomro.github.io/resume/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
