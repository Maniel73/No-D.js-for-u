import { BaseError } from './Base/BaseError';
import { ErrorData } from './Interfaces';

export class RoutesError extends BaseError {
    constructor(message:string, data:ErrorData = {}) {
        super(message, "Discord API Routes", data);
    }
}