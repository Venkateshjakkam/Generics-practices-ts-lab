type Method = "GET" | "POST" | "PUT";
type Path = "/users" | "/products";

interface User { id: number; name: string }
interface Product { id: number; title: string }

type ResourceMap = {
  "/users": User;
  "/products": Product;
};

// 1. Solution for FetchPayload:
// If Method is "GET", return never. Otherwise, look up the Path inside ResourceMap.
type FetchPayload<M extends Method, P extends Path> = M extends "GET" 
  ? never 
  : ResourceMap[P];

// 2. Strongly type the function declaration
async function apiRequest<M extends Method, P extends Path>(
  method: M,
  path: P,
  ...args: FetchPayload<M, P> extends never ? [] : [payload: FetchPayload<M, P>]
) {
  try {
    // Optional: Extract payload safely from rest args if needed
    const payload = args[0]; 
    
    const options: RequestInit = { method };
    if (payload) {
      options.body = JSON.stringify(payload);
      options.headers = { "Content-Type": "application/json" };
    }

    const response = await fetch(`https://example.com${path}`, options);
    return await response.json();
  } catch (err: any) {
    console.log(err.message);
  }
}



apiRequest("GET", "/users");

apiRequest("POST", "/users", { id: 1, name: "Alice" });


// apiRequest("GET", "/products", { id: 2, title: "Phone" });


// apiRequest("POST", "/products");


// apiRequest("PUT", "/users", { id: 3, title: "Laptop" }); 
