function createTextNode(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'string' ? createTextNode(child) : child,
      ),
    },
  }
}

function render(el, container) {
  const dom =
    el.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(el.type) // 创建  console.log(dom)
  Object.keys(el.props)
    .filter((key) => key !== 'children')
    .forEach((key) => (dom[key] = el.props[key])) // props 赋值
  el.props.children.forEach((child) => render(child, dom)) // 递归 children
  container.appendChild(dom) // 插入
}


const React = {
  render,
  createElement
}

export default React