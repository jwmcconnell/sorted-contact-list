import Component from './Component.js';

class HeaderCell extends Component {

  renderTemplate() {
    const sortType = this.props.properties.type;
    const sortDirection = this.props.properties.direction;
    const cellName = this.props.cellName;
    const cellValue = this.props.cellValue;
    return /*html*/`
      <th>
        <button value="${cellValue}" class="table-button">${cellName}
          <span class="${sortType === cellValue ? '' : 'hidden'}">${sortDirection === 1 ? '▲' : '▼'}</span>
        </button>
      </th>
    `;
  }

}

export default HeaderCell;