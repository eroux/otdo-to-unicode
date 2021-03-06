# OTDOTS to unicode

This repository contains Javascript code to convert files transliterated from the OTDO transliteration scheme (reffered to as OTDOTS). 

This transliteration system is explained page XXXI in *Tibetan Documents from Dunhuang, vol. I*, Research Institute for Languages and Cultures of Asia and Africa, Tokyo University of Foreign Studies, 2007 ([available here](http://repository.tufs.ac.jp/bitstream/10108/70256/1/Old+Tibetan1_00.pdf#32) and [here](http://otdo.aa-ken.jp/site/editorialPolicy) for the relevant part). It is used to encode texts on [Old Tibetan Documents Online](http://otdo.aa-ken.jp/).

The code is freely based on [existing code](http://otdo.aa-ken.jp/js/encodingTib.js), used on the OTDO website. The author of this code explicitely placed it in the public domain. Changes from the original are:

- escape unicode sequences (output can be UTF-8 or UTF-16)
- handle characters `+`, `v`, `^` as stated in the specifications
- fix standard tibetan `phyva` and `brla`
- usability as node module

The code in this repository is under the [CC0 license](LICENSE).
