import Component from './Component.js';
import TableRow from './TableRow.js';
import HeaderCell from './HeaderCell.js';

let currentSort = {
  type: null,
  direction: 0
};

class ContactTable extends Component {

  render() {
    const dom = this.renderDOM();

    const headerCellData = this.props.headerCellData;
    const contacts = this.props.contacts;

    const tr = dom.querySelector('tr');

    headerCellData.forEach(data => {
      const headerCell = new HeaderCell({
        properties: this.props.properties,
        cellName: data.cellName,
        cellValue: data.cellValue,
      });
      const headerCellDOM = headerCell.render();
      tr.appendChild(headerCellDOM);
    });

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
          type: button.value,
          direction: 1
        };

        if(currentSort.type === properties.type &&
          currentSort.direction === properties.direction) {
          properties.direction = properties.direction * -1;
        }

        currentSort.type = properties.type;
        currentSort.direction = properties.direction;

        this.props.onSort(properties);
      });
    });

    return dom;
  }

  renderTemplate() {
    return /*html*/`
    <table>
    <thead>
      <tr></tr>
    </thead>
      <tbody id="contacts"></tbody>
    </table>
    `;
  }

}

export default ContactTable;