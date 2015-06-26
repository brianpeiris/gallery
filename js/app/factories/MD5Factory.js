(function (){
app.factory("MD5Factory", function() {
  function a(a, b) {
    var g = a[0],
    h = a[1],
    i = a[2],
    j = a[3];
    g = c(g, h, i, j, b[0], 7, -680876936), j = c(j, g, h, i, b[1], 12, -389564586), i = c(i, j, g, h, b[2], 17, 606105819), h = c(h, i, j, g, b[3], 22, -1044525330), g = c(g, h, i, j, b[4], 7, -176418897), j = c(j, g, h, i, b[5], 12, 1200080426), i = c(i, j, g, h, b[6], 17, -1473231341), h = c(h, i, j, g, b[7], 22, -45705983), g = c(g, h, i, j, b[8], 7, 1770035416), j = c(j, g, h, i, b[9], 12, -1958414417), i = c(i, j, g, h, b[10], 17, -42063), h = c(h, i, j, g, b[11], 22, -1990404162), g = c(g, h, i, j, b[12], 7, 1804603682), j = c(j, g, h, i, b[13], 12, -40341101), i = c(i, j, g, h, b[14], 17, -1502002290), h = c(h, i, j, g, b[15], 22, 1236535329), g = d(g, h, i, j, b[1], 5, -165796510), j = d(j, g, h, i, b[6], 9, -1069501632), i = d(i, j, g, h, b[11], 14, 643717713), h = d(h, i, j, g, b[0], 20, -373897302), g = d(g, h, i, j, b[5], 5, -701558691), j = d(j, g, h, i, b[10], 9, 38016083), i = d(i, j, g, h, b[15], 14, -660478335), h = d(h, i, j, g, b[4], 20, -405537848), g = d(g, h, i, j, b[9], 5, 568446438), j = d(j, g, h, i, b[14], 9, -1019803690), i = d(i, j, g, h, b[3], 14, -187363961), h = d(h, i, j, g, b[8], 20, 1163531501), g = d(g, h, i, j, b[13], 5, -1444681467), j = d(j, g, h, i, b[2], 9, -51403784), i = d(i, j, g, h, b[7], 14, 1735328473), h = d(h, i, j, g, b[12], 20, -1926607734), g = e(g, h, i, j, b[5], 4, -378558), j = e(j, g, h, i, b[8], 11, -2022574463), i = e(i, j, g, h, b[11], 16, 1839030562), h = e(h, i, j, g, b[14], 23, -35309556), g = e(g, h, i, j, b[1], 4, -1530992060), j = e(j, g, h, i, b[4], 11, 1272893353), i = e(i, j, g, h, b[7], 16, -155497632), h = e(h, i, j, g, b[10], 23, -1094730640), g = e(g, h, i, j, b[13], 4, 681279174), j = e(j, g, h, i, b[0], 11, -358537222), i = e(i, j, g, h, b[3], 16, -722521979), h = e(h, i, j, g, b[6], 23, 76029189), g = e(g, h, i, j, b[9], 4, -640364487), j = e(j, g, h, i, b[12], 11, -421815835), i = e(i, j, g, h, b[15], 16, 530742520), h = e(h, i, j, g, b[2], 23, -995338651), g = f(g, h, i, j, b[0], 6, -198630844), j = f(j, g, h, i, b[7], 10, 1126891415), i = f(i, j, g, h, b[14], 15, -1416354905), h = f(h, i, j, g, b[5], 21, -57434055), g = f(g, h, i, j, b[12], 6, 1700485571), j = f(j, g, h, i, b[3], 10, -1894986606), i = f(i, j, g, h, b[10], 15, -1051523), h = f(h, i, j, g, b[1], 21, -2054922799), g = f(g, h, i, j, b[8], 6, 1873313359), j = f(j, g, h, i, b[15], 10, -30611744), i = f(i, j, g, h, b[6], 15, -1560198380), h = f(h, i, j, g, b[13], 21, 1309151649), g = f(g, h, i, j, b[4], 6, -145523070), j = f(j, g, h, i, b[11], 10, -1120210379), i = f(i, j, g, h, b[2], 15, 718787259), h = f(h, i, j, g, b[9], 21, -343485551), a[0] = k(g, a[0]), a[1] = k(h, a[1]), a[2] = k(i, a[2]), a[3] = k(j, a[3])
  }

  function b(a, b, c, d, e, f) {
    return b = k(k(b, a), k(d, f)), k(b << e | b >>> 32 - e, c)
  }

  function c(a, c, d, e, f, g, h) {
    return b(c & d | ~c & e, a, c, f, g, h)
  }

  function d(a, c, d, e, f, g, h) {
    return b(c & e | d & ~e, a, c, f, g, h)
  }

  function e(a, c, d, e, f, g, h) {
    return b(c ^ d ^ e, a, c, f, g, h)
  }

  function f(a, c, d, e, f, g, h) {
    return b(d ^ (c | ~e), a, c, f, g, h)
  }

  function g(b) {
    var c, d = b.length,
    e = [1732584193, -271733879, -1732584194, 271733878];
    for (c = 64; c <= b.length; c += 64) a(e, h(b.substring(c - 64, c)));
      b = b.substring(c - 64);
    var f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (c = 0; c < b.length; c++) f[c >> 2] |= b.charCodeAt(c) << (c % 4 << 3);
      if (f[c >> 2] |= 128 << (c % 4 << 3), c > 55)
        for (a(e, f), c = 0; 16 > c; c++) f[c] = 0;
          return f[14] = 8 * d, a(e, f), e
  }

  function h(a) {
    var b, c = [];
    for (b = 0; 64 > b; b += 4) c[b >> 2] = a.charCodeAt(b) + (a.charCodeAt(b + 1) << 8) + (a.charCodeAt(b + 2) << 16) + (a.charCodeAt(b + 3) << 24);
      return c
  }

  function i(a) {
    for (var b = "", c = 0; 4 > c; c++) b += m[a >> 8 * c + 4 & 15] + m[a >> 8 * c & 15];
      return b
  }

  function j(a) {
    for (var b = 0; b < a.length; b++) a[b] = i(a[b]);
      return a.join("")
  }

  function k(a, b) {
    return a + b & 4294967295
  }

  function l(a) {
    return j(g(a || ""))
  }
  var m = "0123456789abcdef".split("");
    return l
});
})();