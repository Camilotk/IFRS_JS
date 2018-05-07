"use strict";

function nonUniqueElements(n) {
	var repetidos = [];
	for (var i = 0; i < n.length; i++) {
		var elemento = n[i];
		var count = 0;
		for (var j = 0; j < n.length; j++) {
			if (n[j] === elemento) {
				count++;
			}
		}
		if (count >= 2) {
			repetidos.push(elemento);
		}
	}
	return repetidos;
}

