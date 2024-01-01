// App.js
import React, { useState } from 'react';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import EmployeeLogin from './EmployeeLogin';

const App = () => {
  const [selectedUserType, setSelectedUserType] = useState('');

  const handleUserTypeChange = (userType) => {
    setSelectedUserType(userType);
  };

  const renderLoginPage = () => {
    if (selectedUserType === 'user') {
      return <UserLogin userType="User" />;
    } else if (selectedUserType === 'admin') {
      return <AdminLogin userType="Admin" />;
    } else if (selectedUserType === 'employee') {
      return <EmployeeLogin userType="Employee" />;
    } else {
      return null;
    }
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li onClick={() => handleUserTypeChange('user')}>User</li>
            <li onClick={() => handleUserTypeChange('admin')}>Admin</li>
            <li onClick={() => handleUserTypeChange('employee')}>Employee</li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Conditional rendering of the respective login page */}
        {renderLoginPage()}
      </main>
    <footer>
      <div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#0099ff" fill-opacity="1" d="M0,288L26.7,288C53.3,288,107,288,160,282.7C213.3,277,267,267,320,272C373.3,277,427,299,480,293.3C533.3,288,587,256,640,229.3C693.3,203,747,181,800,186.7C853.3,192,907,224,960,213.3C1013.3,203,1067,149,1120,154.7C1173.3,160,1227,224,1280,250.7C1333.3,277,1387,267,1413,261.3L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        </div>
			  <p className="text-footer" >
				      Copyright ©-All rights are reserved @unigarage.online
			  </p>
      </div>
    </footer>
  </div>

  );
};

export default App;



