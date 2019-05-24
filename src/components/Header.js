import Component from './Component.js';

class Header extends Component {

  renderTemplate() {
    return /*html*/`
      <header>
        <span>Sorted Contact List</span>
      </header>
    `;
  }

}

export default Header;