interface Option {
  value: string;
  label: string;
}

export interface SelectFieldProps {
  name: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
