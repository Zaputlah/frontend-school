import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth/AuthContext'; // Import useAuth dari AuthContext
import Headers from '../components/Headers';
import '../styles/attendance.css';

const MarkAttendancePage = () => {
    const { user } = useAuth(); // Mengambil user dari context
    const [status, setStatus] = useState('present');
    const [medicalNote, setMedicalNote] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');
    const [hasAlreadyMarked, setHasAlreadyMarked] = useState(false);

    useEffect(() => {
        const checkAttendance = async () => {
            if (!user) return;
            
            try {
                const response = await axios.get('http://localhost:8000/api/attendance/history', {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`
                    }
                });

                const today = new Date().setHours(0, 0, 0, 0);
                const hasMarked = response.data.some(attendance => 
                    new Date(attendance.date).setHours(0, 0, 0, 0) === today
                );

                setHasAlreadyMarked(hasMarked);
            } catch (error) {
                console.error('Error checking attendance:', error.response ? error.response.data : error.message);
            }
        };

        checkAttendance();
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setResponseMessage('User not logged in.');
            return;
        }

        const payload = {
            status: status,
            medicalNote: medicalNote ? medicalNote.name : null // Include filename if needed
        };

        try {
            const response = await axios.post('http://localhost:8000/api/attendance', payload, {
                headers: {
                    'Content-Type': 'application/json', // Update content type to application/json
                    'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`
                }
            });
            setResponseMessage('Absensi berhasil dilakukan!');
            setHasAlreadyMarked(true); // Set status to true after successful submission
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message); // Log error response
            setResponseMessage('Gagal melakukan absensi. Coba lagi.');
        }
    };

    // Opsi status berdasarkan peran pengguna
    const statusOptions = user.role === 'guru'
        ? ['present', 'izin'] // Guru hanya melihat opsi 'present' dan 'izin'
        : ['present', 'izin', 'sakit']; // Siswa melihat opsi 'present', 'izin', dan 'sakit'

    return (
        <div className="attendance-container">
            <Headers role={user.role} title={user.role === 'guru' ? "Teacher Attendance" : "Student Attendance"} context="attendance"/>
            <div className='attendance-page'>
                <h2>Absensi</h2>
                {hasAlreadyMarked ? (
                    responseMessage ? (
                        <p>{responseMessage}</p>
                    ) : (
                        <p>Anda sudah absen hari ini.</p>
                    )
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label>
                            Status:
                            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                {statusOptions.map(option => (
                                    <option key={option} value={option}>
                                        {option.charAt(0).toUpperCase() + option.slice(1)} {/* Capitalize first letter */}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {/* Kondisi tampilan untuk surat dokter berdasarkan peran pengguna */}
                        {user.role === 'siswa' && status === 'sakit' && (
                            <label>
                                Surat Keterangan:
                                <input
                                    type="file"
                                    onChange={(e) => setMedicalNote(e.target.files[0])}
                                />
                            </label>
                        )}
                        <button type="submit">Kirim</button>
                    </form>
                )}
                {responseMessage && !hasAlreadyMarked && <p>{responseMessage}</p>}
            </div>
        </div>
    );
};

export default MarkAttendancePage;
