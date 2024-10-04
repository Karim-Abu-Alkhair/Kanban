import { TitleType } from "../../utils/Constants";

export interface ClientValues {
  id?: number;
  title: TitleType;
  name: string;
  age: string;
  email: string;
  phone: string;
}

export interface ClientFormProps {
  onAddClient: (clientData: ClientValues) => void;
  onEditClient: (clientData: ClientValues) => void;
  setIsModalOpen: (isOpen: boolean) => void;
  initialValues?: ClientValues;
}
