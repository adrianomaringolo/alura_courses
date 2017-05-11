class Negociacao {

    constructor(data, quantidade, valor) {
        // _ indicates the attribute is private - it is just a convention for developers
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

    }

    getVolume() {
        return this._quantidade * this._valor;
    }

    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }
}