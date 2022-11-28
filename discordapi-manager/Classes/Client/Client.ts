import { ClientBase } from './ClientBase';
import { ClientOptions } from './Interfaces';

export class Client extends ClientBase {
    constructor(options:ClientOptions = {}) {
        super(options);
    }
}