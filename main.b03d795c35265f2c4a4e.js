(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(n,e,t){"use strict";t.r(e);t("JBxO"),t("FdtR");var a=function(n){return new Promise((function(e){setTimeout((function(){e(n)}),n)}))},o=function(n){return console.log("Resolved after "+n+"ms")};a(2e3).then(o),a(1e3).then(o),a(1500).then(o);t("lmye"),t("D/wG"),t("wCa+");var i=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(n,e){var t=n.map((function(n){return n.name===e?Object.assign({},n,{active:!n.active}):n}));return Promise.resolve(t)},r=function(n){return console.table(n)};c(i,"Mango"),c(i,"Lux"),c(i,"Mango").then(r),c(i,"Lux").then(r);var u=function(n){return new Promise((function(e,t){var a,o,i=(a=200,o=500,Math.floor(Math.random()*(o-a+1)+a));setTimeout((function(){var a=n.id;Math.random()>.3?e({id:a,delay:i}):t(a)}),i)}))},s=function(n){var e=n.id,t=n.delay;console.log("Transaction "+e+" processed in "+t+" ms")},m=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};u({id:70,amount:150}).then(s).catch(m),u({id:71,amount:230}).then(s).catch(m),u({id:72,amount:75}).then(s).catch(m),u({id:73,amount:100}).then(s).catch(m)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.b03d795c35265f2c4a4e.js.map