import moment from "moment";

export const hourExtractor = (date:string):string=>{
    return date.split("T")[1].split(":")[0];
}

export const dateMassage= (date:string) =>{
    const currentDate = moment();
    const providedDate = moment(date);
    return providedDate.isSame(currentDate,"day") ? "Today":providedDate.format("ddd");

}
