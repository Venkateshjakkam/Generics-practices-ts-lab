class Calc{

    public makeList:any = [];

   async addItem(text: string):Promise<string>{
    try{
        this.makeList.push(text);
        return this.makeList;

    }catch(error){
        const message = error instanceof Error ? error.message : String(error);
            this.state.error = message;
            console.log("Error state:", this.state.error);
       

        if(this.makeList.length = 0){
            return undefined | "InValid";
        }
             
    };
    }



     public state: {loading: boolean; error: string | null } = {
                    loading: true,
                    error: null
                }

       async divide(a:number, b:number):Promise<number|string>{
               this.state.loading = false;
               this.state.error = null;
          
            try{
                const newValue:number = a/b;

            if(b <= 0){
                return "inValid";
            } else {
                return newValue
            }

            } catch(error){

            const message = error instanceof Error ? error.message : String(error);
            this.state.error = message;
            console.log("Error state:", this.state.error);
             return "inValid";
            
            } finally {
            this.state.loading = false;
            }
        }   
}


 const c = new Calc();
 console.log(c.divide(9,0));
 console.log(c.addItem("myFirstItem"));
 console.log(c.addItem("I am Your First Love"));
  console.log(c.addItem("May be Just making Love"));