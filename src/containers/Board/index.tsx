import { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { v4 as uuidv4 } from "uuid";

import { onDragEnd } from "../../helpers/onDragEnd";
import Column from "../../components/Column";
import Modal from "../../components/Modal";
import ClientForm from "../../components/ClientForm";
import { ClientValues } from "../../components/ClientForm/ClientForm.types";
import { ColumnItem, Columns } from "../../types";
import { STORAGE_KEY } from "../../utils/Constants";

const defaultBoardData: Columns = {
  "column-1": {
    name: "Unclaimed",
    items: [],
  },
  "column-2": {
    name: "First Contact",
    items: [],
  },
  "column-3": {
    name: "Preparing Work Offer",
    items: [],
  },
  "column-4": {
    name: "Sent to Therapist",
    items: [],
  },
};

const Board = () => {
  const [columns, setColumns] = useState<Columns>(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : defaultBoardData;
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [editingClient, setEditingClient] = useState<ColumnItem | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(columns));
  }, [columns]);

  const openModal = (columnId: string) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingClient(null);
  };

  const handleAddClient = (clientData: ClientValues) => {
    const newBoard = { ...columns };
    const newItem: ColumnItem = {
      id: uuidv4(),
      content: clientData,
    };
    newBoard[selectedColumn].items.push(newItem);
    setColumns(newBoard);
  };

  const handleEditClient = (clientData: ClientValues) => {
    if (!editingClient) return;

    const newBoard = { ...columns };
    const columnId = Object.keys(newBoard).find((colId) =>
      newBoard[colId].items.some((item) => item.id === editingClient.id)
    );

    if (columnId) {
      newBoard[columnId].items = newBoard[columnId].items.map((item) =>
        item.id === editingClient.id ? { ...item, content: clientData } : item
      );
      setColumns(newBoard);
    }
    closeModal();
  };

  const handleDeleteClient = (columnId: string, itemId: string) => {
    const newBoard = { ...columns };
    newBoard[columnId].items = newBoard[columnId].items.filter(
      (item) => item.id !== itemId
    );
    setColumns(newBoard);
  };

  const handleDragEnd = (result: DropResult) => {
    const newColumns = onDragEnd(result, columns);
    if (newColumns) {
      setColumns(newColumns);
    }
  };

  const handleCardClick = (columnId: string, item: ColumnItem) => {
    setSelectedColumn(columnId);
    setEditingClient(item);
    setModalOpen(true);
  };

  return (
    <div className="board-container w-full overflow-x-auto">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="board flex flex-col md:flex-row p-4 md:space-x-4 space-y-4 md:space-y-0">
          {Object.entries(columns).map(([columnId, column], index) => (
            <Column
              key={columnId}
              columnId={columnId}
              column={column}
              openModal={openModal}
              isFirstColumn={index === 0}
              onCardClick={handleCardClick}
              onCardDelete={handleDeleteClient}
            />
          ))}
        </div>
      </DragDropContext>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <ClientForm
          onAddClient={handleAddClient}
          onEditClient={handleEditClient}
          setIsModalOpen={setModalOpen}
          initialValues={editingClient?.content}
        />
      </Modal>
    </div>
  );
};

export default Board;
