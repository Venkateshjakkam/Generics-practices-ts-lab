interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

async function getUserData(): Promise<User[] | string> { 
  try { 
    const response: Response = await fetch("https://jsonplaceholder.typicode.com/users  ");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const fetchUserData: User[] = await response.json(); 
    return fetchUserData; 
  } catch (err: any) { 
    return err instanceof Error ? err.message : String(err); 
  } 
}

// Executing the async function using a top-level await or .then()
getUserData().then((data: User[] | string) => {
  console.log(data);
});