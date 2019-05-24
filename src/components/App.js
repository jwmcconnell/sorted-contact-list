import Component from './Component.js';

class App extends Component {

  renderTemplate() {
    console.log('hi');
    return /*html*/`
      <span>Hi there</span>
    `;
  }

}

export default App;