class Movie{
    constructor(title,director,year){
        this.title=title;
        this.director=director;
        this.year=year
    }
    getInfo(){
        let out=` Movie: [${this.title}], Director: [${this.director}], Year: [${this.year}].`
        return out;
    }
    getAge(){
        let currentYear=new Date().getFullYear();
        let out_age = currentYear-this.year;
        return out_age;
    }
}
class RecentMovie extends Movie{
    constructor(title,director,year,rating){
        super(title,director,year);
        this.rating=rating;
    }
    getInfo(){
        let out=` Movie: [${this.title}], Director: [${this.director}], Year: [${this.year}], Rating: [${this.rating}].`
        return out;
    }
    // displayMovieInfo(RecentMovie){
    // }
    
}

 const displayAllMovies=(...RecentMovie)=>{
    for(let c of RecentMovie){
       console.log(c.getInfo())
    }
}

var moviefirst=new RecentMovie("firstMovie","Amit",2020,4.5);
var movieSecond=new RecentMovie("secondMovie","Akshit",2022,4.0);
var movieThird=new RecentMovie("thirdMovie","Bhojraj",2019,4.7);
var movieFourth=new RecentMovie("fourthMovie","puneet",2018,3.5);
var MovieFifth1= new Movie ("fifthMovie","Shivang",1999);
var MovieFifth2= new Movie ("sixthMovie","Aayush",1995);
var MovieFifth3= new Movie ("seventhMovie","Shubham",1990);
var MovieFifth= new Movie ("eighthMovie","Neel",1989);
// console.log(moviefirst.getAge());
// console.log(MovieFifth.getInfo());
// console.log(movieThird.getInfo());


var m=[
    new RecentMovie("firstMovie","Amit",2020,4.5),
    new RecentMovie("secondMovie","Akshit",2022,4.0),
    new Movie ("fifthMovie","Shivang",1999)

];

displayAllMovies(...m);