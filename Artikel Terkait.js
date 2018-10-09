/*! JavaScript Artikel Terkait */
    /*<![CDATA[*/
    var relnum = 0;
    var relmaxposts = 4;
    var numchars = 135;
    var morelink = " ";

    function saringtags(r, l) {
        for (var e = r.split("<"), n = 0; n < e.length; n++) - 1 != e[n].indexOf(">") && (e[n] = e[n].substring(e[n].indexOf(">") + 1, e[n].length));
        return e = e.join(""), e = e.substring(0, l - 1)
    }

    function relpostimgthum(r) {
        for (var l = 0; l < r.feed.entry.length; l++) {
            var e = r.feed.entry[l];
            reljudul[relnum] = e.title.$t, postcontent = "", "content" in e ? postcontent = e.content.$t : "summary" in e && (postcontent = e.summary.$t), relcuplikan[relnum] = saringtags(postcontent, numchars), postimg = "media$thumbnail" in e ? e.media$thumbnail.url : "http://lh3.ggpht.com/_xcD4JK_dIjU/SnamIh0KTCI/AAAAAAAADMA/hLjqmEbdtkw/d/noimagethumb.gif", relgambar[relnum] = postimg;
            for (var n = 0; n < e.link.length; n++)
                if ("alternate" == e.link[n].rel) {
                    relurls[relnum] = e.link[n].href;
                    break
                } relnum++
        }
    }

    function contains(r, l) {
        for (var e = 0; e < r.length; e++)
            if (r[e] == l) return !0;
        return !1
    }

    function relatpost() {
        for (var r = new Array(0), l = new Array(0), e = new Array(0), n = new Array(0), t = 0; t < relurls.length; t++) contains(r, relurls[t]) || (r.length += 1, r[r.length - 1] = relurls[t], l.length += 1, l[l.length - 1] = reljudul[t], e.length += 1, e[e.length - 1] = relcuplikan[t], n.length += 1, n[n.length - 1] = relgambar[t]);
        reljudul = l, relurls = r, relcuplikan = e, relgambar = n;
        for (var t = 0; t < reljudul.length; t++) {
            var a = Math.floor((reljudul.length - 1) * Math.random()),
                u = reljudul[t],
                s = relurls[t],
                i = relcuplikan[t],
                o = relgambar[t];
            reljudul[t] = reljudul[a], relurls[t] = relurls[a], relcuplikan[t] = relcuplikan[a], relgambar[t] = relgambar[a], reljudul[a] = u, relurls[a] = s, relcuplikan[a] = i, relgambar[a] = o
        }
        for (var g, m = 0, h = Math.floor((reljudul.length - 1) * Math.random()), c = h, d = document.URL; m < relmaxposts && (relurls[h] == d || (g = "<li class='news-title clearfix'>", g += "<a href='" + relurls[h] + "' rel='nofollow' target='_top' title='" + reljudul[h] + "'><img src='" + relgambar[h] + "' /></a>", g += "<a href='" + relurls[h] + "' target='_top'>" + reljudul[h] + "</a>", g += "<span class='news-text'>" + relcuplikan[h] + " ... <a href='" + relurls[h] + "' target='_top'>" + morelink + "</a><span class='news-text'>", g += "</li>", document.write(g), m++, m != relmaxposts)) && (h < reljudul.length - 1 ? h++ : h = 0, h != c););
    }
    var reljudul = new Array,
        relurls = new Array,
        relcuplikan = new Array,
        relgambar = new Array; /*]]>*/
