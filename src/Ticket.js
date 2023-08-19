import React from "react";
import './Ticket.css';


const Ticket = ({ ticket, users }) => {
  const user = users.find((user) => user.id === ticket.userId);

  // Check if the ticket title is empty
  if (!ticket.title || ticket.title.trim() === "") {
    return (
      <div className="ticket error">
        <div className="ticket-title">Title is empty or whitespace</div>
      </div>
    );
  }

  return (
    <div className="ticket">
      <div className="ticket-id">ID: {ticket.id}</div>

      <div className="ticket-title">{ticket.title}</div>
      <div className="ticket-info">
        <div className="ticket-tag">{ticket.tag.join(", ")}</div>
        <div className="ticket-user">{user ? user.name : "Unknown User"}</div>
        <div className="ticket-priority">Priority: {ticket.priority}</div>
      </div>
    </div>
  );
};

export default Ticket;
