function* gen() {
    yield 1;
    yield 2 ;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next());
console.log(g.next().value);
console.log(g.next());

function* iterate(array) {
    for (let value of array){
        yield value
    }
}

const it = iterate(["oscar", "mateo", "lucía", "Lucas"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);