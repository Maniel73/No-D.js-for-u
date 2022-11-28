import { EventEmitter } from 'node:events';
import { ClientOptions } from './Interfaces';
import { REST } from '../Connection';

export class ClientBase extends EventEmitter {
    public rest:REST;
    protected options:ClientOptions;
    protected constructor(options:ClientOptions) {
        super();
        this.options = options;
        this.rest = new REST();
    }
}