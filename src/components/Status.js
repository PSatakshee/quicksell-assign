import React from "react";
import "../styles/Status.css";
import threedots from "../assets/3 dot menu.svg";
import plussign from "../assets/add.svg";
import todo from "../assets/To-do.svg"
import backlog from "../assets/Backlog.svg"
import inprogress from "../assets/in-progress.svg"
import cancelled from "../assets/Cancelled.svg"
import done from "../assets/Done.svg"

function Status({ tickets }) {
  const statusTickets = {};

  tickets.forEach((ticket) => {
    const status = ticket.status;

    if (!statusTickets[status]) {
      statusTickets[status] = [];
    }
    statusTickets[status].push(ticket);
  });

  return (
    <div className="status-board">
      {Object.keys(statusTickets).map((status) => (
        <div key={status} className="status-column">
          <div className="status-info">
            <div className="status-icon"></div>
            <h3 className="status-name">
              {status} 
              <span style={{ fontSize: '14px', color: '#666', marginLeft: '5px' }}>
                {statusTickets[status].length} 
              </span>
            </h3>
            <div className="icon-container">
              <img className="right-icon" src={plussign} alt="Add" />
              <img className="right-icon" src={threedots} alt="More options" />
            </div>
          </div>

          {statusTickets[status].map((task) => (
            <div key={task.id} className="status-card">
              <div className="card-title">{task.id}</div>
              <div className="card-content">{task.title}</div>
              <button className="feature-btn">Feature Request</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Status;