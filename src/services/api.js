import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Get all students
export const getStudents = async () => {
    try {
        const response = await api.get('/students');
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Failed to fetch students';
    }
};

// Add new student
export const addStudent = async (studentData) => {
    try {
        const response = await api.post('/students', studentData);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Failed to add student';
    }
};

// Mark attendance
export const markAttendance = async (studentId, isPresent) => {
    try {
        const response = await api.put(`/students/${studentId}/attendance`, {
            isPresent,
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Failed to update attendance';
    }
};

// Delete student
export const deleteStudent = async (studentId) => {
    try {
        const response = await api.delete(`/students/${studentId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Failed to delete student';
    }
};

export default api;
