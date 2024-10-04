import { Droppable } from "@hello-pangea/dnd";
import { ColumnProps } from "./Column.types";
import Card from "../Card";
import "./Column.css";
import Button from "../Button";

const Column: React.FC<ColumnProps> = ({
  column,
  columnId,
  openModal,
  isFirstColumn,
  onCardClick,
  onCardDelete,
}) => {
  return (
    <div className="column bg-white rounded-lg p-4 shadow-md flex flex-col w-full md:w-1/4 min-w-[250px] h-[70vh] md:h-[80vh]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg md:text-xl">{column.name}</h2>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm font-semibold">
          {column.items.length}
        </span>
      </div>
      {isFirstColumn && (
        <Button onClick={() => openModal(columnId)} className="mb-4">
          Add Client
        </Button>
      )}

      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="scrollbar-custom pr-2 overflow-y-auto flex-grow"
          >
            {column.items.map((item, index) => (
              <Card
                key={item.id}
                item={item}
                index={index}
                onClick={() => onCardClick(columnId, item)}
                onDelete={() => onCardDelete(columnId, item.id)}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
