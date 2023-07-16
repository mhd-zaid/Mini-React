  import Component from "./component.js";
  // Exemple d'utilisation
  class MyComponent extends Component {

    render() {
      const paragraph = document.createElement('p');
      paragraph.textContent = this.props.text;

      return paragraph;
    }
  }

  export default MyComponent;