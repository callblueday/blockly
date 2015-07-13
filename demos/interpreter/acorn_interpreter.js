
// Acorn: Copyright 2012 Marijn Haverbeke, MIT License
var mod$$inline_58 = function (a) {
    function b(a) {
        n = a || {};
        for (var b in Sa) Object.prototype.hasOwnProperty.call(n, b) || (n[b] = Sa[b]);
        ua = n.sourceFile || null
    }
    function c(a, b) {
        var c = zb(l, a);
        b += " (" + c.line + ":" + c.column + ")";
        var e = new SyntaxError(b);
        e.pos = a;
        e.loc = c;
        e.raisedAt = g;
        throw e;
    }
    function d(a) {
        function b(a) {
            if (1 == a.length) return c += "return str === " + JSON.stringify(a[0]) + ";";
            c += "switch(str){";
            for (var ta = 0; ta < a.length; ++ta) c += "case " + JSON.stringify(a[ta]) + ":";
            c += "return true}return false;"
        }
        a = a.split(" ");
        var c =
            "",
            e = [],
            f = 0;
        t: for (; f < a.length; ++f) {
            for (var d = 0; d < e.length; ++d) if (e[d][0].length == a[f].length) {
                e[d].push(a[f]);
                continue t
            }
            e.push([a[f]])
        }
        if (3 < e.length) {
            e.sort(function (a, b) {
                return b.length - a.length
            });
            c += "switch(str.length){";
            for (f = 0; f < e.length; ++f) a = e[f], c += "case " + a[0].length + ":", b(a);
            c += "}"
        } else b(a);
        return new Function("str", c)
    }
    function e() {
        this.line = G;
        this.column = g - D
    }
    function f(a, b) {
        W = g;
        n.locations && (ga = new e);
        p = a;
        m();
        H = b;
        Q = a.beforeExpr
    }
    function h() {
        for (var a = g, b = n.onComment && n.locations && new e,
        c = l.charCodeAt(g += 2); g < R && 10 !== c && 13 !== c && 8232 !== c && 8233 !== c;)++g, c = l.charCodeAt(g);
        if (n.onComment) n.onComment(!1, l.slice(a + 2, g), a, g, b, n.locations && new e)
    }
    function m() {
        for (; g < R;) {
            var a = l.charCodeAt(g);
            if (32 === a)++g;
            else if (13 === a)++g, a = l.charCodeAt(g), 10 === a && ++g, n.locations && (++G, D = g);
            else if (10 === a || 8232 === a || 8233 === a)++g, n.locations && (++G, D = g);
            else if (8 < a && 14 > a)++g;
            else if (47 === a) if (a = l.charCodeAt(g + 1), 42 === a) {
                var a = n.onComment && n.locations && new e,
                    b = g,
                    f = l.indexOf("*/", g += 2); - 1 === f && c(g - 2, "Unterminated comment");
                g = f + 2;
                if (n.locations) {
                    X.lastIndex = b;
                    for (var d = void 0;
                    (d = X.exec(l)) && d.index < g;)++G, D = d.index + d[0].length
                }
                if (n.onComment) n.onComment(!0, l.slice(b + 2, f), b, g, a, n.locations && new e)
            } else if (47 === a) h();
            else break;
            else if (160 === a)++g;
            else if (5760 <= a && Ab.test(String.fromCharCode(a)))++g;
            else break
        }
    }
    function r(a) {
        switch (a) {
            case 46:
                return a = l.charCodeAt(g + 1), 48 <= a && 57 >= a ? a = N(!0) : (++g, a = f(va)), a;
            case 40:
                return ++g, f(I);
            case 41:
                return ++g, f(E);
            case 59:
                return ++g, f(J);
            case 44:
                return ++g, f(K);
            case 91:
                return ++g, f(ha);
            case 93:
                return ++g, f(ia);
            case 123:
                return ++g, f(Y);
            case 125:
                return ++g, f(S);
            case 58:
                return ++g, f(Z);
            case 63:
                return ++g, f(wa);
            case 48:
                if (a = l.charCodeAt(g + 1), 120 === a || 88 === a) return g += 2, a = k(16), null == a && c(x + 2, "Expected hexadecimal number"), ja(l.charCodeAt(g)) && c(g, "Identifier directly after number"), a = f($, a);
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return N(!1);
            case 34:
            case 39:
                t: {
                    g++;
                    for (var b = "";;) {
                        g >= R && c(x, "Unterminated string constant");
                        var e = l.charCodeAt(g);
                        if (e === a) {
                            ++g;
                            a = f(ba, b);
                            break t
                        }
                        if (92 === e) {
                            var e = l.charCodeAt(++g),
                                d = /^[0-7]+/.exec(l.slice(g, g + 3));
                            for (d && (d = d[0]); d && 255 < parseInt(d, 8);) d = d.slice(0, -1);
                            "0" === d && (d = null);
                            ++g;
                            if (d) B && c(g - 2, "Octal literal in strict mode"), b += String.fromCharCode(parseInt(d, 8)), g += d.length - 1;
                            else switch (e) {
                                case 110:
                                    b += "\n";
                                    break;
                                case 114:
                                    b += "\r";
                                    break;
                                case 120:
                                    b += String.fromCharCode(ka(2));
                                    break;
                                case 117:
                                    b += String.fromCharCode(ka(4));
                                    break;
                                case 85:
                                    b += String.fromCharCode(ka(8));
                                    break;
                                case 116:
                                    b += "\t";
                                    break;
                                case 98:
                                    b += "\b";
                                    break;
                                case 118:
                                    b +=
                                        "\x0B";
                                    break;
                                case 102:
                                    b += "\f";
                                    break;
                                case 48:
                                    b += "\x00";
                                    break;
                                case 13:
                                    10 === l.charCodeAt(g) && ++g;
                                case 10:
                                    n.locations && (D = g, ++G);
                                    break;
                                default:
                                    b += String.fromCharCode(e)
                            }
                        } else 13 !== e && 10 !== e && 8232 !== e && 8233 !== e || c(x, "Unterminated string constant"), b += String.fromCharCode(e), ++g
                    }
                    a = void 0
                }
                return a;
            case 47:
                return a = l.charCodeAt(g + 1), Q ? (++g, a = C()) : a = 61 === a ? t(T, 2) : t(xa, 1), a;
            case 37:
            case 42:
                return a = l.charCodeAt(g + 1), a = 61 === a ? t(T, 2) : t(Bb, 1), a;
            case 124:
            case 38:
                return b = l.charCodeAt(g + 1), a = b === a ? t(124 === a ? Ta : Ua,
                2) : 61 === b ? t(T, 2) : t(124 === a ? Cb : Db, 1), a;
            case 94:
                return a = l.charCodeAt(g + 1), a = 61 === a ? t(T, 2) : t(Eb, 1), a;
            case 43:
            case 45:
                return b = l.charCodeAt(g + 1), b === a ? 45 == b && 62 == l.charCodeAt(g + 2) && la.test(l.slice(O, g)) ? (g += 3, h(), m(), a = z()) : a = t(Fb, 2) : a = 61 === b ? t(T, 2) : t(Gb, 1), a;
            case 60:
            case 62:
                return b = l.charCodeAt(g + 1), e = 1, b === a ? (e = 62 === a && 62 === l.charCodeAt(g + 2) ? 3 : 2, a = 61 === l.charCodeAt(g + e) ? t(T, e + 1) : t(Hb, e)) : 33 == b && 60 == a && 45 == l.charCodeAt(g + 2) && 45 == l.charCodeAt(g + 3) ? (g += 4, h(), m(), a = z()) : (61 === b && (e = 61 === l.charCodeAt(g + 2) ? 3 : 2), a = t(Ib, e)), a;
            case 61:
            case 33:
                return b = l.charCodeAt(g + 1), a = 61 === b ? t(Jb, 61 === l.charCodeAt(g + 2) ? 3 : 2) : t(61 === a ? ya : Va, 1), a;
            case 126:
                return t(Va, 1)
        }
        return !1
    }
    function z(a) {
        a ? g = x + 1 : x = g;
        n.locations && (ma = new e);
        if (a) return C();
        if (g >= R) return f(na);
        var b = l.charCodeAt(g);
        if (ja(b) || 92 === b) return Wa();
        a = r(b);
        if (!1 === a) {
            b = String.fromCharCode(b);
            if ("\\" === b || Xa.test(b)) return Wa();
            c(g, "Unexpected character '" + b + "'")
        }
        return a
    }
    function t(a, b) {
        var c = l.slice(g, g + b);
        g += b;
        f(a, c)
    }
    function C() {
        for (var a = "", b, e, d = g;;) {
            g >= R && c(d, "Unterminated regular expression");
            a = l.charAt(g);
            la.test(a) && c(d, "Unterminated regular expression");
            if (b) b = !1;
            else {
                if ("[" === a) e = !0;
                else if ("]" === a && e) e = !1;
                else if ("/" === a && !e) break;
                b = "\\" === a
            }++g
        }
        a = l.slice(d, g);
        ++g;
        (b = Ya()) && !/^[gmsiy]*$/.test(b) && c(d, "Invalid regexp flag");
        try {
            var h = RegExp(a, b)
        } catch (k) {
            k instanceof SyntaxError && c(d, k.message), c(k)
        }
        return f(za, h)
    }
    function k(a, b) {
        for (var c = g, e = 0, f = 0, d = null == b ? Infinity : b; f < d; ++f) {
            var h = l.charCodeAt(g),
                h = 97 <= h ? h - 97 + 10 : 65 <= h ? h - 65 + 10 : 48 <= h && 57 >= h ? h - 48 : Infinity;
            if (h >= a) break;
            ++g;
            e = e * a + h
        }
        return g === c || null != b && g - c !== b ? null : e
    }
    function N(a) {
        var b = g,
            e = !1,
            d = 48 === l.charCodeAt(g);
        a || null !== k(10) || c(b, "Invalid number");
        46 === l.charCodeAt(g) && (++g, k(10), e = !0);
        a = l.charCodeAt(g);
        if (69 === a || 101 === a) a = l.charCodeAt(++g), 43 !== a && 45 !== a || ++g, null === k(10) && c(b, "Invalid number"), e = !0;
        ja(l.charCodeAt(g)) && c(g, "Identifier directly after number");
        a = l.slice(b, g);
        var h;
        e ? h = parseFloat(a) : d && 1 !== a.length ? /[89]/.test(a) || B ? c(b, "Invalid number") : h = parseInt(a,
        8) : h = parseInt(a, 10);
        return f($, h)
    }
    function ka(a) {
        a = k(16, a);
        null === a && c(x, "Bad character escape sequence");
        return a
    }
    function Ya() {
        aa = !1;
        for (var a, b = !0, e = g;;) {
            var f = l.charCodeAt(g);
            if (Za(f)) aa && (a += l.charAt(g)), ++g;
            else if (92 === f) {
                aa || (a = l.slice(e, g));
                aa = !0;
                117 != l.charCodeAt(++g) && c(g, "Expecting Unicode escape sequence \\uXXXX");
                ++g;
                var f = ka(4),
                    d = String.fromCharCode(f);
                d || c(g - 1, "Invalid Unicode escape");
                (b ? ja(f) : Za(f)) || c(g - 4, "Invalid Unicode escape");
                a += d
            } else break;
            b = !1
        }
        return aa ? a : l.slice(e, g)
    }
    function Wa() {
        var a = Ya(),
            b = U;
        aa || (Kb(a) ? b = Aa[a] : (n.forbidReserved && (3 === n.ecmaVersion ? Lb : Mb)(a) || B && $a(a)) && c(x, "The keyword '" + a + "' is reserved"));
        return f(b, a)
    }
    function s() {
        Ba = x;
        O = W;
        Ca = ga;
        z()
    }
    function Da(a) {
        B = a;
        g = x;
        if (n.locations) for (; g < D;) D = l.lastIndexOf("\n", D - 2) + 1, --G;
        m();
        z()
    }
    function ab() {
        this.type = null;
        this.start = x;
        this.end = null
    }
    function bb() {
        this.start = ma;
        this.end = null;
        null !== ua && (this.source = ua)
    }
    function y() {
        var a = new ab;
        n.locations && (a.loc = new bb);
        n.directSourceFile && (a.sourceFile = n.directSourceFile);
        n.ranges && (a.range = [x, 0]);
        return a
    }
    function P(a) {
        var b = new ab;
        b.start = a.start;
        n.locations && (b.loc = new bb, b.loc.start = a.loc.start);
        n.ranges && (b.range = [a.range[0], 0]);
        return b
    }
    function q(a, b) {
        a.type = b;
        a.end = O;
        n.locations && (a.loc.end = Ca);
        n.ranges && (a.range[1] = O);
        return a
    }
    function Ea(a) {
        return 5 <= n.ecmaVersion && "ExpressionStatement" === a.type && "Literal" === a.expression.type && "use strict" === a.expression.value
    }
    function u(a) {
        if (p === a) return s(), !0
    }
    function oa() {
        return !n.strictSemicolons && (p === na || p === S || la.test(l.slice(O,
        x)))
    }
    function V() {
        u(J) || oa() || L()
    }
    function v(a) {
        p === a ? s() : L()
    }
    function L() {
        c(x, "Unexpected token")
    }
    function pa(a) {
        "Identifier" !== a.type && "MemberExpression" !== a.type && c(a.start, "Assigning to rvalue");
        B && "Identifier" === a.type && qa(a.name) && c(a.start, "Assigning to " + a.name + " in strict mode")
    }
    function F() {
        (p === xa || p === T && "/=" == H) && z(!0);
        var a = p,
            b = y();
        switch (a) {
            case Fa:
            case cb:
                s();
                var e = a === Fa;
                u(J) || oa() ? b.label = null : p !== U ? L() : (b.label = M(), V());
                for (var f = 0; f < w.length; ++f) {
                    var d = w[f];
                    if (null == b.label || d.name === b.label.name) {
                        if (null != d.kind && (e || "loop" === d.kind)) break;
                        if (b.label && e) break
                    }
                }
                f === w.length && c(b.start, "Unsyntactic " + a.keyword);
                return q(b, e ? "BreakStatement" : "ContinueStatement");
            case db:
                return s(), V(), q(b, "DebuggerStatement");
            case eb:
                return s(), w.push(Ga), b.body = F(), w.pop(), v(Ha), b.test = ca(), V(), q(b, "DoWhileStatement");
            case fb:
                s();
                w.push(Ga);
                v(I);
                if (p === J) return Ia(b, null);
                if (p === Ja) return a = y(), s(), gb(a, !0), q(a, "VariableDeclaration"), 1 === a.declarations.length && u(ra) ? hb(b, a) : Ia(b, a);
                a = A(!1, !0);
                return u(ra) ? (pa(a), hb(b, a)) : Ia(b, a);
            case Ka:
                return s(), La(b, !0);
            case ib:
                return s(), b.test = ca(), b.consequent = F(), b.alternate = u(jb) ? F() : null, q(b, "IfStatement");
            case kb:
                return da || c(x, "'return' outside of function"), s(), u(J) || oa() ? b.argument = null : (b.argument = A(), V()), q(b, "ReturnStatement");
            case Ma:
                s();
                b.discriminant = ca();
                b.cases = [];
                v(Y);
                for (w.push(Nb); p != S;) p === Na || p === lb ? (a = p === Na, f && q(f, "SwitchCase"), b.cases.push(f = y()), f.consequent = [], s(), a ? f.test = A() : (e && c(Ba, "Multiple default clauses"), e = !0, f.test = null), v(Z)) : (f || L(), f.consequent.push(F()));
                f && q(f, "SwitchCase");
                s();
                w.pop();
                return q(b, "SwitchStatement");
            case mb:
                return s(), la.test(l.slice(O, x)) && c(O, "Illegal newline after throw"), b.argument = A(), V(), q(b, "ThrowStatement");
            case nb:
                return s(), b.block = ea(), b.handler = null, p === ob && (a = y(), s(), v(I), a.param = M(), B && qa(a.param.name) && c(a.param.start, "Binding " + a.param.name + " in strict mode"), v(E), a.guard = null, a.body = ea(), b.handler = q(a, "CatchClause")), b.guardedHandlers = pb, b.finalizer = u(qb) ? ea() : null, b.handler || b.finalizer || c(b.start, "Missing catch or finally clause"), q(b, "TryStatement");
            case Ja:
                return s(), gb(b), V(), q(b, "VariableDeclaration");
            case Ha:
                return s(), b.test = ca(), w.push(Ga), b.body = F(), w.pop(), q(b, "WhileStatement");
            case rb:
                return B && c(x, "'with' in strict mode"), s(), b.object = ca(), b.body = F(), q(b, "WithStatement");
            case Y:
                return ea();
            case J:
                return s(), q(b, "EmptyStatement");
            default:
                e = H;
                d = A();
                if (a === U && "Identifier" === d.type && u(Z)) {
                    for (f = 0; f < w.length; ++f) w[f].name === e && c(d.start, "Label '" + e + "' is already declared");
                    a = p.isLoop ? "loop" : p === Ma ? "switch" : null;
                    w.push({
                        name: e,
                        kind: a
                    });
                    b.body = F();
                    w.pop();
                    b.label = d;
                    return q(b, "LabeledStatement")
                }
                b.expression = d;
                V();
                return q(b, "ExpressionStatement")
        }
    }
    function ca() {
        v(I);
        var a = A();
        v(E);
        return a
    }
    function ea(a) {
        var b = y(),
            c = !0,
            e = !1,
            f;
        b.body = [];
        for (v(Y); !u(S);) {
            var d = F();
            b.body.push(d);
            c && a && Ea(d) && (f = e, Da(e = !0));
            c = !1
        }
        e && !f && Da(!1);
        return q(b, "BlockStatement")
    }
    function Ia(a, b) {
        a.init = b;
        v(J);
        a.test = p === J ? null : A();
        v(J);
        a.update = p === E ? null : A();
        v(E);
        a.body = F();
        w.pop();
        return q(a,
            "ForStatement")
    }
    function hb(a, b) {
        a.left = b;
        a.right = A();
        v(E);
        a.body = F();
        w.pop();
        return q(a, "ForInStatement")
    }
    function gb(a, b) {
        a.declarations = [];
        for (a.kind = "var";;) {
            var e = y();
            e.id = M();
            B && qa(e.id.name) && c(e.id.start, "Binding " + e.id.name + " in strict mode");
            e.init = u(ya) ? A(!0, b) : null;
            a.declarations.push(q(e, "VariableDeclarator"));
            if (!u(K)) break
        }
        return a
    }
    function A(a, b) {
        var c = Oa(b);
        if (!a && p === K) {
            var e = P(c);
            for (e.expressions = [c]; u(K);) e.expressions.push(Oa(b));
            return q(e, "SequenceExpression")
        }
        return c
    }
    function Oa(a) {
        var b;
        b = a;
        var c;
        c = b;
        c = Pa(Qa(), -1, c);
        if (u(wa)) {
            var e = P(c);
            e.test = c;
            e.consequent = A(!0);
            v(Z);
            e.alternate = A(!0, b);
            b = q(e, "ConditionalExpression")
        } else b = c;
        return p.isAssign ? (c = P(b), c.operator = H, c.left = b, s(), c.right = Oa(a), pa(b), q(c, "AssignmentExpression")) : b
    }
    function Pa(a, b, c) {
        var e = p.binop;
        if (null != e && (!c || p !== ra) && e > b) {
            var f = P(a);
            f.left = a;
            f.operator = H;
            a = p;
            s();
            f.right = Pa(Qa(), e, c);
            e = q(f, a === Ta || a === Ua ? "LogicalExpression" : "BinaryExpression");
            return Pa(e, b, c)
        }
        return a
    }
    function Qa() {
        if (p.prefix) {
            var a = y(),
                b = p.isUpdate;
            a.operator = H;
            Q = a.prefix = !0;
            s();
            a.argument = Qa();
            b ? pa(a.argument) : B && "delete" === a.operator && "Identifier" === a.argument.type && c(a.start, "Deleting local variable in strict mode");
            return q(a, b ? "UpdateExpression" : "UnaryExpression")
        }
        for (b = fa(sa()); p.postfix && !oa();) a = P(b), a.operator = H, a.prefix = !1, a.argument = b, pa(b), s(), b = q(a, "UpdateExpression");
        return b
    }
    function fa(a, b) {
        if (u(va)) {
            var c = P(a);
            c.object = a;
            c.property = M(!0);
            c.computed = !1;
            return fa(q(c, "MemberExpression"), b)
        }
        return u(ha) ? (c = P(a), c.object = a, c.property = A(), c.computed = !0, v(ia), fa(q(c, "MemberExpression"), b)) : !b && u(I) ? (c = P(a), c.callee = a, c.arguments = Ra(E, !1), fa(q(c, "CallExpression"), b)) : a
    }
    function sa() {
        switch (p) {
            case sb:
                var a = y();
                s();
                return q(a, "ThisExpression");
            case U:
                return M();
            case $:
            case ba:
            case za:
                return a = y(), a.value = H, a.raw = l.slice(x, W), s(), q(a, "Literal");
            case tb:
            case ub:
            case vb:
                return a = y(), a.value = p.atomValue, a.raw = p.keyword, s(), q(a, "Literal");
            case I:
                var a = ma,
                    b = x;
                s();
                var e = A();
                e.start = b;
                e.end = W;
                n.locations && (e.loc.start = a, e.loc.end = ga);
                n.ranges && (e.range = [b, W]);
                v(E);
                return e;
            case ha:
                return a = y(), s(), a.elements = Ra(ia, !0, !0), q(a, "ArrayExpression");
            case Y:
                a = y();
                b = !0;
                e = !1;
                a.properties = [];
                for (s(); !u(S);) {
                    if (b) b = !1;
                    else if (v(K), n.allowTrailingCommas && u(S)) break;
                    var f = {
                        key: p === $ || p === ba ? sa() : M(!0)
                    }, d = !1,
                        g;
                    u(Z) ? (f.value = A(!0), g = f.kind = "init") : 5 <= n.ecmaVersion && "Identifier" === f.key.type && ("get" === f.key.name || "set" === f.key.name) ? (d = e = !0, g = f.kind = f.key.name, f.key = p === $ || p === ba ? sa() : M(!0), p !== I && L(), f.value = La(y(), !1)) : L();
                    if ("Identifier" === f.key.type && (B || e)) for (var h = 0; h < a.properties.length; ++h) {
                        var k = a.properties[h];
                        if (k.key.name === f.key.name) {
                            var m = g == k.kind || d && "init" === k.kind || "init" === g && ("get" === k.kind || "set" === k.kind);
                            m && !B && "init" === g && "init" === k.kind && (m = !1);
                            m && c(f.key.start, "Redefinition of property")
                        }
                    }
                    a.properties.push(f)
                }
                return a = q(a, "ObjectExpression");
            case Ka:
                return a = y(), s(), La(a, !1);
            case wb:
                return a = y(), s(), a.callee = fa(sa(), !0), u(I) ? a.arguments = Ra(E, !1) : a.arguments = pb, a = q(a, "NewExpression");
            default:
                L()
        }
    }
    function La(a, b) {
        p === U ? a.id = M() : b ? L() : a.id = null;
        a.params = [];
        var e = !0;
        for (v(I); !u(E);) e ? e = !1 : v(K), a.params.push(M());
        var e = da,
            f = w;
        da = !0;
        w = [];
        a.body = ea(!0);
        da = e;
        w = f;
        if (B || a.body.body.length && Ea(a.body.body[0])) for (e = a.id ? -1 : 0; e < a.params.length; ++e) if (f = 0 > e ? a.id : a.params[e], ($a(f.name) || qa(f.name)) && c(f.start, "Defining '" + f.name + "' in strict mode"), 0 <= e) for (var d = 0; d < e; ++d) f.name === a.params[d].name && c(f.start, "Argument name clash in strict mode");
        return q(a, b ? "FunctionDeclaration" : "FunctionExpression")
    }
    function Ra(a, b, c) {
        for (var e = [], f = !0; !u(a);) {
            if (f) f = !1;
            else if (v(K), b && n.allowTrailingCommas && u(a)) break;
            c && p === K ? e.push(null) : e.push(A(!0))
        }
        return e
    }
    function M(a) {
        var b = y();
        b.name = p === U ? H : a && !n.forbidReserved && p.keyword || L();
        Q = !1;
        s();
        return q(b, "Identifier")
    }
    a.version = "0.4.1";
    var n, l, R, ua;
    a.parse = function (a, c) {
        l = String(a);
        R = l.length;
        b(c);
        G = 1;
        g = D = 0;
        Q = !0;
        m();
        var f, d = n.program;
        Ba = O = g;
        n.locations && (Ca = new e);
        da = B = null;
        w = [];
        z();
        f = d || y();
        var h = !0;
        d || (f.body = []);
        for (; p !== na;) d = F(), f.body.push(d), h && Ea(d) && Da(!0), h = !1;
        return f = q(f,
            "Program")
    };
    var Sa = a.defaultOptions = {
        ecmaVersion: 5,
        strictSemicolons: !1,
        allowTrailingCommas: !0,
        forbidReserved: !1,
        locations: !1,
        onComment: null,
        ranges: !1,
        program: null,
        sourceFile: null,
        directSourceFile: null
    }, zb = a.getLineInfo = function (a, b) {
        for (var c = 1, e = 0;;) {
            X.lastIndex = e;
            var f = X.exec(a);
            if (f && f.index < b)++c, e = f.index + f[0].length;
            else break
        }
        return {
            line: c,
            column: b - e
        }
    };
    a.tokenize = function (a, c) {
        function e(a) {
            z(a);
            f.start = x;
            f.end = W;
            f.startLoc = ma;
            f.endLoc = ga;
            f.type = p;
            f.value = H;
            return f
        }
        l = String(a);
        R = l.length;
        b(c);
        G = 1;
        g = D = 0;
        Q = !0;
        m();
        var f = {};
        e.jumpTo = function (a, b) {
            g = a;
            if (n.locations) {
                G = 1;
                D = X.lastIndex = 0;
                for (var c;
                (c = X.exec(l)) && c.index < a;)++G, D = c.index + c[0].length
            }
            Q = b;
            m()
        };
        return e
    };
    var g, x, W, ma, ga, p, H, Q, G, D, Ba, O, Ca, da, w, B, pb = [],
        $ = {
            type: "num"
        }, za = {
            type: "regexp"
        }, ba = {
            type: "string"
        }, U = {
            type: "name"
        }, na = {
            type: "eof"
        }, Fa = {
            keyword: "break"
        }, Na = {
            keyword: "case",
            beforeExpr: !0
        }, ob = {
            keyword: "catch"
        }, cb = {
            keyword: "continue"
        }, db = {
            keyword: "debugger"
        }, lb = {
            keyword: "default"
        }, eb = {
            keyword: "do",
            isLoop: !0
        }, jb = {
            keyword: "else",
            beforeExpr: !0
        }, qb = {
            keyword: "finally"
        }, fb = {
            keyword: "for",
            isLoop: !0
        }, Ka = {
            keyword: "function"
        }, ib = {
            keyword: "if"
        }, kb = {
            keyword: "return",
            beforeExpr: !0
        }, Ma = {
            keyword: "switch"
        }, mb = {
            keyword: "throw",
            beforeExpr: !0
        }, nb = {
            keyword: "try"
        }, Ja = {
            keyword: "var"
        }, Ha = {
            keyword: "while",
            isLoop: !0
        }, rb = {
            keyword: "with"
        }, wb = {
            keyword: "new",
            beforeExpr: !0
        }, sb = {
            keyword: "this"
        }, tb = {
            keyword: "null",
            atomValue: null
        }, ub = {
            keyword: "true",
            atomValue: !0
        }, vb = {
            keyword: "false",
            atomValue: !1
        }, ra = {
            keyword: "in",
            binop: 7,
            beforeExpr: !0
        }, Aa = {
            "break": Fa,
                "case": Na,
            "catch": ob,
            "continue": cb,
            "debugger": db,
            "default": lb,
            "do": eb,
            "else": jb,
            "finally": qb,
            "for": fb,
            "function": Ka,
            "if": ib,
            "return": kb,
            "switch": Ma,
            "throw": mb,
            "try": nb,
            "var": Ja,
            "while": Ha,
            "with": rb,
            "null": tb,
            "true": ub,
            "false": vb,
            "new": wb,
            "in": ra,
            "instanceof": {
                keyword: "instanceof",
                binop: 7,
                beforeExpr: !0
            },
            "this": sb,
            "typeof": {
                keyword: "typeof",
                prefix: !0,
                beforeExpr: !0
            },
            "void": {
                keyword: "void",
                prefix: !0,
                beforeExpr: !0
            },
            "delete": {
                keyword: "delete",
                prefix: !0,
                beforeExpr: !0
            }
        }, ha = {
            type: "[",
            beforeExpr: !0
        }, ia = {
            type: "]"
        },
        Y = {
            type: "{",
            beforeExpr: !0
        }, S = {
            type: "}"
        }, I = {
            type: "(",
            beforeExpr: !0
        }, E = {
            type: ")"
        }, K = {
            type: ",",
            beforeExpr: !0
        }, J = {
            type: ";",
            beforeExpr: !0
        }, Z = {
            type: ":",
            beforeExpr: !0
        }, va = {
            type: "."
        }, wa = {
            type: "?",
            beforeExpr: !0
        }, xa = {
            binop: 10,
            beforeExpr: !0
        }, ya = {
            isAssign: !0,
            beforeExpr: !0
        }, T = {
            isAssign: !0,
            beforeExpr: !0
        }, Fb = {
            postfix: !0,
            prefix: !0,
            isUpdate: !0
        }, Va = {
            prefix: !0,
            beforeExpr: !0
        }, Ta = {
            binop: 1,
            beforeExpr: !0
        }, Ua = {
            binop: 2,
            beforeExpr: !0
        }, Cb = {
            binop: 3,
            beforeExpr: !0
        }, Eb = {
            binop: 4,
            beforeExpr: !0
        }, Db = {
            binop: 5,
            beforeExpr: !0
        }, Jb = {
            binop: 6,
            beforeExpr: !0
        }, Ib = {
            binop: 7,
            beforeExpr: !0
        }, Hb = {
            binop: 8,
            beforeExpr: !0
        }, Gb = {
            binop: 9,
            prefix: !0,
            beforeExpr: !0
        }, Bb = {
            binop: 10,
            beforeExpr: !0
        };
    a.tokTypes = {
        bracketL: ha,
        bracketR: ia,
        braceL: Y,
        braceR: S,
        parenL: I,
        parenR: E,
        comma: K,
        semi: J,
        colon: Z,
        dot: va,
        question: wa,
        slash: xa,
        eq: ya,
        name: U,
        eof: na,
        num: $,
        regexp: za,
        string: ba
    };
    for (var xb in Aa) a.tokTypes["_" + xb] = Aa[xb];
    var Lb = d("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),
        Mb = d("class enum extends super const export import"),
        $a = d("implements interface let package private protected public static yield"),
        qa = d("eval arguments"),
        Kb = d("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),
        Ab = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
        yb = "\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
        Ob = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f",
        Xa = RegExp("[" + yb + "]"),
        Pb = RegExp("[" + yb + Ob + "]"),
        la = /[\n\r\u2028\u2029]/,
        X = /\r\n|[\n\r\u2028\u2029]/g,
        ja = a.isIdentifierStart = function (a) {
            return 65 > a ? 36 === a : 91 > a ? !0 : 97 > a ? 95 === a : 123 > a ? !0 : 170 <= a && Xa.test(String.fromCharCode(a))
        }, Za = a.isIdentifierChar = function (a) {
            return 48 > a ? 36 === a : 58 > a ? !0 : 65 > a ? !1 : 91 > a ? !0 : 97 > a ? 95 === a : 123 > a ? !0 : 170 <= a && Pb.test(String.fromCharCode(a))
        }, aa, Ga = {
            kind: "loop"
        }, Nb = {
            kind: "switch"
        }
};
"object" == typeof exports && "object" == typeof module ? mod$$inline_58(exports) : "function" == typeof define && define.amd ? define(["exports"], mod$$inline_58) : mod$$inline_58(this.acorn || (this.acorn = {}));
// JS-Interpreter: Copyright 2013 Google Inc, Apache 2.0
var Interpreter = function (a, b) {
    this.initFunc_ = b;
    this.UNDEFINED = this.createPrimitive(void 0);
    this.ast = acorn.parse(a);
    var c = this.createScope(this.ast, null);
    this.stateStack = [{
        node: this.ast,
        scope: c,
        thisExpression: c
    }]
};
Interpreter.prototype.step = function () {
    if (0 == this.stateStack.length) return !1;
    var a = this.stateStack[0];
    this["step" + a.node.type]();
    return !0
};
Interpreter.prototype.run = function () {
    for (; this.step(););
};
Interpreter.prototype.initGlobalScope = function (a) {
    this.setProperty(a, "Infinity", this.createPrimitive(Infinity), !0);
    this.setProperty(a, "NaN", this.createPrimitive(NaN), !0);
    this.setProperty(a, "undefined", this.UNDEFINED, !0);
    this.setProperty(a, "window", a, !0);
    this.setProperty(a, "self", a, !1);
    this.initFunction(a);
    this.initObject(a);
    a.parent = this.OBJECT;
    this.initArray(a);
    this.initNumber(a);
    this.initString(a);
    this.initBoolean(a);
    this.initDate(a);
    this.initMath(a);
    var b = this,
        c;
    c = function (a) {
        a = a || b.UNDEFINED;
        return b.createPrimitive(isNaN(a.toNumber()))
    };
    this.setProperty(a, "isNaN", this.createNativeFunction(c));
    c = function (a) {
        a = a || b.UNDEFINED;
        return b.createPrimitive(isFinite(a.toNumber()))
    };
    this.setProperty(a, "isFinite", this.createNativeFunction(c));
    c = function (a) {
        a = a || b.UNDEFINED;
        return b.createPrimitive(parseFloat(a.toNumber()))
    };
    this.setProperty(a, "parseFloat", this.createNativeFunction(c));
    c = function (a, c) {
        a = a || b.UNDEFINED;
        c = c || b.UNDEFINED;
        return b.createPrimitive(parseInt(a.toString(), c.toNumber()))
    };
    this.setProperty(a, "parseInt", this.createNativeFunction(c));
    c = this.createObject(this.FUNCTION);
    c.eval = !0;
    this.setProperty(c, "length", this.createPrimitive(1), !0);
    this.setProperty(a, "eval", c);
    for (var d = "escape unescape decodeURI decodeURIComponent encodeURI encodeURIComponent".split(" "), e = 0; e < d.length; e++) c = function (a) {
        return function (c) {
            c = c || b.UNDEFINED;
            return b.createPrimitive(a(c.toString()))
        }
    }(window[d[e]]), this.setProperty(a, d[e], this.createNativeFunction(c));
    this.initFunc_ && this.initFunc_(this,
    a)
};
Interpreter.prototype.initFunction = function (a) {
    var b = this,
        c;
    c = function (a) {
        for (var c = this.parent == b.FUNCTION ? this : b.createObject(b.FUNCTION), f = arguments.length ? arguments[arguments.length - 1].toString() : "", h = [], m = 0; m < arguments.length - 1; m++) h.push(arguments[m].toString());
        h = h.join(", ");
        if (-1 != h.indexOf(")")) throw new SyntaxError("Function arg string contains parenthesis");
        c.parentScope = b.stateStack[b.stateStack.length - 1].scope;
        f = acorn.parse("$ = function(" + h + ") {" + f + "};");
        c.node = f.body[0].expression.right;
        b.setProperty(c,
            "length", b.createPrimitive(c.node.length), !0);
        return c
    };
    this.FUNCTION = this.createObject(null);
    this.setProperty(a, "Function", this.FUNCTION);
    this.FUNCTION.type = "function";
    this.setProperty(this.FUNCTION, "prototype", this.createObject(null));
    this.FUNCTION.nativeFunc = c;
    a = {
        type: "FunctionApply_",
        params: [],
        id: null,
        body: null,
        start: 0,
        end: 0
    };
    this.setProperty(this.FUNCTION.properties.prototype, "apply", this.createFunction(a, {}), !1, !0);
    a = {
        type: "FunctionCall_",
        params: [],
        id: null,
        body: null,
        start: 0,
        end: 0
    };
    this.setProperty(this.FUNCTION.properties.prototype,
        "call", this.createFunction(a, {}), !1, !0);
    c = function () {
        return b.createPrimitive(this.toString())
    };
    this.setProperty(this.FUNCTION.properties.prototype, "toString", this.createNativeFunction(c), !1, !0);
    this.setProperty(this.FUNCTION, "toString", this.createNativeFunction(c), !1, !0);
    c = function () {
        return b.createPrimitive(this.valueOf())
    };
    this.setProperty(this.FUNCTION.properties.prototype, "valueOf", this.createNativeFunction(c), !1, !0);
    this.setProperty(this.FUNCTION, "valueOf", this.createNativeFunction(c), !1, !0)
};
Interpreter.prototype.initObject = function (a) {
    var b = this,
        c;
    c = function () {
        var a = this.parent == b.OBJECT ? this : b.createObject(b.OBJECT);
        return a
    };
    this.OBJECT = this.createNativeFunction(c);
    this.setProperty(a, "Object", this.OBJECT);
    c = function () {
        return b.createPrimitive(this.toString())
    };
    this.setProperty(this.OBJECT.properties.prototype, "toString", this.createNativeFunction(c), !1, !0);
    c = function () {
        return b.createPrimitive(this.valueOf())
    };
    this.setProperty(this.OBJECT.properties.prototype, "valueOf", this.createNativeFunction(c), !1, !0)
};
Interpreter.prototype.initArray = function (a) {
    var b = this,
        c = function (a, b) {
            var c = a ? Math.floor(a.toNumber()) : b;
            isNaN(c) && (c = b);
            return c
        }, d;
    d = function (a) {
        var c = this.parent == b.ARRAY ? this : b.createObject(b.ARRAY),
            d = arguments[0];
        if (d && "number" == d.type) {
            if (isNaN(b.arrayIndex(d))) throw new RangeError("Invalid array length");
            c.length = d.data
        } else {
            for (d = 0; d < arguments.length; d++) c.properties[d] = arguments[d];
            c.length = d
        }
        return c
    };
    this.ARRAY = this.createNativeFunction(d);
    this.setProperty(a, "Array", this.ARRAY);
    d = function () {
        if (this.length) {
            var a = this.properties[this.length - 1];
            delete this.properties[this.length - 1];
            this.length--
        } else a = b.UNDEFINED;
        return a
    };
    this.setProperty(this.ARRAY.properties.prototype, "pop", this.createNativeFunction(d), !1, !0);
    d = function (a) {
        for (var c = 0; c < arguments.length; c++) this.properties[this.length] = arguments[c], this.length++;
        return b.createPrimitive(this.length)
    };
    this.setProperty(this.ARRAY.properties.prototype, "push", this.createNativeFunction(d), !1, !0);
    d = function () {
        if (this.length) {
            for (var a = this.properties[0], c = 1; c < this.length; c++) this.properties[c - 1] = this.properties[c];
            this.length--;
            delete this.properties[this.length]
        } else a = b.UNDEFINED;
        return a
    };
    this.setProperty(this.ARRAY.properties.prototype, "shift", this.createNativeFunction(d), !1, !0);
    d = function (a) {
        for (var c = this.length - 1; 0 <= c; c--) this.properties[c + arguments.length] = this.properties[c];
        this.length += arguments.length;
        for (c = 0; c < arguments.length; c++) this.properties[c] = arguments[c];
        return b.createPrimitive(this.length)
    };
    this.setProperty(this.ARRAY.properties.prototype,
        "unshift", this.createNativeFunction(d), !1, !0);
    d = function () {
        for (var a = 0; a < this.length / 2; a++) {
            var c = this.properties[this.length - a - 1];
            this.properties[this.length - a - 1] = this.properties[a];
            this.properties[a] = c
        }
        return b.UNDEFINED
    };
    this.setProperty(this.ARRAY.properties.prototype, "reverse", this.createNativeFunction(d), !1, !0);
    d = function (a, d, h) {
        a = c(a, 0);
        a = 0 > a ? Math.max(this.length + a, 0) : Math.min(a, this.length);
        d = c(d, Infinity);
        d = Math.min(d, this.length - a);
        for (var m = b.createObject(b.ARRAY), r = a; r < a + d; r++) m.properties[m.length++] = this.properties[r], this.properties[r] = this.properties[r + d];
        for (r = a + d; r < this.length; r++) delete this.properties[r];
        this.length -= d;
        for (r = this.length - 1; r >= a; r--) this.properties[r + arguments.length - 2] = this.properties[r];
        this.length += arguments.length - 2;
        for (r = 2; r < arguments.length; r++) this.properties[a + r - 2] = arguments[r];
        return m
    };
    this.setProperty(this.ARRAY.properties.prototype, "splice", this.createNativeFunction(d), !1, !0);
    d = function (a, d) {
        var h = b.createObject(b.ARRAY),
            m = c(a, 0);
        0 > m && (m = this.length + m);
        var m = Math.max(0, Math.min(m, this.length)),
            r = c(d, this.length);
        0 > r && (r = this.length + r);
        for (var r = Math.max(0, Math.min(r, this.length)), z = 0; m < r; m++) {
            var t = b.getProperty(this, m);
            b.setProperty(h, z++, t)
        }
        return h
    };
    this.setProperty(this.ARRAY.properties.prototype, "slice", this.createNativeFunction(d), !1, !0);
    d = function (a) {
        a = a && void 0 !== a.data ? a.toString() : void 0;
        for (var c = [], d = 0; d < this.length; d++) c[d] = this.properties[d];
        return b.createPrimitive(c.join(a))
    };
    this.setProperty(this.ARRAY.properties.prototype, "join", this.createNativeFunction(d), !1, !0);
    d = function (a) {
        for (var c = b.createObject(b.ARRAY), d = 0, m = 0; m < this.length; m++) {
            var r = b.getProperty(this, m);
            b.setProperty(c, d++, r)
        }
        for (m = 0; m < arguments.length; m++) {
            var z = arguments[m];
            if (b.isa(z, b.ARRAY)) for (var t = 0; t < z.length; t++) r = b.getProperty(z, t), b.setProperty(c, d++, r);
            else b.setProperty(c, d++, z)
        }
        return c
    };
    this.setProperty(this.ARRAY.properties.prototype, "concat", this.createNativeFunction(d), !1, !0);
    d = function (a, d) {
        a = a || b.UNDEFINED;
        var h = c(d, 0);
        0 > h && (h = this.length + h);
        for (h = Math.max(0, Math.min(h,
        this.length)); h < this.length; h++) {
            var m = b.getProperty(this, h);
            if (0 == b.comp(m, a)) return b.createPrimitive(h)
        }
        return b.createPrimitive(-1)
    };
    this.setProperty(this.ARRAY.properties.prototype, "indexOf", this.createNativeFunction(d), !1, !0);
    d = function (a, d) {
        a = a || b.UNDEFINED;
        var h = c(d, this.length);
        0 > h && (h = this.length + h);
        for (h = Math.max(0, Math.min(h, this.length)); 0 <= h; h--) {
            var m = b.getProperty(this, h);
            if (0 == b.comp(m, a)) return b.createPrimitive(h)
        }
        return b.createPrimitive(-1)
    };
    this.setProperty(this.ARRAY.properties.prototype,
        "lastIndexOf", this.createNativeFunction(d), !1, !0)
};
Interpreter.prototype.initNumber = function (a) {
    var b = this,
        c;
    c = function (a) {
        a = a ? a.toNumber() : 0;
        if (this.parent == b.NUMBER) this.toBoolean = function () {
            return !!a
        }, this.toNumber = function () {
            return a
        }, this.toString = function () {
            return String(a)
        };
        else return b.createPrimitive(a)
    };
    this.NUMBER = this.createNativeFunction(c);
    this.setProperty(a, "Number", this.NUMBER);
    a = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"];
    for (c = 0; c < a.length; c++) this.setProperty(this.NUMBER, a[c], this.createPrimitive(Number[a[c]]));
    c = function (a) {
        a = a ? a.toNumber() : void 0;
        var c = this.toNumber();
        return b.createPrimitive(c.toExponential(a))
    };
    this.setProperty(this.NUMBER.properties.prototype, "toExponential", this.createNativeFunction(c), !1, !0);
    c = function (a) {
        a = a ? a.toNumber() : void 0;
        var c = this.toNumber();
        return b.createPrimitive(c.toFixed(a))
    };
    this.setProperty(this.NUMBER.properties.prototype, "toFixed", this.createNativeFunction(c), !1, !0);
    c = function (a) {
        a = a ? a.toNumber() : void 0;
        var c = this.toNumber();
        return b.createPrimitive(c.toPrecision(a))
    };
    this.setProperty(this.NUMBER.properties.prototype, "toPrecision", this.createNativeFunction(c), !1, !0)
};
Interpreter.prototype.initString = function (a) {
    var b = this,
        c;
    c = function (a) {
        a = (a || b.UNDEFINED).toString();
        if (this.parent == b.STRING) this.toBoolean = function () {
            return !!a
        }, this.toNumber = function () {
            return Number(a)
        }, this.toString = function () {
            return a
        }, this.valueOf = function () {
            return a
        }, this.data = a;
        else return b.createPrimitive(a)
    };
    this.STRING = this.createNativeFunction(c);
    this.setProperty(a, "String", this.STRING);
    a = ["toLowerCase", "toUpperCase", "toLocaleLowerCase", "toLocaleUpperCase"];
    for (var d = 0; d < a.length; d++) c = function (a) {
        return function () {
            return b.createPrimitive(a.apply(this))
        }
    }(String.prototype[a[d]]), this.setProperty(this.STRING.properties.prototype, a[d], this.createNativeFunction(c), !1, !0);
    c = function () {
        var a = this.toString();
        return b.createPrimitive(a.replace(/^\s+|\s+$/g, ""))
    };
    this.setProperty(this.STRING.properties.prototype, "trim", this.createNativeFunction(c), !1, !0);
    c = function () {
        var a = this.toString();
        return b.createPrimitive(a.replace(/^\s+/g, ""))
    };
    this.setProperty(this.STRING.properties.prototype,
        "trimLeft", this.createNativeFunction(c), !1, !0);
    c = function () {
        var a = this.toString();
        return b.createPrimitive(a.replace(/\s+$/g, ""))
    };
    this.setProperty(this.STRING.properties.prototype, "trimRight", this.createNativeFunction(c), !1, !0);
    c = function (a) {
        var c = this.toString();
        a = (a || b.UNDEFINED).toNumber();
        return b.createPrimitive(c.charAt(a))
    };
    this.setProperty(this.STRING.properties.prototype, "charAt", this.createNativeFunction(c), !1, !0);
    c = function (a) {
        var c = this.toString();
        a = (a || b.UNDEFINED).toNumber();
        return b.createPrimitive(c.charCodeAt(a))
    };
    this.setProperty(this.STRING.properties.prototype, "charCodeAt", this.createNativeFunction(c), !1, !0);
    c = function (a, c) {
        var d = this.toString();
        a = (a || b.UNDEFINED).toString();
        c = c ? c.toNumber() : void 0;
        return b.createPrimitive(d.indexOf(a, c))
    };
    this.setProperty(this.STRING.properties.prototype, "indexOf", this.createNativeFunction(c), !1, !0);
    c = function (a, c) {
        var d = this.toString();
        a = (a || b.UNDEFINED).toString();
        c = c ? c.toNumber() : void 0;
        return b.createPrimitive(d.lastIndexOf(a, c))
    };
    this.setProperty(this.STRING.properties.prototype,
        "lastIndexOf", this.createNativeFunction(c), !1, !0);
    c = function (a, c) {
        var d = this.toString();
        a = a ? a.toString() : void 0;
        c = c ? c.toNumber() : void 0;
        for (var d = d.split(a, c), m = b.createObject(b.ARRAY), r = 0; r < d.length; r++) b.setProperty(m, r, b.createPrimitive(d[r]));
        return m
    };
    this.setProperty(this.STRING.properties.prototype, "split", this.createNativeFunction(c), !1, !0);
    c = function (a, c) {
        var d = this.toString();
        a = a ? a.toNumber() : void 0;
        c = c ? c.toNumber() : void 0;
        return b.createPrimitive(d.substring(a, c))
    };
    this.setProperty(this.STRING.properties.prototype,
        "substring", this.createNativeFunction(c), !1, !0);
    c = function (a, c) {
        var d = this.toString();
        a = a ? a.toNumber() : void 0;
        c = c ? c.toNumber() : void 0;
        return b.createPrimitive(d.substr(a, c))
    };
    this.setProperty(this.STRING.properties.prototype, "substr", this.createNativeFunction(c), !1, !0);
    c = function (a) {
        for (var c = this.toString(), d = 0; d < arguments.length; d++) c += arguments[d].toString();
        return b.createPrimitive(c)
    };
    this.setProperty(this.STRING.properties.prototype, "concat", this.createNativeFunction(c), !1, !0);
    c = function (a,
    c) {
        var d = this.toString();
        a = a ? a.toNumber() : void 0;
        c = c ? c.toNumber() : void 0;
        return b.createPrimitive(d.slice(a, c))
    };
    this.setProperty(this.STRING.properties.prototype, "slice", this.createNativeFunction(c), !1, !0)
};
Interpreter.prototype.initBoolean = function (a) {
    var b = this,
        c;
    c = function (a) {
        a = a ? a.toBoolean() : !1;
        if (this.parent == b.STRING) this.toBoolean = function () {
            return a
        }, this.toNumber = function () {
            return Number(a)
        }, this.toString = function () {
            return String(a)
        }, this.valueOf = function () {
            return a
        };
        else return b.createPrimitive(a)
    };
    this.BOOLEAN = this.createNativeFunction(c);
    this.setProperty(a, "Boolean", this.BOOLEAN)
};
Interpreter.prototype.initDate = function (a) {
    var b = this,
        c;
    c = function (a, c, d, m, r, z, t) {
        var C = this.parent == b.DATE ? this : b.createObject(b.DATE),
            k = a;
        if (arguments.length) if (1 != arguments.length || "string" != k.type && !b.isa(k, b.STRING)) {
            for (var k = [], N = 0; N < arguments.length; N++) k[N] = arguments[N] ? arguments[N].toNumber() : void 0;
            C.date = 1 == k.length ? new Date(k[0]) : 2 == k.length ? new Date(k[0], k[1]) : 3 == k.length ? new Date(k[0], k[1], k[2]) : 4 == k.length ? new Date(k[0], k[1], k[2], k[3]) : 5 == k.length ? new Date(k[0], k[1], k[2], k[3], k[4]) : 7 == k.length ? new Date(k[0], k[1], k[2], k[3], k[4], k[5]) : new Date(k[0], k[1], k[2], k[3], k[4], k[5], k[6])
        } else C.date = new Date(k.toString());
        else C.date = new Date;
        C.toString = function () {
            return String(this.date)
        };
        C.toNumber = function () {
            return Number(this.date)
        };
        C.valueOf = function () {
            return this.date.valueOf()
        };
        return C
    };
    this.DATE = this.createNativeFunction(c);
    this.setProperty(a, "Date", this.DATE);
    c = function () {
        return b.createPrimitive((new Date).getTime())
    };
    this.setProperty(this.DATE, "now", this.createNativeFunction(c), !1, !0);
    c = function (a) {
        a = a ? a.toString() : void 0;
        return b.createPrimitive(Date.parse(a))
    };
    this.setProperty(this.DATE, "parse", this.createNativeFunction(c), !1, !0);
    c = function (a, c, d, m, r, z, t) {
        for (var C = [], k = 0; k < arguments.length; k++) C[k] = arguments[k] ? arguments[k].toNumber() : void 0;
        return b.createPrimitive(Date.UTC.apply(Date, C))
    };
    this.setProperty(this.DATE, "UTC", this.createNativeFunction(c), !1, !0);
    var d = "getDate getDay getFullYear getHours getMilliseconds getMinutes getMonth getSeconds getTime getTimezoneOffset getUTCDate getUTCDay getUTCFullYear getUTCHours getUTCMilliseconds getUTCMinutes getUTCMonth getUTCSeconds getYear".split(" ");
    for (a = 0; a < d.length; a++) c = function (a) {
        return function () {
            return b.createPrimitive(this.date[a]())
        }
    }(d[a]), this.setProperty(this.DATE.properties.prototype, d[a], this.createNativeFunction(c), !1, !0);
    d = "setDate setFullYear setHours setMilliseconds setMinutes setMonth setSeconds setTime setUTCDate setUTCFullYear setUTCHours setUTCMilliseconds setUTCMinutes setUTCMonth setUTCSeconds setYear".split(" ");
    for (a = 0; a < d.length; a++) c = function (a) {
        return function (c) {
            for (var d = [], m = 0; m < arguments.length; m++) d[m] = arguments[m] ? arguments[m].toNumber() : void 0;
            return b.createPrimitive(this.date[a].apply(this.date, d))
        }
    }(d[a]), this.setProperty(this.DATE.properties.prototype, d[a], this.createNativeFunction(c), !1, !0);
    d = "toDateString toISOString toGMTString toLocaleDateString toLocaleString toLocaleTimeString toTimeString toUTCString".split(" ");
    for (a = 0; a < d.length; a++) c = function (a) {
        return function () {
            return b.createPrimitive(this.date[a]())
        }
    }(d[a]), this.setProperty(this.DATE.properties.prototype, d[a], this.createNativeFunction(c), !1, !0)
};
Interpreter.prototype.initMath = function (a) {
    var b = this,
        c = this.createObject(this.OBJECT);
    this.setProperty(a, "Math", c);
    var d = "E LN2 LN10 LOG2E LOG10E PI SQRT1_2 SQRT2".split(" ");
    for (a = 0; a < d.length; a++) this.setProperty(c, d[a], this.createPrimitive(Math[d[a]]));
    d = "abs acos asin atan atan2 ceil cos exp floor log max min pow random round sin sqrt tan".split(" ");
    for (a = 0; a < d.length; a++) {
        var e = function (a) {
            return function () {
                for (var c = 0; c < arguments.length; c++) arguments[c] = arguments[c].toNumber();
                return b.createPrimitive(a.apply(Math, arguments))
            }
        }(Math[d[a]]);
        this.setProperty(c, d[a], this.createNativeFunction(e))
    }
};
Interpreter.prototype.isa = function (a, b) {
    if (a && b) {
        if (a.parent == b) return !0;
        if (!a.parent || !a.parent.prototype) return !1
    } else return !1;
    return this.isa(a.parent.prototype, b)
};
Interpreter.prototype.comp = function (a, b) {
    if (a.isPrimitive && "number" == typeof a && isNaN(a.data) || b.isPrimitive && "number" == typeof b && isNaN(b.data) || !a.isPrimitive || !b.isPrimitive) return NaN;
    a = a.data;
    b = b.data;
    return a < b ? -1 : a > b ? 1 : 0
};
Interpreter.prototype.arrayIndex = function (a) {
    a = Number(a);
    return !isFinite(a) || a != Math.floor(a) || 0 > a ? NaN : a
};
Interpreter.prototype.createPrimitive = function (a) {
    var b = typeof a;
    a = {
        data: a,
        isPrimitive: !0,
        type: b,
        toBoolean: function () {
            return Boolean(this.data)
        },
        toNumber: function () {
            return Number(this.data)
        },
        toString: function () {
            return String(this.data)
        },
        valueOf: function () {
            return this.data
        }
    };
    "number" == b ? a.parent = this.NUMBER : "string" == b ? a.parent = this.STRING : "boolean" == b && (a.parent = this.BOOLEAN);
    return a
};
Interpreter.prototype.createObject = function (a) {
    a = {
        isPrimitive: !1,
        type: "object",
        parent: a,
        fixed: Object.create(null),
        nonenumerable: Object.create(null),
        properties: Object.create(null),
        toBoolean: function () {
            return !0
        },
        toNumber: function () {
            return 0
        },
        toString: function () {
            return "[" + this.type + "]"
        },
        valueOf: function () {
            return this
        }
    };
    this.isa(a, this.FUNCTION) && (a.type = "function", this.setProperty(a, "prototype", this.createObject(this.OBJECT || null)));
    this.isa(a, this.ARRAY) && (a.length = 0, a.toString = function () {
        for (var a = [], c = 0; c < this.length; c++) a[c] = this.properties[c].toString();
        return a.join(",")
    });
    return a
};
Interpreter.prototype.createFunction = function (a, b) {
    var c = this.createObject(this.FUNCTION);
    c.parentScope = b || this.getScope();
    c.node = a;
    this.setProperty(c, "length", this.createPrimitive(c.node.params.length), !0);
    return c
};
Interpreter.prototype.createNativeFunction = function (a) {
    var b = this.createObject(this.FUNCTION);
    b.nativeFunc = a;
    this.setProperty(b, "length", this.createPrimitive(a.length), !0);
    return b
};
Interpreter.prototype.getProperty = function (a, b) {
    b = b.toString();
    if (this.isa(a, this.STRING)) {
        if ("length" == b) return this.createPrimitive(a.data.length);
        var c = this.arrayIndex(b);
        if (!isNaN(c) && c < a.data.length) return this.createPrimitive(a.data[c])
    } else if (this.isa(a, this.ARRAY) && "length" == b) return this.createPrimitive(a.length);
    for (;;) {
        if (a.properties && b in a.properties) return a.properties[b];
        if (a.parent && a.parent.properties && a.parent.properties.prototype) a = a.parent.properties.prototype;
        else break
    }
    return this.UNDEFINED
};
Interpreter.prototype.hasProperty = function (a, b) {
    b = b.toString();
    if (a.isPrimitive) throw new TypeError("Primitive data type has no properties");
    if ("length" == b && (this.isa(a, this.STRING) || this.isa(a, this.ARRAY))) return !0;
    if (this.isa(a, this.STRING)) {
        var c = this.arrayIndex(b);
        if (!isNaN(c) && c < a.data.length) return !0
    }
    for (;;) {
        if (a.properties && b in a.properties) return !0;
        if (a.parent && a.parent.properties && a.parent.properties.prototype) a = a.parent.properties.prototype;
        else break
    }
    return !1
};
Interpreter.prototype.setProperty = function (a, b, c, d, e) {
    b = b.toString();
    if (!a.isPrimitive && !a.fixed[b]) {
        if (this.isa(a, this.STRING)) {
            var f = this.arrayIndex(b);
            if ("length" == b || !isNaN(f) && f < a.data.length) return
        }
        if (this.isa(a, this.ARRAY)) {
            var h;
            if ("length" == b) {
                b = this.arrayIndex(c.toNumber());
                if (isNaN(b)) throw new RangeError("Invalid array length");
                if (b < a.length) for (h in a.properties) h = this.arrayIndex(h), !isNaN(h) && b <= h && delete a.properties[h];
                a.length = b;
                return
            }
            isNaN(h = this.arrayIndex(b)) || (a.length = Math.max(a.length,
            h + 1))
        }
        a.properties[b] = c;
        d && (a.fixed[b] = !0);
        e && (a.nonenumerable[b] = !0)
    }
};
Interpreter.prototype.deleteProperty = function (a, b) {
    b = b.toString();
    return a.isPrimitive || a.fixed[b] || "length" == b && this.isa(a, this.ARRAY) ? !1 : delete a.properties[b]
};
Interpreter.prototype.getScope = function () {
    for (var a = 0; a < this.stateStack.length; a++) if (this.stateStack[a].scope) return this.stateStack[a].scope;
    throw "No scope found.";
};
Interpreter.prototype.createScope = function (a, b) {
    var c = this.createObject(null);
    (c.parentScope = b) || this.initGlobalScope(c);
    this.populateScope_(a, c);
    return c
};
Interpreter.prototype.getValueFromScope = function (a) {
    var b = this.getScope();
    for (a = a.toString(); b;) {
        if (this.hasProperty(b, a)) return this.getProperty(b, a);
        b = b.parentScope
    }
    throw "Unknown identifier: " + a;
};
Interpreter.prototype.setValueToScope = function (a, b) {
    for (var c = this.getScope(), d = a.toString(); c;) {
        if (this.hasProperty(c, d)) return this.setProperty(c, d, b);
        c = c.parentScope
    }
    throw "Unknown identifier: " + d;
};
Interpreter.prototype.populateScope_ = function (a, b) {
    if ("VariableDeclaration" == a.type) for (var c = 0; c < a.declarations.length; c++) this.setProperty(b, a.declarations[c].id.name, this.UNDEFINED);
    else {
        if ("FunctionDeclaration" == a.type) {
            this.setProperty(b, a.id.name, this.createFunction(a, b));
            return
        }
        if ("FunctionExpression" == a.type) return
    }
    var d = this,
        e;
    for (e in a) {
        var f = a[e];
        if (f && "object" == typeof f) if ("number" == typeof f.length && f.splice) for (c = 0; c < f.length; c++) {
            var h = f[c];
            h.constructor == d.ast.constructor && d.populateScope_(h,
            b)
        } else f.constructor == d.ast.constructor && d.populateScope_(f, b)
    }
};
Interpreter.prototype.getValue = function (a) {
    if (a.length) {
        var b = a[0];
        a = a[1];
        return this.getProperty(b, a)
    }
    return this.getValueFromScope(a)
};
Interpreter.prototype.setValue = function (a, b) {
    if (a.length) {
        var c = a[0],
            d = a[1];
        this.setProperty(c, d, b)
    } else this.setValueToScope(a, b)
};
Interpreter.prototype.stepArrayExpression = function () {
    var a = this.stateStack[0],
        b = a.node,
        c = a.n || 0;
    a.array ? this.setProperty(a.array, c - 1, a.value) : a.array = this.createObject(this.ARRAY);
    b.elements[c] ? (a.n = c + 1, this.stateStack.unshift({
        node: b.elements[c]
    })) : (a.array.length = a.n || 0, this.stateStack.shift(), this.stateStack[0].value = a.array)
};
Interpreter.prototype.stepAssignmentExpression = function () {
    var a = this.stateStack[0],
        b = a.node;
    if (a.doneLeft) if (a.doneRight) {
        this.stateStack.shift();
        var c = a.leftSide,
            d = a.value;
        if ("=" == b.operator) b = d;
        else {
            var a = this.getValue(c),
                e = a.toNumber(),
                f = d.toNumber();
            if ("+=" == b.operator) "string" == a.type || "string" == d.type ? (b = a.toString(), a = d.toString()) : (b = e, a = f), b += a;
            else if ("-=" == b.operator) b = e - f;
            else if ("*=" == b.operator) b = e * f;
            else if ("/=" == b.operator) b = e / f;
            else if ("%=" == b.operator) b = e % f;
            else if ("<<=" == b.operator) b = e << f;
            else if (">>=" == b.operator) b = e >> f;
            else if (">>>=" == b.operator) b = e >>> f;
            else if ("&=" == b.operator) b = e & f;
            else if ("^=" == b.operator) b = e ^ f;
            else if ("|=" == b.operator) b = e | f;
            else throw "Unknown assignment expression: " + b.operator;
            b = this.createPrimitive(b)
        }
        this.setValue(c, b);
        this.stateStack[0].value = b
    } else a.doneRight = !0, a.leftSide = a.value, this.stateStack.unshift({
        node: b.right
    });
    else a.doneLeft = !0, this.stateStack.unshift({
        node: b.left,
        components: !0
    })
};
Interpreter.prototype.stepBinaryExpression = function () {
    var a = this.stateStack[0],
        b = a.node;
    if (a.doneLeft) if (a.doneRight) {
        this.stateStack.shift();
        var c = a.leftValue,
            a = a.value,
            d = this.comp(c, a);
        if ("==" == b.operator || "!=" == b.operator) c = 0 === d, "!=" == b.operator && (c = !c);
        else if ("===" == b.operator || "!==" == b.operator) c = c.isPrimitive && a.isPrimitive ? c.data === a.data : c === a, "!==" == b.operator && (c = !c);
        else if (">" == b.operator) c = 1 == d;
        else if (">=" == b.operator) c = 1 == d || 0 === d;
        else if ("<" == b.operator) c = -1 == d;
        else if ("<=" == b.operator) c = -1 == d || 0 === d;
        else if ("+" == b.operator) "string" == c.type || "string" == a.type ? (c = c.toString(), a = a.toString()) : (c = c.toNumber(), a = a.toNumber()), c += a;
        else if ("in" == b.operator) c = this.hasProperty(a, c);
        else if (c = c.toNumber(), a = a.toNumber(), "-" == b.operator) c -= a;
        else if ("*" == b.operator) c *= a;
        else if ("/" == b.operator) c /= a;
        else if ("%" == b.operator) c %= a;
        else if ("&" == b.operator) c &= a;
        else if ("|" == b.operator) c |= a;
        else if ("^" == b.operator) c ^= a;
        else if ("<<" == b.operator) c <<= a;
        else if (">>" == b.operator) c >>= a;
        else if (">>>" == b.operator) c >>>= a;
        else throw "Unknown binary operator: " + b.operator;
        this.stateStack[0].value = this.createPrimitive(c)
    } else a.doneRight = !0, a.leftValue = a.value, this.stateStack.unshift({
        node: b.right
    });
    else a.doneLeft = !0, this.stateStack.unshift({
        node: b.left
    })
};
Interpreter.prototype.stepBreakStatement = function () {
    var a = this.stateStack.shift(),
        a = a.node,
        b = null;
    a.label && (b = a.label.name);
    for (a = this.stateStack.shift(); a && "callExpression" != a.node.type;) {
        if (b ? b == a.label : a.isLoop) return;
        a = this.stateStack.shift()
    }
    throw new SyntaxError("Illegal break statement");
};
Interpreter.prototype.stepBlockStatement = function () {
    var a = this.stateStack[0],
        b = a.node,
        c = a.n_ || 0;
    b.body[c] ? (a.n_ = c + 1, this.stateStack.unshift({
        node: b.body[c]
    })) : this.stateStack.shift()
};
Interpreter.prototype.stepCallExpression = function () {
    var a = this.stateStack[0],
        b = a.node;
    if (a.doneCallee_) {
        if (a.func_) c = a.n_, a.arguments.length != b.arguments.length && (a.arguments[c - 1] = a.value);
        else {
            if ("function" == a.value.type) a.func_ = a.value;
            else if (a.member_ = a.value[0], a.func_ = this.getValue(a.value), !a.func_ || "function" != a.func_.type) throw new TypeError((a.func_ && a.func_.type) + " is not a function");
            "NewExpression" == a.node.type ? (a.funcThis_ = this.createObject(a.func_), a.isConstructor_ = !0) : a.funcThis_ = a.value.length ? a.value[0] : this.stateStack[this.stateStack.length - 1].thisExpression;
            a.arguments = [];
            var c = 0
        }
        if (b.arguments[c]) a.n_ = c + 1, this.stateStack.unshift({
            node: b.arguments[c]
        });
        else if (a.doneExec) this.stateStack.shift(), this.stateStack[0].value = a.isConstructor_ ? a.funcThis_ : a.value;
        else {
            a.doneExec = !0;
            if (a.func_.node && ("FunctionApply_" == a.func_.node.type || "FunctionCall_" == a.func_.node.type)) {
                a.funcThis_ = a.arguments.shift();
                if ("FunctionApply_" == a.func_.node.type) {
                    var d = a.arguments.shift();
                    if (d && this.isa(d,
                    this.ARRAY)) for (a.arguments = [], b = 0; b < d.length; b++) a.arguments[b] = this.getProperty(d, b);
                    else a.arguments = []
                }
                a.func_ = a.member_
            }
            if (a.func_.node) {
                c = this.createScope(a.func_.node.body, a.func_.parentScope);
                for (b = 0; b < a.func_.node.params.length; b++) {
                    var d = this.createPrimitive(a.func_.node.params[b].name),
                        e = a.arguments.length > b ? a.arguments[b] : this.UNDEFINED;
                    this.setProperty(c, d, e)
                }
                d = this.createObject(this.ARRAY);
                for (b = 0; b < a.arguments.length; b++) this.setProperty(d, this.createPrimitive(b), a.arguments[b]);
                this.setProperty(c,
                    "arguments", d);
                b = {
                    node: a.func_.node.body,
                    scope: c,
                    thisExpression: a.funcThis_
                };
                this.stateStack.unshift(b);
                a.value = this.UNDEFINED
            } else if (a.func_.nativeFunc) a.value = a.func_.nativeFunc.apply(a.funcThis_, a.arguments);
            else if (a.func_.eval)(b = a.arguments[0]) ? b.isPrimitive ? (a = new Interpreter(b.toString()), a.stateStack[0].scope.parentScope = this.getScope(), a = {
                node: {
                    type: "Eval_"
                },
                interpreter: a
            }, this.stateStack.unshift(a)) : a.value = b : a.value = this.UNDEFINED;
            else throw new TypeError("function not a function (huh?)");
        }
    } else a.doneCallee_ = !0, this.stateStack.unshift({
        node: b.callee,
        components: !0
    })
};
Interpreter.prototype.stepConditionalExpression = function () {
    var a = this.stateStack[0];
    a.done ? (this.stateStack.shift(), "ConditionalExpression" == a.node.type && (this.stateStack[0].value = a.value)) : a.test ? (a.done = !0, a.value.toBoolean() && a.node.consequent ? this.stateStack.unshift({
        node: a.node.consequent
    }) : !a.value.toBoolean() && a.node.alternate && this.stateStack.unshift({
        node: a.node.alternate
    })) : (a.test = !0, this.stateStack.unshift({
        node: a.node.test
    }))
};
Interpreter.prototype.stepContinueStatement = function () {
    var a = this.stateStack[0].node,
        b = null;
    a.label && (b = a.label.name);
    for (a = this.stateStack[0]; a && "callExpression" != a.node.type;) {
        if (a.isLoop && (!b || b == a.label)) return;
        this.stateStack.shift();
        a = this.stateStack[0]
    }
    throw new SyntaxError("Illegal continue statement");
};
Interpreter.prototype.stepDoWhileStatement = function () {
    var a = this.stateStack[0];
    a.isLoop = !0;
    "DoWhileStatement" == a.node.type && void 0 === a.test && (a.value = this.createPrimitive(!0), a.test = !0);
    a.test ? (a.test = !1, a.value.toBoolean() ? a.node.body && this.stateStack.unshift({
        node: a.node.body
    }) : this.stateStack.shift()) : (a.test = !0, this.stateStack.unshift({
        node: a.node.test
    }))
};
Interpreter.prototype.stepEmptyStatement = function () {
    this.stateStack.shift()
};
Interpreter.prototype.stepEval_ = function () {
    var a = this.stateStack[0];
    a.interpreter.step() || (this.stateStack.shift(), this.stateStack[0].value = a.interpreter.value || this.UNDEFINED)
};
Interpreter.prototype.stepExpressionStatement = function () {
    var a = this.stateStack[0];
    a.done ? (this.stateStack.shift(), this.value = a.value) : (a.done = !0, this.stateStack.unshift({
        node: a.node.expression
    }))
};
Interpreter.prototype.stepForInStatement = function () {
    var a = this.stateStack[0];
    a.isLoop = !0;
    var b = a.node;
    if (a.doneVariable_) if (a.doneObject_) {
        "undefined" == typeof a.iterator && (a.object = a.value, a.iterator = 0);
        var c = null;
        t: do {
            var d = a.iterator,
                e;
            for (e in a.object.properties) if (!(e in a.object.nonenumerable)) {
                if (0 == d) {
                    c = e;
                    break t
                }
                d--
            }
            a.object = a.object.parent && a.object.parent.properties.prototype;
            a.iterator = 0
        } while (a.object);
        a.iterator++;
        null === c ? this.stateStack.shift() : (this.setValueToScope(a.variable, this.createPrimitive(c)),
        b.body && this.stateStack.unshift({
            node: b.body
        }))
    } else a.doneObject_ = !0, a.variable = a.value, this.stateStack.unshift({
        node: b.right
    });
    else a.doneVariable_ = !0, a = b.left, "VariableDeclaration" == a.type && (a = a.declarations[0].id), this.stateStack.unshift({
        node: a,
        components: !0
    })
};
Interpreter.prototype.stepForStatement = function () {
    var a = this.stateStack[0];
    a.isLoop = !0;
    var b = a.node,
        c = a.mode || 0;
    0 == c ? (a.mode = 1, b.init && this.stateStack.unshift({
        node: b.init
    })) : 1 == c ? (a.mode = 2, b.test && this.stateStack.unshift({
        node: b.test
    })) : 2 == c ? (a.mode = 3, a.value && !a.value.toBoolean() ? this.stateStack.shift() : b.body && this.stateStack.unshift({
        node: b.body
    })) : 3 == c && (a.mode = 1, b.update && this.stateStack.unshift({
        node: b.update
    }))
};
Interpreter.prototype.stepFunctionDeclaration = function () {
    this.stateStack.shift()
};
Interpreter.prototype.stepFunctionExpression = function () {
    var a = this.stateStack[0];
    this.stateStack.shift();
    this.stateStack[0].value = this.createFunction(a.node)
};
Interpreter.prototype.stepIdentifier = function () {
    var a = this.stateStack[0];
    this.stateStack.shift();
    var b = this.createPrimitive(a.node.name);
    this.stateStack[0].value = a.components ? b : this.getValueFromScope(b)
};
Interpreter.prototype.stepIfStatement = Interpreter.prototype.stepConditionalExpression;
Interpreter.prototype.stepLabeledStatement = function () {
    var a = this.stateStack.shift();
    this.stateStack.unshift({
        node: a.node.body,
        label: a.node.label.name
    })
};
Interpreter.prototype.stepLiteral = function () {
    var a = this.stateStack[0];
    this.stateStack.shift();
    this.stateStack[0].value = this.createPrimitive(a.node.value)
};
Interpreter.prototype.stepLogicalExpression = function () {
    var a = this.stateStack[0],
        b = a.node;
    if ("&&" != b.operator && "||" != b.operator) throw "Unknown logical operator: " + b.operator;
    a.doneLeft_ ? a.doneRight_ ? (this.stateStack.shift(), this.stateStack[0].value = a.value) : "&&" == b.operator && !a.value.toBoolean() || "||" == b.operator && a.value.toBoolean() ? (this.stateStack.shift(), this.stateStack[0].value = a.value) : (a.doneRight_ = !0, this.stateStack.unshift({
        node: b.right
    })) : (a.doneLeft_ = !0, this.stateStack.unshift({
        node: b.left
    }))
};
Interpreter.prototype.stepMemberExpression = function () {
    var a = this.stateStack[0],
        b = a.node;
    a.doneObject_ ? a.doneProperty_ ? (this.stateStack.shift(), this.stateStack[0].value = a.components ? [a.object, a.value] : this.getProperty(a.object, a.value)) : (a.doneProperty_ = !0, a.object = a.value, this.stateStack.unshift({
        node: b.property,
        components: !b.computed
    })) : (a.doneObject_ = !0, this.stateStack.unshift({
        node: b.object
    }))
};
Interpreter.prototype.stepNewExpression = Interpreter.prototype.stepCallExpression;
Interpreter.prototype.stepObjectExpression = function () {
    var a = this.stateStack[0],
        b = a.node,
        c = a.valueToggle,
        d = a.n || 0;
    a.object ? c ? a.key = a.value : this.setProperty(a.object, a.key, a.value) : a.object = this.createObject(this.OBJECT);
    b.properties[d] ? (c ? (a.n = d + 1, this.stateStack.unshift({
        node: b.properties[d].value
    })) : this.stateStack.unshift({
        node: b.properties[d].key,
        components: !0
    }), a.valueToggle = !c) : (this.stateStack.shift(), this.stateStack[0].value = a.object)
};
Interpreter.prototype.stepProgram = Interpreter.prototype.stepBlockStatement;
Interpreter.prototype.stepReturnStatement = function () {
    var a = this.stateStack[0],
        b = a.node;
    if (b.argument && !a.done) a.done = !0, this.stateStack.unshift({
        node: b.argument
    });
    else {
        b = a.value || this.UNDEFINED;
        do {
            this.stateStack.shift();
            if (0 == this.stateStack.length) throw new SyntaxError("Illegal return statement");
            a = this.stateStack[0]
        } while ("CallExpression" != a.node.type);
        a.value = b
    }
};
Interpreter.prototype.stepSequenceExpression = function () {
    var a = this.stateStack[0],
        b = a.node,
        c = a.n || 0;
    b.expressions[c] ? (a.n = c + 1, this.stateStack.unshift({
        node: b.expressions[c]
    })) : (this.stateStack.shift(), this.stateStack[0].value = a.value)
};
Interpreter.prototype.stepThisExpression = function () {
    this.stateStack.shift();
    for (var a = 0; a < this.stateStack.length; a++) if (this.stateStack[a].thisExpression) {
        this.stateStack[0].value = this.stateStack[a].thisExpression;
        return
    }
    throw "No this expression found.";
};
Interpreter.prototype.stepThrowStatement = function () {
    var a = this.stateStack[0],
        b = a.node;
    if (a.argument) throw a.value.toString();
    a.argument = !0;
    this.stateStack.unshift({
        node: b.argument
    })
};
Interpreter.prototype.stepUnaryExpression = function () {
    var a = this.stateStack[0],
        b = a.node;
    if (a.done) {
        this.stateStack.shift();
        if ("-" == b.operator) a = -a.value.toNumber();
        else if ("!" == b.operator) a = !a.value.toNumber();
        else if ("~" == b.operator) a = ~a.value.toNumber();
        else if ("typeof" == b.operator) a = a.value.type;
        else if ("delete" == b.operator) a.value.length ? (b = a.value[0], a = a.value[1]) : (b = this.getScope(), a = a.value), a = this.deleteProperty(b, a);
        else if ("void" == b.operator) a = void 0;
        else throw "Unknown unary operator: " + b.operator;
        this.stateStack[0].value = this.createPrimitive(a)
    } else a.done = !0, a = {
        node: b.argument
    }, "delete" == b.operator && (a.components = !0), this.stateStack.unshift(a)
};
Interpreter.prototype.stepUpdateExpression = function () {
    var a = this.stateStack[0],
        b = a.node;
    if (a.done) {
        this.stateStack.shift();
        var a = a.value,
            c = this.getValue(a).toNumber(),
            d;
        if ("++" == b.operator) d = this.createPrimitive(c + 1);
        else if ("--" == b.operator) d = this.createPrimitive(c - 1);
        else throw "Unknown update expression: " + b.operator;
        this.setValue(a, d);
        var e = b.prefix ? e : c;
        this.stateStack[0].value = this.createPrimitive(e)
    } else a.done = !0, this.stateStack.unshift({
        node: b.argument,
        components: !0
    })
};
Interpreter.prototype.stepVariableDeclaration = function () {
    var a = this.stateStack[0],
        b = a.node,
        c = a.n || 0;
    b.declarations[c] ? (a.n = c + 1, this.stateStack.unshift({
        node: b.declarations[c]
    })) : this.stateStack.shift()
};
Interpreter.prototype.stepVariableDeclarator = function () {
    var a = this.stateStack[0],
        b = a.node;
    if (b.init && !a.done) a.done = !0, this.stateStack.unshift({
        node: b.init
    });
    else {
        if (!this.hasProperty(this, b.id.name) || b.init) a = b.init ? a.value : this.UNDEFINED, this.setValue(this.createPrimitive(b.id.name), a);
        this.stateStack.shift()
    }
};
Interpreter.prototype.stepWhileStatement = Interpreter.prototype.stepDoWhileStatement;
window.Interpreter = Interpreter;
Interpreter.prototype.step = Interpreter.prototype.step;
Interpreter.prototype.run = Interpreter.prototype.run;