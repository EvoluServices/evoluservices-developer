---
sidebar_position: 4
---
# Consultar um link de pagamento

`GET /api/orders/{uuid}`

Consulta o Link de Pagamento de acordo com o uuid.

:::caution Atenção
Para executar esta operação, você deve estar autenticado através do método:
BasicAuth
:::

## Parâmetro

|Nome|In|Tipo|Obrigatório|Descrição|
|---|---|---|---|---|
|uuid|path|string|Sim|UUID do Link de Pagamento|

### Schema
|Nome|Tipo|Descrição|
|---|---|---|
|uuid|string|UUID do link de pagamento|
|reference|string|Identificação referenciando o order da transação|
|status|string|Status da transação|
|expirationDate|string|Data de vencimento da order, se existir|
|transactionList|[transaction]|Transações geradas após o pagamento do link.|
|transaction.number|number|Número da transação|
|transaction.status|string|Além dos valores abaixo, temos algumas outras possibilidades de status para controle interno, por exemplo: COMPLETE, INCOMPLETE, CANCEL_REQUESTED, etc, mas eles não devem ser considerados como valores esperados porque são extremamente voláteis|
|transaction.amount|number|Valor da transação, com menor unidade de contagem|
|transaction.installments|number|Número de parcelas efetuadas na transação|
|transaction.paymentBrand|string|Bandeira com a qual a transação foi efetuada|
|transaction.paymentQuantity|number|Quantidades de pagamentos existentes na transação|
|transaction.nsu|string|NSU da transação|
|transaction.authorizationNumber|string|Número de autorização da transação|
|transaction.customer|object|Objeto contendo informações do cliente que efetuou a transação com link de pagamento.|
|transaction.customer.name|string|Nome do cliente|
|transaction.customer.document|string|Documento do cliente|
|transaction.customer.phone|string|Telefone do cliente|
|transaction.customer.email|string|Email do cliente|
|transaction.payments|[payment]|Lista contendo informações sobre o pagamento da transação gerada pelo link de pagamento.|
|payment.number|number|Número do pagamento|
|payment.amount|number|Valor do pagamento, em formato decimal|
|payment.status|string|Status do pagamento da transação|
|payment.payDate|string|Data em que o pagamento efetivamente foi feito ou, se ainda não foi pago, data esperada de pagamento|
|payment.merchant.name|string|Nome do estabelecimento|
|payment.merchant.document|string|Documento do estabelecimento|

### Exemplo

> 200 Response

```json
{
  "uuid": "dd2deaa2-fd6f-4212-9d64-3bb96a0dbfd8",
  "reference": "123CLIENTS",
  "status": "APPROVED",
  "expirationDate": "",
  "transactionList": [
    {
      "number": 2426062400001,
      "status": "APPROVED",
      "amount": "100.00",
      "installments": 1,
      "paymentBrand": "VISA_CREDITO",
      "paymentQuantity": 3,
      "nsu": "42589606398535608",
      "authorizationNumber": "218140",
      "customer": {
        "name": "WAGNER",
        "document": "01234567890",
        "email": "a@b.com",
        "phone": "(11) 91111-1111"
      },
      "payments": [
        {
          "number": 1,
          "amount": "36.00",
          "status": "UNPAID",
          "payDate": "27/07/2026",
          "merchant": {
            "name": "Ecommerce Social",
            "document": "93787081000100"
          }
        }
      ],
      "splits": [
        {
          "date": "27/07/2026",
          "number": "1",
          "value": "30.00",
          "status": "UNPAID",
          "recipientName": "PinPad SiTef",
          "recipientDocument": "25403140000131"
        },
        {
          "date": "27/07/2026",
          "number": "1",
          "value": "30.00",
          "status": "UNPAID",
          "recipientName": "Fornecedor PJ que nao deve mudar a conta",
          "recipientDocument": "56132150000103"
        }
      ]
    }
  ]
}
```
