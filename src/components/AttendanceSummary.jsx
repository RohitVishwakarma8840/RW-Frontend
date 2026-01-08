import React, { useMemo } from 'react';

const AttendanceSummary = ({ students }) => {
    const stats = useMemo(() => {
        const total = students.length;
        const present = students.filter((s) => s.isPresent).length;
        const absent = total - present;
        const presentPercentage = total > 0 ? ((present / total) * 100).toFixed(1) : 0;

        return { total, present, absent, presentPercentage };
    }, [students]);

    return (
        <div className="stats-grid animate-fade-in">
            <div className="stat-card">
                <div className="stat-label">Total Students</div>
                <div className="stat-value">{stats.total}</div>
            </div>

            <div className="stat-card">
                <div className="stat-label">Present Today</div>
                <div className="stat-value" style={{ color: 'var(--success)' }}>
                    {stats.present}
                </div>
                <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    marginTop: '0.5rem'
                }}>
                    ({stats.presentPercentage}% attendance)
                </div>
            </div>

            <div className="stat-card">
                <div className="stat-label">Absent Today</div>
                <div className="stat-value" style={{ color: 'var(--danger)' }}>
                    {stats.absent}
                </div>
            </div>
        </div>
    );
};

export default AttendanceSummary;
