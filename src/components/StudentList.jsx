import React from 'react';
import AttendanceToggle from './AttendanceToggle';
import { deleteStudent } from '../services/api';

const StudentList = ({ students, onUpdate }) => {
    const handleDelete = async (studentId) => {
        if (!window.confirm('Are you sure you want to delete this student?')) {
            return;
        }

        try {
            await deleteStudent(studentId);
            if (onUpdate) {
                onUpdate();
            }
        } catch (error) {
            console.error('Failed to delete student:', error);
            alert('Failed to delete student. Please try again.');
        }
    };

    if (students.length === 0) {
        return (
            <div className="card animate-fade-in">
                <div className="text-center" style={{ padding: '3rem 1rem' }}>
                    <div style={{
                        fontSize: '4rem',
                        marginBottom: '1rem',
                        opacity: 0.5
                    }}>
                        📚
                    </div>
                    <h3 style={{ color: 'var(--text-secondary)' }}>
                        No students added yet
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                        Add your first student using the form above
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="card animate-fade-in">
            <div className="card-header">
                <h2>Student List</h2>
            </div>

            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Roll No</th>
                            <th>Student Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id || student._id} style={{
                                animationDelay: `${index * 0.05}s`,
                                animation: 'slideIn 0.5s ease'
                            }}>
                                <td>
                                    <strong style={{ color: 'var(--text-primary)' }}>
                                        {student.rollNo}
                                    </strong>
                                </td>
                                <td>
                                    <strong style={{ color: 'var(--text-primary)' }}>
                                        {student.name}
                                    </strong>
                                </td>
                                <td>
                                    <span className={`badge ${student.isPresent ? 'badge-present' : 'badge-absent'}`}>
                                        {student.isPresent ? '✓ Present' : '✗ Absent'}
                                    </span>
                                </td>
                                <td>
                                    <AttendanceToggle
                                        student={student}
                                        onAttendanceUpdate={onUpdate}
                                    />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(student.id || student._id)}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        🗑️ Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentList;
