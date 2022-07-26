import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";

import { FormField, Label } from "semantic-ui-react";
import BerkeTextInput from "../utilities/customFormControls/BerkeTextInput";
export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };
  const schema = Yup.object({
    productName: Yup.string().required("Product name is required"),
    unitPrice: Yup.number().required("Unit price is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <BerkeTextInput name="productName" placeholder="Product Name" />
        {/* <FormField>
          <Field name="productName" placeholder="Product Name"></Field>
          <ErrorMessage
            name="productName"
            render={(error) => (
              <Label pointing basic color="red" content={error}></Label>
            )}
          ></ErrorMessage>
        </FormField>
        <FormField>
          <Field name="unitPrice" placeholder="Unit Price "></Field>
          <ErrorMessage
            name="unitPrice"
            render={(error) => (
              <Label pointing basic color="red" content={error}></Label>
            )}
          ></ErrorMessage>
        </FormField> */}
        <BerkeTextInput name="unitPrice" placeholder="Unit Price" />

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
