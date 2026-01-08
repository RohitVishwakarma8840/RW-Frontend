import React, { useState, useEffect } from 'react';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';
import AttendanceSummary from './components/AttendanceSummary';
import { getStudents } from './services/api';

function App() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch students on component mount
    const fetchStudents = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await getStudents();
            setStudents(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div className="container">
            {/* Header */}
            <header className="text-center mb-3 animate-fade-in">
                <h1 style={{ marginBottom: '0.5rem' }}>
                    📚 Student Attendance System
                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    marginBottom: 0
                }}>
                    Manage student attendance efficiently and effectively
                </p>
            </header>

            {/* Attendance Summary */}
            {!loading && <AttendanceSummary students={students} />}

            {/* Add Student Form */}
            <div className="mb-2">
                <AddStudentForm onStudentAdded={fetchStudents} />
            </div>

            {/* Loading State */}
            {loading && (
                <div className="card text-center" style={{ padding: '3rem' }}>
                    <div className="spinner" style={{
                        width: '40px',
                        height: '40px',
                        margin: '0 auto 1rem'
                    }}></div>
                    <p style={{ color: 'var(--text-secondary)' }}>Loading students...</p>
                </div>
            )}

            {/* Error State */}
            {error && !loading && (
                <div className="alert alert-error">
                    ⚠️ {error}
                    <button
                        onClick={fetchStudents}
                        className="btn btn-primary"
                        style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}
                    >
                        Retry
                    </button>
                </div>
            )}

            {/* Student List */}
            {!loading && !error && (
                <StudentList students={students} onUpdate={fetchStudents} />
            )}

            {/* Footer */}
            <footer className="text-center" style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                fontSize: '0.875rem'
            }}>
                <p>Built with React.js & Node.js</p>
            </footer>
        </div>
    );
}

export default App;
