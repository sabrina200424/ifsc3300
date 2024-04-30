const validation = {
    isEmpty(val) {
        return (val === "");
    },
    hasNoSlashes(val) {
        return (val.indexOf("/") === -1);
    },
    isInvalidYear(val) {
        const year = val.substring(val.length - 4); 
        return (isNaN(year)); 
    },
    //for example -4 would check the last four digits of an year like 2024, 2002
    isInvalidDate(val) {
        return (val.toString() === "Invalid Date");
    }
    //add in alerts is wrong entry inputted
};