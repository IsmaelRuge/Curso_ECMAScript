function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Ismael', 'Febe', 'Isamar']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);