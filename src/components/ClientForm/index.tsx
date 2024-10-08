import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ClientFormProps, ClientValues } from "./ClientForm.types";
import { TITLE } from "../../utils/Constants";

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

  return (
    <Formik
      initialValues={initialValues || defaultValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              {initialValues ? "Edit Client" : "Add Client"}
            </h2>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <svg
                className="h-6 w-6"
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
          <div>
            <Field
              as="select"
              name="title"
              className="w-full p-2 border rounded"
            >
              {Object.entries(TITLE).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </Field>
            {errors.title && touched.title && (
              <div className="text-red-500">{errors.title}</div>
            )}
          </div>
          <div>
            <Field
              name="name"
              placeholder="Name"
              className="w-full p-2 border rounded"
            />
            {errors.name && touched.name && (
              <div className="text-red-500">{errors.name}</div>
            )}
          </div>
          <div>
            <Field
              name="age"
              placeholder="Age"
              type="number"
              className="w-full p-2 border rounded"
            />
            {errors.age && touched.age && (
              <div className="text-red-500">{errors.age}</div>
            )}
          </div>
          <div>
            <Field
              name="email"
              placeholder="Email"
              type="email"
              className="w-full p-2 border rounded"
            />
            {errors.email && touched.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
          </div>
          <div>
            <Field
              name="phone"
              placeholder="Phone"
              className="w-full p-2 border rounded"
            />
            {errors.phone && touched.phone && (
              <div className="text-red-500">{errors.phone}</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {initialValues ? "Update Client" : "Add Client"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ClientForm;
