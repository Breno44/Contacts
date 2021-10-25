import { TextField, Button, Grid } from "@material-ui/core";
import { Contact, validationScheme } from "./Contact";
import { useFormik, FormikHelpers } from "formik";
import "./index.css";

interface ContactsFormProps {
  contact: Contact;
  submitForm: (contact: Contact) => void;
}

export default function ContactsForm({ contact, submitForm }: ContactsFormProps) {
  const onSubmit = (contact: Contact, helper: FormikHelpers<Contact>) => {
    submitForm(contact);
    helper.resetForm();
  };

  const formik = useFormik<Contact>({
    onSubmit,
    initialValues: { ...contact },
    validationSchema: validationScheme,
    validateOnChange: false,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Nome"
            name="nome"
            id="inputNome"
            value={formik.values.nome}
            onChange={formik.handleChange}
            className="full-width"
          />
          <span className="errors-msg">{formik.errors.nome}</span>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Idade"
            name="idade"
            id="inputIdade"
            value={formik.values.idade}
            onChange={formik.handleChange}
            className="full-width"
          />
          <span className="errors-msg">{formik.errors.idade}</span>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" className="full-width">
            Adicionar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
