import { Component } from 'react';
import shortid from 'shortid';
import ContactForm from 'Componets/ContactForm/ContactForm';
import ContactList from 'Componets/ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = person => {
    const contact = {
      id: shortid.generate(),
      name: person.name,
      number: person.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(contact);
  };

  findFilterValue = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(person => person.id !== id),
    }));
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterCurrentTel = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

    return (
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm onAdd={this.addNewContact} />
        filterContact={filterCurrentTel}
        <h2 className="title">Contacts</h2>
        <ContactList
          contacts={filterCurrentTel}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
