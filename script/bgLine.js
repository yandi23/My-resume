!function () {
    function D(d, c, a) {
        return d.getAttribute(c) || a
    }

    function K(a) {
        return document.getElementsByTagName(a)
    }

    function v() {
        var c = K("script")
            , d = c.length
            , a = c[d - 1];
        return {
            l: d,
            z: D(a, "zIndex", 1),
            o: D(a, "opacity", 0.2),
            c: D(a, "color", "#333"),
            n: D(a, "count", 44)
        }
    }

    function C() {
        M = q.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            N = q.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    function G() {
        F.clearRect(0, 0, M, N);
        var l, g, f, i, c, h, a = [k].concat(b);
        b.forEach(function (d) {
            for (d.x += d.xa,
                     d.y += d.ya,
                     d.xa *= d.x > M || d.x < 0 ? -1 : 1,
                     d.ya *= d.y > N || d.y < 0 ? -1 : 1,
                     F.fillRect(d.x - 0.5, d.y - 0.5, 1, 1),
                     g = 0; g < a.length; g++) {
                l = a[g],
                d !== l && null !== l.x && null !== l.y && (i = d.x - l.x,
                    c = d.y - l.y,
                    h = i * i + c * c,
                h < l.max && (l === k && h >= l.max / 2 && (d.x -= 0.03 * i,
                    d.y -= 0.03 * c),
                    f = (l.max - h) / l.max,
                    F.beginPath(),
                    F.lineWidth = f / 2,
                    F.strokeStyle = "rgba(" + E.c + "," + (f + 0.2) + ")",
                    F.moveTo(d.x, d.y),
                    F.lineTo(l.x, l.y),
                    F.stroke()))
            }
            a.splice(a.indexOf(d), 1)
        }),
            A(G)
    }

    var M, N, q = document.createElement("canvas"), E = v(), L = "c_n" + E.l, F = q.getContext("2d"), A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1000 / 45)
        }
        , j = Math.random, k = {
        x: null,
        y: null,
        max: 20000
    };
    q.id = L,
        q.style.cssText = "position:fixed;top:0;left:0;z-index:" + E.z + ";opacity:" + E.o,
        K("body")[0].appendChild(q),
        C(),
        window.onresize = C,
        window.onmousemove = function (a) {
            a = a || window.event,
                k.x = a.clientX,
                k.y = a.clientY
        }
        ,
        window.onmouseout = function () {
            k.x = null,
                k.y = null
        }
    ;
    for (var b = [], z = 0; E.n > z; z++) {
        var J = j() * M
            , H = j() * N
            , I = 2 * j() - 1
            , B = 2 * j() - 1;
        b.push({
            x: J,
            y: H,
            xa: I,
            ya: B,
            max: 6000
        })
    }
    setTimeout(function () {
        G()
    }, 100)
}();