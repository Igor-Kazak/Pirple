let loginregister = document.createElement('div');
loginregister.id = 'loginregister';
loginregister.className = 'maindiv';
loginregister.style.height = '90vh';
loginregister.style.paddingTop = '30vh';
let titleApp = 'TODO LIST';
let widthButton = '100px';
loginregister.innerHTML = `
<p style="font-weight: bold; text-align: center">${titleApp}</p>
<form>
  <div class="row">
    <div class="col" style="text-align: right;">
      <button type="button" id="loginbuttonchoose" name="login" class="btn btn-info" style="width: ${widthButton};"
        onclick="userLoginEnter()">Login</button>
    </div>
    <div class="col" style="text-align: left;">
      <button type="button" id="registerbuttonchoose" name="register" class="btn btn-info" style="width: ${widthButton};"
        onclick="userRegisterEnter()">Register</button>
    </div>
  </div>
</form>
`;
document.body.appendChild(loginregister);