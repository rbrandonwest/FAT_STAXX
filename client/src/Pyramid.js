import React from 'react';
import './pyramid.css';

class Pyramid extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="pyramid3d header">
            <div className="triangle side1"></div>
            <div className="triangle side2"></div>
            <div className="triangle side3"></div>
            <div className="triangle side4"></div>
          </div>
          </div>
        )
    }
}

export default Pyramid;