---
sidebar_position: 2
---

# Obter os métodos de pagamento disponíveis

`GET /api/payment-methods`

*Possui as formas de pagamento disponíveis ao estabelecimento dado o valor pré-definido.*

<h3 id="paymentmethods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentMethods.amount|query|string|true|Valor do pagamento|
|paymentMethods.merchantCode|query|string|true|Código de identificação do estabelecimento|

> Example responses

> 200 Response

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

<h3 id="paymentmethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentMethodsOutputDto](#schemapaymentmethodsoutputdto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Exceção de validação|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Não autorizado|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Estabelecimento não encontrado|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Erro de integração|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro interno no servidor|None|

<aside class="warning">
Para executar esta operação, você deve estar autenticado através do método:
BasicAuth
</aside>