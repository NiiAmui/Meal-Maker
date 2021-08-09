const menu = {
    _courses : {
      appetizers: [],
      mains: [],
      desserts: [],
  
      get appetizersGet(){
        return this.appetizers;
      },
      get mainsGet(){
        return this.mains;
      },
      get dessertsGet(){
        return this.desserts;
      },
        set Setappetizers(appetizersIn){
       this.appetizer = appetizersIn;
      },
      set Setmains(mainsIn){
        this.mains = mainsIn;
      },
      set Setdesserts(dessertsIn){
        this.desserts = dessertsIn;
      }
    },
  
    get courses(){
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      } 
    },
  
    addDishToCourse(courseName,dishName,dishPrice){
      const dish = {
        name: dishName,
        price:dishPrice
      };
     this._courses[courseName].push(dish);
    
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
     const index = Math.floor(Math.random()*dishes.length)
      return this._courses[courseName][index];
    },
  
    generateRandomMeal(){
     const appetizer = this.getRandomDishFromCourse("appetizers");
     const main =  this.getRandomDishFromCourse("mains");
      const dessert = this.getRandomDishFromCourse("desserts");
      const totalPrice = appetizer.price + main.price + dessert.price;
  
   return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  
    }
  }
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'grass Salad', 4.25);
  menu.addDishToCourse('mains', 'Banku with Okro Stew', 4.25);
  menu.addDishToCourse('desserts', 'Ice cream Cake', 4.25);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
  
  