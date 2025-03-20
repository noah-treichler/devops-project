import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Replace with your backend URL
});

export const getCourses = () => api.get('/courses');
export const getCourseGpaTrends = (courseId) => api.get(`/courses/${courseId}/gpa-trends`);
export const getProfessorGpaTrends = (professorId) => api.get(`/professors/${professorId}/gpa`);

export default api;