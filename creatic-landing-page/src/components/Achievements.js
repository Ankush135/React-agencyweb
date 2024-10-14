import React from 'react';
import './Achievements.css';
import { FaUsers, FaClipboardCheck, FaSmile, FaAward } from 'react-icons/fa';

function Achievements() {
  const data = [
    { icon: <FaUsers />, number: '50+', label: 'Team Members' },
    { icon: <FaClipboardCheck />, number: '200+', label: 'Project Done' },
    { icon: <FaSmile />, number: '500+', label: 'Happy Customers' },
    { icon: <FaAward />, number: '75+', label: 'Award Winning' },
  ];

  return (
    <section className="achievements">
      {data.map((item, index) => (
        <div key={index} className="achievement-item">
          <div className="icon">{item.icon}</div>
          <h3>{item.number}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Achievements;
