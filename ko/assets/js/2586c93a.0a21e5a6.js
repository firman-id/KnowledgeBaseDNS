"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[643],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3445:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),l=(n(7294),n(4137)),a=["components"],i={title:"How to flush DNS cache",sidebar_position:1},s="How to flush DNS cache",c={unversionedId:"public-dns/solving-problems/how-to-flush-dns-cache",id:"public-dns/solving-problems/how-to-flush-dns-cache",title:"How to flush DNS cache",description:"What is DNS cache",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/public-dns/solving-problems/how-to-flush-dns-cache.md",sourceDirName:"public-dns/solving-problems",slug:"/public-dns/solving-problems/how-to-flush-dns-cache",permalink:"/KnowledgeBaseDNS/ko/public-dns/solving-problems/how-to-flush-dns-cache",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/public-dns/solving-problems/how-to-flush-dns-cache.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to flush DNS cache",sidebar_position:1},sidebar:"sidebar",previous:{title:"\uac1c\uc694",permalink:"/KnowledgeBaseDNS/ko/public-dns/overview"},next:{title:"\uac1c\uc694",permalink:"/KnowledgeBaseDNS/ko/private-dns/overview"}},u={},p=[{value:"What is DNS cache",id:"what-is-dns-cache",level:2},{value:"\uce90\uc2dc\ub97c \uc9c0\uc6cc\uc57c \ud558\ub294 \uacbd\uc6b0",id:"\uce90\uc2dc\ub97c-\uc9c0\uc6cc\uc57c-\ud558\ub294-\uacbd\uc6b0",level:2},{value:"\ub2e4\ub978 OS\uc5d0\uc11c DNS \uce90\uc2dc\ub97c \uc0ad\uc81c\ud558\ub294 \ubc29\ubc95",id:"\ub2e4\ub978-os\uc5d0\uc11c-dns-\uce90\uc2dc\ub97c-\uc0ad\uc81c\ud558\ub294-\ubc29\ubc95",level:2},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"Systemd Resolved",id:"systemd-resolved",level:4},{value:"DNSMasq",id:"dnsmasq",level:4},{value:"Nscd",id:"nscd",level:4},{value:"BIND",id:"bind",level:4},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-flush-dns-cache"},"How to flush DNS cache"),(0,l.kt)("h2",{id:"what-is-dns-cache"},"What is DNS cache"),(0,l.kt)("p",null,"DNS \uce90\uc2dc\ub294 \ubc29\ubb38 \uc0ac\uc774\ud2b8\uc758 IP \uc8fc\uc18c\ub97c \ub85c\uceec \ucef4\ud4e8\ud130\uc5d0 \uc800\uc7a5\ud558\uc5ec \ub2e4\uc74c\uc5d0 \uc811\uc18d\ud560 \ub54c, \ub354 \ube68\ub9ac \ub85c\ub4dc\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uae34 DNS \uc870\ud68c\ub97c \uc218\ud589\ud558\ub294 \ub300\uc2e0 \uc2dc\uc2a4\ud15c\uc740 \uc784\uc2dc DNS \uce90\uc2dc\uc758 DNS \ub808\ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucffc\ub9ac\uc5d0 \uc751\ub2f5\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"DNS \uce90\uc2dc\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc774\ub978\ubc14 ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records"},"\ub9ac\uc18c\uc2a4 \ub808\ucf54\ub4dc(RRs)"),"\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ub9ac\uc18c\uc2a4 \ub370\uc774\ud130(\ub610\ub294 rdata)"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ub808\ucf54\ub4dc \uc720\ud615"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ub808\ucf54\ub4dc \uc774\ub984"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TTL(\uc218\uba85)"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Class"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ub9ac\uc18c\uc2a4 \ub370\uc774\ud130 \uae38\uc774"))),(0,l.kt)("h2",{id:"\uce90\uc2dc\ub97c-\uc9c0\uc6cc\uc57c-\ud558\ub294-\uacbd\uc6b0"},"\uce90\uc2dc\ub97c \uc9c0\uc6cc\uc57c \ud558\ub294 \uacbd\uc6b0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc815\uae30\uc801\uc73c\ub85c 404 \uc624\ub958\uac00 \ubc1c\uc0dd\ub420 \ub54c.")," \uc608\ub97c \ub4e4\uc5b4, \uc6f9\uc0ac\uc774\ud2b8\uac00 \ub2e4\ub978 \uc11c\ubc84\ub85c \uc774\uc804\ub418\uace0 \ud574\ub2f9 IP \uc8fc\uc18c\uac00 \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c. \ube0c\ub77c\uc6b0\uc800\uac00 \uc0c8 IP \uc8fc\uc18c\uc5d0\uc11c \uc6f9 \uc0ac\uc774\ud2b8\ub97c \uc5f4\ub3c4\ub85d \ud558\ub824\uba74 DNS \uce90\uc2dc\uc5d0\uc11c \uce90\uc2dc\ub41c IP\ub97c \uc81c\uac70\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uac1c\uc778 \uc815\ubcf4\ub97c \uc548\uc804\ud558\uac8c \uac1c\uc120\ud558\uace0 \uc2f6\uc744 \ub54c")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\ub2f9\uc2e0\uc740 \ud574\ucee4\uc758 \uacf5\uaca9\uacfc \ubc14\uc774\ub7ec\uc2a4\ub85c\ubd80\ud130 \uc548\uc804\ud558\uae30\ub97c \uc6d0\ud560 \uac83\uc785\ub2c8\ub2e4.")," DNS \uce90\uc2dc\uac00 \uc190\uc0c1\ub418\uba74 \ube0c\ub77c\uc6b0\uc800\uac00 \uacf5\uaca9\uc790\uac00 \ucef4\ud4e8\ud130\uc758 DNS \ub808\ucf54\ub4dc\uc5d0 \uc0bd\uc785\ud55c \uc545\uc131 \uc6f9\uc0ac\uc774\ud2b8\uc758 IP \uc8fc\uc18c\ub85c \ub9ac\ub514\ub809\uc158 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ub2e4\ub978-os\uc5d0\uc11c-dns-\uce90\uc2dc\ub97c-\uc0ad\uc81c\ud558\ub294-\ubc29\ubc95"},"\ub2e4\ub978 OS\uc5d0\uc11c DNS \uce90\uc2dc\ub97c \uc0ad\uc81c\ud558\ub294 \ubc29\ubc95"),(0,l.kt)("h3",{id:"macos"},"macOS"),(0,l.kt)("p",null,"macOS\uc5d0\uc11c DNS \uce90\uc2dc\ub97c \uc9c0\uc6b0\ub824\uba74 ",(0,l.kt)("em",{parentName:"p"},"\ud130\ubbf8\ub110\uc744 ")," \uc5f4\uace0 (\uc2a4\ud3ec\ud2b8\ub77c\uc774\ud2b8 \uac80\uc0c9\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uba85\ub839 + \uc2a4\ud398\uc774\uc2a4 \ubc14\ub97c \ub204\ub974\uace0 \ud130\ubbf8\ub110 \uc785\ub825\ud558\uc2ed\uc2dc\uc624) \ub2e4\uc74c \uba85\ub839\uc744 \uc785\ub825\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo killall -HUP mDNSResponder")),(0,l.kt)("p",null,"macOS Big Sur 11.2.0 \ubc0f macOS Monterey 12.0.0\uc5d0\uc11c\ub294 \ub2e4\uc74c \uba85\ub839\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo dscacheutil -flushcache")),(0,l.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c \uad00\ub9ac\uc790 \uc554\ud638\ub97c \uc785\ub825\ud558\uc5ec \ud504\ub85c\uc138\uc2a4\ub97c \uc644\ub8cc\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("p",null,"Windows \uc7a5\uce58\uc5d0\uc11c DNS \uce90\uc2dc\ub97c \uc0ad\uc81c\ud558\ub824\uba74 \ub2e4\uc74c\uc744 \uc218\ud589\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)("p",null,"\uba85\ub839 \ud504\ub86c\ud504\ud2b8\ub97c \uad00\ub9ac\uc790 \uad8c\ud55c\uc73c\ub85c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc2dc\uc791 \uba54\ub274\uc5d0\uc11c ",(0,l.kt)("em",{parentName:"p"},"\uba85\ub839 \ud504\ub86c\ud504\ud2b8")," \ub610\ub294 ",(0,l.kt)("em",{parentName:"p"},"cmd"),"\ub97c \uc785\ub825\ud558\uc5ec \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c ",(0,l.kt)("inlineCode",{parentName:"p"},"ipconfig/flushdns")," \ub97c \uc785\ub825\ud558\uace0 Enter \ud0a4\ub97c \ub204\ub985\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"DNS \ud074\ub77c\uc774\uc5b8\ud2b8 \uce90\uc2dc\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")," \ub77c\ub294 \uc904\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ub05d!"),(0,l.kt)("h3",{id:"linux"},"Linux"),(0,l.kt)("p",null,"Linux\uc5d0\ub294 OS\uc5d0\uc11c Systemd Resolved, DNSMasq, BIND \ub610\ub294 Nscd\uc640 \uac19\uc740 \uce90\uc2f1 \uc11c\ube44\uc2a4\uac00 \uc124\uce58\ub418\uc5b4 \uc2e4\ud589\ub418\uc9c0 \uc54a\ub294 \ud55c DNS \uce90\uc2f1\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. DNS \uce90\uc2dc\ub97c \uc9c0\uc6b0\ub294 \ud504\ub85c\uc138\uc2a4\ub294 Linux \ubc30\ud3ec\uc640 \uc0ac\uc6a9\ub41c cache \uc11c\ube44\uc2a4\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uac01 \ubc30\ud3ec\ud310\uc5d0\uc11c \ud130\ubbf8\ub110 \ucc3d\uc744 \uc2e4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4. \ud0a4\ubcf4\ub4dc\uc5d0\uc11c Ctrl+Alt+T\ub97c \ub204\ub974\uace0 \ud574\ub2f9 \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec Linux \uc2dc\uc2a4\ud15c\uc774 \uc2e4\ud589 \uc911\uc778 \uc11c\ube44\uc2a4\uc758 DNS \uce90\uc2dc\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc0ac\uc6a9 \uc911\uc778 DNS \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \ucc3e\uc73c\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo lsof -i :53 -S"),"\uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"systemd-resolved"},"Systemd Resolved"),(0,l.kt)("p",null,"To clear the ",(0,l.kt)("strong",{parentName:"p"},"Systemd Resolved")," DNS cache, type:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo systemd-resolve --flush-caches")),(0,l.kt)("p",null,"On success, the command doesn\u2019t return any message."),(0,l.kt)("h4",{id:"dnsmasq"},"DNSMasq"),(0,l.kt)("p",null,"To clear the ",(0,l.kt)("strong",{parentName:"p"},"DNSMasq")," cache, you need to restart it:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo service dnsmasq restart")),(0,l.kt)("h4",{id:"nscd"},"Nscd"),(0,l.kt)("p",null,"To clear the ",(0,l.kt)("strong",{parentName:"p"},"Nscd")," cache, you also need to restart the service:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo service nscd restart")),(0,l.kt)("h4",{id:"bind"},"BIND"),(0,l.kt)("p",null,"To flush the ",(0,l.kt)("strong",{parentName:"p"},"BIND")," DNS cache, run the command:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rndc flush")),(0,l.kt)("p",null,"Then you will need to reload BIND:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rndc reload")),(0,l.kt)("p",null,"You will get the message that the server has been successfully reloaded."),(0,l.kt)("h3",{id:"android"},"Android"),(0,l.kt)("p",null,"The easiest way to clear your DNS cache on your Android device is to turn the Airplane mode on and off. You can enable/disable the Airplane Mode in the Quick Settings pane."),(0,l.kt)("p",null,"A hard reboot can also help flush the DNS cache for your device. In order to do that, press and hold the power button for at least 20 seconds. It will (usually) force your device to reboot manually and the DNS cache will be cleared."),(0,l.kt)("p",null,"Another option is to reset the network settings of your device in the Settings app. Open ",(0,l.kt)("em",{parentName:"p"},"Settings > System > Advanced > Reset options > Reset network settings")," and tap ",(0,l.kt)("em",{parentName:"p"},"Reset Settings")," to confirm."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: by doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.")),(0,l.kt)("h3",{id:"ios"},"iOS"),(0,l.kt)("p",null,"There are different ways to clear the DNS cache on your iPad or iPhone."),(0,l.kt)("p",null,"The simplest way is to activate the Airplane mode (for example, in the Control Center or in the Settings app) and to deactivate it again. The DNS cache will be flushed."),(0,l.kt)("p",null,"Another option is to reset the network settings of your device in the Settings app. Open ",(0,l.kt)("em",{parentName:"p"},"General"),", scroll down, find ",(0,l.kt)("em",{parentName:"p"},"Reset")," and tap ",(0,l.kt)("em",{parentName:"p"},"Reset Network Settings"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: by doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.")))}m.isMDXComponent=!0}}]);