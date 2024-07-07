import ReactDOM from "react-dom/client"



console.log("hello Scripts")


const h1=<h1>Hello World in Scripts</h1>
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(h1)


if (module.hot) {
    module.hot.accept();
}