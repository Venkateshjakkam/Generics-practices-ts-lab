"use strict";
// class TodoApp{
//        public items: string[] = ["Apple", "Banana", "Grape"];
class ValidationRule {
    user;
    errors = [];
    constructor(user) {
        this.user = user;
    }
    validate() {
        this.errors = []; // reset errors
        // Name validation
        if (!this.user.name) {
            this.errors.push({ field: "name", message: "Name is required" });
        }
        else if (typeof this.user.name !== "string") {
            this.errors.push({ field: "name", message: "Name must be a string" });
        }
        // Email validation
        if (!this.user.email) {
            this.errors.push({ field: "email", message: "Email is required" });
        }
        else if (typeof this.user.email !== "string") {
            this.errors.push({ field: "email", message: "Email must be a string" });
        }
        else if (!this.user.email.includes("@")) {
            this.errors.push({ field: "email", message: "Email is invalid" });
        }
        // Phone Number validation
        if (this.user.phNumber === undefined || this.user.phNumber === null) {
            this.errors.push({ field: "phNumber", message: "Phone number is required" });
        }
        else if (typeof this.user.phNumber !== "number") {
            this.errors.push({ field: "phNumber", message: "Phone number must be a number" });
        }
        return this.errors;
    }
}
const user = {
    name: "",
    email: "testgmail.com",
    phNumber: 9876543210
};
const validator = new ValidationRule(user);
const errors = validator.validate();
console.log(errors);
console.log(user);
