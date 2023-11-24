var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(_ricarica) {
        this.numeroChiamate = 0;
        this.ricarica = _ricarica;
    }
    return User;
}());
var Uscita = /** @class */ (function (_super) {
    __extends(Uscita, _super);
    function Uscita(_ricarica) {
        var _this = _super.call(this, _ricarica) || this;
        _this.carica = 0;
        _this.carica = _ricarica;
        return _this;
    }
    Uscita.prototype.chiama = function () {
        var minutiChiamata = Math.floor(Math.random() * this.ricarica + 1);
        this.numeroChiamate++;
        this.ricarica -= 0.2 * minutiChiamata;
        return minutiChiamata;
    };
    return Uscita;
}(User));
var user1 = new Uscita(4);
var user2 = new Uscita(20);
var user3 = new Uscita(30);
console.log("Chiamata effettuata da user1:", user1.chiama());
console.log("Numero chiamate di user1:", user1.numeroChiamate);
console.log("Saldo residuo di user1:", user1.ricarica);
var saldoConto = document.getElementById("saldoConto");
saldoConto.textContent = user1.ricarica.toFixed(2) + "€";
