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
          className="bg-white border border-gray-200 rounded-lg p-3 mb-3 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base md:text-lg font-bold truncate">
              {item.content.title}. {item.content.name}
            </h3>
            <p className="text-xs md:text-sm text-gray-500">
              {item.content.age} yo
            </p>
          </div>
          <p className="mb-1 text-sm font-semibold truncate">
            {item.content.email}
          </p>
          <p className="text-sm text-gray-500 truncate">{item.content.phone}</p>
          <div className="flex justify-end mt-2">
            <button
              className="p-1 rounded-full hover:bg-gray-100 text-blue-500 mr-2"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              <EditIcon />
            </button>
            <button
              className="p-1 rounded-full hover:bg-gray-100 text-red-500"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
