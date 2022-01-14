/* function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,sobrenome,idade
    }
}

const pessoa1 = criaPessoa('Filipe', 'Neves', 17)
const pessoa2 = criaPessoa('Nickao', 'Feittosa', 20)
const pessoa3 = criaPessoa('Julianao', 'Tanja', 19)
const pessoa4 = criaPessoa('Vivizinha', 'Do Grau', 17)
const pessoa5 = criaPessoa('Gabzada', 'Monstro', 18)

console.log(pessoa1.nome, pessoa2.nome) */

const pessoa1 = {
    nome: 'Filipe',
    sobrenome: 'Neves',
    idade: 17,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();