            document.querySelectorAll('.toggle-password').forEach(function(eyeIcon) {
                eyeIcon.addEventListener('click', function() {
                    var passwordInput = this.previousElementSibling; // Encuentra el input antes del icono
                    if (passwordInput.type === "password") {
                        passwordInput.type = "text";
                        this.textContent = "👁️";
                    } else {
                        passwordInput.type = "password";
                        this.textContent = "👁️‍🗨️";
                    }
                });
            });

            function LoginToggle() {
                var container = document.querySelector('.container');
                var loginPopup = document.querySelector('.login-form');
                var registerPopup = document.querySelector('.registro-form');
                
                
                if (loginPopup.classList.contains('active')) {
                    loginPopup.classList.remove('active'); 
                    
                    if (!registerPopup.classList.contains('active')) {
                        container.classList.remove('active'); 
                    }
                } else {
                    loginPopup.classList.add('active');
                    container.classList.add('active'); 
                }
            }
            
            function RegistroToggle() {
                var container = document.querySelector('.container');
                var loginPopup = document.querySelector('.login-form');
                var registerPopup = document.querySelector('.registro-form');
                
                
                if (registerPopup.classList.contains('active')) {
                    registerPopup.classList.remove('active'); 
                    
                    if (!loginPopup.classList.contains('active')) {
                        container.classList.remove('active'); 
                    }
                } else {
                    registerPopup.classList.add('active'); 
                    container.classList.add('active');
                }
            }
            
            
            function toggleForms() {
                var loginPopup = document.querySelector('.login-form');
                var registerPopup = document.querySelector('.registro-form');
            
               
                if (loginPopup.classList.contains('active')) {
                    LoginToggle();
                    RegistroToggle(); 
                } else {
                    RegistroToggle(); 
                    LoginToggle(); 
                }
            }
         