export const INIT_SETUP = "INIT_SETUP";
export const RECEIVE_NEW_CURRENCY = "RECEIVE_NEW_CURRENCY";
export const RECEIVE_NEW_VALUE = "RECEIVE_NEW_VALUE";

export const initState = {
  availableCurrencies: [],
  currencies: [
    { code: "hkd", value: 1 },
    { code: "cad", value: 0 },
  ],
  valueInHKD: 1,
  rates: [],
};

export const latestRatesURL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/hkd.json";
export const availableCurrenciesURL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

export const currenciesEmoji = [
  { code: "aed", emoji: "🇦🇪" },
  { code: "afn", emoji: "🇦🇫" },
  { code: "all", emoji: "🇦🇱" },
  { code: "amd", emoji: "🇦🇲" },
  { code: "ang", emoji: "🇨🇼" },
  { code: "aoa", emoji: "🇦🇴" },
  { code: "ars", emoji: "🇦🇷" },
  { code: "aud", emoji: "🇦🇺" },
  { code: "awg", emoji: "🇦🇼" },
  { code: "azn", emoji: "🇦🇿" },
  { code: "bam", emoji: "🇧🇦" },
  { code: "bdt", emoji: "🇧🇩" },
  { code: "bgn", emoji: "🇧🇬" },
  { code: "bhd", emoji: "🇧🇭" },
  { code: "bif", emoji: "🇧🇮" },
  { code: "bnd", emoji: "🇧🇳" },
  { code: "bbd", emoji: "🇧🇧" },
  { code: "bsd", emoji: "🇧🇸" },
  { code: "bmd", emoji: "🇧🇲" },
  { code: "bob", emoji: "🇧🇴" },
  { code: "brl", emoji: "🇧🇷" },
  { code: "btn", emoji: "🇧🇹" },
  { code: "bwp", emoji: "🇧🇼" },
  { code: "byr", emoji: "🇧🇾" },
  { code: "bzd", emoji: "🇧🇿" },
  { code: "cad", emoji: "🇨🇦" },
  { code: "cdf", emoji: "🇨🇩" },
  { code: "chf", emoji: "🇨🇭" },
  { code: "clp", emoji: "🇨🇱" },
  { code: "cuc", emoji: "🇨🇺" },
  { code: "cny", emoji: "🇨🇳" },
  { code: "cop", emoji: "🇨🇴" },
  { code: "cup", emoji: "🇨🇺" },
  { code: "crc", emoji: "🇨🇷" },
  { code: "cve", emoji: "🇨🇻" },
  { code: "czk", emoji: "🇨🇿" },
  { code: "djf", emoji: "🇩🇯" },
  { code: "dkk", emoji: "🇩🇰" },
  { code: "dop", emoji: "🇩🇴" },
  { code: "dzd", emoji: "🇩🇿" },
  { code: "eek", emoji: "🇪🇪" },
  { code: "egp", emoji: "🇪🇬" },
  { code: "ern", emoji: "🇪🇷" },
  { code: "etb", emoji: "🇪🇹" },
  { code: "eur", emoji: "🇪🇺" },
  { code: "fkp", emoji: "🇫🇰" },
  { code: "fjd", emoji: "🇫🇯" },
  { code: "gbp", emoji: "🇬🇧" },
  { code: "gel", emoji: "🇬🇪" },
  { code: "ghs", emoji: "🇬🇭" },
  { code: "gip", emoji: "🇬🇮" },
  { code: "gnf", emoji: "🇬🇳" },
  { code: "gtq", emoji: "🇬🇹" },
  { code: "gyd", emoji: "🇬🇾" },
  { code: "gmd", emoji: "🇬🇲" },
  { code: "ggp", emoji: "🇬🇬" },
  { code: "hkd", emoji: "🇭🇰" },
  { code: "hnl", emoji: "🇭🇳" },
  { code: "hrk", emoji: "🇭🇷" },
  { code: "huf", emoji: "🇭🇺" },
  { code: "htg", emoji: "🇭🇹" },
  { code: "idr", emoji: "🇮🇩" },
  { code: "ils", emoji: "🇮🇱" },
  { code: "imp", emoji: "🇮🇲" },
  { code: "inr", emoji: "🇮🇳" },
  { code: "iqd", emoji: "🇮🇶" },
  { code: "irr", emoji: "🇮🇷" },
  { code: "isk", emoji: "🇮🇸" },
  { code: "jmd", emoji: "🇯🇲" },
  { code: "jod", emoji: "🇯🇴" },
  { code: "jpy", emoji: "🇯🇵" },
  { code: "kgs", emoji: "🇰🇬" },
  { code: "khr", emoji: "🇰🇭" },
  { code: "kmf", emoji: "🇰🇲" },
  { code: "kpw", emoji: "🇰🇵" },
  { code: "krw", emoji: "🇰🇷" },
  { code: "kwd", emoji: "🇰🇼" },
  { code: "kyd", emoji: "🇰🇾" },
  { code: "kzt", emoji: "🇰🇿" },
  { code: "kes", emoji: "🇰🇪" },
  { code: "lak", emoji: "🇱🇦" },
  { code: "lbp", emoji: "🇱🇧" },
  { code: "lkr", emoji: "🇱🇰" },
  { code: "lrd", emoji: "🇱🇷" },
  { code: "ltl", emoji: "🇱🇹" },
  { code: "lsl", emoji: "🇱🇸" },
  { code: "lvl", emoji: "🇱🇻" },
  { code: "lyd", emoji: "🇱🇾" },
  { code: "mad", emoji: "🇲🇦" },
  { code: "mdl", emoji: "🇲🇩" },
  { code: "mga", emoji: "🇲🇬" },
  { code: "mkd", emoji: "🇲🇰" },
  { code: "mmk", emoji: "🇲🇲" },
  { code: "mop", emoji: "🇲🇴" },
  { code: "mur", emoji: "🇲🇺" },
  { code: "mwk", emoji: "🇲🇼" },
  { code: "mvr", emoji: "🇲🇻" },
  { code: "mxn", emoji: "🇲🇽" },
  { code: "myr", emoji: "🇲🇾" },
  { code: "mzn", emoji: "🇲🇿" },
  { code: "nad", emoji: "🇳🇦" },
  { code: "ngn", emoji: "🇳🇬" },
  { code: "nio", emoji: "🇳🇮" },
  { code: "nok", emoji: "🇳🇴" },
  { code: "npr", emoji: "🇳🇵" },
  { code: "nzd", emoji: "🇳🇿" },
  { code: "omr", emoji: "🇴🇲" },
  { code: "pab", emoji: "🇵🇦" },
  { code: "pen", emoji: "🇵🇪" },
  { code: "php", emoji: "🇵🇭" },
  { code: "pkr", emoji: "🇵🇰" },
  { code: "pgk", emoji: "🇵🇬" },
  { code: "pln", emoji: "🇵🇱" },
  { code: "pyg", emoji: "🇵🇾" },
  { code: "qar", emoji: "🇶🇦" },
  { code: "ron", emoji: "🇷🇴" },
  { code: "rsd", emoji: "🇷🇸" },
  { code: "rub", emoji: "🇷🇺" },
  { code: "rwf", emoji: "🇷🇼" },
  { code: "sar", emoji: "🇸🇦" },
  { code: "scr", emoji: "🇸🇨" },
  { code: "wst", emoji: "🇼🇸" },
  { code: "sbd", emoji: "🇸🇧" },
  { code: "svc", emoji: "🇸🇻" },
  { code: "sdg", emoji: "🇸🇩" },
  { code: "srd", emoji: "🇸🇷" },
  { code: "sek", emoji: "🇸🇪" },
  { code: "sgd", emoji: "🇸🇬" },
  { code: "sll", emoji: "🇸🇱" },
  { code: "sos", emoji: "🇸🇴" },
  { code: "ssp", emoji: "🇸🇸" },
  { code: "stn", emoji: "🇸🇹" },
  { code: "shp", emoji: "🇸🇭" },
  { code: "syp", emoji: "🇸🇾" },
  { code: "szl", emoji: "🇸🇿" },
  { code: "thb", emoji: "🇹🇭" },
  { code: "tjs", emoji: "🇹🇭" },
  { code: "tnd", emoji: "🇹🇳" },
  { code: "top", emoji: "🇹🇴" },
  { code: "try", emoji: "🇹🇷" },
  { code: "tmt", emoji: "🇹🇲" },
  { code: "ttd", emoji: "🇹🇹" },
  { code: "twd", emoji: "🇹🇼" },
  { code: "jep", emoji: "🇯🇪" },
  { code: "tzs", emoji: "🇹🇿" },
  { code: "uah", emoji: "🇺🇦" },
  { code: "ugx", emoji: "🇺🇬" },
  { code: "mru", emoji: "🇲🇷" },
  { code: "mnt", emoji: "🇲🇳" },
  { code: "usd", emoji: "🇺🇸" },
  { code: "uyu", emoji: "🇺🇾" },
  { code: "uzs", emoji: "🇺🇿" },
  { code: "vef", emoji: "🇻🇪" },
  { code: "vnd", emoji: "🇻🇳" },
  { code: "vuv", emoji: "🇻🇺" },
  { code: "xaf", emoji: "🇨🇫" },
  { code: "xcd", emoji: "🇦🇬" },
  { code: "xof", emoji: "🇨🇮" },
  { code: "xpf", emoji: "🇵🇫" },
  { code: "yer", emoji: "🇾🇪" },
  { code: "zar", emoji: "🇿🇦" },
  { code: "zmk", emoji: "🇿🇲" },
  { code: "zwl", emoji: "🇿🇼" },
];
