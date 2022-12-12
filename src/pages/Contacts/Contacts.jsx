import React from 'react';
import Contacts from '../../components/Contacts/Contacts';
import Form from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import s from './Contacts.module.css';

export default function ContactsPage() {
  return (
    <div className={s.container}>
        <div className={s.wrapper}>
          <h1 className={s.title}>Phonebook</h1>
          <Form />
        </div>
        <div className={s.wrapper}>
          <h2 className={s.title}>Contacts</h2>
          <Filter />
          <Contacts />
        </div>
    </div>
  );
};
