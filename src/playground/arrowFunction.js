//part 1

// let userName = "Mike Smith";
// const firstName= (x) =>{
//     return x.split(' ')[0];
// }
// console.log(firstName(userName));
// const fname= (userN) => userN.split(' ')[0];
// console.log(fname(userName));

//part 2

const multiplier = {
    numbers: [2,3,4],
    multiplyBy: 10,
    multiply() {
        // const value= multiplier.numbers.map((n) => {
        //    return this.multiplyBy * n;
        // });
        // return value;

        return this.numbers.map( (n) => this.multiplyBy * n);
    }
};

// console.log(multiplier.multiply());