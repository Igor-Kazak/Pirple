let login = document.createElement('div');
login.id = 'login';
login.className = 'maindiv';
login.setAttribute('hidden', '');
let titleLogin = 'LOGIN FORM:'
login.innerHTML = `
<p style="font-weight: bold">${titleLogin}</p>
<form>
  <div class="row">
    <div class="col">
      <label for="username">Enter the username:</label>
      <input type="text" class="form-control" id="username" name="username" placeholder="username" required>
    </div>
    <div class="col">
      <label for="password">Enter the password:</label>
      <input type="password" class="form-control" id="password" name="password" placeholder="password" required>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <p style="font-weight: bold; color: red" id="loginmessage"></p>
    </div>
    <div class="col colforbutton">
      <button type="button" id="loginbutton" name="login" class="btn btn-info" onclick="userLogin()">Login</button>
    </div>
  </div>
</form>
`;
document.body.appendChild(login);