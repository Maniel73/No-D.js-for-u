export function SnowflakeToDate(number) {
    let id = parseInt(number);

    let binary:string = id.toString(2);
    binary = binary.padStart(64, "0");

    let excerpt:string = binary.substring(0, 42);

    let decimal:number = parseInt(excerpt, 2);

    let unix = decimal + 1420070400000;

    return new Date(unix);
}