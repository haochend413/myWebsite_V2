"use client";

import Item from "./_components/experience-item";
import styles from "./projects.module.css";

function Experiencepage() {
  return (
    <>
      <p className="box">
        I am keen on participating in projects, academic researches and
        internships to improve my skills and widen my horizon. I am currently
        seeking for opportunities in ECE related fields.
      </p>

      {/* align, imglink, imgname, project_title, project_description, Project_link */}
      {/* this can be done with .map() function; */}
      <div className={styles["gallery-container"]}>
        <Item
          onClick={() => 1}
          align={0}
          imglink={"/PID_HGV_1.png"}
          imgname={"PID_HGV"}
          project_title={"PID AGV"}
          project_description={
            "Using hardware components to achieve obstacle sensing and smooth speed change. (ECE 198)"
          }
          Project_link={"/ECE_198_Final_Report.pdf"}
        />
        <Item
          onClick={() => 1}
          align={1}
          imglink={"/FFT_Calculator_1.png"}
          imgname={"FFT"}
          project_title={"FFT Calculator"}
          project_description={
            "Rust-based FFT calculator with SIMD and multithread optimization (CS 199-128)"
          }
          Project_link={"https://github.com/haochend413/FFT-Calculator"}
        />
        <Item
          onClick={() => 1}
          align={0}
          imglink={"/MBSe MTT.jpg"}
          imgname={"MTT"}
          project_title={
            "Synthesis of MBSe and Application in Photodynamic Therapy"
          }
          project_description={
            "Synthesized MBSe photosensitizer and studied its therapeutic effects."
          }
          Project_link={
            "/Synthesis of Selenomethylene Blue and its Application in Type I, II Photodynamic Therapy.pdf"
          }
        />
      </div>
    </>
  );
}

export default Experiencepage;
