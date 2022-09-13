const username = 'jgarrone';
const sum = (a: number, b:number) => {
    return a + b;
}

sum(1,2);

class   Person {
    constructor(public age:number, public lastName:string){ }
}

const jorge = new Person(40,'Garrone');
jorge.age;
