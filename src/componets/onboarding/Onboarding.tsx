import { useState, useEffect } from "react";
import { PageStep } from "./PageRoute";
import PersonalInfo from "../PersonalInfo";
import Summary from "../Summary";
import Benefit from "../Benefit";
import { useFormik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import personalValidationSchema from "../validationSchema";

const Onboarding = (): any => {
  const [showPage, setShowPage] = useState(PageStep);
  const [isActive, setIsActive] = useState(0);
  const [personalInfom, setPersonalInfom] = useState<any>({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    email: "",
    phoneNumber: "",
    gender: "",
    insuranceNumber: "",
    file: "",
  });

  const personalFormik = useFormik({
    initialValues: personalInfom ,
    validationSchema: personalValidationSchema,
    onSubmit: (values: any) => {
      console.log(values);
      
    },
  });


  const activeStep = PageStep.find((step, index) => isActive === index);
  console.log(personalFormik.values);
  return (
    <div>
      <div>
        {showPage.map((page, index) => (
          <h1
            className=" p-4"
            style={{ display: isActive === index ? "block" : "none" }}
          >
            {page.title}
          </h1>
        ))}
      </div>
      <div>{isActive === 0 ? <PersonalInfo formik={personalFormik} /> : null}</div>
      <div>{isActive === 1 ? <Benefit /> : null}</div>
      <div>{isActive === 2 ? <Summary /> : null}</div>

     <div className="flex justify-end">
     <div className=" w-[240px]  flex gap-[40px] absolute bottom-0 ">
        <button onClick={() => setIsActive(isActive - 1)}
          className="bg-[#900000] py-2 px-4 block w-[100px] rounded-md"
          style={{ display: isActive === 0 ? "none" : "block" }}
        >
          Prev
        </button>
        <button className= "bg-[#900000] py-2 px-4 block w-[100px]  rounded-md"  onClick={() => setIsActive(isActive + 1)}>
          Next
        </button>
      </div>
     </div>
    </div>
  );
};

export default Onboarding;
