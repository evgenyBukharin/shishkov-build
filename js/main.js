(() => {
	var e = {
			451: () => {
				alert("ширина " + window.innerWidth + ", высота " + window.innerHeight);
			},
		},
		t = {};
	function n(r) {
		var o = t[r];
		if (void 0 !== o) return o.exports;
		var i = (t[r] = { exports: {} });
		return e[r](i, i.exports, n), i.exports;
	}
	(() => {
		"use strict";
		window, document, document.documentElement, document.body, n(451);
	})();
})();
