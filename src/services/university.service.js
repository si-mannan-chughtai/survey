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

export const updateDepartment = async (id, payload) => {
  try {
    const updatedDepartment = await http.post(`/department/${id}`, payload);
    return updatedDepartment.data.department;
  } catch (error) {
    console.log(error);
    return null;
  }
};
