---
sidebar_position: 5
---
# Cancelar um Link de Pagamento

`DELETE /api/orders/{uuid}`

*Cancela um Link de Pagamento de acordo com o seu uuid.*

<h3 id="cancelorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|Uuid do Link de Pagamento a ser cancelado|

<h3 id="cancelorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Exceção de validação|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Credenciais invalidas, não autorizado|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Não autorizado|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pedido não encontrado|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro interno no servidor|None|

<aside class="warning">
Para executar esta operação, você deve estar autenticado através do método:
BasicAuth
</aside>

# Estruturas

```json
{
  "amount": "10000.00",
  "merchantCode": "AVD242AN"
}

```

Objeto para a busca de formas de pagamento disponíveis ao estabelecimento conforme valor desejado.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|false|none|Valor do pagamento|
|merchantCode|string|false|none|Código do estabelecimento|

```json
{
  "paymentMethods": [
    {
      "type": "CREDIT",
      "options": {
        "maxInstallments": "12",
        "paymentBrands": {
          "value": [
            "VISA"
          ]
        }
      }
    }
  ]
}

```

Objeto de retorno contendo as informações sobre as formas de pagamento disponíveis. 

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentMethods|[[PaymentMethod](#schemapaymentmethod)]|false|none|[Objeto contendo as informações de pagamento do estabelecimento.]|


```json
{
  "type": "CREDIT",
  "options": {
    "maxInstallments": "12",
    "paymentBrands": {
      "value": [
        "VISA"
      ]
    }
  }
}

```

Objeto contendo as informações de pagamento do estabelecimento.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Determina o método de pagamento, podendo ser crédito ou recorrente|
|options|[PaymentOption](#schemapaymentoption)|false|none|Opção para o tipo de pagamento do estabelecimento|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CREDIT|
|type|RECURRENT|

```json
{
  "maxInstallments": "12",
  "paymentBrands": {
    "value": [
      "VISA"
    ]
  }
}

```

Opção para o tipo de pagamento do estabelecimento

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxInstallments|number|false|none|Número máximo de parcelas permitido para a opção|
|paymentBrands|object|false|none|Bandeiras disponíveis para a opção|
|» value|[string]|false|none|none|

```json
{
  "order": {
    "reference": "123CLIENTS",
    "redirectUrl": "https://example.com/callback",
    "amount": "10000.00",
    "maxInstallments": "2",
    "minInstallments": "1",
    "merchantCode": "A1B2C3",
    "customerName": "Rodrigo",
    "customerDocument": "01234567890",
    "recurrent": true,
    "recurrenceType": "MONTHLY",
    "quantityCharges": "10",
    "frequency": "30",
    "description": "Venda de equipamento efetuada na data 13/05/2020",
    "expirationDate": "2020-07-16"
  }
}

```

Objeto contendo informações para a solicitação de uma nova transação.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order|object|false|none|none|
|» reference|string|false|none|Identificação referenciando o order|
|» redirectUrl|string|false|none|Redireciona a URL depois do pagamento do pedido. Faça um retorno de chamada 'POST' com o formato 'x-www-form-urlencoded' e com os parâmetros 'uuid' e 'transactionNumber'|
|» amount|string|false|none|Valor do order, em formato decimal (XXXX.XX)|
|» maxInstallments|number|false|none|Número máximo de parcelas permitidos pelo order|
|» minInstallments|number|false|none|Número mínimo de parcelas permitidos pelo order. Opcional, caso não seja inserido um valor será considerado como `1`, por padrão. Não pode ser maior do que o valor inserido em `maxInstallments`.|
|» merchantCode|string|false|none|Código do estabelecimento referente ao order|
|» customerName|string|false|none|Nome do cliente do order|
|» customerDocument|string|false|none|Documento do cliente do order|
|» recurrent|boolean|false|none|Indica se o pagamento do order é do tipo recorrente ou não|
|» recurrenceType|string|false|none|Tipo de recorrência do pagamento do order podendo ser mensal ou flexível  (por período fixo determinado). O preenchimento do campo é Obrigatório caso o campo `recurrent` seja definido como `true`.|
|» quantityCharges|number|false|none|Quantidade de recorrências que serão cobradas no order O preenchimento do campo é Obrigatório caso o campo `recurrent` seja definido como `true`.|
|» frequency|number|false|none|Período fixo entre as cobranças da recorrência, em dias. O preenchimento do campo é Obrigatório caso o campo `recurrent` seja definido como `true`.|
|» description|string|false|none|Descrição mais detalhada referente à order.|
|» expirationDate|string|false|none|Data de vencimento da order. O campo é opcional.|

#### Enumerated Values

|Property|Value|
|---|---|
|recurrenceType|MONTHLY|
|recurrenceType|FLEXIBLE|


```json
{
  "uuid": "e2ba235d-0b30-4edc-981d-e2c222763aee",
  "payUrl": "api.evoluservices.com/orders/pay",
  "reference": "123CLIENTS",
  "status": "APPROVED"
}

```

Objeto de retorno contendo informações sobre o link de pagamento gerado pelo order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string|false|none|UUID do link de pagamento gerado pelo order|
|payUrl|string|false|none|URL do link de pagamento para tal order|
|reference|string|false|none|Identificação referenciando o order|
|status|string|false|none|Status do order|

#### Enumerated Values

|Property|Value|
|---|---|
|status|APPROVED|
|status|CANCELED|
|status|PENDING|

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
      "amount": "100.00",
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

Objeto de retorno contendo informações sobre a transação efetuada por um link de pagamento  de acordo com o UUID buscado.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string|false|none|UUID do link de pagamento|
|reference|string|false|none|Identificação referenciando o order da transação|
|status|string|false|none|Status da transação|
|expirationDate|string|false|none|Data de vencimento da order, se existir|
|transactionList|[[ClientsTransactionDto](#schemaclientstransactiondto)]|false|none|Transações efetuadas pelo link de pagamento.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|APPROVED|
|status|CANCELED|
|status|PENDING|

```json
{
  "number": "12345678909",
  "status": "APPROVED",
  "amount": "100.00",
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

```

Objeto contendo as informações sobre as transações efetuadas pelo link de pagamento.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|number|false|none|Número da transação|
|status|string|false|none|Além dos valores abaixo, temos algumas outras possibilidades de status para controle interno, por exemplo: COMPLETE, INCOMPLETE, CANCEL_REQUESTED, etc, mas eles não devem ser considerados como valores esperados porque são extremamente voláteis|
|amount|number|false|none|Valor da transação no formato decimal (XXXX.XX)|
|installments|number|false|none|Número de parcelas efetuadas na transação|
|paymentBrand|string|false|none|Bandeira com a qual a transação foi efetuada|
|paymentQuantity|number|false|none|Quantidades de pagamentos existentes na transação|
|nsu|string|false|none|NSU da transação|
|authorizationNumber|string|false|none|Número de autorização da transação|
|customer|[SubjectIdentifierDto](#schemasubjectidentifierdto)|false|none|Objeto contendo informações do cliente que efetuou a transação com link de pagamento.|
|payments|[[ClientsTransactionPaymentDto](#schemaclientstransactionpaymentdto)]|false|none|[Objeto contendo informações sobre o pagamento da transação feita pelo link de pagamento.]|

#### Enumerated Values

|Property|Value|
|---|---|
|status|APPROVED|
|status|CANCELLED|
|status|ABORTED|
|status|ABORTED_BY_MERCHANT|
|status|PARTIALLY_CANCELED|
|paymentBrand|VISA_CREDITO|
|paymentBrand|VISA_ELECTRON|
|paymentBrand|MASTERCARD|
|paymentBrand|MAESTRO|
|paymentBrand|AMEX|
|paymentBrand|DINERS|
|paymentBrand|HIPERCARD|
|paymentBrand|AURA|
|paymentBrand|SOROCRED|
|paymentBrand|BANRISUL|
|paymentBrand|ELO|
|paymentBrand|SICREDI|
|paymentBrand|ELO_DEBITO|
|paymentBrand|BRADESCO|
|paymentBrand|HIPER|
|paymentBrand|AGIPLAN|
|paymentBrand|BANESCARD|
|paymentBrand|CREDZ|
|paymentBrand|JCB|
|paymentBrand|CABAL|
|paymentBrand|MAIS|
|paymentBrand|CHEQUE_TELECHEQUE|
|paymentBrand|CHEQUE_CREDITALL|
|paymentBrand|BOLETO|
|paymentBrand|BANESCARD_DEBITO|
|paymentBrand|CABAL_DEBITO|
|paymentBrand|HIPER_DEBITO|
|paymentBrand|REDESHOP|

```json
{
  "name": "Jose da Silva",
  "document": "123.456.789-09"
}

```

Objeto contendo informações do cliente que efetuou a transação com link de pagamento.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Nome do cliente|
|document|string|false|none|Documento do cliente|

```json
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

```

Objeto contendo informações sobre o pagamento da transação feita pelo link de pagamento.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|number|false|none|Número do pagamento|
|amount|number|false|none|Valor do pagamento, em formato decimal|
|status|string|false|none|Status do pagamento da transação|
|payDate|string|false|none|Data em que o pagamento efetivamente foi feito ou, se ainda não foi pago, data esperada de pagamento|
|merchant|[SubjectIdentifierDto](#schemasubjectidentifierdto)|false|none|Objeto contendo informações do cliente que efetuou a transação com link de pagamento.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PAYED|
|status|UNPAID|
|status|ANTICIPATION_REQUESTED|
|status|ANTICIPATED|
|status|CANCEL_REQUESTED|
|status|CANCELLED|

