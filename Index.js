// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Determina o ataque com base no tipo do herói
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        } else {
            ataque = "realizou um ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
const heroi1 = new Heroi("Aragorn", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");

heroi1.atacar(); // Saída: O guerreiro atacou usando espada
heroi2.atacar(); // Saída: O mago atacou usando magia
