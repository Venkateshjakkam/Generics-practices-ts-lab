"use strict";
class Calc {
    makeList = [];
    async addItem(text) {
        try {
            this.makeList.push(text);
            return this.makeList;
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            this.state.error = message;
            console.log("Error state:", this.state.error);
            const newMess = "";
            if (this.makeList.length = 0)
                return newMess;
        }
        ;
    }
    state = {
        loading: true,
        error: null
    };
    async divide(a, b) {
        this.state.loading = false;
        this.state.error = null;
        try {
            const newValue = a / b;
            if (b <= 0) {
                return "inValid";
            }
            else {
                return newValue;
            }
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            this.state.error = message;
            console.log("Error state:", this.state.error);
            return "inValid";
        }
        finally {
            this.state.loading = false;
        }
    }
}
const c = new Calc();
console.log(c.divide(9, 0));
console.log(c.addItem("myFirstItem"));
console.log(c.addItem("I am Your First Love"));
console.log(c.addItem("May be Just making Love"));
