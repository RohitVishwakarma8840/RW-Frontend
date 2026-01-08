import React, { useState } from 'react';
import { addStudent } from '../services/api';

const AddStudentForm = ({ onStudentAdded }) => {
    const [formData, setFormData] = useState({
        name: '',
        rollNo: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear messages when user types
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name.trim() || !formData.rollNo.trim()) {
            setError('Name and Roll Number are required');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            await addStudent(formData);
            setSuccess('Student added successfully!');
            setFormData({ name: '', rollNo: '' });

            // Notify parent component
            if (onStudentAdded) {
                onStudentAdded();
            }

            // Clear success message after 3 seconds
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card animate-fade-in">
            <div className="card-header">
                <h2>Add New Student</h2>
            </div>

            {error && (
                <div className="alert alert-error">
                    ⚠️ {error}
                </div>
            )}

            {success && (
                <div className="alert alert-success">
                    ✓ {success}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="student-name" className="form-label">
                        Student Name
                    </label>
                    <input
                        type="text"
                        id="student-name"
                        name="name"
                        className="form-input"
                        placeholder="Enter student name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={loading}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="roll-no" className="form-label">
                        Roll Number
                    </label>
                    <input
                        type="text"
                        id="roll-no"
                        name="rollNo"
                        className="form-input"
                        placeholder="Enter roll number"
                        value={formData.rollNo}
                        onChange={handleChange}
                        disabled={loading}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <span className="spinner"></span>
                            Adding...
                        </>
                    ) : (
                        <>
                            <span>➕</span>
                            Add Student
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default AddStudentForm;
