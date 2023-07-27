const name = "venkat";
const className = "greeting";
const element = (
  <div>
    <h1 className={className}>Hello {name}</h1>
    <p>Good to see you</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
