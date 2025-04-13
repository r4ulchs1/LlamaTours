let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const registroForms = document.getElementById("registroUsuarios");
const loginUsuarios = document.getElementById("loginUsuarios");

const btnIngresar = document.getElementById("btnIngresar");

// Detectar si hay un usuario logueado al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const usuario = usuarioConectado();

    if (usuario) {
        renderizarUsuarioLogueado(usuario);
    }
});

registroForms.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("usrName").value.trim();
    const gmail = document.getElementById("usrGmail").value.trim();
    const celular = document.getElementById("usrPhone").value.trim();
    const contrasenia = document.getElementById("usrContrasenia").value.trim();

    const usuarioExiste = usuarios.some(user => user.gmail === gmail);
    if (usuarioExiste) {
        alert("Este correo ya se encuentra registrado");
        return;
    }

    usuarios.push({ nombre, gmail, celular, contrasenia });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuario Registrado Exitosamente");
});

loginUsuarios.addEventListener("submit", (e) => {
    e.preventDefault();

    const gmail = document.getElementById("loginGmail").value.trim();
    const contrasenia = document.getElementById("loginContrasenia").value.trim();
    let usuario = usuarios.find(user => user.gmail === gmail && user.contrasenia === contrasenia);

    if (usuario) {
        alert("Bienvenido " + usuario.nombre);
        localStorage.setItem("loggedInUser", JSON.stringify(usuario));

        renderizarUsuarioLogueado(usuario);
    } else {
        alert("Correo o contraseña incorrectos");
    }
});

function renderizarUsuarioLogueado(usuario) {
    var container = document.querySelector('.container');
    loginUsuarios.style.display = "none";
    container.classList.remove('active');
    btnIngresar.style.display = "none";

    const cerrarsesion = document.createElement('li');
    const cambiar = document.getElementById('change');
    cerrarsesion.id = "change";
    cerrarsesion.classList.add('nav-item','dropdown');
    cerrarsesion.innerHTML = `
        <a class="nav-link dropdown-toggle gap-0" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">
            <div class="d-inline-flex p-0 align-items-center ">
                <img src="img/loginAndRegister/avatar-usuario.png" style="width: 50px; height: 50px;">
                <div class="d-inline-flex flex-column p-2">
                    <p class="mb-0">${usuario.nombre}</p>
                    <p class="mb-0">${usuario.gmail}</p>
                </div>
            </div>
        </a>
        <ul class="dropdown-menu bg-dark p-0 w-100">                            
            <button id="btnIngresar" type="button" class="btn btn-warning w-100" onclick="cerrarSesion()">
                Cerrar Sesion
            </button>
        </ul>
    `;
    const asd = document.getElementById('menuu');
    asd.replaceChild(cerrarsesion, cambiar);
}

function cerrarSesion() {
    localStorage.removeItem("loggedInUser");
    const verusuario = localStorage.getItem("loggedInUser");

    if (verusuario === null) {
        alert("Sesión Cerrada");
        const login = document.createElement('li');
        const cambiar = document.getElementById('change');
        login.id = "change";
        login.innerHTML = `
            <button id="btnIngresar" type="button" class="btn btn-warning" onclick="LoginToggle()">
                <img src="../img/iconos/ingresar.png" width="20px">
                Ingresar
            </button>
        `;
        const asd = document.getElementById('menuu');
        asd.replaceChild(login, cambiar);

        var container = document.querySelector('.container');
        container.classList.add('active');
        loginUsuarios.style.display = "flex";
    }
    window.location.href = "index.html";
}


function usuarioConectado() {
    const usuarioJSON = localStorage.getItem("loggedInUser");
    return usuarioJSON ? JSON.parse(usuarioJSON) : null;
}
