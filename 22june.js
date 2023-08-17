class Car  {

    constructor(name,year)
    {
        this.name = name;
        this.year = year;
    }
    details() {
    console.log("name "+this.name+" year "+this.year)
      }
}

class Bmw  extends Car{
    constructor(name,year,price){
        super(name,year);
        this.price= price
    }
    details(){
        console.log("name "+this.name+" year "+this.year+" price "+this.price)
}
    }



class Audi  extends Car{
    constructor(name,year,price,color){
        super(name,year);
        this.price= price;
        this.color=color
    }
    details(){
        console.log("name "+this.name+" year "+this.year+" price "+this.price+" color "+this.color)
    }
}


var car1 = new Car("BMW", "2017");
var car2 = new Audi("Audi", "2018" ,40000000,"Red");

var details=()=> {
    console.log("name "+this.name+" year "+this.year + this.price)
      }

car1.details();
car2.details();








