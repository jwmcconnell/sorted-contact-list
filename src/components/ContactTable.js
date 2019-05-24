import Component from './Component.js';
import TableRow from './TableRow.js';

class ContactTable extends Component {

  render() {
    const dom = this.renderDOM();

    const contacts = this.props.contacts;

    const tableBody = dom.querySelector('#contacts');

    contacts.forEach(contact => {
      const tableRow = new TableRow({ contact });
      const tableRowDOM = tableRow.render();
      tableBody.appendChild(tableRowDOM);
    });

    const buttons = dom.querySelectorAll('.table-button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const properties = {
          type: button.id,
          direction: 1
        };
        this.props.onSort(properties);
      });
    });

    return dom;
  }

  renderTemplate() {
    return /*html*/`
    <table>
    <thead>
      <tr>
        <td><button id="firstName" class="table-button">First Name</button></td>
        <td><button id="lastName" class="table-button">Last Name</button></td>
        <td><button id="age" class="table-button">Age</button></td>
        <td><button id="email" class="table-button">Email</button></td>
        <td><button id="phone" class="table-button">Phone</button></td>
        <td><button id="company" class="table-button">Company</button></td>
        <td><button id="address" class="table-button">Address</button></button></td>
        <td><button id="balance" class="table-button">Balance</button></td>
        <td><button id="favoriteFruit" class="table-button">Favorite Fruit</button></td>
      </tr>
    </thead>
    <tbody id="contacts">
    </tbody>
    </table>
    `;
  }

}

export default ContactTable;