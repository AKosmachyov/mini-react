import MiniReact from '../index.js';

const element = MiniReact.createElement(
  'div',
  { id: '1' },
  MiniReact.createElement('a', undefined, 'home'),
  MiniReact.createElement('b')
)
// const element = (
//   <div id="1">
//     <a>home</a>
//     <b />
//   </div>
// )

const container = document.getElementById("root")
MiniReact.render(element, container)