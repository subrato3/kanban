import React from 'react';
import Ticket from './Ticket';

const Column = ({ title, tickets, users }) => {
  return (
    <div className="column">
      <h3>{title}</h3>
      {tickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ticket} users={users} />
      ))}
    </div>
  );
};

export default Column;
