---
sidebar_position: 3
---

# Status do terminal

|Status do Terminal|Motivo|
|-------------------|------|
|`ONLINE`|Terminal pronto para receber transações.|
|`ONLINE_DIFFERENT_ACCOUNT`|Terminal está sendo utilizado por outro estabelecimento. Se o terminal está na versão 4.14 ou superior, está apto a receber transações.|
|`OFFLINE`|Terminal desligado. Transações não serão processadas até que o terminal fique ONLINE (ou ONLINE_DIFFERENT_ACCOUNT para versões superiores a v4.14).|
|`UNKNOWN`|Terminal em estado desconhecido (retornado para os terminais com versões anteriores a v4.0).|
