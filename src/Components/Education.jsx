import React from "react";

const Coursename1 = "B.Tech, Computer Science and Engineering";
const ClgOrSchoolName1 = "University College of Engineering and Technology, MGU";
const duration1 = "2021-2025";
// You can add it ...
// const Coursename2 = "";
// const ClgOrSchoolName2 = "";
// const duration2 = "";
const Education = () => {
  return (
    <section className="light" id="education">
      <div
        className="edu"
        style={{
          backgroundColor: "whitesmoke",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Education</h2>
        <ul>
          <li>
            <p className="large">{Coursename1}</p>
            <p className="large">{ClgOrSchoolName1} </p>
            <p>{duration1}</p>
          </li>
          {/* <li>
            <p className="large">{Coursename2}</p>
            <p className="large">{ClgOrSchoolName2} </p>
            <p>{duration2}</p>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
export default Education;
