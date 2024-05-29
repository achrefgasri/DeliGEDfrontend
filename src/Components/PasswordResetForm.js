// src/components/PasswordResetForm.js
import React from 'react';
import './PasswordResetFormStyle.css';

function PasswordResetForm() {
  return (
    <div className='PasswordResetContainer'>
    <div className="password-reset-form">
      <h2>Reset Password</h2>
      <form>
        <label htmlFor="oldPassword">Old Password</label>
        <input type="password" id="oldPassword" name="oldPassword" required />

        <label htmlFor="newPassword">New Password</label>
        <input type="password" id="newPassword" name="newPassword" required />

        <label htmlFor="confirmPassword">Confirm New Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />

        <button type="submit">Reset Password</button>
      </form>
    </div>
    </div>
  );
}

export default PasswordResetForm;