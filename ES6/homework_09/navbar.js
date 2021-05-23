let navbar = document.createElement('div');
navbar.id = 'navbar';
navbar.className = 'maindiv';
navbar.style.textAlign = 'right';
navbar.setAttribute('hidden', '');
let fontsize = 'x-small';
navbar.innerHTML = `
<button type="button" id="account" name="account" class="btn btn-warning" style="font-size: ${fontsize};"
onclick="accountSettings()">Account settings</button>
<button type="button" id="logout" name="logout" class="btn btn-warning" style="font-size: ${fontsize};"
onclick="logOut()">Log out</button>
`;
document.body.appendChild(navbar);