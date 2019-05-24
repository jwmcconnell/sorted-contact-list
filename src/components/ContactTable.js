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

    return dom;
  }

  renderTemplate() {
    return /*html*/`
    <table>
    <thead>
      <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Age</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Company</td>
        <td>Address</td>
        <td>Balance</td>
        <td>Favorite Fruit</td>
      </tr>
    </thead>
    <tbody id="contacts">
    </tbody>
    </table>
    `;
  }

}

export default ContactTable;