import App from "./App";
import ReactDOM from "../react-dom";

const root = document.querySelector("#root");

// 1. 基本的 DOM api 操作
// const div = document.createElement("div");
// div.id = "app";
// div.style = "width: 100px; height: 100px; border: 1px solid #ccc;";
// console.log(div);

// const text = document.createTextNode("louhaojie");
// div.append(text);

// root.append(div);

// 2.使用数据结构处理 DOM
// const element = {
//   type: "div",
//   props: {
//     id: "app",
//     style: "width: 200px; height: 200px; border: 1px solid #ccc;",
//   },
// };

// const div = document.createElement(element.type);
// Object.keys(element.props).forEach((name) => {
//   div[name] = element.props[name];
// });

// const textElement = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "louhaojie",
//   },
// };

// const text = document.createTextNode("louhaojie");
// Object.keys(textElement.props).forEach((name) => {
//     text[name] = textElement.props[name];
// });

// div.append(text);

// root.append(div);

// 3.使用 render 来处理渲染DOM
ReactDOM.render(App, root);

console.log(1);
