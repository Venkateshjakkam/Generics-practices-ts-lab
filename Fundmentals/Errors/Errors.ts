class Calc{

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
 console.log(c.divide(9,3));