// 2009/03/04 ver.
var hashTibExWylie = {
	"": "",
	"k": "ཀ", "kh": "ཁ", "g": "ག", "gh": "གྷ", "ng": "ང",
	"c": "ཅ", "ch": "ཆ", "j": "ཇ", "ny": "ཉ",
	"T": "ཏཊ", "TH": "ཐཋ", "D": "དཌ", "DH": "དྷཌྷ", "N": "ནཎ",
	"t": "ཏ", "th": "ཐ", "d": "ད", "dh": "དྷ", "n": "ན",
	"p": "པ", "ph": "ཕ", "b": "བ", "bh": "བྷ", "m": "མ",
	"ts": "ཙ", "tsh": "ཚ", "dz": "ཛ", "dzh": "ཛྷ", "w": "ཝ", "v": "ཝ",
	"zh": "ཞ", "z": "ཟ", "'": "འ", "y": "ཡ",
	"r": "ར", "l": "ལ", "sh": "ཤ", "SH": "ཤཥ", "s": "ས",
	"h": "ཧ", "_a": "ཨ",
	"_aa": "ཨཱ", "_i": "ཨི", "_ii": "ཨཱི", "_I": "ཨྀ", "_u": "ཨུ", "_uu": "ཨཱུ",
	"_.r": "ཨྲྀ", "_.r.r": "ཨྲཱྀ", "_.l": "ཨླྀ", "_.l.l": "ཨླཱྀ",
	"_e": "ཨེ", "_ai": "ཨཻ","_o": "ཨོ", "_au": "ཨཽ",
	"_k": "ྐ", "_kh": "ྑ", "_g": "ྒ", "_gh": "ྒྷ", "_ng": "ྔ",
	"_c": "ྕ", "_ch": "ྖ", "_j": "ྗ", "_ny": "ྙ",
	"_T": "ྚ", "_TH": "ྛ", "_D": "ྜ", "_DH": "ྜྷ", "_N": "ྞ",
	"_t": "ྟ", "_th": "ྠ", "_d": "ྡ", "_dh": "ྡྷ", "_n": "ྣ",
	"_p": "ྤ", "_ph": "ྥ", "_b": "ྦ", "_bh": "ྦྷ", "_m": "ྨ",
	"_ts": "ྩ", "_tsh": "ྪ", "_dz": "ྫ", "_dzh": "ྫྷ", "_w": "ྭ", "_v": "ྭ",
	"_zh": "ྮ", "_z": "ྯ", "_'": "ྰ", "_y": "ྱ",
	"_r": "ྲ", "_l": "ླ", "_sh": "ྴ", "_SH": "ྵ", "_s": "ྶ",
	"_h": "ྷ", "__a": "ྸ",
	"a": "཰", "aa": "཰2་ཱ", "i": "ི", "ii": "ི2་ཱི", "I": "ྀ", "u": "ུ", "uu": "ུ2་ཱུ",
	".r": "ྲྀ", ".r.r": "ྲྀ2་ྲཱྀ", ".l": "ླྀ", ".l.l": "ླྀ2་ླཱྀ",
	"e": "ེ", "ai": "ེ2་ཻ","o": "ོ", "au": "ོ2་ཽ",
	"M": "ཾ", ":": "ཿ",
	"_": "྄", "tsheg": "་", "/": "།", "//": "༎", " ": " "
};// "k.sa": "ཀྵ"
function deTibExWylie(str) {
	var result = "";
	var flag = true;// prefix
	str += "\0\0\0";
	var ch;
	var cha = "";// 前
	var chb = "";// 頭
	var chc = "";// 基
	var chd = "";// 足
	var che = "";// 母
	var chf = "";// 後・再後 suffix, second suffix
// 基0母2後再
// 基1足母2後再
// 基2前0母2後再
// 基2前1足母2後再
// 基3頭0母2後再
// 基3頭1足母2後再
// 基4頭2前0母2後再
// 基c4頭b2前a1足d母e2後再
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
			//case "r":
			//	if (str[i + 1] == "I") {
			//		ch = ".r";
			//		i++;
			//	}
			//	flag = false;
			//	break;
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
					else if (str[i + 1] == "y") {// Wylie
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
			// case "-":
			// 	ch = "";
			// 	cha = chc;
			// 	break;
			case "/":
				if (str[i + 1] == "/") {
					ch = "//";
					i++;
				}
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
		if (flag) {
			if (chc) {
				result += hashTibExWylie[chc] +
					(chb ? (cha ? "4" : "3") : "") + hashTibExWylie[chb] +
					(cha ? "2" : "") + hashTibExWylie[cha] +
					(chd ? "1" : "0") + hashTibExWylie[chd] +
					hashTibExWylie[che] + "2" + chf + "་";
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
				else if (hashTibExWylie[ch] >= "཰" && hashTibExWylie[ch] <= "ཱྀ") {
					che = ch;
				}
				else if (chc === "") {
					chc = ch;
				}
				else if (chc == "g" || chc == "d" || chc == "b" || chc == "m" || chc == "'") {
					if (ch == "w" || ch == "v" || ch == "y" || ch == "r" || ch == "l") {
						chd = ch;
					}
					else {
						if (chd == "r" || chd == "l") {
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
				}
				else if (ch == "v" || ch == "w" || ch == "y" || ch == "r" || ch == "l" || ch == "'") {
					chd = ch;
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
					alert ("not supported!!");
				}
			}
			else {
				chf += (typeof hashTibExWylie[ch] !== 'undefined' ? hashTibExWylie[ch] : ch);
			}
		}
	}
	if (!flag) {
		if (chc) {
			result += hashTibExWylie[chc] +
				(chb ? (cha ? "4" : "3") : "") + hashTibExWylie[chb] +
				(cha ? "2" : "") + hashTibExWylie[cha] +
				(chd ? "1" : "0") + hashTibExWylie[chd] +
				hashTibExWylie[che] + "2" + chf + "་";
		}
		else {
			result += (typeof hashTibExWylie[ch] !== 'undefined' ? hashTibExWylie[ch] : ch);
		}

	}
	return result;
}
function enTib(str) {
	return str.replace(/([ཀ-࿿][0-9ཀ-࿿]*)/g, function(whole, s) {
		if (s.match(/^(.)4(.)2(.)1(.)(.*?)2(.*)$/)) {
			return RegExp.$3 + RegExp.$2 + String.fromCharCode(RegExp.$1.charCodeAt(0) + 0x0050) +
				String.fromCharCode(RegExp.$4.charCodeAt(0) + 0x0050) + RegExp.$5 + RegExp.$6;
		}
		else if (s.match(/^(.)4(.)2(.)0(.*?)2(.*)$/)) {
			return RegExp.$3 + RegExp.$2 + String.fromCharCode(RegExp.$1.charCodeAt(0) + 0x0050) +
				RegExp.$4 + RegExp.$5;
		}
		else if (s.match(/^(.)3(.)1(.)(.*?)2(.*)$/)) {
			return RegExp.$2 + String.fromCharCode(RegExp.$1.charCodeAt(0) + 0x0050) +
				String.fromCharCode(RegExp.$3.charCodeAt(0) + 0x0050) + RegExp.$4 + RegExp.$5;
		}
		else if (s.match(/^(.)3(.)0(.*?)2(.*)$/)) {
			return RegExp.$2 + String.fromCharCode(RegExp.$1.charCodeAt(0) + 0x0050) +
				RegExp.$3 + RegExp.$4;
		}
		else if (s.match(/^(.)2(.)1(.)(.*?)2(.*)$/)) {
			return RegExp.$2 + RegExp.$1 +
				String.fromCharCode(RegExp.$3.charCodeAt(0) + 0x0050) + RegExp.$4 + RegExp.$5;
		}
		else if (s.match(/^(.)2(.)0(.*?)2(.*)$/)) {
			return RegExp.$2 + RegExp.$1 + RegExp.$3 + RegExp.$4;
		}
		else if (s.match(/^(.)1(.)(.*?)2(.*)$/)) {
			return RegExp.$1 + String.fromCharCode(RegExp.$2.charCodeAt(0) + 0x0050) +
				RegExp.$3 + RegExp.$4;
		}
		else if (s.match(/^(.)0(.*?)2(.*)$/)) {
			return RegExp.$1 + RegExp.$2 + RegExp.$3;
		}
		else {
			return s.replace(/[0-9]/g, '');
		}
	})
	.replace(/཰/g, "").replace(/།་/g, "། ").replace(/༎་/g, "༎ ");
}
function strForTibComp(str) {
	return str.slice(0, -1);
}

function otdotsToUnicode(str) {
	return enTib(deTibExWylie(str));
};

if (typeof exports !== 'undefined') {
   exports.otdotsToUnicode = otdotsToUnicode;
}
