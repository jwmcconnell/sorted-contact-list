import Component from './Component.js';

class ContactTable extends Component {

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
    `;
  }

}

export default ContactTable;