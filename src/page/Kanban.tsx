// import { useState } from "react";
// import styled from "styled-components";
// import Modal from "../components/Modal/Modal";
// import IssueModal from "./modals/IssueModal";

// export default function Kanban() {
//   const [isIssueModalOpen, setIsIssueModalOpen] = useState<boolean>(false);

//   const handleSetIsIssueModalOpen = () => setIsIssueModalOpen(true);
//   const handleSetIsIssueModalClose = () => setIsIssueModalOpen(false);

//   return (
//     <>
//       <KanbanLayoutMain>
//         <div style={{ height: "2000px" }}>칸반</div>
//         <button onClick={handleSetIsIssueModalOpen}>모달 오픈!</button>
//       </KanbanLayoutMain>

//       <Modal isOpen={isIssueModalOpen} onClose={handleSetIsIssueModalClose}>
//         <IssueModal onClose={handleSetIsIssueModalClose} />
//       </Modal>
//     </>
//   );
// }

// const KanbanLayoutMain = styled.main`
//   display: flex;
//   justify-content: center;
// `;

import React, { useState } from "react";
import styled from "styled-components";

const KanbanLayoutMain = styled.main`
  display: flex;
  justify-content: center;
`;

interface Task {
  id: number;
  title: string;
  status: string;
}

const Kanban: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Task 1", status: "Todo" },
    { id: 2, title: "Task 2", status: "In Progress" },
    { id: 3, title: "Task 3", status: "Done" },
  ]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: number
  ) => {
    e.dataTransfer.setData("taskId", taskId.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const updatedTasks = tasks.map((task) => {
      if (task.id.toString() === taskId) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <KanbanLayoutMain style={{ display: "flex" }}>
      <div
        style={{ border: "1px solid gray", padding: "8px", margin: "8px" }}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, "Todo")}
      >
        <h2>Todo</h2>
        {tasks.map((task) => {
          if (task.status === "Todo") {
            return (
              <div
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                style={{ border: "1px solid black", marginBottom: "4px" }}
              >
                {task.title}
              </div>
            );
          }
          return null;
        })}
      </div>
      <div
        style={{ border: "1px solid gray", padding: "8px", margin: "8px" }}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, "In Progress")}
      >
        <h2>In Progress</h2>
        {tasks.map((task) => {
          if (task.status === "In Progress") {
            return (
              <div
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                style={{ border: "1px solid black", marginBottom: "4px" }}
              >
                {task.title}
              </div>
            );
          }
          return null;
        })}
      </div>
      <div
        style={{ border: "1px solid gray", padding: "8px", margin: "8px" }}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, "Done")}
      >
        <h2>Done</h2>
        {tasks.map((task) => {
          if (task.status === "Done") {
            return (
              <div
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                style={{ border: "1px solid black", marginBottom: "4px" }}
              >
                {task.title}
              </div>
            );
          }
          return null;
        })}
      </div>
    </KanbanLayoutMain>
  );
};

export default Kanban;
