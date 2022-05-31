---
sidebar_position: 4
---
# Consultar um link de Pagamento

`GET /api/orders/{uuid}`

*Consulta o Link de Pagamento de acordo com o uuid.*

<h3 id="consultorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|Uuid do Link de Pagamento|

> Example responses

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

<h3 id="consultorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ClientsOrderTransactionsDto](#schemaclientsordertransactionsdto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Exceção de validação|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Não autorizado|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pedido não encontrado|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Erro de integração|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro interno no servidor|None|

<aside class="warning">
Para executar esta operação, você deve estar autenticado através do método:
BasicAuth
</aside>
