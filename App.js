
/*
<div id = "parent">
   <div id = "child1">
     <h1>I'm h1 tag</h1>
     <h1>I'm h2 tag</h1>
  </div>
  <div id = "child2">
     <h1>I'm h1 tag</h1>
     <h1>I'm h2 tag</h1>
  </div>
</div>
*/

const parent = React.createElement("div", {id : "parent"},
 [React.createElement("div", {id: "child1"}, 
 [React.createElement("h1", {}, 
 "I'm c1h1 tag" 
 ),
 React.createElement("h2", {}, 
 "I'm c1h2 tag" 
 )]
 ),React.createElement("div", {id: "child2"}, 
 [React.createElement("h1", {}, 
 "I'm c2h1 tag" 
 ),
 React.createElement("h2", {}, 
 "I'm c2h2 tag" 
 )]
 )]);




const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
