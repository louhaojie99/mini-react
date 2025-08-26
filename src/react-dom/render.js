const isProperty = (key) => !["children"].includes(key);

export const render = (element, container) => {
  const createDom = (type) => {
    if (type === "TEXT_ELEMENT") {
      return document.createTextNode(type);
    }
    return document.createElement(element.type);
  };
  const dom = createDom(element.type);
  Object.keys(element.props)
    .filter(isProperty) // 只能设置标准属性, 过滤掉不能设置的属性
    .forEach((name) => {
      dom[name] = element.props[name];
    });
  container.append(dom);
  element.props.children.forEach((child) => render(child, dom));
};
