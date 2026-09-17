"use strict";
class UserService {
    state = {
        user: null,
        loading: false,
        error: null
    };
    // Get current state
    getState() {
        return this.state;
    }
    // Fetch user
    async getUser(id) {
        this.state = {
            ...this.state,
            loading: true,
            error: null
        };
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch user (status: ${response.status})`);
            }
            const user = await response.json();
            this.state = {
                user,
                loading: false,
                error: null
            };
            console.log("User fetched successfully:", this.state.user);
        }
        catch (err) {
            this.state = {
                ...this.state,
                loading: false,
                error: err instanceof Error ? err.message : "Something went wrong"
            };
            console.error(this.state.error);
        }
    }
    // Update user
    async updateUser(id, updatedDetails) {
        this.state = {
            ...this.state,
            loading: true,
            error: null
        };
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedDetails)
            });
            if (!response.ok) {
                throw new Error("Failed to update user");
            }
            const updatedUser = await response.json();
            this.state = {
                user: updatedUser,
                loading: false,
                error: null
            };
            console.log("User updated successfully:", this.state.user);
        }
        catch (err) {
            this.state = {
                ...this.state,
                loading: false,
                error: err instanceof Error ? err.message : "Failed to update user"
            };
            console.error(this.state.error);
        }
    }
}
const res = new UserService();
console.log(res.updateUser(10, {
    name: "John lack",
    email: "john.lack@example.com"
}));
