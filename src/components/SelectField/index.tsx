import React from "react";
import { Field, ErrorMessage } from "formik";

import { SelectFieldProps } from "./SelectFiledProps.types";

const SelectField: React.FC<SelectFieldProps> = ({ name, label, options }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <Field
        as="select"
        name={name}
        id={name}
        className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-sm text-red-600"
      />
    </div>
  );
};

export default SelectField;
