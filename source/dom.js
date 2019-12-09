const TEXT_ELEMENT = 'TEXT_ELEMENT';
const shouldIgnoreProperty = key => key !== 'children';

function createDom(fiber) {
  const dom =
    fiber.type == 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(fiber.type)

  Object.keys(fiber.props)
    .filter(shouldIgnoreProperty)
    .forEach(name => {
      dom[name] = fiber.props[name]
    })

  return dom
}

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

function createTextElement(text) {
  return {
    type: TEXT_ELEMENT,
    props: {
      nodeValue: text,
      children: []
    }
  }
}

export {
  createDom,
  createElement
}
