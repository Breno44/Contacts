import { useState } from "react";
import { Contact } from "./Contact";
import { v4 as uuid } from "uuid";

export const useContacts = () => {
  const newContact: Contact = {
    idade: "",
    nome: "",
  };
  const [contactsList, setContactsList] = useState<Contact[]>([]);
  const [contact, setContact] = useState<Contact>(newContact);

  const addContact = (contact: Contact) => {
    contact.id = uuid();
    const lista = [...contactsList, contact];
    setContactsList(lista);
    setContact(newContact);
  };

  const removeContact = (contact: Contact) => {
    const id = contact.id;

    if (id) {
      const newList = contactsList.filter((c) => c.id !== id);
      setContactsList(newList);
    }
  };

  return {
    contact,
    addContact,
    contactsList,
    removeContact,
  };
};
