import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ClientFormProps, ClientValues } from "./ClientForm.types";
import { TITLE } from "../../utils/Constants";
import InputField from "../InputField";
import SelectField from "../SelectField";

const ClientForm: React.FC<ClientFormProps> = ({
  onAddClient,
  onEditClient,
  setIsModalOpen,
  initialValues,
}) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    age: Yup.number().required("Required").positive().integer(),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
  });

  const handleSubmit = (values: ClientValues) => {
    if (initialValues) {
      onEditClient(values);
    } else {
      onAddClient(values);
    }
    setIsModalOpen(false);
  };

  const defaultValues: ClientValues = {
    title: "Mr",
    name: "",
    age: "",
    email: "",
    phone: "",
  };

  const titleOptions = Object.entries(TITLE).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  return (
    <Formik
      initialValues={initialValues || defaultValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty }) => (
        <Form className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-bold">
              {initialValues ? "Edit Client" : "Add Client"}
            </h2>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <svg
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <SelectField name="title" label="Title" options={titleOptions} />
          <InputField name="name" label="Name" placeholder="Enter name" />
          <InputField
            name="age"
            label="Age"
            type="number"
            placeholder="Enter age"
          />
          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="Enter email"
          />
          <InputField
            name="phone"
            label="Phone"
            placeholder="Enter phone number"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!isValid || !dirty}
          >
            {initialValues ? "Update Client" : "Add Client"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ClientForm;
