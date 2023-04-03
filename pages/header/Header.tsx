import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      {/* <div className="d-flex justify-content-end align-items-center"> */}
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/blog" legacyBehavior>
        <a>Blog</a>
      </Link>
      <Link href="/work" legacyBehavior>
        <a>Work</a>
      </Link>
      {/* </div> */}
    </div>
  );
};

export default Header;
