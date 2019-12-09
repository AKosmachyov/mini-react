import MiniReact from '../source/index.js';

const element = MiniReact.createElement(
  'div',
  { id: '1' },
  MiniReact.createElement('a', undefined, 'home'),
  MiniReact.createElement('b', undefined, 'test')
)
// const element = (
//   <div id="1">
//     <a>home</a>
//     <b>test</b>
//   </div>
// )

const container = document.getElementById("root")
MiniReact.render(element, container)
