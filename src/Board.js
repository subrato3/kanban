import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Board.css';
import Column from './Column.js';

const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState('');
  const [userFilter, setUserFilter] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        setTickets(response.data.tickets);
        setFilteredTickets(response.data.tickets);
        setUsers(response.data.users);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handlePriorityFilter = event => {
    const selectedPriority = event.target.value;
    setPriorityFilter(selectedPriority);
    applyFilters(selectedPriority, userFilter);
  };

  const handleUserFilter = event => {
    const selectedUser = event.target.value;
    setUserFilter(selectedUser);
    applyFilters(priorityFilter, selectedUser);
  };

  const applyFilters = (selectedPriority, selectedUser) => {
    let filtered = tickets;

    if (selectedPriority !== '') {
      filtered = filtered.filter(ticket => ticket.priority === parseInt(selectedPriority));
    }

    if (selectedUser !== '') {
      filtered = filtered.filter(ticket => ticket.userId === selectedUser);
    }

    setFilteredTickets(filtered);
  };
  
  const columns = {
    todo: filteredTickets.filter(ticket => ticket.status === 'Todo'),
    backlog: filteredTickets.filter(ticket => ticket.status === 'Backlog'),
    done: filteredTickets.filter(ticket => ticket.status === 'Done'),
    cancelled: filteredTickets.filter(ticket => ticket.status === 'Cancelled'),
    inProgress: filteredTickets.filter(ticket => ticket.status === 'In progress'),
  };

  return (
    <div className="board">
      <div className="filters">
        <select onChange={handlePriorityFilter}>
          <option value="">Filter by Priority</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select onChange={handleUserFilter}>
          <option value="">Filter by User</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
      <div className="columns">
        <Column title="Backlog" tickets={columns.backlog} users={users} />
        <Column title="To Do" tickets={columns.todo} users={users} />
        <Column title="In Progress" tickets={columns.inProgress} users={users} />
        <Column title="Done" tickets={columns.done} users={users} />
        <Column title="Cancelled" tickets={columns.cancelled} users={users} />
      </div>
    </div>
  );
};

export default Board;
