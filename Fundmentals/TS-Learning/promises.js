"use strict";
async function getUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchUserData = await response.json();
        return fetchUserData;
    }
    catch (err) {
        return err instanceof Error ? err.message : String(err);
    }
}
// Executing the async function using a top-level await or .then()
getUserData().then((data) => {
    console.log(data);
});
