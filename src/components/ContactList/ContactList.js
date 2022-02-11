import React from 'react';
import propTypes from 'prop-types';
// import s from './ContactList.module.css';


const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({ name, number, id }) => (
                <li key={id}>
                    {name} : <span>{number}</span>
                    <button
                        type='button'
                        onClick={() => { onDeleteContact(id); }}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: propTypes.array,
    onDeleteContact: propTypes.func,
};

export default ContactList;