import React from 'react';
import './Profile.css';
type Props = {}

const Profile = (props: Props) => {
	const user = {
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@example.com',
		phoneNumber: '+1-234-567-8901',
		isSuper: true
	};
	
	return (
		<div className="container">
		<h1>{user.firstName}'s Profile Page</h1>
		<div className="profile-info">
			<p><strong>First Name:</strong> {user.firstName}</p>
			<p><strong>Last Name:</strong> {user.lastName}</p>
			<p><strong>Email:</strong> {user.email}</p>
			<p><strong>Phone Number:</strong> {user.phoneNumber}</p>
			<p><strong>Role:</strong> {user.isSuper ? 'Supervisor' : 'Employee'}</p>
		</div>
		</div>
	);
}

export default Profile