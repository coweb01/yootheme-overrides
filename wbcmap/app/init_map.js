'use strict';
var _mapsPlaceholder = [];
var GGlayers = [];
L.Map.addInitHook(function () {
  _mapsPlaceholder.push(this);
});
