import Component from "./component.js";
// Exemple d'utilisation
class LinkComponent extends Component {
  shouldUpdate() {
    return !this.type_check(this.oldProps, { value: this.props });
  }

  render() {
    const link = document.createElement("a");
    const text = "Lien vers la {{text}}"
    link.textContent = text.interpolate(this.props);
    
    link.setAttribute("href", this.props.link);

    const handleClick = function (event) {
      event.preventDefault();
      window.history.pushState({}, "", this.props.link);
    };

    link.addEventListener("click", handleClick.bind(this));

    return link;
  }
}

LinkComponent.propTypes = {
  text: { type: "string" },
  link: { type: "string" },
};

export default LinkComponent;
