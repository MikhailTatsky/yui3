YUI.add("datasource-function",function(B){var A=B.Lang,C=function(){C.superclass.constructor.apply(this,arguments);};B.mix(C,{NAME:"DataSource.Function",ATTRS:{source:{validator:A.isFunction},context:{value:null}}});B.extend(C,B.DataSource.Local,{initializer:function(D){},_defRequestFn:function(G){var F=this.get("source"),E=this.get("scope")||this,D;if(F){D=F.call(E,G.request,this,G);this.fire("data",B.mix({data:D},G));}else{G.error=new Error(this.toString()+" Data failure");this.fire("error",G);}return G.tId;}});B.DataSource.Function=C;},"@VERSION@",{requires:["datasource-base"]});