// Classe de base Component
String.prototype.interpolate = function (data) {
  return this.replace(/{{\s*([^}]+)\s*}}/g, (match, key) => {
    const keys = key.split('.');
    let value = data;
    for (const k of keys) {
      value = value[k];
      if (value === undefined) return match;
    }
    return value;
  });
};
class Component {
  constructor(props) {
    this.props = props;
    this.oldProps = props;
  }
  shouldUpdate(){

    return this.props != this.oldProps;
  }

  display(newProps) {
    if (this.type_check(newProps, { type: "object" })) {
        this.oldProps = this.props;
        this.props = newProps;
      if (this.shouldUpdate()) {
        return this.render();
      }       
    } else {
      alert("le type doit être un objet");
    }

    return this.props;
  }

  type_check(variable, conf) {
    if (conf.type) {
      if (
        conf.type === "null"
          ? variable !== null
          : conf.type === "undefined"
          ? variable !== undefined
          : conf.type === "array"
          ? !Array.isArray(variable)
          : typeof variable !== conf.type || variable === null
      ) {
        return false;
      }
    }

    if (conf.value !== undefined) {
      if (
        variable !== conf.value &&
        !(
          typeof variable === "object" &&
          JSON.stringify(variable) === JSON.stringify(conf.value)
        )
      ) {
        return false;
      }
    }

    if (conf.enum) {
      let found = false;
      for (let i = 0; i < conf.enum.length; i++) {
        const enumValue = conf.enum[i];
        if (typeof enumValue === "object") {
          if (JSON.stringify(enumValue) === JSON.stringify(variable)) {
            found = true;
            break;
          }
        } else {
          if (enumValue === variable) {
            found = true;
            break;
          }
        }
      }
      if (!found) {
        return false;
      }
    }

    return true;
  }
  
}
export default Component;
