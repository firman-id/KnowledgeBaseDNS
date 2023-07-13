---
title: Visão Geral
sidebar_position: 1
---

:::info

Com o AdGuard DNS, você pode configurar seus servidores DNS privados para resolver solicitações de DNS e bloquear anúncios, rastreadores e domínios maliciosos antes que cheguem ao seu dispositivo

Link rápido: [Experimente o AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

# AdGuard DNS Privado

![Painel do AdGuard DNS Privado principal](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## O que é AdGuard DNS Privado?

O AdGuard DNS Privado é um servidor DNS que, além dos benefícios de um servidor DNS público (como criptografia de tráfego e listas de bloqueio de domínio), oferece recursos como personalização flexível, estatísticas de DNS e controle dos pais e é facilmente gerenciado por meio de um painel prático.

## Por que você precisa de um DNS AdGuard privado

Hoje, você pode conectar qualquer coisa à Internet: TVs, geladeiras, lâmpadas inteligentes ou alto-falantes. Mas junto com as conveniências inegáveis, você obtém rastreadores e anúncios. Um bloqueador de anúncios simples baseado em navegador não o protegerá neste caso, mas o AdGuard DNS, que você pode configurar para filtrar tráfego, bloquear conteúdo e rastreadores, tem um efeito em todo o sistema.

Já temos o [AdGuard DNS público](../public-dns/overview.md) e [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Essas soluções funcionam bem para alguns usuários, mas para outros, o AdGuard DNS público não tem flexibilidade de configuração, enquanto o AdGuard Home não tem simplicidade. É aí que entra o AdGuard DNS privado. Ele tem o melhor dos dois mundos: oferece personalização, controle e informações - tudo através de um painel simples e fácil de usar.

## A diferença entre AdGuard DNS Privado e Público

Aqui está uma comparação simples dos recursos disponíveis nos servidores AdGuard DNS Público e AdGuard DNS Privado.

| AdGuard DNS Público                            | AdGuard DNS Privado                                                                                           |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Criptografia de tráfego DNS                    | Criptografia de tráfego DNS                                                                                   |
| Listas de bloqueio de domínio pré-determinadas | Listas de bloqueio de domínio personalizáveis                                                                 |
| -                                              | Regras de filtragem de DNS personalizadas com recurso de importação/exportação                                |
| -                                              | Estatísticas de solicitações (veja para onde vão suas solicitações de DNS: quais países, quais empresas etc.) |
| -                                              | Registro de consulta detalhado                                                                                |
| -                                              | Controle parental                                                                                             |

## Como configurar o AdGuard DNS Privado

1. Vá para o seu [painel de DNS do AdGuard](https://adguard-dns.io/dashboard/) (se não estiver logado, faça login usando sua conta do AdGuard)
2. Clique em “Conectar dispositivo” e siga as instruções na tela

**Plataformas compatíveis:**
* Android
* iOS
* Windows
* Mac
* Linux
* Roteadores
* Consolas de jogos

Cada dispositivo adicionado ao painel DNS do AdGuard tem seu próprio endereço exclusivo que pode ser usado se o dispositivo suportar protocolos DNS criptografados modernos (DoH, DoT e DoQ).

### IP vinculado

Se o dispositivo não suportar DNS criptografado e você tiver que usar DNS simples, há outra maneira de permitir que o AdGuard DNS reconheça o dispositivo: vincule seu endereço IP. Nesse caso, o AdGuard DNS conta todas as solicitações de DNS simples provenientes desse endereço IP para esse "dispositivo".

O único requisito para vincular o IP é que ele seja ** um endereço IP residencial**.

:::observação

A residential IP address is an IP address assigned to a device connected to a residential ISP. É normalmente associado a um local físico e é alocado para casas ou apartamentos individuais. Residential IP addresses are used by regular Internet users for their everyday online activities, such as browsing the web, accessing social media platforms, sending emails, or streaming content.

:::

If you're trying to link a residential IP address and AdGuard DNS does not allow you to do that, please contact our support team at support@adguard.com.

## Recursos do AdGuard DNS Privado

### Blocklists management

With "Blocklists" feature you can set which domains you want to block and which you don't. Сhoose from wide variety of blocklists for different purposes.

![Private AdGuard DNS dashboard blocklists](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### User rules

For times when pre-installed *Blocklists* with thousands of rules are not enough, we have a handy function called "User rules". Here you can add custom rules manually to block/unblock a certain domain or import custom rules lists (check out [DNS filtering rules syntax](../general/dns-filtering-syntax.md)). You can export the lists.

![Private AdGuard DNS dashboard user rules](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### Statistics

Na guia "Estatísticas" você pode ver todas as estatísticas resumidas sobre consultas DNS feitas por dispositivos conectados ao seu AdGuard DNS Privado. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.

![Private AdGuard DNS dashboard statistics](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Traffic destination

Esse recurso mostra para onde vão as solicitações de DNS enviadas por seus dispositivos. On top of seeing the map of request destinations, you can filter the information by date, device and country.

![Private AdGuard DNS dashboard traffic](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Companies

This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests.

![Private AdGuard DNS dashboard companies](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Registro de consultas

This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country.

![Painel de registro de consultas do AdGuard DNS Privado](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

### Controle parental

To protect your child from online content you deem inappropriate, set up and activate the *Parental control* option. In addition to options such as "adult content" blocking and safe search, we've added the ability to manually specify domains for blocking and set a schedule for the *Parental control* to work accordingly.

![Private AdGuard DNS dashboard Parental Control](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

:::observação

In case you don't have Private AdGuard DNS yet, you can [get it on the official website](https://adguard-dns.io/).

:::