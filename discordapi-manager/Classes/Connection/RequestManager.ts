import { EventEmitter } from 'node:events'

export interface RequestManagerOptions {
    token?:string;
}

export enum RequestMethod {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE",
    Patch = "PATCH"
}

export interface RequestOptions {

}

const defaultRequestManagerOptions:RequestManagerOptions = {}

export class RequestManager extends EventEmitter {
    private token?:string;
    constructor(options:RequestManagerOptions = defaultRequestManagerOptions) {
        super();
        if (options.token !== undefined) this.setToken(options.token);
        else if (process.env.DISCORD_TOKEN) this.setToken(process.env.DISCORD_TOKEN);
    }

    setToken(token:string) {
        // Revisa token válido y elimina contenido innecesario (como Bot o Barrier).
        this.token = token;
    }
}