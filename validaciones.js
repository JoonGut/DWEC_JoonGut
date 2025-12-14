document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    if (!form) return;
    // Busca el span de error que sigue al input
    function getErrorSpan(el) {
        let sibling = el.nextElementSibling;
        while (sibling) {
            if (sibling.classList && sibling.classList.contains('error-msg')) return sibling;
            sibling = sibling.nextElementSibling;
        }
        return null;
    }
 
    function LimpiarError(el) {
        const span = getErrorSpan(el);
        if (span){
            span.textContent = '';
        } 
        el.classList.remove('invalid');
    }

    function setError(el, msg) {
        const span = getErrorSpan(el);
        if (span){
            span.textContent = msg;
        }
        el.classList.add('invalid');
        
    }


    function validaNombre(val) {
        if (!val){
            return 'El nombre es obligatorio.';
        }
    }

    function validaApellido(val) {
        if (!val){
            return 'El apellido es obligatorio.';
        } 
    }

    function validaFecha(val) {
        if (!val){
            return 'La fecha es obligatoria.';
        }else{
                let fechaNacimiento = new Date(val);
                let hoy = new Date();

                let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
                let mes = hoy.getMonth() - fechaNacimiento.getMonth();

                if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
                    edad--;
                }

                if (edad < 18) {
                    return 'Debe ser mayor de edad.';
                }
        }
        
    }

    function validaDNI(val) {
        if (!val){
            return 'El DNI es obligatorio.';
        } 
        val = val.trim().toUpperCase();
        let letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
        if (!/^\d{7,8}[A-Z]$/.test(val)) {
            return 'Formato de DNI inválido.';
        }
        let numberPart = val.substring(0, val.length - 1);
        let number = parseInt(numberPart, 10);
        let expected = letters[number % 23];
        let letter = val.charAt(val.length - 1);
        if (expected !== letter) {
            return 'Letra del DNI incorrecta.';
        }
    }
    function validaNIE(nie) {
        if (!nie){
            return 'El NIE es obligatorio.';
        }else{
            nie = nie.toUpperCase().replace(/\s+/g, '');

            let regex = /^[XYZ]\d{7}[A-Z]$/;
            if (!regex.test(nie)) {
                return 'Formato de NIE inválido.';
            }

            let sustituciones = { 'X': '0', 'Y': '1', 'Z': '2' };
            let numeroStr = sustituciones[nie[0]] + nie.slice(1, 8);
            let numero = parseInt(numeroStr, 10);

            let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
            let letraCorrecta = letras[numero % 23];
            let letraUsuario = nie.charAt(nie.length - 1);
            if (letraCorrecta !== letraUsuario) {
                return 'Letra del NIE incorrecta.';
            }
        }


    }
    function validaIDES(ides) {
        if (!ides){
            return 'El número IDES es obligatorio.';
        }else{
            // Prefijo ES + 7 dígitos + 1 letra
            const regex = /^ES\d{7}[A-Z]$/;
            if (!regex.test(ides)) {
                return 'Formato de IDES inválido. Debe ser ES + 7 dígitos + letra.';
            }

            let numeroStr = ides.substring(2, 9); 
            let numero = parseInt(numeroStr, 10);

            let letras = "TRWAGMYFPDXBNJZSQVHLCKE";

            let letraCorrecta = letras[numero % 23];
            let letraUsuario = ides.charAt(ides.length - 1);

            if (letraCorrecta !== letraUsuario) {
                return 'Letra del IDES incorrecta.';
            }
        }

    }
    function validaIXESP(ixesp) {
        if (!ixesp){
            return 'El número IXESP es obligatorio.';
        }else{
            // Prefijo IXESP + 7 dígitos + 1 letra
            let regex = /^IXESP\d{7}[A-Z]$/;
            if (!regex.test(ixesp)) {
                return 'Formato de IXESP inválido. Debe ser IXESP + 7 dígitos + letra.';
            }
            let numeroStr = ixesp.substring(5, 12); 
            let numero = parseInt(numeroStr, 10);

            let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
            let letraCorrecta = letras[numero % 23];

            let letraUsuario = ixesp.charAt(ixesp.length - 1);

            if (letraCorrecta !== letraUsuario) {
                return 'Letra del IXESP incorrecta.';
            }
        }


    }

    const tipoDoc = document.querySelector('#tipo_documento');
    const docInput = document.querySelector('#documento');  

    const numInput = document.querySelector('#num_soporte');

    tipoDoc.addEventListener('change', () => {
        if (tipoDoc.value === "DNI") {
            docInput.placeholder = "89237308E";
            numInput.placeholder = "IDESP12345678";
        } else {
            docInput.placeholder = "Z0096629B";   
            numInput.placeholder = "IXESP12345678";
        }
    });


    function validaPassword(val) {
        if (!val){
            return 'La contraseña es obligatoria.';
        }else{
            if (val.length < 12){
                return 'Debe tener al menos 12 caracteres.';
            }else{
                //Debe contener números y símbolos
                if (!/[0-9]/.test(val) || !/[!@#%^&*]/.test(val)){
                    return 'La contraseña debe contener números y símbolos.';
                } 
            }
        }
        
    }

    function validaPasswordConfirma(val, pass) {
        if (!val){
            return 'La confirmación de la contraseña es obligatoria.';
        }else{
            if (val !== pass){
                return 'Las contraseñas no coinciden.';
            } 
        }

    }

    function validaEmail(val) {
        if (!val){
            return 'El email es obligatorio.';
        }else{

            if (!/^[\w-.]+@[\w-_]+(\.[a-zA-Z]{2,4}){1,2}$/.test(val)){
                return 'Email inválido.';
            }
        }
    }

    function validaEmailConfirma(val, email) {
        if (!val){
            return 'La confirmación del email es obligatoria.';
        }else{
            if (val !== email){
                return 'Los emails no coinciden.';
            }
        }


    }

    function validaTelefono(val) {
        if (!val){
            return 'El número es obligatorio.'; 
        }else{
            if (val.length < 9){
                return 'Debe tener al menos 9 dígitos.';
            }else{
            //Debe comenzar por 6,7,8,9 o +
            if (!/^[6789+]/.test(val[0])){
                return 'Debe comenzar por 6, 7, 8, 9 o +.';
            }
            }
        }
    }

    function validaCondiciones(el) {
        if (!el.checked){
            return 'Debe aceptar las condiciones.';
        } 
    }

    function validaCondiciones2(el) {
        if (!el.checked){
            return 'Debe aceptar este consentimiento.';
        }
    }


    form.addEventListener('submit', (e) => {
        let valido = true;

        // Campos
        const campos = {
            nombre: form.querySelector('#nombre'),
            apellido1: form.querySelector('#apellido1'),
            apellido2: form.querySelector('#apellido2'),
            fecha_nacimiento: form.querySelector('#fecha_nacimiento'),
            documento: form.querySelector('#documento'),
            password: form.querySelector('#password'),
            password_confirm: form.querySelector('#password_confirm'),
            num_soporte: form.querySelector('#num_soporte'),
            email: form.querySelector('#email'),
            email_confirm: form.querySelector('#email_confirm'),
            telefono: form.querySelector('#telefono'),
            condiciones: form.querySelector('#condiciones'),
            condiciones2: form.querySelector('#condiciones2')
        };

        // Limpiar todos los errores
        Object.values(campos).forEach(campo => LimpiarError(campo));


        let msg;
        

        if ((msg = validaNombre(campos.nombre.value))) {
             setError(campos.nombre, msg); valido = false; 
        }
        if ((msg = validaApellido(campos.apellido1.value))) {
             setError(campos.apellido1, msg); valido = false; 
        }
        if ((msg = validaFecha(campos.fecha_nacimiento.value))) {
             setError(campos.fecha_nacimiento, msg); valido = false; 
        }
        if (tipoDoc.value === "DNI") {
            if ((msg = validaDNI(campos.documento.value))) {
                setError(campos.documento, msg); valido = false; 
            }
            if ((msg = validaIDES(campos.num_soporte.value))) {
                setError(campos.num_soporte, msg); valido = false; 
            }
        }else{
            if ((msg = validaNIE(campos.documento.value))) {
                setError(campos.documento, msg); valido = false; 
            }
            if ((msg = validaIXESP(campos.num_soporte.value))) {
                setError(campos.num_soporte, msg); valido = false; 
            }
        }
        if ((msg = validaPassword(campos.password.value))) {
             setError(campos.password, msg); valido = false; 
        }
        if ((msg = validaPasswordConfirma(campos.password_confirm.value, campos.password.value))) {
             setError(campos.password_confirm, msg); valido = false; 
        }
        if ((msg = validaEmail(campos.email.value))) {
            setError(campos.email, msg); valido = false; 
        }
        if ((msg = validaEmailConfirma(campos.email_confirm.value, campos.email.value))) {
            setError(campos.email_confirm, msg); valido = false; 
        }
        if ((msg = validaTelefono(campos.telefono.value))) {
            setError(campos.telefono, msg); valido = false; 
        }
        if ((msg = validaCondiciones(campos.condiciones))) {
            setError(campos.condiciones, msg); valido = false; 
        }
        if ((msg = validaCondiciones2(campos.condiciones2))) {
            setError(campos.condiciones2, msg); valido = false; 
        }
        // Bloquear envío si hay errores
        if (!valido){
            e.preventDefault();
            alert('Hay errores en el formulario. Por favor, revíselo.');
        }else{
            alert('Formulario enviado correctamente.');
        }
    });

});
