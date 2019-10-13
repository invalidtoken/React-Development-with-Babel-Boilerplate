let mainDiv = document.getElementById("add");
let count = 0;
let mainTemplate;
let app = {
  title : "This is a title",
  subTitle : "This is the subtitle",
  options : []
};

function getTemplate(app){
  let template = (
    <div>
      <h1>Title : {app.name}</h1>
      <h1>Sub Title : {app.subTitle}</h1>
    </div>
  );
  return template;
}


function onFormSubmit(event){
  event.preventDefault();
  let option = event.target.option.value;
  if(option){
    app.options.push(option);
    event.target.option.value = "";
    renderTemplate(app);
  }
}

function onOptionsReset(){
  app.options = [];
  renderTemplate(app);
}

function onMakeDecison(){
  let random = Math.floor(Math.random()*app.options.length);
  let options = app.options;
  console.log(options[random]);
}
/*
Task 1 - Render subtitle only if one exists otherwise render nothing
Task 2 - Render new p tag - if options.length > 0
*/

function renderTemplate(app){
  let template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      {app.hasOwnProperty("options") && typeof app.options !== "undefined" && app.options.constructor === Array && app.options.length > 0 ? <p>You have {app.options.length} options </p> : <p>No options to show</p>}
      <button disabled={app.options.length === 0} onClick={onMakeDecison}>What should I do?</button>
      <button onClick={onOptionsReset}>Remove All</button>
      <ol>
        {
          app.options && app.options.constructor === Array && app.options.map(option=><li key={++count}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  mainTemplate = template;
  ReactDOM.render(template, mainDiv);
}
renderTemplate(app);







