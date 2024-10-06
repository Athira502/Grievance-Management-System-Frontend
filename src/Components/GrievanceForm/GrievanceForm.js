import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './GrievanceForm.css';

export default function GrievanceForm({ submittedGrievances, setSubmittedGrievances }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [product, setProduct] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
   

    // Function to handle form submission
    const submitGrievance = (e) => {
        e.preventDefault();
        
        const newGrievance = {
            id: submittedGrievances.length + 1,
            product,
            description,
            assignee: 'John Doe', // You can assign a default or dynamic value here
            category: 'Software', // You can add a form input for category or assign a default
            status: 'Pending', // New grievances start with 'Pending'
            createdAt: new Date().toISOString()
        };
        
        setSubmittedGrievances([newGrievance, ...submittedGrievances]);
    
        // Clear form fields after submission
        setName('');
        setEmail('');
        setProduct('');
        setDescription('');
    
        alert('Grievance submitted successfully!');
        navigate('/PreviousGrievances'); // Navigate to previous grievances after submission
    };
    

    return (
        <div className='grievForm'>
            <h1>Have the solution for all your digital problems</h1>
            <h2>Raise your issue</h2>
            <form onSubmit={submitGrievance} className='compForm'>
                <div className="form-group">
                    <label>Name: </label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Product: </label>
                    <input
                        type="text"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Grievance</button>
            </form>

            {/* Link to navigate to previous grievances page */}
            <div>
                <Link to="/PreviousGrievances">View Previously Submitted Grievances</Link>
            </div>
        </div>
    );
}




