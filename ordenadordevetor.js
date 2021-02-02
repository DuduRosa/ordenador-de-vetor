let vetor = [5, 3, 2, 4, 7, 1, 0, 6];
let aux = 0;
for (let i = 0; i < vetor.length; i++) {
    for (let j = 0; j < vetor.length; j++) {
        if (vetor[i] < vetor[j]) {
            aux = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = aux;
        }
    }
}

for (let index = 0; index < vetor.length; index++) {
    const element = vetor[index];
    console.log(element);
}