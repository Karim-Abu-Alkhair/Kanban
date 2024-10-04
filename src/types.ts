import { ClientValues } from "./components/ClientForm/ClientForm.types";

export interface ColumnItem {
  id: string;
  content: ClientValues;
}

export interface Column {
  name: string;
  items: ColumnItem[];
}

export interface Columns {
  [key: string]: Column;
}
