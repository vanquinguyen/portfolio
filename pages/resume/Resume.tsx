import React from "react";
import Image from "next/image";
import Avatar from "../../public/resume.jpg";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.resume}>
      <div className={styles.resume__content}>
        <h1>Hi, I am Itachi, Software Engineer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et,
          quaerat pariatur molestias quasi eligendi ab. Quibusdam repudiandae,
          eum ducimus corporis odit, magnam ullam dolor molestias inventore illo
          aspernatur quis!
        </p>
        <button>Download Resume</button>
      </div>
      <div className={styles.image}>
        <Image src={Avatar} alt="Avatar" className={styles.imageSize}/>
      </div>
    </div>
  );
};

export default Resume;
