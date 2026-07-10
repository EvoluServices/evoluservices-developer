---
sidebar_position: 3
---

# Callback

### Como funciona?
Caso deseje apenas receber os dados das transações em seu sistema, é possível cadastrar uma URL de Callback para que as informações sejam enviadas automaticamente. Dessa forma, não é necessário utilizar a API de criação de Transação Remota para receber os dados das transações.

Sempre que uma transação for processada, os dados serão enviados automaticamente para a URL de Callback cadastrada. Dessa forma, seu sistema poderá receber e processar as informações da transação sem precisar realizar chamadas adicionais à API.

### Informações importantes

É permitido cadastrar apenas uma URL de Callback.
Para cadastrar, alterar ou remover a URL de Callback, é necessário acionar o time de Integração.
Essa funcionalidade pode ser utilizada de forma independente ou em conjunto com a integração de Transação Remota. Assim, o parceiro pode:
criar Transações Remotas e receber os retornos via Callback; ou
apenas consumir os dados das transações por meio da URL de Callback.

### Parâmetros

|Propriedade|Tipo|Descrição|
|-----------|----|---------|
|`transactionNumber`|Texto|Número da transação.|
|`status`|Texto|Status da transação (consulte  a [tabela de status da transação](../../remote-transaction/value-table/transaction-status)).|
|`merchantId`|Número|Identificador do estabelecimento.|
|`value`|Número|Valor total da transação.|
|`paymentBrand`|Texto|Bandeira do cartão (para lista consulte a [tabela de bandeiras](../value-table/brand)).|
|`terminalId`|Texto|ID do terminal.|
|`payments`|Lista de objetos|Pagamentos aos estabelecimentos da transação.|
|`paymentQuantity`|Número|Número de pagamentos ao estabelecimento.|
|`splits`|Lista de objetos|Informações ligadas aos splits de pagamento.|
|`clientName`|Texto|Nome do cliente que passou a transação, quando fornecido.|
|`clientDocument`|Texto|Documento do cliente que passou a transação, quando fornecido.|
|`NSU`|Número|NSU da transação, disponível apenas depois de aprovada.|
|`authorizationNumber`|Número|Número de autorização da transação, disponível apenas depois de aprovada.|
|`orderUuid`|Texto|identificador único da Order.|


### Body

#### JSON

```json
{
  "status": "APPROVED",
  "merchantId": "520f5b56-f490-442f-b31e-8626b629caf8",
  "orderUuid": "",
  "value": "10.00",
  "paymentBrand": "VISA_CREDITO",
  "transactionNumber": "2004695426271364186",
  "paymentQuantity": "2",
  "clientName": "João da Silva",
  "clientDocument": "012.345.678-90",
  "terminalId": "AA123456",
  "payments": [
    {
      "status": "UNPAID",
      "value": 4.95,
      "number": 1,
      "date": "21/07/2027",
      "recipientName": "Evoluservices Teste",
      "recipientDocument": "01.234.567.0001-09"
    },
    {
      "status": "UNPAID",
      "value": 4.95,
      "number": 2,
      "date": "21/08/2027",
      "recipientName": "Evoluservices Teste",
      "recipientDocument": "01.234.567.0001-01"
    }
  ],
  "splits": [
    {
      "status": "UNPAID",
      "value": 2.35,
      "number": 1,
      "date": "02/08/2027",
      "recipientName": "Evoluservices Teste",
      "recipientDocument": "01.234.567.0001-01"
    },
    {
      "status": "UNPAID",
      "value": 3.15,
      "number": 2,
      "date": "02/09/2027",
      "recipientName": "Evoluservices Teste",
      "recipientDocument": "01.234.567.0001-01"
    }
  ]
}
```

### Parâmetros dos pagamentos aos estabelecimentos e dos splits

|Propriedade|Tipo|Descrição|
|-----------|----|---------|
|`status`|Texto|Status do pagamento.|
|`value`|Número|Valor destinado ao estabelecimento ou ao beneficiário, no caso do split.|
|`number`|Número|Número do pagamento.|
|`date`|Texto|Data estimada de pagamento.|
|`recipientName`|Texto|Nome do estabelecimento ou do beneficiário, no caso do split.|
|`recipientDocument`|Texto|Documento do estabelecimento ou do beneficiário, no caso do split.|

:::info informações
Veja a seção **[Tabela de Valores](../../remote-transaction/value-table)** para os possíveis status da transação e do pagamento.
:::