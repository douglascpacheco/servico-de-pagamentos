import ServicoDePagamentos from '../src/servicoDePagamento.js'
import assert from 'node:assert'

describe('Testes da classe de Servico de Pagamentos', () => {
    it('Deve registrar pagamento com todos os dados informados', () => {
        //Arrange
        const servico = new ServicoDePagamentos();

        //Act
        servico.pagar('0102-0304-0506-0708-9', 'Enel', 99.90)
        const ultimoPagamento = servico.consultarUltimoPagamento()

        //Assert
        assert.equal(ultimoPagamento.codigoBarras, '0102-0304-0506-0708-9')
        assert.equal(ultimoPagamento.empresa, 'Enel')
        assert.equal(ultimoPagamento.valor, 99.90)
        assert.equal(ultimoPagamento.categoria, 'padrão')
    })

    it('Deve registrar pagamento com categoria cara quando valor for maior que 100', () => {
        //Arrange
        const servico = new ServicoDePagamentos();

        //Act
        servico.pagar('1112-1314-1516-1718-9', 'Sabesp', 198)
        const ultimoPagamento = servico.consultarUltimoPagamento()

        //Assert
        assert.equal(ultimoPagamento.categoria, 'cara')
    })

    it('Deve registrar pagamento com categoria padrão quando valor for menor que 100', () => {
        //Arrange
        const servico = new ServicoDePagamentos();

        //Act
        servico.pagar('2122-2324-2526-2728-9', 'IPTU', 56.09)
        const ultimoPagamento = servico.consultarUltimoPagamento()

        //Assert
        assert.equal(ultimoPagamento.categoria, 'padrão')
    })

    it('Deve consultar o último pagamento realizado', () => {
        //Arrange
        const servico = new ServicoDePagamentos();

        //Act
        servico.pagar('0102-0304-0506-0708-9', 'Enel', 99.90)
        servico.pagar('1112-1314-1516-1718-9', 'Sabesp', 198)
        servico.pagar('2122-2324-2526-2728-9', 'IPTU', 56.09)
        const ultimoPagamento = servico.consultarUltimoPagamento()

        //Assert
        assert.equal(ultimoPagamento.codigoBarras, '2122-2324-2526-2728-9')
        assert.equal(ultimoPagamento.empresa, 'IPTU')
        assert.equal(ultimoPagamento.valor, 56.09)
    })



})