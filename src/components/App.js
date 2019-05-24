import Component from './Component.js';
import Header from './Header.js';
import ContactTable from './ContactTable.js';
import contacts from '../../data/contacts.js';
import sortItems from '../sortItems.js';

class App extends Component {

  render() {
    const dom = this.renderDOM();

    const header = new Header();
    const headerDOM = header.render();

    const contactTable = new ContactTable({
      contacts,
      onSort: (properties) => {
        const sortedContacts = sortItems(contacts, properties);
        contactTable.update({ contacts: sortedContacts });
      }
    });
    const contactTableDOM = contactTable.render();

    const main = dom.querySelector('main');

    dom.prepend(headerDOM);
    main.appendChild(contactTableDOM);

    return dom;
  }

  renderTemplate() {
    return /*html*/`
      <div>
        <main></main>
      </div>
    `;
  }

}

export default App;