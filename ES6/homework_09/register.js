let register = document.createElement('div');
register.id = 'register';
register.className = 'maindiv';
register.setAttribute('hidden', '');
let titleRegister = 'REGISTER FORM:';
register.innerHTML = `
<p style="font-weight: bold">${titleRegister}</p>
<form>
  <div class="row">
    <div class="col">
      <label for="firstname">Enter the first name:</label>
      <input type="text" class="form-control" id="firstname" name="firstname" placeholder="first name">
    </div>
    <div class="col">
      <label for="lastname">Enter the last name:</label>
      <input type="text" class="form-control" id="lastname" name="lastname" placeholder="last name">
    </div>
    <div class="col">
      <label for="email">Enter the e-mail:</label>
      <input type="email" class="form-control" id="email" name="email" placeholder="e-mail">
    </div>
  </div>
  <div class="row">
    <div class="col">
      <label for="username">Enter the username:</label>
      <input type="text" class="form-control" id="usernamereg" name="usernamereg" placeholder="username">
    </div>
    <div class="col">
      <label for="password">Enter the password:</label>
      <input type="password" class="form-control" id="passwordreg" name="passwordreg" placeholder="password">
    </div>
  </div>
  <div class="row">
    <div class="col">
      <p style="font-weight: bold; color: red" id="registermessage"></p>
    </div>
    <div class="col colforbutton">
      <button type="button" id="registerbutton" name="register" class="btn btn-info"
        onclick="userRegister()">Register</button>
      <button type="button" id="updatebutton" name="update" class="btn btn-info" onclick="userUpdate()"
        hidden>Update</button>
    </div>
  </div>
</form>
`;
document.body.appendChild(register);