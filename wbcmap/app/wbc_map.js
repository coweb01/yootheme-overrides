/*! YOOtheme Pro v2.7.22 | https://yootheme.com */
(function (U, l) {
    'use strict';
    function W(t) {
      return t && typeof t == 'object' && 'default' in t ? t : {
      default:
        t
      }
    }
    var B = W(U);
    function T(t, e) {
      return T = Object.setPrototypeOf || function (n, r) {
        return n.__proto__ = r,
        n
      },
      T(t, e)
    }
    function H() {
      if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == 'function') return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [
        ], function () {
        })),
        !0
      } catch {
        return !1
      }
    }
    function v(t, e, o) {
      return H() ? v = Reflect.construct : v = function (r, d, h) {
        var c = [
          null
        ];
        c.push.apply(c, d);
        var b = Function.bind.apply(r, c),
        w = new b;
        return h && T(w, h.prototype),
        w
      },
      v.apply(null, arguments)
    }
    function N(t) {
      l.$$('.el-item', t).forEach(function (e) {
        return l.$$('script', e.parentNode).forEach(function (o) {
          var n = l.$('<script>');
          n.textContent = o.textContent,
          o.parentNode.replaceChild(n, o)
        })
      })
    }
    function F(t, e) {
      var o = e.type,
      n = e.center,
      r = e.zoom,
      d = e.min_zoom,
      h = e.max_zoom,
      c = e.zooming,
      b = e.dragging,
      w = e.clustering,
      s = e.cluster_icons,
      O = e.controls,
      I = e.markers,
      A = e.styler_invert_lightness,
      G = e.styler_hue,
      S = e.styler_saturation,
      f = e.styler_lightness,
      z = e.styler_gamma,
      M = e.popup_max_width,
      p = new google.maps.LatLng(n.lat, n.lng),
      u = new google.maps.Map(t, {
        zoom: Number(r),
        minZoom: Number(d),
        maxZoom: Number(h),
        center: p,
        mapTypeId: google.maps.MapTypeId[o.toUpperCase()],
        disableDefaultUI: !O,
        gestureHandling: b || c ? 'auto' : 'none'
      }),
      a,
      m = new google.maps.InfoWindow({
        maxWidth: M ? parseInt(M, 10) : 300
      });
      m.addListener('domready', function () {
        return N(t)
      });
      var $;
      if (w && s) {
        var _ = typeof s == 'string' ? {
          imagePath: s
        }
         : {
          styles: s.map(function (i) {
            var g = i.url,
            y = i.size,
            C = i.textColor;
            return MarkerClusterer.withDefaultStyle(y ? {
              url: g,
              width: y[0],
              height: y[1],
              textColor: C || null
            }
             : {
              url: g
            })
          })
        };
        $ = new MarkerClusterer(u, [
        ], _)
      }
      I && I.forEach(function (i) {
        var g = i.lat,
        y = i.lng,
        C = i.content,
        J = i.show_popup,
        D = i.icon,
        E = i.iconSize,
        R = i.iconAnchor,
        x = new google.maps.Marker({
          map: u,
          position: new google.maps.LatLng(g, y)
        });
        if (D && x.setIcon({
          url: D,
          scaledSize: E ? v(google.maps.Size, E) : null,
          anchor: R ? v(google.maps.Point, R) : null
        }), $ && $.addMarker(x), C) {
          var Z = function () {
            if (m.getMap() && a === x) {
              m.close();
              return
            }
            m.setContent(C),
            m.open(u, x),
            a = x
          };
          google.maps.event.addListener(x, 'click', Z),
          J && Z()
        }
      });
      var P = new google.maps.StyledMapType([{
        featureType: 'all',
        elementType: 'all',
        stylers: [
          {
            invert_lightness: A
          },
          {
            hue: G
          },
          {
            saturation: S
          },
          {
            saturation: S
          },
          {
            lightness: f
          },
          {
            gamma: z
          }
        ]
      },
      {
        featureType: 'poi',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      }
      ], {
        name: 'Styled'
      });
      u.mapTypes.set('styled_map', P),
      o.toUpperCase() === 'ROADMAP' && u.setMapTypeId('styled_map')
    }
    function j(t, e) {
      k(e.baseUrl + '/leaflet.css').then(function () {
        return q(t, e)
      }),
      l.append(document.head, `<style>.leaflet-div-icon {
          background: transparent;
          border: none;
      }</style>
      `)
    }
    function k(t) {
      return l.$('link[href="' + t + '"]') ? l.Promise.resolve() : new l.Promise(function (e) {
        return l.once(l.append(document.head, '<link href="' + t + '" rel="stylesheet">'), 'load', e)
      })
    }
    function q(t, e) {
      var o = e.type,
      n = e.center,
      r = e.zoom,
      d = e.min_zoom,
      h = e.max_zoom,
      c = e.zooming,
      b = e.dragging,
      w = e.clustering,
      s = e.cluster_icons,
      O = e.controls,
      I = e.markers,
      A = e.popup_max_width,
      G = e.baseUrl,
      S = e.clusterBaseUrl;
      L.Icon.Default.imagePath = G + '/images/';
      var f = L.map(t, {
        zoom: r,
        minZoom: Number(d),
        maxZoom: Number(h),
        center: n,
        dragging: b,
        zoomControl: O,
        touchZoom: c,
        scrollWheelZoom: c,
        doubleClickZoom: c,
        tap: !1
      });
      f.on('popupopen', function () {
        return N(t)
      }),
      o === 'satellite' ? L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; <a href="https://www.esri.com">Esri</a> | DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community'
      }).addTo(f) : L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      }).addTo(f);
      var z;
      if (w) {
        var M = {
          showCoverageOnHover: !1
        };
        s && (M.iconCreateFunction = function (p) {
          var u = p.getChildCount(),
          a;
          u < 10 ? a = s[0] : u < 100 ? a = s[1] || s[0] : a = s[2] || s[1] || s[0];
          var m = a.textColor ? 'style="color: ' + a.textColor + '"' : '';
          return new L.DivIcon({
            html: '<img src="' + a.url + '" alt><span class="uk-position-center"' + m + '>' + u + '</span>',
            iconSize: a.size ? v(L.Point, a.size) : null
          })
        }),
        z = L.markerClusterGroup(M),
        f.addLayer(z),
        k(S + '/MarkerCluster.css'),
        k(S + '/MarkerCluster.Default.css')
      }
      I && I.forEach(function (p) {
        var u = p.lat,
        a = p.lng,
        m = p.content,
        $ = p.show_popup,
        _ = p.icon,
        P = p.iconSize,
        wbc = p.iconClass,
        id = p.markerId,
        i = p.iconAnchor,
        /*g = L.marker({
          lat: u,
          lng: a
        });*/
        g = L.marker({
          lat: u,
          lng: a,
          id: id
         });
        if (_ && g.setIcon(L.icon({
          iconUrl: _,
          iconSize: P,
          iconAnchor: i,
          className: wbc
        })), z ? z.addLayer(g) : g.addTo(f), m) {
          var y = {
            maxWidth: A ? parseInt(A, 10) : 300
          };
          P && (y.offset = new L.Point(0, - 1 * P[1] + 7));
          var C = L.popup(y).setContent(m);
          g.bindPopup(C),
          $ && g.openPopup()
        }
      })
      }
    B.default.component('Map', {
      connected: function () {
        var e,
        o = this;
        if (this.script = this.script || l.$('script', this.$el), !!this.script) {
          this.map = JSON.parse(this.script.textContent);
          var n = l.$$('template', this.$el);
          (e = this.map.markers) == null || e.forEach(function (r, d) {
            r.content = n[d].innerHTML.trim(),
            !r.icon && o.map.icon && (r.icon = o.map.icon, r.iconSize = o.map.iconSize, r.iconAnchor = o.map.iconAnchor)
          }),
          requestAnimationFrame(function () {
            o.map.lazyload && 'IntersectionObserver' in window ? new IntersectionObserver(function (r, d) {
              r.some(function (h) {
                var c = h.isIntersecting;
                return c
              }) && (o.load(), d.disconnect())
            }, {
              rootMargin: window.innerHeight / 2 + 'px 0px'
            }).observe(o.$el) : o.load()
          })
        }
      },
      methods: {
        load: function () {
          var e,
          o,
          n;
          ((e = this.map) == null ? void 0 : e.library) === 'google' && (o = window.google) != null && o.maps && F(this.$el, this.map),
          ((n = this.map) == null ? void 0 : n.library) === 'leaflet' && window.L && j(this.$el, this.map)
        }
      }
    })
    
  }) (UIkit, UIkit.util);
 
