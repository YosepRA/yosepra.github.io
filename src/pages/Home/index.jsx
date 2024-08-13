import React from 'react';

import ProjectCard from '@components/ui/ProjectCard/index.jsx';
import BlogCard from '@components/ui/BlogCard/index.jsx';

import homeStyles from './styles/home.module.scss';

const Home = function HomeComponent() {
  return (
    <>
      <section className="hero">
        <div className="hero__left">
          <h1>A Simple Man Who Loves to Create</h1>

          <div className="hero__tech-stack">
            <div>Tech</div>
            <div>Tech</div>
            <div>Tech</div>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__intro">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus esse officia molestias hic ipsa a dignissimos repellat
              error at non? Porro pariatur nisi reprehenderit corporis totam
              repellat architecto aperiam enim!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
              labore.
            </p>
          </div>

          <div className="hero__action">
            <button type="button">Projects</button>
            <button type="button">Contact</button>
          </div>
        </div>
      </section>

      <section className="project-list">
        <h2>What I Have Built so Far</h2>

        <div>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        <button type="button">More</button>
      </section>

      <section className="blog-list">
        <h2>Latest News</h2>

        <div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <button type="button">More</button>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
      </section>
    </>
  );
};

export default Home;
