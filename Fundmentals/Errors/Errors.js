"use strict";
class Calc {
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
console.log(c.divide(9, 3));
