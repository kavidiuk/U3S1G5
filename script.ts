class User {
  ricarica: number;
  numeroChiamate: number = 0;
  constructor(_ricarica: number) {
    this.ricarica = _ricarica;
  }
}

class Uscita extends User {
  carica: number = 0;

  constructor(_ricarica: number) {
    super(_ricarica);
    this.carica = _ricarica;
  }

  chiama(): number {
    const minutiChiamate = Math.floor(Math.random() * this.ricarica + 1);
    this.numeroChiamate += 1;
    this.ricarica -= 0.2 * minutiChiamate;
    return minutiChiamate;
  }
}
let user1 = new Uscita(10);
let user2 = new Uscita(20);
let user3 = new Uscita(30);
let numeroUtenti = 1;
for (let i = 0; i < numeroUtenti; i++) {
  let user = new Uscita(Math.floor(Math.random() * 100));
  console.log(user.chiama());
}
console.log(user1.chiama());
