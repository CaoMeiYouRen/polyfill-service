CreateMethodProperty(Array.prototype,"findIndex",function e(r){var t=ToObject(this),n=ToLength(Get(t,"length"));if(!1===IsCallable(r))throw new TypeError(r+" is not a function");for(var o=arguments.length>1?arguments[1]:undefined,a=0;a<n;){var i=ToString(a),l=Get(t,i);if(ToBoolean(Call(r,o,[l,a,t])))return a;a+=1}return-1});