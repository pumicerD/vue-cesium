define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-72f33550","./Transforms-12e4beec","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./GeometryAttribute-454922e8","./GeometryAttributes-90846c5f","./IndexDatatype-66caba23","./GeometryOffsetAttribute-84f7eff3","./EllipseGeometryLibrary-3584f66e","./EllipseOutlineGeometry-2a566315"],function(r,e,t,n,i,a,o,l,c,f,s,u,d,m){"use strict";return function(e,t){return r.defined(t)&&(e=m.EllipseOutlineGeometry.unpack(e,t)),e._center=n.Cartesian3.clone(e._center),e._ellipsoid=n.Ellipsoid.clone(e._ellipsoid),m.EllipseOutlineGeometry.createGeometry(e)}});
