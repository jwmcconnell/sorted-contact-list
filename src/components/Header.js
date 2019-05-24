import Component from './Component.js';

class Header extends Component {

  renderTemplate() {
    return /*html*/`
      <header>
        <h1>Sorted Contact List</h1>
      </header>
    `;
  }

}

export default Header;