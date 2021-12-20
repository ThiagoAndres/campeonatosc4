export function Registro() {

    //let listado;
    //const nomRef = useRef(); //document.getElementById()
    //const preRef = useRef();
    //const stockRef = useRef();
    //const [success, setSuccess] = useState(false);
    return(
    <div align="center"> 
        <form class="container" novalidate>
            <h2>Registro de usuarios</h2>
            <img src="person_add.svg" alt="Girl in a jacket" width="60" height="70"/>
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label">Nombres</label>
                <input type="text" class="form-control" id="validationCustom01"  required/>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom02" class="form-label">Apellidos</label>
                <input type="text" class="form-control" id="validationCustom02" required/>
                <div class="invalid-feedback">
                Looks good!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label">Correo electrónico</label>
                <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                <div class="invalid-feedback">
                    Ingrese un nombre de usuario
                </div>
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom03" class="form-label">City</label>
                <input type="text" class="form-control" id="validationCustom03" required/>
                <div class="invalid-feedback">
                Ingrese un nombre de ciudad / municipio válido
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom04" class="form-label">State</label>
                <select class="form-select" id="validationCustom04" required>
                <option selected disabled value="">Seleccionar...</option>
                <option>Organizador</option>
                <option>Entrenador</option>
                <option>Jugador</option>
                <option>Delegado</option>
                </select>
                <div class="invalid-feedback">
                Please select a valid state.
                </div>
            </div>
            <br />
            <div class="col-md-4">
                
                <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control" placeholder="contraseña nueva" aria-describedby="passwordHelpInline"/>
                </div>
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                    Al menos 8 a 20 caracteres de longitud.
                    </span>
                </div>
            </div>
            <br/>
            <div class="col-md-4">
                <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control" placeholder="Confirmar contraseña" aria-describedby="passwordHelpInline"/>
                </div>
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                    Al menos 8 a 20 caracteres de longitud.
                    </span>
                </div>
            </div>
            <br />
            <div class="col-md-3">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label class="form-check-label" for="invalidCheck">
                Acepto los términos y condiciones.
                </label>
                <div class="invalid-feedback">
                    You must agree before submitting.
                </div>
                </div>
            </div>
            <br />
            <div class="col-12">
                <button class="btn btn-primary" type="button">Registrar</button>
            </div>
        </form>
        </div>
    )
}