class Calc {
    public makeList: string[] = [];

    public state: {
        loading: boolean;
        error: string | null;
    } = {
        loading: false,
        error: null
    };

    addItem(text: string): string[] {
        try {
            this.makeList.push(text);
            return this.makeList;

        } catch (error) {
            const message =
                error instanceof Error ? error.message : String(error);

            this.state.error = message;
            console.log("Error state:", this.state.error);

            if (this.makeList.length === 0) {
                return [];
            }

            return this.makeList;
        }
    }

    divide(a: number, b: number): number | string {
        this.state.loading = true;
        this.state.error = null;

        try {
            if (b <= 0) {
                return "Invalid";
            }

            return a / b;

        } catch (error) {
            const message =
                error instanceof Error ? error.message : String(error);

            this.state.error = message;
            console.log("Error state:", this.state.error);

            return "Invalid";

        } finally {
            this.state.loading = false;
        }
    }
}


const c = new Calc();

console.log(c.divide(9, 0));

console.log(c.addItem("myFirstItem"));
console.log(c.addItem("I am Your First Love"));
console.log(c.addItem("May be Just making Love"));