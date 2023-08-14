import React from "react";
import { createContext, useEffect, useState } from "react";
import {
  getDepartment,
  getDepartmentPrograms,
  getUniversity,
  updateUniversity,
  updateDepartment,
  addUpdatePEOService,
  getPeo,
  addUpdatePLOService,
  getPlo,
  addSurveyService,
  updateProgramService,
} from "../services/university.service";
import { departmentId, universityId, programId } from "../constants";

export const AppContext = createContext({});

const ContextProvider = ({ children }) => {
  const [university, setUniversity] = useState(null);
  const [department, setDepartment] = useState(null);
  const [programs, setPrograms] = useState(null);
  const [currentProgram, setCurrentProgram] = useState(null);
  const [currentPeo, setCurrentPeo] = useState(null);
  const [currentPlo, setCurrentPlo] = useState(null);
  const [currentSurvey, setCurrentSurvey] = useState({
    _id: { $oid: "64d90f9109300156cc95d7c5" },
    survey: "Employer survey",
    user: "Teacher",
    plos: [
      {
        name: "testimonial 1",
        questions: [
          {
            statement: "how are you?",
            show: true,
            _id: { $oid: "64d90f9109300156cc95d7c7" },
          },
          {
            statement: "doing good?",
            show: true,
            _id: { $oid: "64d90f9109300156cc95d7c8" },
          },
        ],
        _id: { $oid: "64d90f9109300156cc95d7c6" },
      },
      {
        name: "testimonial 2",
        questions: [
          {
            statement: "should we start?",
            show: true,
            _id: { $oid: "64d90f9109300156cc95d7ca" },
          },
        ],
        _id: { $oid: "64d90f9109300156cc95d7c9" },
      },
    ],
    created_at: { $date: "2023-08-13T17:14:57.931Z" },
    updated_at: { $date: "2023-08-13T17:14:57.931Z" },
    __v: 0,
  });

  const fetchUniversity = async () => {
    const university = await getUniversity(universityId);
    university && setUniversity(university);
  };

  const fetchDepartment = async () => {
    const department = await getDepartment(departmentId);
    department && setDepartment(department);
  };

  const fetchPeo = async () => {
    const peo = await getPeo(programId, departmentId);
    peo && setCurrentPeo(peo);
  };

  const fetchPlo = async () => {
    const plo = await getPlo(programId, departmentId);
    plo && setCurrentPlo(plo);
  };

  const fetchDepartmentPrograms = async () => {
    const programs = await getDepartmentPrograms(departmentId);
    if (programs) {
      setPrograms(programs);
      setCurrentProgram(programs[0]);
    }
  };

  const addUpdatePEO = async (peo) => {
    const updatedPEO = await addUpdatePEOService(peo);
    updatedPEO && setCurrentPeo(updatedPEO);
  };

  const addUpdatePLO = async (plo) => {
    const updatedPLO = await addUpdatePLOService(plo);
    updatedPLO && setCurrentPlo(updatedPLO);
  };

  const updateUniversityById = async (updatedUni) => {
    const updatedUniversity = await updateUniversity(universityId, updatedUni);
    updatedUniversity && setUniversity(updatedUniversity);
  };

  const updateDepartmentById = async (updatedDep) => {
    const updatedDepartment = await updateDepartment(departmentId, updatedDep);
    updatedDepartment && setDepartment(updatedDepartment);
  };

  const updateProgramById = async (updatedProg) => {
    const updatedProgram = await updateProgramService(programId, updatedProg);
    updatedProgram && setCurrentProgram(updatedProgram);
  };

  const addNewSurvey = async (survey) => {
    const newSurvey = await addSurveyService(survey);
    if (newSurvey) {
      setCurrentSurvey(newSurvey);
      console.log({ newSurvey });
      return newSurvey;
    }
  };

  useEffect(() => {
    fetchUniversity();
    fetchDepartment();
    fetchDepartmentPrograms();
    fetchPeo();
    fetchPlo();
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
        addUpdatePEO,
        currentPeo,
        addUpdatePLO,
        currentPlo,
        addNewSurvey,
        currentSurvey,
        updateProgramById
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
