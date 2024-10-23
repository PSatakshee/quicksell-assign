import React from "react";
import "../styles/User.css";
import threedots from "../assets/3 dot menu.svg";
import plussign from "../assets/add.svg";

function User({ tickets, users }) {
  const userTickets = {};

  tickets.forEach((ticket) => {
    const userId = ticket.userId;

    if (!userTickets[userId]) {
      userTickets[userId] = [];
    }
    userTickets[userId].push(ticket);
  });

  return (
    <div className="user-board">
      {Array.isArray(users) &&
        users.map((user) => {
          const ticketCount = userTickets[user.id]
            ? userTickets[user.id].length
            : 0;
          return (
            <div key={user.id} className="user-column">
              <div className="user-info">
                <div className="user-icon"></div>
                <h3 className="user-name">
                  {user.name}{" "}
                  <span className="ticket-count">{ticketCount}</span>
                </h3>
                <div className="icon-container">
                  <img className="right-icon" src={plussign} />
                  <img className="right-icon" src={threedots} />
                </div>
              </div>
              {userTickets[user.id] &&
                userTickets[user.id].length > 0 &&
                userTickets[user.id].map((task) => (
                  <div key={task.id} className="user-card">
                    <div className="card-title">{task.id}</div>
                    <div className="card-content">{task.title}</div>
                    <button className="feature-btn">Feature Request</button>
                  </div>
                ))}
            </div>
          );
        })}
    </div>
  );
}

export default User;