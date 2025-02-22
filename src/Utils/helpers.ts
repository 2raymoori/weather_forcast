export const hourExtractor = (date:string):string=>{
    return date.split("T")[1].split(":")[0];
}
