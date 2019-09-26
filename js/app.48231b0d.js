(function(e){function t(t){for(var r,i,n=t[0],c=t[1],l=t[2],u=0,f=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v("Cadastro Pessoal")])])]),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{rules:e.nameRules,counter:50,label:"Nome...",required:""},model:{value:e.form.nome,callback:function(t){e.$set(e.form,"nome",t)},expression:"form.nome"}})],1)],1),a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{rules:e.numbersOnly,counter:11,label:"Cpf..",type:"number",required:""},model:{value:e.form.cpf,callback:function(t){e.$set(e.form,"cpf",t)},expression:"form.cpf"}})],1)],1),a("v-radio-group",{model:{value:e.dbSelecionado,callback:function(t){e.dbSelecionado=t},expression:"dbSelecionado"}},e._l(e.dbs,(function(e){return a("v-radio",{key:e,attrs:{label:""+e,value:e}})})),1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.cadastrarNovo}},[e._v("Cadastrar")])],1)],1),a("br"),e.respostaBemSucedida?a("v-card",[a("v-alert",{attrs:{value:!0,type:"success"}},[e._v("Nome: "+e._s(e.formRes.nome))]),a("v-alert",{attrs:{value:!0,type:"success"}},[e._v("CPF: "+e._s(e.formRes.cpf))])],1):e._e(),e.cpfNaoEncontrado?a("v-card",[a("v-alert",{attrs:{value:!0,type:"error"}},[e._v("CPF não encontrado!")])],1):e._e(),a("br"),a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v("Autenticação Pessoal")])])]),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{rules:e.numbersOnly,counter:11,label:"Cpf",type:"number",required:""},model:{value:e.cpfPesquisa,callback:function(t){e.cpfPesquisa=t},expression:"cpfPesquisa"}})],1)],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.pesquisarPessoa(e.cpfPesquisa)}}},[e._v("Pesquisar")])],1)],1)],1)],1)],1)],1)},o=[],i={name:"App",components:{},data(){return{form:{nome:"",cpf:""},cpfPesquisa:"",formRes:{nome:"",cpf:""},dbs:["Db1","Db2"],dbSelecionado:"",nameRules:[e=>!!e||"Name is required",e=>e.length<=50||"Name must be less than 50 characters"],numbersOnly:[e=>!!e||"CPF is required",e=>e>=11||"CPF must be 11 characters"],respostaBemSucedida:"",cpfNaoEncontrado:"",cpfJaCadastrado:"",valid:!0}},methods:{async cadastrarNovo(){let e="";"Db1"==this.dbSelecionado?e="https://db-test-f878e.firebaseio.com/":"Db2"==this.dbSelecionado?e="https://dbdois-test.firebaseio.com/":alert("Selecione o DataBase!"),this.form.nome&&11==this.form.cpf.toString().length&&(await this.verificarCpf(this.form.cpf)?await this.$http.post(e+"pessoas.json",this.form).then(e=>alert("Pessoa cadastrada")):alert("Cpf já cadastrado")),this.limparCampos()},async pesquisarPessoa(e){let t=[];await this.$http.get("https://db-test-f878e.firebaseio.com/pessoas.json").then(e=>{for(let a in e.data)t.push(e.data[a])}),await this.$http.get("https://dbdois-test.firebaseio.com/pessoas.json").then(e=>{for(let a in e.data)t.push(e.data[a])}),await this.verificarPesquisa(t,e)},verificarPesquisa(e,t){this.respostaBemSucedidaMethod(e,t)&&(this.cpfNaoEncontrado=!0,setTimeout(()=>{this.cpfNaoEncontrado=!1,this.limparCampos()},3e3))},respostaBemSucedidaMethod(e,t){let a=!0;return e.forEach(e=>{e.cpf==t&&(this.respostaBemSucedida=!0,this.formRes.nome=e.nome,this.formRes.cpf=e.cpf,a=!1,setTimeout(()=>{this.respostaBemSucedida=!1,this.limparCampos()},5e3))}),a},async verificarCpf(e){let t=[];await this.$http.get("https://db-test-f878e.firebaseio.com/pessoas.json").then(e=>{for(let a in e.data)t.push(e.data[a].cpf)}),await this.$http.get("https://dbdois-test.firebaseio.com/pessoas.json").then(e=>{for(let a in e.data)t.push(e.data[a].cpf)});let a=await this.comparaCpfs(t,e);return a},comparaCpfs(e,t){let a=!0;return e.forEach(e=>{e==t&&(a=!1)}),a},limparCampos(){this.form.nome="",this.form.cpf="",this.cpfPesquisa="",this.formRes.nome="",this.formRes.cpf=""}}},n=i,c=a("2877"),l=a("6544"),p=a.n(l),u=a("0798"),f=a("7496"),d=a("8336"),m=a("b0af"),v=a("99d9"),h=a("a523"),b=a("0e8f"),y=a("4bd4"),x=a("a722"),P=a("67b6"),C=a("43a6"),g=a("8654"),w=Object(c["a"])(n,s,o,!1,null,null,null),_=w.exports;p()(w,{VAlert:u["a"],VApp:f["a"],VBtn:d["a"],VCard:m["a"],VCardActions:v["a"],VCardTitle:v["b"],VContainer:h["a"],VFlex:b["a"],VForm:y["a"],VLayout:x["a"],VRadio:P["a"],VRadioGroup:C["a"],VTextField:g["a"]});var S=a("f309");r["a"].use(S["a"]);var j=new S["a"]({icons:{iconfont:"mdi"}}),q=(a("bf40"),a("bc3a")),O=a.n(q);r["a"].use({install(e){e.prototype.$http=O.a}}),r["a"].config.productionTip=!1,new r["a"]({vuetify:j,render:e=>e(_)}).$mount("#app")}});
//# sourceMappingURL=app.48231b0d.js.map