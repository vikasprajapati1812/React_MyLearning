// const h2=React.createElement('h2',{className:"subheading" ,id:"subtitle"},'hello React')

// const root=ReactDOM.createRoot(document.querySelector('#root'))

// root.render(h2)
// 
// const h2=document.createElement('h2');
// h2.innerHTML="hello Vikas";
// document.querySelector('#root').append(h2);
// 
// console.dir(h2)




////Rendering the react Element using the React Object

//// here i have copy the object from the console and then with the shift+alt+F (format it) and have to add "Symbol.for('react.element)"
// 

const h3 = {
    $$typeof:Symbol.for('react.element'),
  type: "h2",
  key: null,
  ref: null,
  props: {
    className: "subheading",
    id: "subtitle",
    children: "hello Using the Object ",
  },
  _owner: null,
  _store: {},
};

 
 
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(h3);

// Note # things that are not necessary can be removed while creating the objects









// const h4 = {
//     $$typeof:Symbol.for('react.element'),
//   type: "h2",
//   key: null,
//   ref: null,
//   props: {
//     className: "subheading",
//     id: "subtitle",
//     children: "hello Using the Object ",
//   },
// };

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(h4);







////    Notes

// $$typeof it is a part of javascript used for the security purpose as it does not pass through the json thats why the malacious code
// cannot be inserted .

// React.createElement create the Object which we called it react Element

//  Props are optional















// 
// const h1 = {
  // $$typeof: Symbol.for("react.element"),
  // type: "h1",
  // key: null,
  // ref: null,
  // props: {
    // className: "heading",
    // id: "title",
    // children: {
      // $$typeof: Symbol.for("react.element"),
      // type: "p", //giving  p tag inside the h1 tag
      // key: null,
      // ref: null,
      // props: {
        // className: "subheading",
        // id: "subtitle",
        // children:"I am Inside the p which is inside the h1"
      // },
    // },
  // },
// };
// 
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// 
// root.render(h1);


