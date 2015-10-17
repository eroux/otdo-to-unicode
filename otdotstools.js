var hashTibExWylie = {
	'': '',
	'k': '\u0F40', 'kh': '\u0F41', 'g': '\u0F42', 'gh': '\u0F43', 'ng': '\u0F44',
	'c': '\u0F45', 'ch': '\u0F46', 'j': '\u0F47', 'ny': '\u0F49',
	'T': '\u0F4A', 'TH': '\u0F4B', 'D': '\u0F4C', 'DH': '\u0F4D', 'N': '\u0F4E',
	't': '\u0F4F', 'th': '\u0F50', 'd': '\u0F51', 'dh': '\u0F52', 'n': '\u0F53',
	'p': '\u0F54', 'ph': '\u0F55', 'b': '\u0F56', 'bh': '\u0F57', 'm': '\u0F58',
	'ts': '\u0F59', 'tsh': '\u0F5A', 'dz': '\u0F5B', 'dzh': '\u0F5C', 'w': '\u0F5D', 'v': '\u0F5D',
	'zh': '\u0F5E', 'z': '\u0F5F', '\'': '\u0F60', 'y': '\u0F61',
	'r': '\u0F62', 'l': '\u0F63', 'sh': '\u0F64', 'SH': '\u0F65', 's': '\u0F66',
	'h': '\u0F67', '_a': '\u0F68', '^': '\u0F68',
	'_aa': '\u0F68\u0F71', '_i': '\u0F68\u0F72', '_ii': '\u0F68\u0F71\u0F72', '_I': '\u0F68\u0F80', '_u': '\u0F68\u0F74', '_uu': '\u0F68\u0F71\u0F74',
	'_.r': '\u0F68\u0F76', '_.r.r': '\u0F68\u0FB2\u0F71\u0F80', '_.l': '\u0F68\u0F78', '_.l.l': '\u0F68\u0FB3\u0F71\u0F80',
	'_e': '\u0F68\u0F7A', '_ai': '\u0F68\u0F7B','_o': '\u0F68\u0F7C', '_au': '\u0F68\u0F7D',
	'_k': '\u0F90', '_kh': '\u0F91', '_g': '\u0F92', '_gh': '\u0F93', '_ng': '\u0F94',
	'_c': '\u0F95', '_ch': '\u0F96', '_j': '\u0F97', '_ny': '\u0F99',
	'_T': '\u0F9A', '_TH': '\u0F9B', '_D': '\u0F9C', '_DH': '\u0F9D', '_N': '\u0F9E',
	'_t': '\u0F9F', '_th': '\u0FA0', '_d': '\u0FA1', '_dh': '\u0FA2', '_n': '\u0FA3',
	'_p': '\u0FA4', '_ph': '\u0FA5', '_b': '\u0FA6', '_bh': '\u0FA7', '_m': '\u0FA8',
	'_ts': '\u0FA9', '_tsh': '\u0FAA', '_dz': '\u0FAB', '_dzh': '\u0FAC', '_w': '\u0FAD', '_v': '\u0FAD',
	'_zh': '\u0FAE', '_z': '\u0FAF', '_\'': '\u0FB0', '_y': '\u0FB1',
	'_r': '\u0FB2', '_l': '\u0FB3', '_sh': '\u0FB4', '_SH': '\u0FB5', '_s': '\u0FB6',
	'_h': '\u0FB7', '__a': '\u0FB8',
	'a': '', 'aa': '\u0F71', 'i': '\u0F72', 'ii': '\u0F71\u0F72', 'I': '\u0F80', 'u': '\u0F74', 'uu': '\u0F71\u0F74',
	'.r': '\u0F76', '.r.r': '\u0FB2\u0F71\u0F80', '.l': '\u0F78', '.l.l': '\u0FB3\u0F71\u0F80',
	'e': '\u0F7A', 'ai': '\u0F7B','o': '\u0F7C', 'au': '\u0F7D',
	'~M': '\u0F83', 'M': '\u0F7E', ':': '\u0F7F',
	'_': '\u0F84', 'tsheg': '\u0F0B', '/': '\u0F0D', '//': '\u0F0E', ' ': ' ', '$': '\u0F04\u0F05' 
};// "k.sa": "\u0F69"
function otdotsToUnicode(str) {
	var result = "";
	var flag = true;// ?
	var justsawplus = false;
	str += "\0\0\0";
	var ch;
	var cha = "";// prefix
	var chb = "";// supersript
	var chc = "";// main
	var chd = "";// subscript
	var che = "";// vowel
	var chf = "";// suffixes
	function debugStatus() {
		console.log('debugging:');
		console.log('flag: '+flag);
		console.log('ch: '+ch);
		console.log('cha: '+cha);
		console.log('chb: '+chb);
		console.log('chc: '+chc);
		console.log('chd: '+chd);
		console.log('che: '+che);
		console.log('chf: '+chf);
	}
	function subscriptsToUni(chd) {
		var res = "";
		for (var i = 0; i < chd.length; i++) {
			res+=hashTibExWylie['_'+chd[i]]
		}
		return res;
	}
	for (var i = 0; i < str.length - 3; i++) {
		ch = str[i];
		switch (ch) {
			case " ":
				if (str[i + 1] == "/") {
					ch = "";
				}
				else if (!flag) {
					ch = "";
					flag = true;
				}
				break;
			case "+":
				justsawplus = true;
				break;
			case "'":
				if (str[i + 1] == "'") {
					ch = "''";
					i++;
					flag = true;
				}
				else {
					if (chc && che === "") {
						if (str[i + 1] == "a") {
							ch = "aa";
							i++;
						}
						else if (str[i + 1] == "i") {
							ch = "ii";
							i++;
						}
						else if (str[i + 1] == "u") {
							ch = "uu";
							i++;
						}
					}
					flag = false;
				}
				break;
			case "a":
				if (str[i + 1] == "a") {
					ch = (flag ? "_aa" : "aa");
					i++;
				}
				else if (str[i + 1] == "i") {
					ch = (flag ? "_ai" : "ai");
					i++;
				}
				else if (str[i + 1] == "u") {
					ch = (flag ? "_au" : "au");
					i++;
				}
				else {
					if (flag) {
						ch = "_a";
					}
					else {
						ch = "a";
					}
				}
				flag = false;
				break;
			case "A":
				ch = (flag ? "_aa" : "aa");
				i++;
				flag = false;
				break;
			case "i":
				if (str[i + 1] == "i") {
					ch = (flag ? "_ii" : "ii");
					i++;
				}
				else ch = (flag ? "_i" : "i");
				flag = false;
				break;
			case "I":
				ch = (flag ? "_I" : "I");
				flag = false;
				break;
			case "u":
				if (str[i + 1] == "u") {
					ch = (flag ? "_uu" : "uu");
					i++;
				}
				else ch = (flag ? "_u" : "u");
				flag = false;
				break;
			case "~":
				if (str[i + 1] == "M") {
					ch = "~M";
					i++;
				}
				flag = false;
				break;
			case ":":
				flag = true;
				break;
			case "U":
				ch = (flag ? "_uu" : "uu");
				i++;
				flag = false;
				break;
			case "e":
				if (str[i + 1] == "e") {
					ch = (flag ? "_ai" : "ai");
					i++;
				}
				else ch = (flag ? "_e" : "e");
				flag = false;
				break;
			case "o":
				if (str[i + 1] == "o") {
					ch = (flag ? "_au" : "au");
					i++;
				}
				else ch = (flag ? "_o" : "o");
				flag = false;
				break;
			case ".":
				if (str[i + 1] == "r") {
					if (str[i + 2] == "." && str[i + 3] == "r") {
						ch = (flag ? "_.r.r" : ".r.r");
						i = i + 3;
					}
					else {
						ch = (flag ? "_.r" : ".r");
						i++;
					}
					flag = false;
				}
				else if (str[i + 1] == "l") {
					if (str[i + 2] == "." && str[i + 3] == "l") {
						ch = (flag ? "_.l.l" : ".l.l");
						i = i + 3;
					}
					else {
						ch = (flag ? "_.l" : ".l");
						i++;
					}
					flag = false;
				}
				else {
					if (str[i + 1] == "H" || str[i + 1] == "h") {
						ch = ":";
						i++;
					}
					else if (str[i + 1] == "g") {
						ch = ".g";
						i++;
					}
					else if (str[i + 1] == "t") {
						if (str[i + 2] == "h") {
							ch = "TH";
							i += 2;
						}
						else {
							ch = "T";
							i++;
						}
					}
					else if (str[i + 1] == "d") {
						if (str[i + 2] == "h") {
							ch = "DH";
							i += 2;
						}
						else {
							ch = "D";
							i++;
						}
					}
					else if (str[i + 1] == "n") {
						ch = "N";
						i++;
					}
					else if (str[i + 1] == "m") {
						ch = "M";
						i++;
					}
					else if (str[i + 1] == "c") {
						ch = "sh";
						i++;
					}
					else if (str[i + 1] == "s") {
						ch = "SH";
						i++;
					}
					else if (str[i + 1] == "y") {
						ch = "";
						cha = chc;
					}
					flag = false;
				}
				break;
			case "n":
				if (str[i + 1] == "g") {
					ch = "ng";
					i++;
				}
				else if (str[i + 1] == "y") {
					ch = "ny";
					i++;
				}
				flag = false;
				break;
			case "k":
				if (str[i + 1] == "H" || str[i + 1] == "h") {
					ch = "kh";
					i++;
				}
				flag = false;
				break;
			case "g":
				if (str[i + 1] == "H" || str[i + 1] == "h") {
					ch = "gh";
					i++;
				}
				flag = false;
				break;
			case "c":
				if (str[i + 1] == "H" || str[i + 1] == "h") {
					ch = "ch";
					i++;
				}
				flag = false;
				break;
			case "j":
				flag = false;
				break;
			case "T":
				if (str[i + 1] == "H" || str[i + 1] == "h") {
					ch = "TH";
					i++;
				}
				flag = false;
				break;
			case "D":
				if (str[i + 1] == "H" || str[i + 1] == "h") {
					ch = "DH";
					i++;
				}
				flag = false;
				break;
			case "t":
				if (str[i + 1] == "H" || str[i + 1] == "h") {
					ch = "th";
					i++;
				}
				else if (str[i + 1] == "s") {
					if (str[i + 2] == "h") {
						ch = "tsh";
						i += 2;
					}
					else {
						ch = "ts";
						i++;
					}
				}
				flag = false;
				break;
			case "d":
				if (str[i + 1] == "H" || str[i + 1] == "h") {
					ch = "dh";
					i++;
				}
				else if (str[i + 1] == "z") {
					if (str[i + 2] == "h") {
						ch = "dzh";
						i += 2;
					}
					else {
						ch = "dz";
						i++;
					}
				}
				flag = false;
				break;
			case "p":
				if (str[i + 1] == "H" || str[i + 1] == "h") {
					ch = "ph";
					i++;
				}
				flag = false;
				break;
			case "b":
				if (str[i + 1] == "H" || str[i + 1] == "h") {
					ch = "bh";
					i++;
				}
				flag = false;
				break;
			case "z":
				if (str[i + 1] == "H" || str[i + 1] == "h") {
					ch = "zh";
					i++;
				}
				flag = false;
				break;
			case "s":
				if (str[i + 1] == "H" || str[i + 1] == "h") {
					ch = "sh";
					i++;
				}
				flag = false;
				break;
			case "S":
				ch = "SH";
				if (str[i + 1] == "H" || str[i + 1] == "h") {
					i++;
				}
				flag = false;
				break;
			case "H":
				ch = ":";
				break;
			case "/":
				if (str[i + 1] == "/") {
					ch = "//";
					i++;
				}
				break;
			case "$":
				flag = true;
				break;
			default:
				if (typeof hashTibExWylie[ch] !== 'undefined') {
					flag = false;
				}
				else {
					flag = true;
				}
				break;
		}
		if (justsawplus) {
			if (str[i + 1]) {
				if (chf !== "") {
					chf = chf+hashTibExWylie['_'+str[i+1]];
				}
				else {
					chd = chd+str[i+1];
				}
				i++;
			}
			justsawplus = false;
		}
		else if (flag) {
			if (chc) {
				result += hashTibExWylie[cha] + hashTibExWylie[chb] + hashTibExWylie[(chb === "" ? "" : "_")+chc] +
				          subscriptsToUni(chd) + hashTibExWylie[che] + chf + "་";
				cha = chb = chc = chd = che = chf = "";
			}
			else {
				result += (typeof hashTibExWylie[ch] !== 'undefined' ? hashTibExWylie[ch] : ch);
			}
		}
		else {
			if (che === "") {
				if (ch.charAt(0) == "_") {
					chc = "_a";
					che = ch.slice(1);
				}
				else if (ch == "a" || ch == "aa" || (hashTibExWylie[ch] >= "\u0F70" && hashTibExWylie[ch] <= "\u0F81")) {
					if (chf === "") {
						che = ch;
					}
					else {
						chf += hashTibExWylie[ch];
					}
				}
				else if (chc === "") {
					chc = ch;
				}
				else if (chc == "g" || chc == "d" || chc == "b" || chc == "m" || chc == "'") {
					if (ch == "w" || ch == "v" || ch == "y" || ch == "r" || (ch == "l" && chd == "")) {
						chd = ch;
					}
					else if (chd == "r" || chd == "l") {
						cha = chc;
						chb = chd;
						chc = ch;
						chd = "";
					}
					else {
						cha = chc;
						chc = ch;
					}
				}
				else if ((ch == "v" || ch == "w") || (chd == "" && (ch == "y" || ch == "r" || ch == "l" || ch == "'"))) {
					chd += ch;
				}
				else if (chc == "r" || chc == "l" || chc == "s") {
					chb = chc;
					chc = ch;
				}
				else if (chc !== "") {
					chb = chc;
					chc = ch;
				}
				else {
					console.error("not supported character: "+ch);
				}
			}
			else {
				chf += (typeof hashTibExWylie[ch] !== 'undefined' ? hashTibExWylie[ch] : ch);
			}
		}
		//debugStatus();
	}
	if (!flag) {
		if (chc) {
			result += hashTibExWylie[cha] + hashTibExWylie[chb] + hashTibExWylie[(chb === "" ? "" : "_")+chc] +
			          subscriptsToUni(chd) + hashTibExWylie[che] + chf + "་";
		}
		else {
			result += (typeof hashTibExWylie[ch] !== 'undefined' ? hashTibExWylie[ch] : ch);
		}
	}
	return result.replace(/\u0F0D\u0F0B/g, "\u0F0D ").replace(/\u0F0E\u0F0B/g, "\u0F0E ");
}

if (typeof exports !== 'undefined') {
   exports.otdotsToUnicode = otdotsToUnicode;
}
