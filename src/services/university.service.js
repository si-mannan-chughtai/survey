import http from "./http.service";

export const getUniversity = async (id) => {
  try {
    const university = await http.get(`/university/${id}`);
    return university.data.university;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getDepartment = async (id) => {
  try {
    const department = await http.get(`/department/${id}`);
    return department.data.department;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getDepartmentPrograms = async (id) => {
  try {
    const programs = await http.get(`/department/programs/${id}`);
    return programs.data.programs;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateUniversity = async (id, payload) => {
  try {
    const updatedUniversity = await http.patch(`/university/${id}`, payload);
    return updatedUniversity.data.university;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateProgramService = async (id, payload) => {
  try {
    const updatedProgram = await http.post(
      `/program/addUpdateMission/${id}`,
      payload
    );
    return updatedProgram.data.program;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateDepartment = async (id, payload) => {
  try {
    const updatedDepartment = await http.patch(`/department/${id}`, payload);
    return updatedDepartment.data.department;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addUpdatePEOService = async (payload) => {
  try {
    const updatedPEO = await http.post(`/program/addUpdatePEO`, payload);
    return updatedPEO.data.updatedPeo;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addUpdatePLOService = async (payload) => {
  try {
    const updatedPLO = await http.post(`/program/addUpdatePLO`, payload);
    return updatedPLO.data.updatedPlo;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPeo = async (programId, departmentId) => {
  try {
    const updatedPEO = await http.get(
      `/program/getPeo/${programId}/${departmentId}`
    );
    return updatedPEO.data.peo;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPlo = async (programId, departmentId) => {
  try {
    const updatedPLO = await http.get(
      `/program/getPlo/${programId}/${departmentId}`
    );
    return updatedPLO.data.plo;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addSurveyService = async (newSurvey) => {
  try {
    const survey = await http.post(`/survey/addSurvey`, newSurvey);
    return survey.data.survey;
  } catch (error) {
    console.log(error);
    return null;
  }
};
