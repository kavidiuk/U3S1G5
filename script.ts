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
    const minutiChiamata = Math.floor(Math.random() * this.ricarica + 1);
    this.numeroChiamate++;
    this.ricarica -= 0.2 * minutiChiamata;
    return minutiChiamata;
  }
}
let user1 = new Uscita(MA);
let user2 = new Uscita(20);
let user3 = new Uscita(30);

console.log("Chiamata effettuata da user1:", user1.chiama());
console.log("Numero chiamate di user1:", user1.numeroChiamate);
console.log("Saldo residuo di user1:", user1.ricarica);

let saldoConto = document.getElementById("saldoConto");
saldoConto.textContent =  user1.ricarica.toFixed(2) + "€";
