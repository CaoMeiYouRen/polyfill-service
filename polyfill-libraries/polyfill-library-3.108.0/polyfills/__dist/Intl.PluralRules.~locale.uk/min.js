Intl.PluralRules&&"function"==typeof Intl.PluralRules.__addLocaleData&&Intl.PluralRules.__addLocaleData({data:{categories:{cardinal:["one","few","many","other"],ordinal:["few","other"]},fn:function(e,l){var a=String(e).split("."),t=a[0],n=!a[1],r=Number(a[0])==e,o=r&&a[0].slice(-1),c=r&&a[0].slice(-2),i=t.slice(-1),u=t.slice(-2);return l?3==o&&13!=c?"few":"other":n&&1==i&&11!=u?"one":n&&i>=2&&i<=4&&(u<12||u>14)?"few":n&&0==i||n&&i>=5&&i<=9||n&&u>=11&&u<=14?"many":"other"}},locale:"uk"});