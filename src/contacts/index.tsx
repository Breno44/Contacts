import ContactsForm from "./Form";
import { Contact } from "./Contact";
import ContactsList from "./List";
import { useContacts } from "./useContact";

export default function Contacts() {
  const { addContact, contact, contactsList, removeContact } = useContacts();

  const handleFormSubmit = (contact: Contact) => {
    addContact(contact);
  };

  return (
    <>
      <ContactsForm contact={contact} submitForm={handleFormSubmit} />
      <ContactsList list={contactsList} onDelete={removeContact} />
    </>
  );
}
