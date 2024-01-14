const heading1 = React.createElement(
    "h1",
    {
        id:"title",
    },
    "heading 1 by harshdev"
);

const heading2 = React.createElement(
    "h2",
    {
        id:"title",
    },
    "heading 2 by harshdev"
);

const container = React.createElement(
    "div",
    {
        id:"container",
    },
    [heading1,heading2]
);

console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

