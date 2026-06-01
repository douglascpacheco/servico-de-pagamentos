export default class ServicoDePagamentos {
    #pagamentos

    constructor() {
        this.#pagamentos = [];
    }

    pagar(codigoBarras, empresa, valor) {

        let categoria = 'padrão'

        if (valor > 100) {
            categoria = 'cara'
        }

        this.#pagamentos.push({
            codigoBarras,
            empresa,
            valor,
            categoria
        })

    }

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1)
    }

}