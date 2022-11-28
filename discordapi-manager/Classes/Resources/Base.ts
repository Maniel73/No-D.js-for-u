import { Client } from '../Client/Client';

export class Base {
    protected _client:Client;
    protected constructor(client:Client) {
        this._client = client;
    }

    //#region Getter and Setter
    public get client() {
        return this._client;
    }
    //#endregion


}