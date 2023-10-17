import React from 'react';
import { Contact } from '../Contact/Contact';
import { ContactItem, ContactRoster, Button} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactRoster>
    {contacts.map((contact) => (
      <ContactItem key={contact.id}>
        <Contact name={contact.name} number={contact.number} />
        <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
      </ContactItem>
    ))}
  </ContactRoster>
);

