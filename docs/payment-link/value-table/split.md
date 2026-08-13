---
sidebar_position: 7
---

# Parâmetros do split

### order.splits

|Propriedade|Tipo|Obrigatório|Descrição| Validação         |
|-----------|----|-----------|---------|-------------------|
|`code`|Texto|Sim|Código do beneficiário.| código alfanumérico do beneficiário |
|`value`|Número|Sim|Valor do split destinado ao beneficiário.| valor inteiro sem casas decimais |
|`chargeFees`|Booleano|Não|Define se aplica taxas sobre o valor do split ou não. Considera como `true`, caso o campo não seja definido.| `true` ou `false` |
