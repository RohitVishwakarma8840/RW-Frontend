import React, { useState } from 'react';
import { markAttendance } from '../services/api';

const AttendanceToggle = ({ student, onAttendanceUpdate }) => {
    const [loading, setLoading] = useState(false);

    const handleToggle = async (isPresent) => {
        setLoading(true);
        try {
            await markAttendance(student.id || student._id, isPresent);
            // Notify parent component
            if (onAttendanceUpdate) {
                onAttendanceUpdate();
            }
        } catch (error) {
            console.error('Failed to update attendance:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex gap-1">
            <button
                className="btn btn-success"
                onClick={() => handleToggle(true)}
                disabled={loading || student.isPresent}
                style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    opacity: student.isPresent ? 1 : 0.7
                }}
            >
                {loading && !student.isPresent ? (
                    <span className="spinner"></span>
                ) : (
                    '✓ Present'
                )}
            </button>
            <button
                className="btn btn-danger"
                onClick={() => handleToggle(false)}
                disabled={loading || !student.isPresent}
                style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    opacity: !student.isPresent ? 1 : 0.7
                }}
            >
                {loading && student.isPresent ? (
                    <span className="spinner"></span>
                ) : (
                    '✗ Absent'
                )}
            </button>
        </div>
    );
};

export default AttendanceToggle;
