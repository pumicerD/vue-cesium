(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{Cqyd:function(s,t,a){"use strict";a.r(t);var r=a("JFUb"),e=Object(r.a)({data:function(){return{url:"https://a.tile.openstreetmap.org",options:[{value:"https://a.tile.openstreetmap.org",label:"openstreetmap1"},{value:"https://stamen-tiles.a.ssl.fastly.net/toner/",label:"openstreetmap2"}],alpha:1,brightness:1,contrast:1}},methods:{ready:function(s){s.Cesium,s.viewer}}},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("OpenStreetMapImageryProvider")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),a("h3",[s._v("Load an imagerylayer with OpenStreetMapImageryProvider")]),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-layer-imagery",{attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[a("vc-provider-imagery-openstreetmap",{attrs:{url:s.url}})],1)],1),s._v(" "),a("div",{staticClass:"demo-tool"},[a("span",[s._v("alpha")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:1,interval:.01},model:{value:s.alpha,callback:function(t){s.alpha=t},expression:"alpha"}}),s._v(" "),a("span",[s._v("brightness")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.brightness,callback:function(t){s.brightness=t},expression:"brightness"}}),s._v(" "),a("span",[s._v("contrast")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.contrast,callback:function(t){s.contrast=t},expression:"contrast"}}),s._v(" "),a("span",[s._v("switch url")]),s._v(" "),a("md-select",{attrs:{placeholder:"switch url"},model:{value:s.url,callback:function(t){s.url=t},expression:"url"}},s._l(s.options,(function(t){return a("md-option",{key:t.value,attrs:{value:t.value}},[s._v("\n            "+s._s(t.label)+"\n          ")])})),1)],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-provider-imagery-openstreetmap")]),this._v("component is used to load tiled imagery hosted by OpenStreetMap.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-openstreetmap")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-openstreetmap")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("alpha"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("brightness"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("contrast"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("switch url"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"switch url"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item in options"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(">")]),s._v("\n          {{item.label}}\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://a.tile.openstreetmap.org'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://a.tile.openstreetmap.org'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'openstreetmap1'")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://stamen-tiles.a.ssl.fastly.net/toner/'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'openstreetmap2'")]),s._v("\n          }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("url")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'https://a.tile.openstreetmap.org'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("The OpenStreetMap server url.")])]),s._v(" "),a("tr",[a("td",[s._v("fileExtension")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'png'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v("The file extension for images on the server.")])]),s._v(" "),a("tr",[a("td",[s._v("rectangle")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The rectangle of the layer. "),a("strong",[s._v("structure: { west: number, south: number, east: number, north: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("minimumLevel")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("The minimum level-of-detail supported by the imagery provider.")])]),s._v(" "),a("tr",[a("td",[s._v("maximumLevel")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.")])]),s._v(" "),a("tr",[a("td",[s._v("ellipsoid")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("The ellipsoid. If not specified, the WGS84 ellipsoid is used.")])]),s._v(" "),a("tr",[a("td",[s._v("credit")]),s._v(" "),a("td",[s._v("String| Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'MapQuest, Open Street Map and contributors, CC-BY-SA'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("A credit for the data source, which is displayed on the canvas.")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/OpenStreetMapImageryProvider.html"}},[this._v("OpenStreetMapImageryProvider")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),s._v(" "),a("tr",[a("td",[s._v("errorEvent")]),s._v(" "),a("td",[s._v("TileProviderError")]),s._v(" "),a("td",[s._v("Triggers when the imagery provider encounters an asynchronous error.")])]),s._v(" "),a("tr",[a("td",[s._v("readyPromise")]),s._v(" "),a("td",[s._v("ImageryProvider")]),s._v(" "),a("td",[s._v("Triggers when the provider is ready for use.")])])])])}],!1,null,null,null);t.default=e.exports},UD2P:function(s,t,a){s.exports=a("Cqyd")}}]);
//# sourceMappingURL=73.ff8434e0248577fb91b8.js.map