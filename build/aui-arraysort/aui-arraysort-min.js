AUI.add("aui-arraysort",function(a){ASort=a.ArraySort;a.mix(ASort,{compareIgnoreWhiteSpace:function(d,c,g,f){var e;f=f||ASort.compare;if((d==="")&&(c==="")){e=0;}else{if(d===""){e=1;}else{if(c===""){e=-1;}else{e=f.apply(this,arguments);}}}return e;}});},"@VERSION@",{skinnable:false,requires:["arraysort"]});