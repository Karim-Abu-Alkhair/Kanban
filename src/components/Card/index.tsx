import React from "react";
import { Draggable } from "@hello-pangea/dnd";

import { CardProps } from "./Card.types";
import { EditIcon } from "../../utils/Icons/EditIcon";
import { DeleteIcon } from "../../utils/Icons/DeleteIcon";

const Card: React.FC<CardProps> = ({ item, index, onClick, onDelete }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">
              {item.content.title}. {item.content.name}
            </h3>
            <p className="text-sm text-gray-500">{item.content.age} yo</p>
          </div>
          <p className="mb-1 font-semibold">{item.content.email}</p>
          <p className="text-gray-500">{item.content.phone}</p>
          <div className="flex justify-end mb-2">
            <div
              className="p-2 rounded-full hover:bg-gray-100 cursor-pointer text-blue-500"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              <EditIcon />
            </div>
            <div
              className="p-2 rounded-full hover:bg-gray-100 cursor-pointer text-red-500"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              <DeleteIcon />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
