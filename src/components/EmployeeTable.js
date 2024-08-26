import React from 'react';
import '../EmployeeTable.css';

const EmployeeTable = () => {
  const employees = [
    { fullName: 'Eleanor Pena', employeeId: '9261456', userId: 'tanya.hil', hireDate: '8/21/15', event: 'New Hire', position: 'Medical Assistant', netSalary: '5,50,000' },
    { fullName: 'Albert Flores', employeeId: '4152764', userId: 'michael123', hireDate: '5/27/15', event: 'Transfer', position: 'UI/UX Designer', netSalary: '19,000' },
    { fullName: 'Arlene McCoy', employeeId: '5626082', userId: 'lawson', hireDate: '8/16/13', event: 'Re-Hire', position: 'Dog Trainer', netSalary: '90,000' },
    { fullName: 'Esther Howard', employeeId: '5021368', userId: 'alma.@', hireDate: '1/28/17', event: 'New Hire', position: 'President of Sales', netSalary: '15,000' },
    { fullName: 'Marvin McKinney', employeeId: '6690725', userId: 'debra.holt', hireDate: '9/23/16', event: 'Termination', position: 'Web Designer', netSalary: '1,03,000' },
  ];

  return (
    <div className="employee-table-container">
      <div className="table-controls">
        <div className="payroll-area">
          <label htmlFor="payroll-area-select">Payroll Area</label>
          <select id="payroll-area-select">
            <option value="monthly">MONTHLY</option>
            <option value="bi-weekly">BI-WEEKLY</option>
            <option value="weekly">WEEKLY</option>
          </select>
        </div>
        <div className="file-buttons">
          <button>File Download</button>
          <button>Full Upload</button>
          <button>Partial Upload</button>
          <button>File Template</button>
        </div>
      </div>
      <div className="employee-table">
        <div className="table-header">
          <h3>Employees</h3>
          <div className="search-bar">
            <input type="text" placeholder="Search by Employee name & ID" />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Employee Id</th>
              <th>User Id</th>
              <th>Hire Date</th>
              <th>Event</th>
              <th>Position</th>
              <th>Net Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.fullName}</td>
                <td>{emp.employeeId}</td>
                <td>{emp.userId}</td>
                <td>{emp.hireDate}</td>
                <td>{emp.event}</td>
                <td>{emp.position}</td>
                <td>{emp.netSalary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
