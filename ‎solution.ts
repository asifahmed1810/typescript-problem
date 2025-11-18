const formatValue =(input:string|number|boolean):(string|number|boolean)=>{
    if(typeof input==="string"){
        return input.toUpperCase();
    }else if (typeof input==="number"){
        return input*10;
    }else if( typeof input === "boolean" ){
        return !input;
    }
    return input
}





const getLength=(input:string|Array<any>)=>{
  if(typeof input ==="string"){
    return input.length;
  }else if(Array.isArray(input)){
    return input.length;
  }
}






class Person{
    name :string;
    age:number;

    constructor(name:string , age:number){
        this.name=name,
        this.age=age
    }
    
    getDetails(){
      return (`'Name:${this.name}, Age:${this.age}'`);
    }
}






type Item={
  title:string,
  rating:number
}

const filterByRating=(items:Item[]):Item[]=>{
    return items.filter(item=>item.rating>=4)
}







type User={
  id:number,
  name:string,
  email:string,
  isActive:boolean
}

const filterActiveUsers=(users:User[]):User[]=>{
    return users.filter(user=>user.isActive === true)
}






interface Book{
  title:string,
  author:string,
  publishedYear:number,
  isAvailable:boolean
}

const printBookDetails =(booksInfo:Book)=>{
   const availability=booksInfo.isAvailable? "Yes" :"No";

   console.log(`Title: ${booksInfo.title}, Author: ${booksInfo.author}, Published: ${booksInfo.publishedYear}, Available: ${availability}`);

}








const getUniqueValues= (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {
    const result: (string | number)[] = [];
    
  
    for (let i = 0; i < arr1.length; i++) {
        const currentValue = arr1[i];
       
        if (currentValue !== undefined) {
            let exists = false;
            for (let j = 0; j < result.length; j++) {
                if (result[j] === currentValue) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                result.push(currentValue); 
            }
        }
    }
    

    for (let i = 0; i < arr2.length; i++) {
        const currentValue = arr2[i];
    
        if (currentValue !== undefined) {
            let exists = false;
            for (let j = 0; j < result.length; j++) {
                if (result[j] === currentValue) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                result.push(currentValue); 
            }
        }
    }
    
    return result;
};







interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) {
        return 0;
    }

    return products.reduce((total, product) => {
        
        const basePrice = product.price * product.quantity;
        
        
        if (product.discount !== undefined && product.discount >= 0 && product.discount <= 100) {
            const discountAmount = basePrice * (product.discount / 100);
            return total + (basePrice - discountAmount);
        }
        
        
        return total + basePrice;
    }, 0);
};