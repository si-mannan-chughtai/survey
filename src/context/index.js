import React from "react";
import { createContext, useEffect, useState } from "react";
import {
  getDepartment,
  getDepartmentPrograms,
  getUniversity,
  updateUniversity,
  updateDepartment,
} from "../services/university.service";
import { departmentId, universityId } from "../constants";

export const AppContext = createContext({});

const ContextProvider = ({ children }) => {
  const [university, setUniversity] = useState(null);
  const [department, setDepartment] = useState(null);
  const [programs, setPrograms] = useState(null);
  const [currentProgram, setCurrentProgram] = useState(null);

  const fetchUniversity = async () => {
    const university = await getUniversity(universityId);
    university && setUniversity(university);
  };

  const fetchDepartment = async () => {
    const department = await getDepartment(departmentId);
    department && setDepartment(department);
  };

  const fetchDepartmentPrograms = async () => {
    const programs = await getDepartmentPrograms(departmentId);
    if (programs) {
      setPrograms(programs)
      setCurrentProgram(programs[0]);
    }
  };

  const updateUniversityById = async (updatedUni) => {
    const updatedUniversity = await updateUniversity(universityId, updatedUni);
    console.log("updateUniversityById IN : ", { updateUniversity })
    updatedUniversity && setUniversity(updatedUniversity);
  };

  const updateDepartmentById = async (updatedDep) => {
    console.log({updatedDep})
    const updatedDepartment = await updateDepartment(departmentId, updatedDep);
    
    updatedDepartment && setDepartment(updatedDep);
  };

  useEffect(() => {
    fetchUniversity();
    fetchDepartment();
    fetchDepartmentPrograms();
  }, []);

  return (
    <AppContext.Provider
      value={{
        university,
        department,
        programs,
        updateUniversityById,
        updateDepartmentById,
        currentProgram,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
