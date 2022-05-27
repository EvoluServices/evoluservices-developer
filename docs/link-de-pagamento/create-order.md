---
sidebar_position: 3
---

# Criar um Link de Pagamento

`POST /api/orders`

*Cria novo link de pagamento e retorna url para o pagamento ser realizado.*

> Body parameter

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

<h3 id="createorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClientsOrderInputDto](#schemaclientsorderinputdto)|true|Objeto contendo as informações para criar o link de pagamento.|
|» order|body|object|false|none|
|»» reference|body|string|false|Identificação referenciando o order|
|»» redirectUrl|body|string|false|Redireciona a URL depois do pagamento do pedido. Faça um retorno de chamada 'POST' com o formato 'x-www-form-urlencoded' e com os parâmetros 'uuid' e 'transactionNumber'|
|»» amount|body|string|false|Valor do order, em formato decimal (XXXX.XX)|
|»» maxInstallments|body|number|false|Número máximo de parcelas permitidos pelo order|
|»» minInstallments|body|number|false|Número mínimo de parcelas permitidos pelo order. Opcional, caso não seja inserido um valor será considerado como `1`, por padrão. Não pode ser maior do que o valor inserido em `maxInstallments`.|
|»» merchantCode|body|string|false|Código do estabelecimento referente ao order|
|»» customerName|body|string|false|Nome do cliente do order|
|»» customerDocument|body|string|false|Documento do cliente do order|
|»» recurrent|body|boolean|false|Indica se o pagamento do order é do tipo recorrente ou não|
|»» recurrenceType|body|string|false|Tipo de recorrência do pagamento do order podendo ser mensal ou flexível  (por período fixo determinado). O preenchimento do campo é Obrigatório caso o campo `recurrent` seja definido como `true`.|
|»» quantityCharges|body|number|false|Quantidade de recorrências que serão cobradas no order O preenchimento do campo é Obrigatório caso o campo `recurrent` seja definido como `true`.|
|»» frequency|body|number|false|Período fixo entre as cobranças da recorrência, em dias. O preenchimento do campo é Obrigatório caso o campo `recurrent` seja definido como `true`.|
|»» description|body|string|false|Descrição mais detalhada referente à order.|
|»» expirationDate|body|string|false|Data de vencimento da order. O campo é opcional.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|»» recurrenceType|MONTHLY|
|»» recurrenceType|FLEXIBLE|

> Example responses

> 200 Response

```json
{
  "uuid": "e2ba235d-0b30-4edc-981d-e2c222763aee",
  "payUrl": "api.evoluservices.com/orders/pay",
  "reference": "123CLIENTS",
  "status": "APPROVED"
}
```

<h3 id="createorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ClientsOrderOutputDto](#schemaclientsorderoutputdto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Exceção de validação|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Não autorizado|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Estabelecimento não encontrado|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Erro de integração|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro interno no servidor|None|

<aside class="warning">
Para executar esta operação, você deve estar autenticado através do método:
BasicAuth
</aside>