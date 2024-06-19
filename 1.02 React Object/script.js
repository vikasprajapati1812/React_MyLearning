////  Nested  elements  using the Object

// const h1 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "h1",
//     key: null,
//     ref: null,
//     props: {
//       className: "heading",
//       id: "title",
//       children: [
//         {
//             $$typeof: Symbol.for("react.element"),
//             type: "p", //giving  p tag inside the h1 tag
//             key: null,
//             ref: null,
//             props: {
//               className: "subheading",
//               id: "subtitle",
//               children:"I am Inside the p which is inside the h1"
//             },
//           },
//           {
//             $$typeof: Symbol.for("react.element"),
//             type: "b",
//             key: null,
//             ref: null,
//             props: {
//               children:"I am Inside the p which is inside the h1"
//             },
//           },
//           {
//             $$typeof: Symbol.for("react.element"),
//             type: "i",
//             key: null,
//             ref: null,
//             props: {
//               children:[
//                 {
//                     $$typeof: Symbol.for("react.element"),
//                     type: "button",
//                     key: null,
//                     ref: null,
//                     props: {
//                       children:"I'm Button"
//                     },
//                   },
//                   {
//                     $$typeof: Symbol.for("react.element"),
//                     type: "button",
//                     key: null,
//                     ref: null,
//                     props: {
//                       children:"I'm 2nd Button"
//                     },
//                   },
//               ]
//             },
//           },
//       ]
//     },
//   };

//   const root = ReactDOM.createRoot(document.querySelector("#root"));

//   root.render(h1);




////  Creating the elements using the    --->     "React.createElement"

const container = React.createElement(
  "div",
  { className: "container", id: "containerer" },
  [
    React.createElement("section", {key:1}, [
      React.createElement(
        "p",
        {key:2},
        "This child is siblings "
      ),
      React.createElement(
        "p",
        {key:3},                             /// if two child element have same key then though the error (key is not necessary but to differentiate it ned to pass otherwise through error)
        "This library for web and native user interfaces"
      )
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
