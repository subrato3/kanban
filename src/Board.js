import React, { useEffect, useState } from 'react';
import Column from './Column.js';
import axios from 'axios';
import './Board.css';

const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const columns = {
    todo: tickets.filter(ticket => ticket.status === 'Todo'),
    inProgress: tickets.filter(ticket => ticket.status === 'In progress'),
    backlog: tickets.filter(ticket => ticket.status === 'Backlog'),
  };

  return (
    <div className="board">
              <Column title="Backlog" tickets={columns.backlog} users={users} />

      <Column title="To Do" tickets={columns.todo} users={users} />
      <Column title="In Progress" tickets={columns.inProgress} users={users} />
      {/* <Column title="Done" tickets={columns.done} users={users} />
      <Column title="Cancelled" tickets={columns.cancelled} users={users} /> */}
    </div>
  );
};

export default Board;
