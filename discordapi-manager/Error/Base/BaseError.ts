import { ErrorData } from '../Interfaces';

export class BaseError extends Error {
    protected constructor(message:string, origin:string, data:ErrorData) {
        super(message);
        
        if (data.onlyMessage === undefined) data.onlyMessage = false;
        if (data.show === undefined && !data.onlyMessage)  data.show = true;
        if (data.isFatalError === undefined) data.isFatalError = false;
        if (data.warning === undefined) data.warning = false;

        if (data.isFatalError) this.name = "Fatal Error";
        else if (data.warning) this.name = "Warning";

        this.name = `${this.name}: ${origin}`;

        if (data.show) this.printError();
        else if (data.onlyMessage) this.printErrorName();
        if (data.warning) this.printWarning();

        if (data.isFatalError) this.fatalError();
    }

    private printError():void {
        console.log(this.stack);
    }

    private printErrorName():void {
        console.log(this.message);
    }

    private printWarning():void {
        console.log(`Warning: `)
    }

    private fatalError():void {
        process.exit(0);
    }
}