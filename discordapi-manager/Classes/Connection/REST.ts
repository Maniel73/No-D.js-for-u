export class REST {
    private token:string;
    private defaultOptions = {

    };
    constructor(token:string) {
        this.token = token;
    }

    async get(url, options) {

    }

    async post(url, options) {
        
    }

    async put(url, options) {
        
    }

    async delete(url, options) {
        
    }

    async patch(url, options) {

    }

    setToken(token:string) {
        this.token = token;
    }

    /* Primero, procesar el options en algo útil para enviar a Discord. */
    /* Segundo, controlar el ratelimit. */
    /* Tercero, hacer el envío de la solicitud a Discord. */
    /* Cuarto, actualizar el ratelimit */
    /* Quinto, convertir el resultado en algo útil para el resto del programa. */
}