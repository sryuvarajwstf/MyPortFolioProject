import React from "react";

const Experience = () => {
  return (
    <>
      <div id="experience" className="mt-5" style={{display:"flex", justifyContent:"center"}}>
      <div className="p-5">
        <h1 className="text-white text-center p-5">
          Experience
        </h1>
        <ul className="text-white">
          <li style={{listStyle:"none"}}>
            <h4>
            Junior Developer
            <br />
            Triyam Information Technology
            <br />
            Jun.2022 - Jan.2024
            </h4>
          </li>
          <ul>
            <li>
              The major Product named “FOVEA” developed by using HTML, CSS,
              JavaScript, C# and Sql server
            </li>
            <li>
              I re-designed the UI of the whole product by using css and
              bootstrap with the team of three developers
            </li>
            <li>
              Another Project name “Bulk Tool” developed by using windows form,
              c# and sqls erver
            </li>
            <li>
              I worked in Bulk Tool project more than 5 major feature in like
              bulk documents upload, bulk registration and mainly worked with
              rapid upload document and etc.
            </li>
            <li>
              The Bulk tool was connected with FOVEA data base by using
              connection string Completed the four production release without QA
              bugs
            </li>
            <li>
              Provide technical support for debugging and trouble shooting
              application issues Resolved test case problems through code
              handling by working closely with the QA team
            </li>
          </ul><br/>  
          <li style={{listStyle:"none"}}>
            <h4>
            Web Designer
            <br />
            Cross Hurdle Systems <br />
            Mar – Jun.2022
            <br />
            2019-2021
            </h4>
          </li>
          <ul>
            <li>Worked in two mobile app</li>
            <li>Worked here with the HTML, CSS and bootsrtap technologies</li>
            <li>Designed more than 20 pages</li>
            <li>
              Worked closely with team members and understand their needs and
              goals andtranslate them to effective design solutions
            </li>
            <li>
              Researched current trends in web design and implemented in
              projects
            </li>
          </ul>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Experience;
