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
    cerrarsesion.innerHTML = `
        <div class="datosUsuario">
            <img src="../img/iconos/avatar-usuario.png" alt="" class="userlogged">
        </div>
        <div class="datosLogueado">
            <p class="p1">Hola! ${usuario.nombre}</p>
            <p class="p2">${usuario.gmail}</p>
        </div>
        <button class="botoncito" id="btnIngresar" onclick="cerrarSesion()">
            Cerrar Sesión
        </button>
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
            <button class="botoncito" id="btnIngresar" onclick="LoginToggle()">
                <img src="../img/iconos/ingresar.png" width="20px" alt="">
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
