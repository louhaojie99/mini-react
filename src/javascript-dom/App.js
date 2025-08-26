const App = {
  type: "div",
  props: {
    id: "app",
    style: "width: 200px; height: 200px; border: 1px solid #ccc;",
    children: [
      {
        type: "TEXT_ELEMENT",
        props: {
          nodeValue: "louhaojie",
          children: [],
        },
      },
    ],
  },
};

export default App;
