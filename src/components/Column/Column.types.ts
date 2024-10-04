import { Column, ColumnItem } from "../../types";

export interface ColumnProps {
  columnId: string;
  column: Column;
  openModal: (columnId: string) => void;
  isFirstColumn: boolean;
  onCardClick: (columnId: string, item: ColumnItem) => void;
  onCardDelete: (columnId: string, itemId: string) => void;
}
