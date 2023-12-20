import React, { Component } from 'react';
import MainDrawer from './MainDrawer.tsx';
import Charts from './charts.tsx';
import Gauge1 from './Gauge1.tsx';
import Gauge2 from './Gauge2.tsx';

class DashboardPage extends Component<{}, State> {
  render() {
    return (
      <React.Fragment>
        <MainDrawer />
        <div className="dashboard-chart-container">
          <Charts />
          <Gauge1 />
          <Gauge2 />
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
