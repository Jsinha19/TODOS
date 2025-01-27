
import React from 'react';

export const About = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>About Todo App</h1>
            <p style={styles.paragraph}>
                Welcome to the Todo App! This simple yet powerful application is designed to help you stay organized and manage your tasks efficiently.
                Whether you're planning your day, tracking work projects, or keeping a personal to-do list, the Todo App has got you covered.
            </p>
            <p style={styles.paragraph}>
                Key Features:
                <ul>
                    <li>Adds and deletes tasks with ease.</li>
                    <li>Simple, clean, and user-friendly interface.</li>
                </ul>
            </p>
            <p style={styles.paragraph}>
            Start organizing your life today and achieve more with Todo App!
                Thank you for choosing us to simplify your task management.
          
            </p>
            
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        background: '#f9f9f9',
    },
    heading: {
        fontSize: '2em',
        marginBottom: '10px',
        color: 'purple',
    },
    paragraph: {
        lineHeight: '1.6',
        marginBottom: '10px',
    },
   
};

export default About;
