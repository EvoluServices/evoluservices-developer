---
sidebar_position: 3
---

# Callback

Se uma URL for enviada ao criar a transação, um JSON contendo os dados a seguir será enviado via POST quando o status da transação for alterado.

|Propriedade|Tipo|Descrição|
|-----------|----|---------|
|`remoteTransactionId`|Texto|Identificador da transação.|
|`transactionNumber`|Texto|Número da transação.|
|`status`|Texto|Status da transação (consulte [a tabela de valores de status](../../category/tabela-de-valores)).|
|`merchantId`|Número|Identificador do estabelecimento.|
|`value`|Número|Valor total da transação.|
|`paymentBrand`|Texto|Bandeira do cartão (para lista consulte [tabela de bandeiras](../value-table/brand)).|
|`terminalId`|Texto|ID do terminal.|
|`payments`|Lista de objetos|Pagamentos aos estabelecimentos da transação.|
|`paymentQuantity`|Número|Número de pagamentos ao estabelecimento.|
|`splits`|Lista de objetos|Informações ligadas aos splits de pagamento.|
|`clientName`|Texto|Nome do cliente que passou a transação, quando fornecido.|
|`NSU`|Número|NSU da transação, disponível apenas depois de aprovada.|
|`authorizationNumber`|Número|Número de autorização da transação, disponível apenas depois de aprovada.|

```json
{ 
  "remoteTransactionId": "<id>",
  "status": "APPROVED",
  "merchantId": "<id>",
  "value": "10.00",
  "paymentBrand": "VISA_CREDITO",
  "transactionNumber": "<transactionNumber>",
  "paymentQuantity": "2",
  "clientName": "CLIENT_NOT_INFORMED",
  "terminalId": "<id>",
  "payments": [
    {
      "status": "UNPAID",
      "value": 4.95,
      "number": 1,
      "date": "21/12/2016",
      "recipientName": "<name>",
      "recipientDocument": "<document>"
    },
    {
      "status": "UNPAID",
      "value": 4.95,
      "number": 2,
      "date": "21/01/2017",
      "recipientName": "<name>",
      "recipientDocument": "<document>"
    }
  ],
  "splits": [
    {
      "status": "UNPAID",
      "value": 2.35,
      "number": 1,
      "date": "02/02/2020",
      "recipientName": "<name>",
      "recipientDocument": "<document>"
    },
    {
      "status": "UNPAID",
      "value": 3.15,
      "number": 2,
      "date": "02/03/2020",
      "recipientName": "<name>",
      "recipientDocument": "<document>"
    }
  ]
}
```

## Parâmetros dos pagamentos aos estabelecimentos e dos splits
|Propriedade|Tipo|Descrição|
|-----------|----|---------|
|`status`|Texto|Status do pagamento.|
|`value`|Número|Valor destinado ao estabelecimento ou ao beneficiário, no caso do split.|
|`number`|Número|Número do pagamento.|
|`date`|Texto|Data estimada de pagamento.|
|`recipientName`|Texto|Nome do estabelecimento ou do beneficiário, no caso do split.|
|`recipientDocument`|Texto|Documento do estabelecimento ou do beneficiário, no caso do split.|

:::info informações
Veja a seção [Tabela de Valores](../../category/tabela-de-valores) para os possíveis status da transação e do pagamento.
:::