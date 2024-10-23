import "../styles/Priority.css";
import React, { useEffect, useState } from "react";
import threedots from "../assets/3 dot menu.svg";
import plussign from "../assets/add.svg";
import high from "../assets/Img - High Priority.svg";
import low from "../assets/Img - Low Priority.svg";
import medium from "../assets/Img - Medium Priority.svg";
import urgent from "../assets/SVG - Urgent Priority colour.svg";
import nopriority from "../assets/No-priority.svg";

function Priority({ tickets }) {
  const [tasks, setTasks] = useState({
    urgent: [],
    high: [],
    medium: [],
    low: [],
    noPriority: [],
  });

  useEffect(() => {
    const urgentPriority = tickets.filter((ticket) => ticket.priority === 4);
    const highPriority = tickets.filter((ticket) => ticket.priority === 3);
    const mediumPriority = tickets.filter((ticket) => ticket.priority === 2);
    const lowPriority = tickets.filter((ticket) => ticket.priority === 1);
    const noPriority = tickets.filter((ticket) => ticket.priority === 0);

    setTasks({
      urgent: urgentPriority,
      high: highPriority,
      medium: mediumPriority,
      low: lowPriority,
      noPriority: noPriority,
    });
  }, [tickets]);

  return (
    <div className="priority-board">
      <div className="priority-column">
        <div className="priority-container">
          <img src={nopriority} alt="No Priority" />
          <h3>No Priority <span style={{ fontSize: '14px', color: '#666', marginLeft: '5px' }}>{tasks.noPriority.length}</span></h3>
          <div className="icon-container">
            <img className="right-icon" src={plussign} alt="Add" />
            <img className="right-icon" src={threedots} alt="More Options" />
          </div>
        </div>
        {tasks.noPriority.map((task) => (
          <div key={task.id} className="priority-card">
            <div className="card-title">{task.id}</div>
            <div className="card-content">{task.title}</div>
            <button className="feature-btn">Feature Request</button>
          </div>
        ))}
      </div>

      <div className="priority-column">
        <div className="priority-container">
          <img src={urgent} alt="Urgent Priority" />
          <h3>Urgent <span style={{ fontSize: '14px', color: '#666', marginLeft: '5px' }}>{tasks.urgent.length}</span></h3>
          <div className="icon-container">
            <img className="right-icon" src={plussign} alt="Add" />
            <img className="right-icon" src={threedots} alt="More Options" />
          </div>
        </div>
        {tasks.urgent.map((task) => (
          <div key={task.id} className="priority-card">
            <div className="card-title">{task.id}</div>
            <div className="card-content">{task.title}</div>
            <button className="feature-btn">Feature Request</button>
          </div>
        ))}
      </div>

      <div className="priority-column">
        <div className="priority-container">
          <img src={high} alt="High Priority" />
          <h3>High <span style={{ fontSize: '14px', color: '#666', marginLeft: '5px' }}>{tasks.high.length}</span></h3>
          <div className="icon-container">
            <img className="right-icon" src={plussign} alt="Add" />
            <img className="right-icon" src={threedots} alt="More Options" />
          </div>
        </div>
        {tasks.high.map((task) => (
          <div key={task.id} className="priority-card">
            <div className="card-title">{task.id}</div>
            <div className="card-content">{task.title}</div>
            <button className="feature-btn">Feature Request</button>
          </div>
        ))}
      </div>

      <div className="priority-column">
        <div className="priority-container">
          <img src={medium} alt="Medium Priority" />
          <h3>Medium <span style={{ fontSize: '14px', color: '#666', marginLeft: '5px' }}>{tasks.medium.length}</span></h3>
          <div className="icon-container">
            <img className="right-icon" src={plussign} alt="Add" />
            <img className="right-icon" src={threedots} alt="More Options" />
          </div>
        </div>
        {tasks.medium.map((task) => (
          <div key={task.id} className="priority-card">
            <div className="card-title">{task.id}</div>
            <div className="card-content">{task.title}</div>
            <button className="feature-btn">Feature Request</button>
          </div>
        ))}
      </div>

      <div className="priority-column">
        <div className="priority-container">
          <img src={low} alt="Low Priority" />
          <h3>Low <span style={{ fontSize: '14px', color: '#666', marginLeft: '5px' }}>{tasks.low.length}</span></h3>
          <div className="icon-container">
            <img className="right-icon" src={plussign} alt="Add" />
            <img className="right-icon" src={threedots} alt="More Options" />
          </div>
        </div>
        {tasks.low.map((task) => (
          <div key={task.id} className="priority-card">
            <div className="card-title">{task.id}</div>
            <div className="card-content">{task.title}</div>
            <button className="feature-btn">Feature Request</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Priority;