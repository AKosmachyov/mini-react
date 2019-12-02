function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'object'
          ? child
          : createTextElement(child))
    }
  }
}

const TEXT_ELEMENT = 'TEXT_ELEMENT';

function createTextElement(text) {
  return {
    type: TEXT_ELEMENT,
    props: {
      nodeValue: text,
      children: []
    }
  }
}

const needIgnoreProperty = key => key !== 'children';

function render(element, container) {
  const dom = element.type == TEXT_ELEMENT
    ? document.createTextNode('')
    : document.createElement(element.type)

  Object
    .keys(element.props)
    .filter(needIgnoreProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })

  element.props.children.forEach(child => render(child, dom))

  container.appendChild(dom)
}

const MiniReact = {
  createElement,
  render
}

export default MiniReact;