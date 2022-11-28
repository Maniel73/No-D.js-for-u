import { request, Dispatcher } from 'undici';
import { RequestManager, RequestMethod, RequestOptions, RequestManagerOptions } from './RequestManager';

interface InitialOptions {}

const defaultOptions:InitialOptions = {};

export class REST {
    public readonly requestManager:RequestManager;

    constructor(options?:RequestManagerOptions) {
        this.requestManager = new RequestManager(options);
    }

    public async get(url:string, options:InitialOptions = defaultOptions) {
        return this.request({ ...options, url, method: RequestMethod.Get });
    }

    public async post(url:string, options:InitialOptions = defaultOptions) {
        return this.request({ ...options, url, method: RequestMethod.Post });
    }

    public async put(url:string, options:InitialOptions = defaultOptions) {
        return this.request({ ...options, url, method: RequestMethod.Put });
    }

    public async delete(url:string, options:InitialOptions = defaultOptions) {
        return this.request({ ...options, url, method: RequestMethod.Delete });
    }

    public async patch(url:string, options:InitialOptions = defaultOptions) {
        return this.request({ ...options, url, method: RequestMethod.Patch });
    }

    public async request(options:RequestOptions) {
        const response = await this.requestManager.a(options);
        console.log(response);
    }


    setToken(token:string) {
        this.requestManager.setToken(token);
    }

    /* Primero, procesar el options en algo útil para enviar a Discord. */
    /* Segundo, controlar el ratelimit. */
    /* Tercero, hacer el envío de la solicitud a Discord. */
    /* Cuarto, actualizar el ratelimit */
    /* Quinto, convertir el resultado en algo útil para el resto del programa. */
}