---
title: Reference
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

<!-- 
    The content below is simply an automatic conversion from the OpenAPI spec
    https://api.adguard-dns.io/static/swagger/openapi.json to markdown using
    https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
-->

# API do AdGuard DNS
DNS API documentation

## Version: 1.4

### /oapi/v1/account/limits

#### OBTER
##### Resumo:

Gets account limits

##### Respostas

| Código | Descrição           |
| ------ | ------------------- |
| 200    | Account limits info |

### /oapi/v1/devices

#### OBTER
##### Resumo:

Lista dispositivos

##### Respostas

| Código | Descrição             |
| ------ | --------------------- |
| 200    | Lista de dispositivos |

#### POST
##### Resumo:

Creates a new device

##### Respostas

| Código | Descrição                                   |
| ------ | ------------------------------------------- |
| 200    | Device created                              |
| 400    | Falha na validação                          |
| 429    | A contagem de dispositivos atingiu o limite |

### /oapi/v1/devices/{device_id}

#### EXCLUIR
##### Resumo:

Removes a device

##### Parâmetros

| Nome      | Localizado em | Descrição | Obrigatório | Esquema |
| --------- | ------------- | --------- | ----------- | ------- |
| device_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | Dispositivo excluído       |
| 404    | Dispositivo não encontrado |

#### OBTER
##### Resumo:

Gets an existing device by ID

##### Parâmetros

| Nome      | Localizado em | Descrição | Obrigatório | Esquema |
| --------- | ------------- | --------- | ----------- | ------- |
| device_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | Device info                |
| 404    | Dispositivo não encontrado |

#### PUT
##### Resumo:

Updates an existing device

##### Parâmetros

| Nome      | Localizado em | Descrição | Obrigatório | Esquema |
| --------- | ------------- | --------- | ----------- | ------- |
| device_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | Device updated             |
| 400    | Falha na validação         |
| 404    | Dispositivo não encontrado |

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### OBTER
##### Resumo:

Gets DNS-over-HTTPS .mobileconfig file.

##### Parâmetros

| Nome                    | Localizado em | Descrição                                                                        | Obrigatório | Esquema   |
| ----------------------- | ------------- | -------------------------------------------------------------------------------- | ----------- | --------- |
| device_id               | path          |                                                                                  | Sim         | linhas    |
| exclude_wifi_networks | consulta      | List Wi-Fi networks by their SSID in which you want AdGuard DNS to be disabled   | Não         | [ linha ] |
| exclude_domain          | consulta      | Listar domínios que utilizarão servidores DNS predefinidos em vez do AdGuard DNS | Não         | [ linha ] |

##### Respostas

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | DNS-over-HTTPS .plist file |
| 404    | Dispositivo não encontrado |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### OBTER
##### Resumo:

Gets DNS-over-TLS .mobileconfig file.

##### Parâmetros

| Nome                    | Localizado em | Descrição                                                                        | Obrigatório | Esquema   |
| ----------------------- | ------------- | -------------------------------------------------------------------------------- | ----------- | --------- |
| device_id               | path          |                                                                                  | Sim         | linhas    |
| exclude_wifi_networks | consulta      | List Wi-Fi networks by their SSID in which you want AdGuard DNS to be disabled   | Não         | [ linha ] |
| exclude_domain          | consulta      | Listar domínios que utilizarão servidores DNS predefinidos em vez do AdGuard DNS | Não         | [ linha ] |

##### Respostas

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | DNS-over-HTTPS .plist file |
| 404    | Dispositivo não encontrado |

### /oapi/v1/devices/{device_id}/settings

#### PUT
##### Resumo:

Updates device settings

##### Parâmetros

| Nome      | Localizado em | Descrição | Obrigatório | Esquema |
| --------- | ------------- | --------- | ----------- | ------- |
| device_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | Device settings updated    |
| 400    | Falha na validação         |
| 404    | Dispositivo não encontrado |

### /oapi/v1/dns_servers

#### OBTER
##### Resumo:

Lista os servidores DNS que pertencem ao usuário.

##### Descrição:

Lista os servidores DNS que pertencem ao usuário. By default there is at least one default server.

##### Respostas

| Código | Descrição               |
| ------ | ----------------------- |
| 200    | Lista de servidores DNS |

#### POST
##### Resumo:

Cria um novo servidor DNS

##### Descrição:

Cria um novo servidor DNS. Você pode anexar configurações personalizadas, caso contrário, o servidor DNS será criado com as configurações padrão.

##### Respostas

| Código | Descrição                                     |
| ------ | --------------------------------------------- |
| 200    | Servidor DNS criado                           |
| 400    | Falha na validação                            |
| 429    | A contagem de servidores DNS atingiu o limite |

### /oapi/v1/dns_servers/{dns_server_id}

#### EXCLUIR
##### Resumo:

Remove um servidor DNS

##### Descrição:

Remove um servidor DNS. Todos os dispositivos conectados a este servidor DNS serão movidos para o servidor DNS padrão. Excluir um servidor DNS padrão é proibido.

##### Parâmetros

| Nome            | Localizado em | Descrição | Obrigatório | Esquema |
| --------------- | ------------- | --------- | ----------- | ------- |
| dns_server_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                   |
| ------ | --------------------------- |
| 200    | Servidor DNS excluído       |
| 404    | Servidor DNS não encontrado |

#### OBTER
##### Resumo:

Obtém um servidor DNS existente pelo ID

##### Parâmetros

| Nome            | Localizado em | Descrição | Obrigatório | Esquema |
| --------------- | ------------- | --------- | ----------- | ------- |
| dns_server_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                   |
| ------ | --------------------------- |
| 200    | Informação do servidor DNS  |
| 404    | Servidor DNS não encontrado |

#### PUT
##### Resumo:

Updates an existing DNS server

##### Parâmetros

| Nome            | Localizado em | Descrição | Obrigatório | Esquema |
| --------------- | ------------- | --------- | ----------- | ------- |
| dns_server_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                   |
| ------ | --------------------------- |
| 200    | DNS server updated          |
| 400    | Falha na validação          |
| 404    | Servidor DNS não encontrado |

### /oapi/v1/dns_servers/{dns_server_id}/settings

#### PUT
##### Resumo:

Updates DNS server settings

##### Parâmetros

| Nome            | Localizado em | Descrição | Obrigatório | Esquema |
| --------------- | ------------- | --------- | ----------- | ------- |
| dns_server_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                   |
| ------ | --------------------------- |
| 200    | DNS server settings updated |
| 400    | Falha na validação          |
| 404    | Servidor DNS não encontrado |

### /oapi/v1/filter_lists

#### OBTER
##### Resumo:

Gets filter lists

##### Respostas

| Código | Descrição       |
| ------ | --------------- |
| 200    | List of filters |

### /oapi/v1/oauth_token

#### POST
##### Resumo:

Generates Access and Refresh token

##### Respostas

| Código | Descrição                                                |
| ------ | -------------------------------------------------------- |
| 200    | Access token issued                                      |
| 400    | Parâmetros obrigatórios ausentes                         |
| 401    | Invalid credentials, MFA token or refresh token provided |

null

### /oapi/v1/query_log

#### EXCLUIR
##### Resumo:

Limpa o registo de consultas

##### Respostas

| Código | Descrição                          |
| ------ | ---------------------------------- |
| 202    | O registo de consultas foi apagado |

#### OBTER
##### Resumo:

Obtém o registo de consultas

##### Parâmetros

| Nome               | Localizado em | Descrição                                                                  | Obrigatório | Esquema                                             |
| ------------------ | ------------- | -------------------------------------------------------------------------- | ----------- | --------------------------------------------------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive)                                      | Sim         | longo                                               |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)                                        | Sim         | longo                                               |
| dispositivos       | consulta      | Filtrar por dispositivos                                                   | Não         | [ linha ]                                           |
| países             | consulta      | Filtrar por países                                                         | Não         | [ linha ]                                           |
| companies          | consulta      | Filter by companies                                                        | Não         | [ linha ]                                           |
| statuses           | consulta      | Filter by statuses                                                         | Não         | [ [FilteringActionStatus](#FilteringActionStatus) ] |
| categories         | consulta      | Filtrar por categorias                                                     | Não         | [ [CategoryType](#CategoryType) ]                   |
| search             | consulta      | Filtrar por nome de domínio                                                | Não         | linhas                                              |
| limit              | consulta      | Limit the number of records to be returned                                 | Não         | integer                                             |
| cursor             | consulta      | Pagination cursor. Use cursor from response to paginate through the pages. | Não         | linhas                                              |

##### Respostas

| Código | Descrição             |
| ------ | --------------------- |
| 200    | Registro de consultas |

### /oapi/v1/revoke_token

#### POST
##### Resumo:

Revokes a Refresh Token

##### Parâmetros

| Nome          | Localizado em | Descrição     | Obrigatório | Esquema |
| ------------- | ------------- | ------------- | ----------- | ------- |
| refresh_token | consulta      | Refresh Token | Sim         | linhas  |

##### Respostas

| Código | Descrição             |
| ------ | --------------------- |
| 200    | Refresh token revoked |

null

### /oapi/v1/stats/categories

#### OBTER
##### Resumo:

Gets categories statistics

##### Parâmetros

| Nome               | Localizado em | Descrição                             | Obrigatório | Esquema   |
| ------------------ | ------------- | ------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive) | Sim         | longo     |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)   | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos              | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                    | Não         | [ linha ] |

##### Respostas

| Código | Descrição                      |
| ------ | ------------------------------ |
| 200    | Categories statistics received |
| 400    | Falha na validação             |

### /oapi/v1/stats/companies

#### OBTER
##### Resumo:

Gets companies statistics

##### Parâmetros

| Nome               | Localizado em | Descrição                             | Obrigatório | Esquema   |
| ------------------ | ------------- | ------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive) | Sim         | longo     |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)   | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos              | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                    | Não         | [ linha ] |

##### Respostas

| Código | Descrição                     |
| ------ | ----------------------------- |
| 200    | Companies statistics received |
| 400    | Falha na validação            |

### /oapi/v1/stats/companies/detailed

#### OBTER
##### Resumo:

Gets detailed companies statistics

##### Parâmetros

| Nome               | Localizado em | Descrição                             | Obrigatório | Esquema   |
| ------------------ | ------------- | ------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive) | Sim         | longo     |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)   | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos              | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                    | Não         | [ linha ] |
| cursor             | consulta      | Pagination cursor                     | Não         | linhas    |

##### Respostas

| Código | Descrição                              |
| ------ | -------------------------------------- |
| 200    | Detailed companies statistics received |
| 400    | Falha na validação                     |

### /oapi/v1/stats/countries

#### OBTER
##### Resumo:

Obtém estatísticas dos países

##### Parâmetros

| Nome               | Localizado em | Descrição                             | Obrigatório | Esquema   |
| ------------------ | ------------- | ------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive) | Sim         | longo     |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)   | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos              | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                    | Não         | [ linha ] |

##### Respostas

| Código | Descrição                         |
| ------ | --------------------------------- |
| 200    | Estatísticas dos países recebidas |
| 400    | Falha na validação                |

### /oapi/v1/stats/devices

#### OBTER
##### Resumo:

Reúne estatísticas de dispositivos

##### Parâmetros

| Nome               | Localizado em | Descrição                             | Obrigatório | Esquema   |
| ------------------ | ------------- | ------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive) | Sim         | longo     |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)   | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos              | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                    | Não         | [ linha ] |

##### Respostas

| Código | Descrição                              |
| ------ | -------------------------------------- |
| 200    | Estatísticas de dispositivos recebidas |
| 400    | Falha na validação                     |

### /oapi/v1/stats/domains

#### OBTER
##### Resumo:

Gets domains statistics

##### Parâmetros

| Nome               | Localizado em | Descrição                             | Obrigatório | Esquema   |
| ------------------ | ------------- | ------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive) | Sim         | longo     |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)   | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos              | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                    | Não         | [ linha ] |

##### Respostas

| Código | Descrição                   |
| ------ | --------------------------- |
| 200    | Domains statistics received |
| 400    | Falha na validação          |

### /oapi/v1/stats/time

#### OBTER
##### Resumo:

Gets time statistics

##### Parâmetros

| Nome               | Localizado em | Descrição                              | Obrigatório | Esquema   |
| ------------------ | ------------- | -------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Tempo de em milissegundos (inclusivo)  | Sim         | longo     |
| time_to_millis   | consulta      | Tempo até em milissegundos (inclusivo) | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos               | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                     | Não         | [ linha ] |

##### Respostas

| Código | Descrição                       |
| ------ | ------------------------------- |
| 200    | Estatísticas de tempo recebidas |
| 400    | Falha na validação              |

### /oapi/v1/web_services

#### OBTER
##### Resumo:

Lista serviços web

##### Respostas

| Código | Descrição             |
| ------ | --------------------- |
| 200    | Lista de serviços Web |
