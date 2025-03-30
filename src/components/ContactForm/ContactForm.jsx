import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice.js";

const UserSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").max(50).required("Required"),
  number: Yup.string().min(3, "Too short").max(50).required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);
  // console.log(contacts);

  const handleSubmit = (value, actions) => {
    // console.log("Form Values:", value);

    actions.resetForm();
    dispatch(
      addContact({
        id: nanoid(),
        name: value.name,
        number: value.number,
      })
    );
    // console.log("Contact dispatched:", {
    //   id: nanoid(),
    //   name: value.name,
    //   number: value.number,
    // });
  };

  // const handleSubmit = (value, actions) => {
  //   console.log(value);
  //   actions.resetForm();
  //   addContact({
  //     id: nanoid(),
  //     name: value.name,
  //     number: value.number,
  //   });
  // };
  const idName = useId();
  const idNumber = useId();
  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.formNameDiv}>
            <label className={css.label} htmlFor={idName}>
              Name
            </label>
            <Field className={css.input} type="text" name="name" id={idName} />
            <ErrorMessage className={css.error} component="span" name="name" />
          </div>
          <div className={css.formNameDiv}>
            <label className={css.label} htmlFor={idNumber}>
              Number
            </label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={idNumber}
            />
            <ErrorMessage
              className={css.error}
              component="span"
              name="number"
            />
          </div>
          <div className={css.buttonDiv}>
            <button className={css.button} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
