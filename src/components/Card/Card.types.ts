import { ColumnItem } from "../../types";

export interface CardProps {
  item: ColumnItem;
  index: number;
  onClick: () => void;
  onDelete: () => void;
}
