let todo = document.createElement('div');
todo.id = 'todo';
todo.setAttribute('hidden', '');
let oneSegment = '14.28%';
let lastSegment = '14.30%';
todo.innerHTML = `
<div id="additem" class="maindiv">
  <form>
    <div class="row">
      <div class="col">
        <label for="name">Enter the name:</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Name">
      </div>
      <div class="col">
        <label for="description">Enter the description:</label>
        <input type="text" class="form-control" id="description" name="description" placeholder="Description">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="startdate">Start date and time:</label>
        <input type="datetime-local" id="startdate" id="start" name="startdate" class="form-control">
      </div>
      <div class="col">
        <label for="enddate">End date and time:</label>
        <input type="datetime-local" id="enddate" id="end" name="enddate" class="form-control">
      </div>
      <div class="col">
        <label for="add" style="color: white">Add to list:</label><br>
        <button type="button" id="addbutton" name="add" class="btn btn-info" onclick="additem()">Add to
          list</button>
      </div>
      <div class="col colforbutton">
        <label for="clear" style="color: white">Clear all:</label><br>
        <button type="button" name="clear" class="btn btn-danger" onclick="clearAll()">Clear all</button>
      </div>
    </div>
  </form>
  <div id="itemlist" class="maindiv">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Discription</th>
        <th scope="col">Start</th>
        <th scope="col">Days left</th>
        <th scope="col">Status</th>
        <th scope="col">Edit</th>
      </tr>
    </thead>
    <tbody id="table">
    </tbody>
  </table>
</div>
<div>
  <p style="text-align: center; font-weight: bold;">Left click on row to change the status of event |
    Right click on row to delete this event. | To edit - click on Edit. | This week events are below:</p>
</div>
<div id="weekgraph" class="maindiv">
  <div class="progress" style="height: 30px;">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${oneSegment}">Sunday</div>
    <div class="progress-bar bg-info" role="progressbar" style="width: ${oneSegment}">Monday</div>
    <div class="progress-bar bg-success" role="progressbar" style="width: ${oneSegment}">Tuesday</div>
    <div class="progress-bar bg-info" role="progressbar" style="width: ${oneSegment}">Wednesday</div>
    <div class="progress-bar bg-success" role="progressbar" style="width: ${oneSegment}">Thursday</div>
    <div class="progress-bar bg-info" role="progressbar" style="width: ${lastSegment}">Friday</div>
    <div class="progress-bar bg-success" role="progressbar" style="width: ${lastSegment}">Saturday</div>
  </div>
</div>
`;
document.body.appendChild(todo);