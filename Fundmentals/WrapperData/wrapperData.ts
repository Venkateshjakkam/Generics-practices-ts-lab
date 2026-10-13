// 1. This is the wrapper type used by the database layer
type DBWrapper<T> = {
  id: string;
  value: T;
  lastUpdated: Date;
};

// ==========================================
// 2. YOUR TASK: Implement this Utility Type
// ==========================================
type UnwrapData<T> = {
    name:string;
    age: number;
    isAdmin: boolean;
    title:string;
    tags:string[];
    metadata: {
        views:number;
        featured:boolean;
    }
}; 



// ==========================================
// 3. TEST CASES (These will validate your code)
// ==========================================

// Test Case 1: Simple Object
type Input1 = {
  name: DBWrapper<string>;
  age: DBWrapper<number>;
  isAdmin: DBWrapper<boolean>;
};

// Expected Output 1 should look exactly like:
// { name: string; age: number; isAdmin: boolean; }
type Result1 = UnwrapData<Input1>;


// Test Case 2: Nested Objects & Mixed Data
type Input2 = {
  title: DBWrapper<string>;
  tags: DBWrapper<string[]>;
  metadata: {
    views: DBWrapper<number>;
    featured: boolean; 
  };
};

// Expected Output 2 should look exactly like:
// { 
//   title: string; 
//   tags: string[]; 
//   metadata: { views: number; featured: boolean; } 
// }
type Result2 = UnwrapData<Input2>;
