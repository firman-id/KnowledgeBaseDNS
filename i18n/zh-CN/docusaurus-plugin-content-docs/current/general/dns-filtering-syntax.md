---
title: DNS 过滤规则语法
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

在这篇文章中，我们展示如何编写自定义 DNS 过滤规则，以便在 AdGuard 产品中使用。

快捷链接： [下载 AdGuard 广告拦截程序](https://adguard.com/download.html?auto=true&utm_source=kb_dns)，[获取 AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started)，[试用 AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

## 前言

用户可以使用 AdGuard DNS 过滤规则语法使规则更加灵活，以便它们能够根据您的偏好屏蔽内容。 AdGuard DNS 过滤规则语法可用于不同的 AdGuard 产品，如 AdGuard Home、 AdGuard DNS、 Windows/Mac/Android 的 AdGuard。

这是三种不同的编写主机拦截列表方法：

* [Adblock 风格的语法](#adblock-style-syntax)是基于使用 Adblock 风格的规则语法子集编写过滤规则的现代方法。 这样阻止拦截列表与浏览器广告拦截器兼容。

* [`/etc/hosts`语法](#etc-hosts-syntax)：使用与操作系统处理其主机文件相同的语法的老式、经过实践检验的语法。

* [Domains-only 语法](#domains-only-syntax)是一个简单的域名列表。

如果用户要创建阻止列表，我们建议使用 [Adblock 样式的语法](#adblock-style-syntax)。 与旧式语法相比，它有几个重要的优点：

* **拦截列表大小。**使用模式匹配允许您拥有单个规则，而不是数百个 `/etc/hosts` 条目。

* **兼容性。**您的屏蔽列表将与浏览器广告拦截器兼容，并且与浏览器过滤器列表共享规则会更容易。

* **可扩展性。**在过去的十年中，Adblock 风格的语法有了很大的发展，我们认为我们能进一步扩展它并为网络范围的拦截器提供额外的功能。

If you're maintaining either a `/etc/hosts`-style blocklist or multiple filtering lists (regardless of type), we provide a tool for blocklist compilation. 我们称它为 [Hostlist compiler][hlc] ，我们用它来创建 [AdGuard DNS 过滤器][sdn]。

## 基本示例

* `||example.org^`：阻止访问 `example.org` 域及其所有子域，例如 `www.example.org` 。

* `@@||example.org^`：取消阻止对 `example.org` 域及其所有子域的访问。

* `1.2.3.4 example.org`：（注意，旧的 `/etc/hosts` 语法）在 AdGuard Home 里用 `1.2.3.4` 对 `example.org` 域名的查询，但 **没有** 其子网域的查询。 在私人 AdGuard DNS 中，阻止对 `example.org` 的访问。 `www.example.org` 仍然允许。

  在 AdGuard Home 中，对主机使用未指定的 IP 地址（`0.0.0.0`）或本地地址（`127.0.0.1` 等）基本上等同于拦截该主机。

  ```none
  # 返回 example.org 的 IP 地址 1.2.3.4。
  1.2.3.4 example.org
# 通过响应 0.0.0.0 来阻止 example.org。
  0.0.0.0 example.org
  ```

* `example.org`：一个简单的域规则。 阻止 `example.org` 域，而**不是**其子域。 `www.example.org` 仍然允许。

* `！ 这是一行注释`和`# 这也是一行注释`：注释。

* `/REGEX/`：拦截访问与特定的正则表达式匹配的域名。

## Adblock 语法样式

这是浏览器广告拦截器使用的 [传统 Adblock 样式][adb] 语法的子集。

```none
     rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

* `pattern`：主机名掩码。 每个主机名都与此掩码匹配。 该模式还可以包含特殊字符，如下所述。

* `@@`: 用于例外的标记规则。 如果用户想取消匹配主机名的过滤，请在规则开头添加此标记。

* `modifiers`：阐明规则参数。 规则参数有可能会限制规则的范围，甚至完全改变它们的工作方式。

### 特殊字符

* `*`: 通配符字符。 它用于表示任何字符集。 这也可以是一个空的字符串或者是任意长度的字符串。

* `||`：匹配主机名的开头，包括任何子域名。 例如，`||example.org` 匹配 `example.org` 和 `test.example.org`，但不匹配 `testexample.org`。

* `^`：分隔符字符。 与浏览器广告拦截不同，主机名中没有什么可以分隔的，因此该字符的唯一目的是标记主机名的结尾。

* `|`：指向主机名开头或结尾的指针。 该值取决于掩码中的字符位置。 例如，规则 `ample.org|` 对应于 `example.org` 但不对应于 `example.org.com`。 `|example` 对应于 `example.org` 但不对应于 `test.example`。

### 正则表达式

如果用户希望更加灵活地制定规则，可以使用[正则表达式][regexp]代替默认的简易匹配语法。 如果用户要使用正则表达式，则必须使用如下格式：

```none
pattern = "/" regexp "/"
```

**例如：**

* `/example.*/` 将拦截与 `example.*` 正则表达式匹配的主机。

* `@@/example.*/$important` 将取消拦截和匹配 `example.*` 的正则表达式。 请注意，此规则也包含 `important` 修饰符。

### 注释：

任何以感叹号或井号开头的行都是注释，过滤引擎将忽略它。 注释通常放在规则之上，用于描述规则。

**例如：**

```none
! 这是一条注释
# 这也是一条注释
```

### 规则修饰符

用户可以添加修饰符来更改规则的行为。 修饰符必须位于规则末尾的 `$` 字符之后，并用逗号分隔。

**例如：**

* ```none ||example.org^$important
   ```

  `||example.org^` 是匹配模式。 `$` 是分隔符，表示规则的其余部分是修饰符。 `important` 是修饰符。

* 用户可能希望在一个规则中使用多个修饰符。 在这种情况下，用逗号分隔它们：

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` 是匹配模式。 `$` 是分隔符，表明规则的其余部分是修饰符。 `client=127.0.0.1` 是 [`client`](#client) 修饰符，其值为 `127.0.0.1`，是分隔符。 最后， `dnstype=A` 是 [`dnstype`](#dnstype) 修饰符，其值为 `A`。

**注意：** 如果规则包含本文档中未列出的修饰符，整个规则**将被忽略**。 通过这种方式，当人们尝试使用未经修改的浏览器广告拦截器的过滤器列表（如 EasyList 或 EasyPrivacy）时，我们可以避免误报。

#### `客户端`

`client` 修饰符允许指定应用此规则的客户端。 识别客户端的主要方法有两种：

* 通过其 IP 地址或 CIDR 前缀。 这种方式适用于所有类型的客户端。

* 通过名称。 这种方式仅适用于用户手动添加的持久性客户端（在 AdGuard Home 中）和设备（在私人 AdGuard DNS 中）。

  **注意：** 在 AdGuard Home 中，目前不支持 ClientID，仅支持名称。 如果用户添加了一个客户端，名称为 "My Client"，ClientID 为 `my-client` ，将修饰符拼成 `$client='My Client'` ，而不是 `$client=my-client`。

语法为：

```none
$client=value1|value2|...
```

用户还可以通过在值前添加 `~` 字符来排除客户端。 在这种情况下，该规则不会应用于此客户端的 DNS 请求。

```none
$client=~value1
```

客户端名称通常包含空格或其他特殊字符，这也是用户应该将名称括在引号中的原因。 单、双 ASCII 引号都可以。 使用反斜杠 (`\`) 来转义引号 (`"` 和 `'`) ，逗号 (`,`) 和竖线 (`|`) 。

**注意：** 排除客户端时，用户**必须**将 `~` 放在引号外。

**例如：**

* `@@||*^$client=127.0.0.1`: 取消拦截本地主机的所有内容。

* `||example.org^$client='Frank\'s laptop'`：仅对名为 `Frank's laptop` 的客户端拦截`example.org`。 请注意，名称中的引号 (`'`) 必须转义。

* `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: 除了名为 `Mary's, John's, and Boris's laptops`的客户端，为其他所有人拦截 `example.org` 。 请注意，逗号 (`,`) 也必须转义。

* `||example.org^$client=~Mom|~Dad|Kids`：只对 `Kids` 拦截 `example.org` ，但不对 `Mom` 和 `Dad` 拦截它。 此示例演示如何在一个规则中指定多个客户端。

* `||example.org^$client=192.168.0.0/24`：为 IP 地址在 `192.168.0.0` 到 `192.168.0.255` 范围内的所有客户端拦截 `example.org`。

#### `denyallow`

您可以使用 `denyallow` 修饰符从拦截规则中排除域。 若要将多个域添加到一个规则，请使用 `|` 字符作为分隔符。

语法为：

```none
$denyallow=domain1|domain2|...
```

当屏蔽规则覆盖了太多的域名时，该修饰符可避免创建不必要的额外规则。 您可能希望拦截除几个 TLD 域之外的所有内容。 用户可以使用标准方法，即以下规则：

```none
! 屏蔽一切。
/.*/

! 取消对一些 TLD 的屏蔽。
@@||com^
@@||net^
```

这种方法的问题在于，通过这种方式，用户也会取消拦截位于这些 TLD 上的跟踪域名（即 `google-analytics.com`）。 下面是用 `denyallow` 来解决此问题的方法:

```none
*$denyallow=com|net
```

**例如：**

* `*$denyallow=com|net`: 除了 `*.com` 和 `*.net` 以外拦截所有内容。

* `@@*$denyallow=com|net`：除了 `*.com` 和 `*.net` 以外取消拦截所有内容

* `||example.org^$denyallow=sub.example.org`。 拦截 `example.org` 和 `*.example.org` ，但不拦截 `sub.example.org`。

#### `dnstype`

`dnstype` 修饰符允许指定将触发此规则的 DNS 请求或响应类型。

语法为：

```none
$dnstype=value1|value2|...
$dnstype=~value1|~value2|~...
```

类型的名称不区分大小写，但会根据一组实际的 DNS 资源记录（RR）类型进行验证。

不要将排除规则与包含规则结合使用。 例如：

```none
$dnstype=~value1|value2
```

相当于：

```none
$dnstype=value2
```

**例如：**

* `||example.org^$dnstype= AAAA`：拦截对 `example.org`的 IPv6 地址的 DNS 查询。

* `||example.org^$dnstype=~A|~CNAME`：只允许 `A` 和 `CNAME` 对 `example.org` 进行 DNS 查询 ，拦截其余部分。

**注意：** 在 **v0.108.0 版本之前**，AdGuard Home 会使用请求的类型来过滤响应记录，而不是响应记录本身的类型。  这造成了一些问题，因为这意味着用户不能编写规则，允许在 `A` 和 `AAAA` 请求的响应中出现某些 `CNAME` 记录。 在 **v0.108.0** 版本中，该行为已更改，因此现在如下所示：

```none
||canon.example.com^$dnstype=~CNAME
```

允许用户避免过滤以下响应：

```none
ANSWERS:
->  example.com
    canonical name = canon.example.com.
    ttl = 60
->  canon.example.com
    internet address = 1.2.3.4
    ttl = 60
```

#### `dnsrewrite`

`dnsrewrite` 响应修饰符允许替换匹配主机的 DNS 请求的响应内容。 请注意，AdGuard Home 中的这个修饰符对所有规则都有效，但在私人 AdGuard DNS 中，只对自定义规则有效。

**具有 `dnsrewrite` 响应修饰符的规则比 AdGuard Home 中的其他规则具有更高的优先级。**

简写语法是：

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=example.net
$dnsrewrite=REFUSED
```

The keywords MUST be in all caps (e.g. `NOERROR`). Keyword rewrites take precedence over the other and will result in an empty response with an appropriate response code.

The full syntax is of the form `RCODE;RRTYPE;VALUE`:

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;example.net
$dnsrewrite=REFUSED;;
```

The `$dnsrewrite` modifier with the `NOERROR` response code may also has empty `RRTYPE` and `VALUE` fields.

The `CNAME` one is special because AdGuard Home will resolve the host and add its info to the response. That is, if `example.net` has IP `1.2.3.4`, and the user has this in their filter rules:

```none
||example.com^$dnsrewrite=example.net
! Or:
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

then the response will be something like:

```sh
$ nslookup example.com my.adguard.local
```

```none
Server:     my.adguard.local
Address:    127.0.0.1#53

Non-authoritative answer:
example.com canonical name = example.net.
Name:   example.net
Address: 1.2.3.4
```

Next, the `CNAME` rewrite. After that, all other records' values are summed as one response, so this:

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

will result in a response with two `A` records.

Currently supported RR types with examples:

* `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` adds a `PTR`record for reverse DNS. Reverse DNS requests for `1.2.3.4` to the DNS server will result in `example.net`.

  **NOTE:** the IP MUST be in reverse order. See [RFC 1035][rfc1035].

* `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4` adds an `A` record with the value `1.2.3.4`.

* `||example.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` adds an `AAAA` record with the value `abcd::1234`.

* `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` adds a `CNAME` record. See explanation above.

* `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` adds an `HTTPS` record. Only a subset of parameter values is supported: values must be `contiguous` and, where a `value-list` is `expected`, only one value is currently supported:

   ```none
   ipv4hint=127.0.0.1             // Supported.
   ipv4hint="127.0.0.1"           // Unsupported.
   ipv4hint=127.0.0.1,127.0.0.2   // Unsupported.
   ipv4hint="127.0.0.1,127.0.0.2" // Unsupported.
   ```

  This will be changed in the future.

* `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail` adds an `MX` record with precedence value `32` and exchange value `example.mail`.

* `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3` adds a `SVCB` value. See the `HTTPS` example above.

* `||example.com^$dnsrewrite=NOERROR;TXT;hello_world` adds a `TXT` record with the value `hello_world`.

* `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` adds an `SRV` record with priority value `10`, weight value `60`, port`8080`, and target value `example.com`.

* `||example.com^$dnsrewrite=NXDOMAIN;;` responds with an `NXDOMAIN` code.

* `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` responds with an empty `NOERROR` answers for all `AAAA` requests except the ones for `example.org`.

Exception rules remove one or all rules:

* `@@||example.com^$dnsrewrite` removes all DNS rewrite rules.

* `@@||example.com^$dnsrewrite=1.2.3.4` removes the DNS rewrite rule that adds an `A` record with the value `1.2.3.4`.

#### `important`

The `important` modifier applied to a rule increases its priority over any other rule without the modifier. Even over basic exception rules.

**例如：**

* In this example:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` will block all requests to `*.example.org` despite the exception rule.

* In this example:

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  the exception rule also has the `important` modifier, so it will work.

#### `badfilter`

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**例如：**

* `||example.com$badfilter` disables `||example.com`.

* `@@||example.org^$badfilter` disables `@@||example.org^`.

  **NOTE:** The `badfilter` modifier currently doesn't work with `/etc/hosts`-style rules. `127.0.0.1 example.org$badfilter` will **not** disable the original `127.0.0.1 example.org` rule.

#### `ctag`

**The `ctag` modifier can only be used in AdGuard Home.**

It allows to block domains only for specific types of DNS client tags. You can assign tags to clients in the AdGuard Home UI. In the future, we plan to assign tags automatically by analyzing the behavior of each client.

语法为：

```none
$ctag=value1|value2|...
```

If one of client's tags matches the `ctag` values, this rule applies to the client. The syntax for exclusion is:

```none
$ctag=~value1|~value2|...
```

If one of client's tags matches the exclusion `ctag` values, this rule doesn't apply to the client.

**例如：**

* `||example.org^$ctag=device_pc|device_phone`: block `example.org` for clients tagged as `device_pc` or `device_phone`.

* `||example.org^$ctag=~device_phone`: block `example.org` for all clients except those tagged as `device_phone`.

The list of allowed tags:

* By device type:

  * `device_audio`: audio devices.
  * `device_camera`: cameras.
  * `device_gameconsole`: game consoles.
  * `device_laptop`: laptops.
  * `device_nas`: NAS (Network-attached Storages).
  * `device_pc`: PCs.
  * `device_phone`: phones.
  * `device_printer`: printers.
  * `device_securityalarm`: security alarms.
  * `device_tablet`: tablets.
  * `device_tv`: TVs.
  * `device_other`: other devices.

* By operating system:

  * `os_android`: Android.
  * `os_ios`: iOS.
  * `os_linux`: Linux.
  * `os_macos`: macOS.
  * `os_windows`: Windows.
  * `os_other`: other OSes.

* By user group:

  * `user_admin`: administrators.
  * `user_regular`: regular users.
  * `user_child`: children.


## `/etc/hosts`-Style Syntax {#etc-hosts-syntax}

For each host a single line should be present with the following information:

```none
IP_address canonical_hostname [aliases...]
```

Fields of the entries are separated by any number of space or tab characters. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**例如：**

```none
# This is a comment
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # this is also a comment
```

In AdGuard Home, the IP addresses are used to respond to DNS queries for these domains. In Private AdGuard DNS, these addresses are simply blocked.


## Domains-Only Syntax

A simple list of domain names, one name per line.

**例如：**

```none
# This is a comment
example.com
example.org
example.net # this is also a comment
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style](#adblock-style-syntax) rule.

## Hostlists Compiler

If you are maintaining a blocklist and use different sources in it, [Hostlists compiler][hlc] may be useful to you. It is a simple tool that makes it easier to compile a hosts blocklist compatible with AdGuard Home, Private AdGuard DNS or any other AdGuard product with DNS filtering.

What it's capable of:

1. Compile a single blocklist from multiple sources.

2. Exclude the rules you don't need.

3. Cleanup the resulting list: deduplicate, remove invalid rules, and compress the list.

[hlc]: https://github.com/AdguardTeam/HostlistCompiler

[hlc]: https://github.com/AdguardTeam/HostlistCompiler
[sdn]: https://github.com/AdguardTeam/AdGuardSDNSFilter

[adb]: https://adguard.com/kb/general/ad-filtering/create-own-filters/
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
