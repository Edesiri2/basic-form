
const PersonalInfo  = ({ formik }: any) => {
   
  return (
    <div className="h-screen">
      <div className="bg-gray-100 flex flex-col gap-4 p-4  ">
        <div className="flex gap-4">
          <input
            className="py-3 px-4 block w-full"
            type="text"
            onChange={formik.handleChange}
            defaultValue={formik.values?.firstName}
            name="firstName"
            placeholder="first name"
          />
          {formik.errors.firstName && formik.touches.firstName  && (
            <p className="text-red">{formik.errors.firstName}</p>
          )}
          <input
            className="py-3 px-4 block w-full"
            type="text"
            onChange={formik.handleChange}
            defaultValue={formik.values.lastName}
            name="lastName"
            placeholder="last name"
          />
          <input
            className="py-3 px-4 block w-full"
            type="text"
            onChange={formik.handleChange}
            defaultValue={formik.values?.middleName}
            name="middleName"
            placeholder="middle name"
          />
        </div>
        <div className="flex gap-4 ">
          <input
            className=" py-3 px-4 block w-full"
            type="text"
            onChange={formik.handleChange}
            defaultValue={formik.values?.email}
            name="email"
            placeholder="email"
          />
          <input
            className="py-3 px-4 block w-full"
            type="number"
            onChange={formik.handleChange}
            defaultValue={formik.values?.phoneNumber}
            name="phoneNumber"
            placeholder="+234 xxx xxx xxx"
          />
          <input
            className=" py-3 px-4 block w-full"
            type="date"
            onChange={formik.handleChange}
            defaultValue={formik.values?.dob}
            name="dob"
            placeholder="dob"
          />
        </div>
        <div className="flex gap-4 ">
          <input
            className=" py-3 px-4 block w-full"
            type="number"
            onChange={formik.handleChange}
            defaultValue={formik.values?.insuranceNumber}
            name="insuranceNumber"
            placeholder="Insurance Number"
          />
          <select name="gender" onChange={formik.handleChange} defaultValue={formik.values?.gender} className=" py-3 px-4 block w-full">
            <option className="">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input
            className=" bg-slate-400 py-3 px-4 block w-full"
            type="file"
            defaultValue={formik.values.file}
            onChange={formik.handleChange}
            name="file"
            placeholder="choose file"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
