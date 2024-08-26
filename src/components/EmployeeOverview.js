


import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import "../EmployeeOverview.css";

Chart.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const EmployeeOverview = () => {
  // Data for New Hires
  const dataNewHires = {
    labels: ['Product Managers', 'Developers', 'Architects'],
    datasets: [
      {
        label: '# of New Hires',
        data: [3, 12, 4],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  // Data for Active People
  const dataActivePeople = {
    labels: ['Full-time', 'Part-time', 'Contract'],
    datasets: [
      {
        label: '# of Active People',
        data: [180, 50, 21],
        backgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF'],
        hoverBackgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF'],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  // Data for Salary Range
  const dataSalaryRange = {
    labels: ['10000 to 20000', '20000 to 30000', '30000 to 50000', '50000 above'],
    datasets: [
      {
        label: 'Number of Employees',
        data: [10, 20, 7, 5],
        backgroundColor: '#36A2EB',
      },
    ],
  };

  return (
    <div className="employee-overview">
      <h1>Employee Overview</h1>
      <div className="overview-card">
        <h2>10</h2>
        <p>Newly Hired People</p>
        <div className="chart-container small-chart">
          <Doughnut data={dataNewHires} options={{ plugins: { legend: { display: false } } }} />
          <span className="percentage">+5%</span>
        </div>
        <p className="subtext">Increase since last quarter</p>
      </div>
      <div className="overview-card">
        <h2>251</h2>
        <p>Active People</p>
        <div className="chart-container small-chart">
          <Doughnut data={dataActivePeople} options={{ plugins: { legend: { display: false } } }} />
          <span className="percentage">+5%</span>
        </div>
        <p className="subtext">Increase since last quarter</p>
      </div>
      <div className="overview-card large-chart-card">
        <h3>New hires</h3>
        <div className="chart-container large-chart">
          <Doughnut data={dataNewHires} options={{ plugins: { legend: { display: false } } }} />
          <div className="chart-center-text">
            <h2>19</h2>
            <p>New Hires</p>
          </div>
        </div>
        <div className="chart-annotations">
          <p className="annotation annotation-1">Product Managers (3)</p>
          <p className="annotation annotation-2">Developers (12)</p>
          <p className="annotation annotation-3">Architects (4)</p>
        </div>
      </div>
      <div className="overview-card">
        <h3>Salary range of employees</h3>
        <div className="chart-container bar-chart">
          <Bar data={dataSalaryRange} options={{ indexAxis: 'y', plugins: { legend: { display: false } } }} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeOverview;
