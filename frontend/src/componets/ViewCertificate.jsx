import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import signature from "../assets/x.png";
import certificate from "../assets/certificate.jpg";
import logo from "../assets/Uoj-logo.png";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import { useSelector } from "react-redux";
function ViewCertificate() {
  const params = useParams();
  const { id } = params;
  const studentsDatas = useSelector((state) => state.contacts);
  const studentData = studentsDatas.find((x) => x._id === id);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  const currentDate = mm + "/" + dd + "/" + yyyy;
  const createPDF = async () => {
    const pdf = new jsPDF("landscape", "pt", "a4");
    const data = await document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save("certifiate.pdf");
    });
  };
  return (
    <div>
      <Navigation />
      <div className="   m-4  w-11/12 m-auto">
        <div id="pdf" className=" ">
          <div className="m-2 p-2 relative">
            <img
              className="w-[805px] h-[555px]"
              src={certificate}
              alt="certificate"
            />
            <div className="absolute top-14 left-0 right-0 px-16  w-[817px]  ">
              <div className="flex items-center justify-between py-2">
                <div className="">
                  <img src={logo} alt="logo" className="w-[50px]" />
                </div>
                <div className="">
                  <img
                    src={studentData?.profilePhoto}
                    alt="logo"
                    className="w-[50px] rounded"
                  />
                </div>
              </div>
              <h1 className="font-bold  text-center pb-4">
                Certificate of Graduation
              </h1>
              <p>
                This is to certify that{" "}
                <span className="font-bold">
                  {studentData.firstName} &nbsp;
                  {studentData.lastName}
                </span>{" "}
                has satisfactorily fulfilled all the graduation requirements
                from Juba University.
              </p>

              <p className="text-[16px]">
                Field of Study: {studentData.courseCompleted} <br /> Grade
                Obtained:&nbsp;
                {studentData.gradeObtain}
              </p>

              <p className="text-[16px]">
                Years of Study: from {studentData.startedYear} to{" "}
                {studentData.completeYear}
              </p>

              <br />
              <p className="text-[12px]">
                We extend our warmest congratulations to{" "}
                <strong>
                  {studentData.firstName} &nbsp;
                  {studentData.lastName}&nbsp;
                </strong>{" "}
                for {studentData.sex === "Female" ? "her" : "his"} exceptional
                achievement. Throughout{" "}
                {studentData.sex === "Female" ? "her" : "his"} academic journey,
                they have demonstrated diligence and motivation, which are
                commendable qualities. We have full confidence in{" "}
                {studentData.sex === "Female" ? "her" : "his"} ability to
                accomplish great things in all{" "}
                {studentData.sex === "Female" ? "her" : "his"} future pursuits.
              </p>

              <div className="flex justify-between items-center">
                <div className="">
                  {/* <p className="pt-4">(Official Seal)</p> */}
                  <img
                    src={signature}
                    alt="signature"
                    className="w-[120px] h-[40px]"
                  />
                  <p>President/Chancellor</p>
                  <p className="font-bold">John Akec</p>
                  <p className="">Date:&nbsp;{currentDate}</p>
                </div>
                <div className="">Certificate No:&nbsp;{studentData._id}</div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={createPDF}
          type="button"
          className="   bg-blue-400 text-white rounded font-bold p-2 text-center  my-4"
        >
          Download my Certificate
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ViewCertificate;
