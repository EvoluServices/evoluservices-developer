---
sidebar_position: 3
---

# Criar um link de pagamento

`POST /api/orders`

Cria novo link de pagamento e retorna url para o pagamento a ser realizado.

## Requisição

### Schema

|Nome|In|Tipo|Obrigatório|Descrição|
|---|---|---|---|---|
|order|body|object|sim|
|order.reference|body|string|sim|Identificação referenciando o order|
|order.redirectUrl|body|string|não|Redireciona a URL depois do pagamento do pedido. Faça um retorno de chamada 'POST' com o formato 'x-www-form-urlencoded' e com os parâmetros 'uuid' e 'transactionNumber'|
|order.amount|body|string|simd|Valor do order, com menor unidade de contagem|
|order.maxInstallments|body|number|não|Número máximo de parcelas permitidos pelo order|
|order.minInstallments|body|number|não|Número mínimo de parcelas permitidos pelo order. Opcional, caso não seja inserido um valor será considerado como `1`, por padrão. Não pode ser maior do que o valor inserido em `maxInstallments`.|
|order.merchantCode|body|string|sim|Código do estabelecimento referente ao order|
|order.customerName|body|string|não|Nome do cliente do order|
|order.customerDocument|body|string|não|Documento do cliente do order|
|order.recurrent|body|boolean|não|Indica se o pagamento do order é do tipo recorrente ou não|
|order.recurrenceType|body|string|não|Tipo de recorrência do pagamento do order podendo ser mensal ou flexível  (por período fixo determinado). O preenchimento do campo é Obrigatório caso o campo `recurrent` seja definido como `true`.|
|order.quantityCharges|body|number|não|Quantidade de recorrências que serão cobradas no order O preenchimento do campo é Obrigatório caso o campo `recurrent` seja definido como `true`.|
|order.frequency|body|number|não|Período fixo entre as cobranças da recorrência, em dias. O preenchimento do campo é Obrigatório caso o campo `recurrent` seja definido como `true`.|
|order.description|body|string|não|Descrição mais detalhada referente à order.|
|order.expirationDate|body|string|não|Data de vencimento da order. O campo é opcional.|

#### Valores Enumerados

##### order.recurrenceType
|Valor|
|---|
|MONTHLY|
|FLEXIBLE|

### Exemplo
```json
{
  "order": {
    "reference": "123CLIENTS",
    "redirectUrl": "https://example.com/callback",
    "amount": "1000000",
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

## Respostas

|Status|Descrição Padronizada|Descrição Detalhada|
|---|---|---|
|200|OK|OK|
|400|Bad Request|Exceção de validação|
|401|Unauthorized|Não autorizado|
|404|Not Found|Estabelecimento não encontrado|
|422|Unprocessable Entity|Erro de integração|
|500|Internal Server Error|Erro interno no servidor|

### Schema

|Nome|Tipo|Descrição|
|---|---|---|
|uuid|string|UUID do link de pagamento gerado pelo order|
|payUrl|string|URL do link de pagamento para tal order|
|reference|string|Identificação referenciando o order|
|status|string|Status do order|

#### Valores Enumerados

##### status
|Valor|
|---|
|APPROVED|
|PENDING|
|CANCELED|

### Exemplo
> 200 OK

```json
{
  "uuid": "e2ba235d-0b30-4edc-981d-e2c222763aee",
  "payUrl": "api.evoluservices.com/orders/pay",
  "reference": "123CLIENTS",
  "status": "APPROVED"
}
```

:::caution Atenção
Para executar esta operação, você deve estar autenticado através do método:
BasicAuth
:::