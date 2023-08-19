// import React, { Component } from "react";
// import axios from "axios";
// import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       kanbanData: [],
//     };

//   }

  
//   componentDidMount() {
//     axios
//       .get("https://api.quicksell.co/v1/internal/frontend-assignment")
//       .then((response) => {
//         const fetchedData = response.data.tickets;
//         this.setState({ kanbanData: fetchedData });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   render() {
//     const { kanbanData } = this.state;
    
//     return (
//       <div className="App">
//         <KanbanComponent dataSource={kanbanData} keyField="id"
//         cardSettings={{ contentField: "title", headerField: "id", selectionType:"Single" }}>
//           <ColumnsDirective>
//             <ColumnDirective headerText="Todo" keyField="status" category="Todo" />
//             <ColumnDirective headerText="In Progress" keyField="status" category="In progress" />
//             <ColumnDirective headerText="Done" keyField="status" category="Done" />
//             <ColumnDirective headerText="Backlog" keyField="status" category="Backlog" />
//           </ColumnsDirective>
//         </KanbanComponent>
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
import './App.css';
import Board from './Board';

function App() {
  return (
    <div className="app">
      <Board />
    </div>
  );
}

export default App;