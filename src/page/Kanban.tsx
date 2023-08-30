import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal/Modal";
import IssueModal from "./modals/IssueModal";

export default function Kanban() {
  const [isIssueModalOpen, setIsIssueModalOpen] = useState<boolean>(false);

  const handleSetIsIssueModalOpen = () => setIsIssueModalOpen(true);
  const handleSetIsIssueModalClose = () => setIsIssueModalOpen(false);

  return (
    <>
      <KanbanLayoutMain>
        <div style={{ height: "1000px" }}>칸반</div>
        <button onClick={handleSetIsIssueModalOpen}>모달 오픈!</button>
      </KanbanLayoutMain>
      <Modal isOpen={isIssueModalOpen} onClose={handleSetIsIssueModalClose}>
        <IssueModal />
      </Modal>
    </>
  );
}

const KanbanLayoutMain = styled.main`
  display: flex;
  justify-content: center;
`;
