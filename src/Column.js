import React from "react";
import Ticket from "./Ticket";
import "./Column.css";

const Column = ({ title, tickets, users }) => {
  return (
    <div className="column">
        <div className="header">
      <h3>{title} </h3> {tickets.length}
      </div>
    
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} users={users} userName={users.find((user) => user.id === ticket.userId)?.name} />
      ))}
    </div>
  );
};

export default Column;
