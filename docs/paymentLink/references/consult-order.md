---
sidebar_position: 4
---
# Consultar um link de pagamento

`GET /api/orders/{uuid}`

Consulta o Link de Pagamento de acordo com o uuid.

## Parâmetro

|Nome|In|Tipo|Obrigatório|Descrição|
|---|---|---|---|---|
|uuid|path|string|Sim|UUID do Link de Pagamento|

## Respostas

|Status|Descrição Padronizada|Descrição Detalhada|
|---|---|---|
|**200**|OK|OK|
|**400**|Bad Request|Exceção de validação|
|**401**|Unauthorized|Não autorizado|
|**404**|Not Found|Pedido não encontrado|
|**422**|Unprocessable Entity|Erro de integração|
|**500**|Internal Server Error|Erro interno no servidor|

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
|transaction.payments|[payment]|Lista contendo informações sobre o pagamento da transação gerada pelo link de pagamento.|
|payment.number|number|Número do pagamento|
|payment.amount|number|Valor do pagamento, em formato decimal|
|payment.status|string|Status do pagamento da transação|
|payment.payDate|string|Data em que o pagamento efetivamente foi feito ou, se ainda não foi pago, data esperada de pagamento|
|payment.merchant.name|string|Nome do estabelecimento|
|payment.merchant.document|string|Documento do estabelecimento|

#### Valores Enumerados

##### status
|Valor|
|---|
|APPROVED|
|PENDING|
|CANCELED|

##### transaction.status
|Valor|
|---|
|APPROVED|
|CANCELLED|
|ABORTED|
|ABORTED_BY_MERCHANT|
|PARTIALLY_CANCELED|

##### transaction.paymentBrand
|Valor|
|---|
|VISA_CREDITO|
|MASTERCARD|
|AMEX|
|DINERS|
|HIPERCARD|
|AURA|
|SOROCRED|
|BANRISUL|
|ELO|
|SICREDI|
|HIPER|
|AGIPLAN|
|BANESCARD|
|CREDZ|
|JCB|
|CABAL|
|MAIS|
|REDESHOP|

##### payment.status
|Valor|
|---|
|PAYED|
|UNPAID|
|ANTICIPATION_REQUESTED|
|ANTICIPATED|
|CANCEL_REQUESTED|
|CANCELLED|

### Exemplo

> 200 Response

```json
{
  "uuid": "e2ba235d-0b30-4edc-981d-e2c222763aee",
  "reference": "123CLIENTS",
  "status": "APPROVED",
  "expirationDate": "2020-07-16",
  "transactionList": [
    {
      "number": "12345678909",
      "status": "APPROVED",
      "amount": "10000",
      "installments": "2",
      "paymentBrand": "VISA_CREDITO",
      "paymentQuantity": "3",
      "nsu": "993485982",
      "authorizationNumber": "470216",
      "customer": {
        "name": "Jose da Silva",
        "document": "123.456.789-09"
      },
      "payments": [
        {
          "number": "12345678909",
          "amount": "100.00",
          "status": "PAYED",
          "payDate": "01/01/2001",
          "merchant": {
            "name": "Jose da Silva",
            "document": "123.456.789-09"
          }
        }
      ]
    }
  ]
}
```

:::caution Atenção
Para executar esta operação, você deve estar autenticado através do método:
BasicAuth
:::

