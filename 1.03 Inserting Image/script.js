// const container = React.createElement(
//     "div",
//     { className: "container", id: "containerer" },
//     [
//       React.createElement("section", {key:1}, [
//         React.createElement(
//           "img",
//           {key:2,src:"./Reactimage.webp"},

//         ),
//         React.createElement(
//           "span",
//           {key:3},         /// if two child element have same key then though the error (key is not necessary but to differentiate it ned to pass otherwise through error)
//           "This library for web and native user interfaces"
//         ),
//         React.createElement(
//           "p",
//           {key:3},         /// if two child element have same key then though the error (key is not necessary but to differentiate it ned to pass otherwise through error)
//           "This is parageraph which will not come inline as it is block element even though it is a sibling"
//         )
//       ]),
//     ]
//   );

//   const root = ReactDOM.createRoot(document.querySelector("#root"));
//   root.render(container);





const container = React.createElement(
  "div",
  { className: "container", id: "containerer" },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement("img", { 
        key: 22,
        style:{width:200},
         src: "./Reactimage.webp" }),        //image is a void elemet there should be no any children for it
      React.createElement(
        "span",
        { key: 33 }, /// if two child element have same key then though the error (key is not necessary but to differentiate it ned to pass otherwise through error)
        "This library for web and native user interfaces"
      ),
      React.createElement(
        "p",
        { key: 3 }, /// if two child element have same key then though the error (key is not necessary but to differentiate it ned to pass otherwise through error)
        "This is parageraph which will not come inline as it is block element even though it is a sibling"
      ),
    ]),
    React.createElement("section", { key: 2 }, [
      React.createElement("img", { key: 3, src: "./Reactimage.webp" }),
      React.createElement(
        "span",
        { key: 31 }, /// if two child element have same key then though the error (key is not necessary but to differentiate it ned to pass otherwise through error)
        "This library for web and native user interfaces"
      ),
      React.createElement(
        "p",
        { key: 32 }, /// if two child element have same key then though the error (key is not necessary but to differentiate it ned to pass otherwise through error)
        "This is parageraph which will not come inline as it is block element even though it is a sibling"
      ),
    ]),
  ]
);




////    Notes

//    image is a void elemet there should be no any children for it
//    input is a void elemet there should be no any children for it

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
