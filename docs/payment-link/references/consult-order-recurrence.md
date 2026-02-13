---
sidebar_position: 6
---

# Consultar uma recorrência

`GET /api/orders/{uuid}/recurrence`

Consulta os dados de uma recorrência associada a um Link de Pagamento (order),
a partir do UUID da order.

## Parâmetro

| Nome | In | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| uuid | path | string | Sim | UUID do Link de Pagamento (order) |

## Respostas

| Status | Descrição Padronizada | Descrição Detalhada |
|---|---|---|
| **200** | OK | Recorrência encontrada |
| **400** | Bad Request | Exceção de validação |
| **401** | Unauthorized | Não autorizado |
| **403** | Forbidden | A order não pertence ao parceiro autenticado |
| **404** | Not Found | Order ou recorrência não encontrada |
| **422** | Unprocessable Entity | Erro de integração |
| **500** | Internal Server Error | Erro interno no servidor |

## Schema

### Recurrence

| Nome | Tipo | Descrição |
|---|---|---|
| merchantName | string | Nome do estabelecimento (merchant) associado à recorrência |
| clientName | string | Nome do cliente (consumidor) associado à recorrência |
| amount | number | Valor da cobrança recorrente |
| type | string | Tipo da recorrência (ex: MONTHLY, FLEXIBLE) |
| daysBetweenRecurrences | number | Intervalo de dias entre as cobranças |
| beginDate | string | Data de início da recorrência (dd/MM/yyyy) |
| endDate | string | Data de término da recorrência (dd/MM/yyyy) |
| nextDate | string | Data prevista da próxima cobrança (dd/MM/yyyy) |
| status | string | Status atual da recorrência |
| totalTransactions | number | Quantidade total de transações aprovadas |
| totalAmount | number | Valor total acumulado das transações aprovadas |
| transactionList | [transaction] | Lista de transações associadas à recorrência |

### transaction

| Nome | Tipo | Descrição |
|---|---|---|
| transactionNumber | string | Número da transação |
| date | string | Data/hora da transação (dd/MM/yyyy HH:mm:ss) |
| status | string | Status consolidado da transação |
| amount | number | Valor da transação |
| authorizationNumber | string | Código de autorização |
| nsu | string | NSU da transação |
| paymentBrand | string | Bandeira |
| dateEstimated | string | Data estimada de liquidação (dd/MM/yyyy) |
| paymentValue | number | Valor líquido/pago da transação |

## Valores Enumerados

### status (recorrência)

| Valor |
|---|
| ACTIVE |
| CANCELED |
| COMPLETE |

### transaction.status

| Valor |
|---|
| APPROVED |
| DISAPPROVED |
| CANCELED |
| COMPLETE |

### paymentBrand

| Valor |
|---|
| VISA_CREDITO |
| MASTERCARD |
| AMEX |
| DINERS |
| HIPERCARD |
| AURA |
| SOROCRED |
| BANRISUL |
| ELO |
| SICREDI |
| HIPER |
| AGIPLAN |
| BANESCARD |
| CREDZ |
| JCB |
| CABAL |
| MAIS |
| REDESHOP |

## Exemplo

> 200 Response

```json
{
  "merchantName": "Ecommerce",
  "clientName": "TESTE",
  "amount": "10.00",
  "type": "MONTHLY",
  "daysBetweenRecurrences": 0,
  "beginDate": "09/02/2026",
  "endDate": "11/06/2026",
  "nextDate": "09/03/2026",
  "status": "ACTIVE",
  "totalTransactions": 1,
  "totalAmount": "10.00",
  "transactionList": [
    {
      "transactionNumber": "1026020900001",
      "date": "09/02/2026 18:22:58",
      "status": "APPROVED",
      "amount": "9.60",
      "authorizationNumber": "824004",
      "nsu": "87183331515395106",
      "paymentBrand": "VISA_CREDITO",
      "dateEstimated": "13/03/2026"
    }
  ]
}