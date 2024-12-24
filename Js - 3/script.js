//this -> It is a special keyword whose type changes as per scenario

console.log(this);
// window -> is a global object in a browser , represents browser's window that contains the web pages
// any var or fn defined in global scope becomes property of window object for eg :

var win = 5; // this becomes the property of window object
// we can also access the console object like this
window.console.log("Hui");
// Hui

// Now come to 'this' keyword :

// global - window
// function - window
// method - object
// es5 function inside method -> window
// es6 arrow function inside method -> object

const obj1 = {
    name: "Pankaj",
    greet: function() { // methods -> has its onw "this" , bind "this" to object
        console.log(this); // Object(own object : khud ko contain krta hai)
    }
};
obj1.greet();

const obj2 = {
    name: "Pankaj",
    greet: () => { // property -> donot have their own "this" , does not bind "this" to object
        console.log(this); // window
    }
};
obj2.greet();

// JSON -> JavaScript Object Notation

const json = '{"name":"pankaj" , "age":19}' // JSON syntax

// Object -> JSON

let json1 = JSON.stringify(obj1); //'{"name":"Pankaj"}'

// JSON -> Object
let obj = JSON.parse(json1);

// Destructuring 


// Detailed Object Example
let person = {
    // Basic Properties
    firstName: "John",
    lastName: "Doe",
    age: 30,
    
    // Nested Object
    contact: {
        email: "john@email.com",
        phone: {
            home: "555-1234",
            mobile: "555-5678",
            work: "555-9012"
        },
        address: {
            street: "123 Main Street",
            apartment: "4B",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA"
        }
    },
    
    // Array Property
    hobbies: ["reading", "gaming", "hiking", "photography"],
    
    // Nested Array of Objects
    education:{
            degree: "Bachelor's",
            major: "Computer Science",
            university:{
                place : "Bhopal",
                contact_number: 4974748
            },
            year: 2015,
            honors: true
        },
    
    // Boolean Properties
    isEmployed: true,
    isMarried: false,
    
    // Method that uses multiple properties
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    
    // Method that interacts with nested data
    getContactInfo: function() {
        return {
            primaryEmail: this.contact.email,
            primaryPhone: this.contact.phone.mobile,
            fullAddress: `${this.contact.address.street}, ${this.contact.address.city}, ${this.contact.address.state}`
        };
    },
    
    // Method with parameters
    addHobby: function(hobby) {
        this.hobbies.push(hobby);
    },
    
    // Computed property
    get age() {
        return this._age;
    },
    set age(value) {
        if (value >= 0 && value < 150) {
            this._age = value;
        } else {
            throw new Error("Invalid age value");
        }
    }
};

// Destructuring

let { place } = person.education.university; // place = Bhopal

let [,,a,,b] = [1 ,2 ,3 ,4 ,5 ,6 ,7]; // a = 3, b =5



