(function(t){function e(e){for(var a,n,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)n=o[d],i[n]&&m.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);h&&h(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},r=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"88d839fa"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=i[t]=[e,a]});e.push(s[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=n(t),r=function(e){l.onerror=l.onload=null,clearTimeout(c);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,n=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");n.type=a,n.request=r,s[1](n)}i[t]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"10a0":function(t,e,s){"use strict";var a=s("b9bd"),i=s.n(a);i.a},"11d9":function(t,e,s){t.exports=s.p+"img/3.aa053e8b.jpg"},"3c84":function(t,e,s){t.exports=s.p+"img/en-kku.97fe5087.png"},"405a":function(t,e,s){t.exports=s.p+"img/2.40350fa8.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);s("744f"),s("6c7b"),s("7514"),s("20d6"),s("1c4c"),s("6762"),s("cadf"),s("e804"),s("55dd"),s("d04f"),s("c8ce"),s("217b"),s("7f7f"),s("f400"),s("7f25"),s("536b"),s("d9ab"),s("f9ab"),s("32d7"),s("25c9"),s("9f3c"),s("042e"),s("c7c6"),s("f4ff"),s("049f"),s("7872"),s("a69f"),s("0b21"),s("6c1a"),s("c7c62"),s("84b4"),s("c5f6"),s("2e37"),s("fca0"),s("7cdf"),s("ee1d"),s("b1b1"),s("87f3"),s("9278"),s("5df2"),s("04ff"),s("f751"),s("4504"),s("fee7"),s("ffc1"),s("0d6d"),s("9986"),s("8e6e"),s("25db"),s("e4f7"),s("b9a1"),s("64d5"),s("9aea"),s("db97"),s("66c8"),s("57f0"),s("165b"),s("456d"),s("cf6a"),s("fd24"),s("8615"),s("551c"),s("097d"),s("df1b"),s("2397"),s("88ca"),s("ba16"),s("d185"),s("ebde"),s("2d34"),s("f6b3"),s("2251"),s("c698"),s("a19f"),s("9253"),s("9275"),s("3b2b"),s("3846"),s("4917"),s("a481"),s("28a5"),s("386d"),s("6b54"),s("4f7f"),s("8a81"),s("ac4d"),s("8449"),s("9c86"),s("fa83"),s("48c0"),s("a032"),s("aef6"),s("d263"),s("6c37"),s("9ec8"),s("5695"),s("2fdb"),s("d0b0"),s("5df3"),s("b54a"),s("f576"),s("ed50"),s("788d"),s("14b9"),s("f386"),s("f559"),s("1448"),s("673e"),s("242a"),s("c66f"),s("b05c"),s("34ef"),s("6aa2"),s("15ac"),s("af56"),s("b6e4"),s("9c29"),s("63d9"),s("4dda"),s("10ad"),s("c02b"),s("4795"),s("130f"),s("ac6a"),s("96cf");var a=s("2b0e"),i=s("bc3a"),r=s.n(i),n={},o=r.a.create(n);o.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),o.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},a["a"].use(Plugin);Plugin;var l=s("9f7b"),c=s.n(l);s("ab8b"),s("2dd8");a["a"].use(c.a);var d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[s("b-navbar-brand",{attrs:{href:"#/"}},[t._v(t._s(t.title0))]),s("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),s("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{href:"#/"}},[s("font",{staticStyle:{"padding-top":"1px"},attrs:{color:"white",size:"4"}},[t._v(t._s(t.title))])],1)],1),s("b-navbar-nav",{staticClass:"ml-auto"})],1)],1),s("b-container",{attrs:{fluid:""}},[s("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.msgtype},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.msgAlert))]),s("div",{staticClass:"text-center"},[s("b-button",{staticStyle:{"margin-left":"10px"},attrs:{variant:"primary",size:"sm"},on:{click:t.setTH}},[t._v("ไทย")]),s("b-button",{staticStyle:{"margin-left":"10px"},attrs:{variant:"primary",size:"sm"},on:{click:t.setENG}},[t._v("ENG")])],1),s("router-view")],1)],1)},h=[],m={name:"App",data:function(){return{msgtype:"danger",msgAlert:"",dismissSecs:2,dismissCountDown:0,title0:"ระบบยืนยันตัวบุคคล",title:"ด้วยบัตรประจำตัวประชาชนและภาพถ่ายใบหน้า"}},mounted:function(){var t=this;this.$store.watch(this.$store.getters.getLG,function(e){"TH"==e?(t.title0="ระบบยืนยันตัวบุคคล",t.title="ด้วยบัตรประจำตัวประชาชนและภาพถ่ายใบหน้า"):"ENG"==e&&(t.title0="Personal Verification System",t.title="Using ID Card and Face Photo")})},methods:{countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(t,e){this.msgtype=null==e?"danger":e,this.msgAlert=t,this.dismissCountDown=this.dismissSecs,window.scrollTo(0,0)},setTH:function(){this.$store.state.language="TH"},setENG:function(){this.$store.state.language="ENG"}}},f=m,u=s("2877"),p=Object(u["a"])(f,d,h,!1,null,null,null),g=p.exports,b=s("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home2"},[a("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.agree,expression:"this.$store.state.agree"}]},[a("b-row",[a("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v(t._s(t.str_example1))]),a("b-col",{staticClass:"text-left",attrs:{cols:"6"}},[t._v(t._s(t.str_upload1))])],1),a("b-row",[a("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[a("label",{staticClass:"imgupload"},[a("img",{staticClass:"img-thumbnail imgupload",attrs:{src:s("8554"),alt:"Face..."}})])]),a("b-col",{staticClass:"text-left",attrs:{cols:"6"}},[a("label",{staticClass:"imgupload"},[a("img",{staticClass:"img-thumbnail imgupload cursor",attrs:{src:t.img1,alt:"Face..."}}),a("input",{ref:"file",attrs:{disabled:t.uploading,type:"file",accept:"image/*"},on:{change:t.handleFileUpload}}),a("br")])])],1),a("b-row",[a("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v(t._s(t.str_example2))]),a("b-col",{staticClass:"text-left",attrs:{cols:"6"}},[t._v(t._s(t.str_upload2))])],1),a("b-row",[a("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[a("label",{staticClass:"imgupload"},[a("img",{staticClass:"img-thumbnail imgupload",attrs:{src:s("405a"),alt:"Face..."}})])]),a("b-col",{staticClass:"text-left",attrs:{cols:"6"}},[a("label",{staticClass:"imgupload"},[a("img",{staticClass:"img-thumbnail imgupload cursor",attrs:{src:t.img2,alt:"Face..."}}),a("input",{ref:"file2",attrs:{disabled:t.uploading,type:"file",accept:"image/*"},on:{change:t.handleFileUpload2}}),a("br")])])],1),a("b-row",[a("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v(t._s(t.str_example3))]),a("b-col",{staticClass:"text-left",attrs:{cols:"6"}},[t._v(t._s(t.str_upload3))])],1),a("b-row",[a("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[a("label",{staticClass:"imgupload"},[a("img",{staticClass:"img-thumbnail imgupload",attrs:{src:s("11d9"),alt:"Face..."}})])]),a("b-col",{staticClass:"text-left",attrs:{cols:"6"}},[a("label",{staticClass:"imgupload"},[a("img",{staticClass:"img-thumbnail imgupload cursor",attrs:{src:t.img3,alt:"Face..."}}),a("input",{ref:"file3",attrs:{disabled:t.uploading,type:"file",accept:"image/*"},on:{change:t.handleFileUpload3}}),a("br")])])],1),a("b-row",[a("b-col",{staticClass:"text-right"},[a("b-button",{attrs:{variant:"primary",disabled:t.disOnlyFace},on:{click:t.compareOnlyFace}},[t._v(t._s(t.str_onlyface))])],1),a("b-col",{staticClass:"text-left"},[a("b-button",{attrs:{variant:"primary",disabled:t.disVerify},on:{click:t.clickVerify}},[t._v(t._s(t.str_verify))])],1)],1),a("br"),a("br"),a("b-row",[a("b-col",{staticClass:"text-center"},[a("b",[t._v(t._s(t.str_sampledata))])])],1),a("b-row",[a("b-col",{staticClass:"text-right"},[a("b-button",{attrs:{disabled:t.uploading,variant:"warning"},on:{click:t.test1}},[t._v(t._s(t.str_samepeople))])],1),a("b-col",{staticClass:"text-left"},[a("b-button",{attrs:{disabled:t.uploading,variant:"warning"},on:{click:t.test2}},[t._v(t._s(t.str_notsamepeople))])],1)],1),a("b-row",[a("b-col",{staticClass:"text-center"},[a("b-progress",{attrs:{max:100,animated:t.animate,variant:t.variant_progress}},[a("b-progress-bar",{attrs:{value:t.uploadPercentage}},[a("strong",[t._v(t._s(t.str_loading)+" "+t._s(t.uploadPercentage.toFixed(2))+"%")])])],1)],1)],1),a("b-row",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[a("b-col",{staticClass:"text-center"},[a("div",{staticClass:"ex2",staticStyle:{"white-space":"pre"},attrs:{id:"status",align:"left"},domProps:{innerHTML:t._s(t.str_result)}}),a("br")])],1),a("b-form",{directives:[{name:"focusNextOnEnter",rawName:"v-focusNextOnEnter"},{name:"show",rawName:"v-show",value:!t.animate,expression:"!animate"}]},[t._l(t.form,function(e){return a("b-row",{key:e},[a("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[e.readonly?t._e():a("label",{attrs:{for:"type-"+e}},[t._v(t._s(e.name)+":")])]),a("b-col",[e.readonly?t._e():a("b-form-input",{directives:[{name:"show",rawName:"v-show",value:"address"!=e.ref,expression:"type.ref != 'address'"}],ref:e.ref,refInFor:!0,staticStyle:{"max-width":"190px"},attrs:{id:""+e.id,type:e.kind,size:"sm"},model:{value:e.var,callback:function(s){t.$set(e,"var",s)},expression:"type.var"}}),a("b-form-textarea",{directives:[{name:"show",rawName:"v-show",value:"address"==e.ref,expression:"type.ref == 'address'"}],staticStyle:{"max-width":"190px"},attrs:{size:"sm"},model:{value:e.var,callback:function(s){t.$set(e,"var",s)},expression:"type.var"}})],1)],1)}),a("b-row",[a("b-col",{attrs:{cols:"6"}}),a("b-col",{attrs:{cols:"6"}},[a("b-button",{attrs:{variant:"primary"},on:{click:t.save}},[t._v(t._s(t.str_save))])],1)],1),a("b-row",[a("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[a("label",[t._v(t._s(this.form[0].name)+":")])]),a("b-col",[a("b-form-input",{staticStyle:{"max-width":"190px"},attrs:{readonly:"",size:"sm"},model:{value:this.form[0].var,callback:function(e){t.$set(this.form[0],"var",e)},expression:"this.form[0].var"}})],1)],1),a("b-row",[a("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[a("label",[t._v(t._s(this.form[10].name)+":")])]),a("b-col",[a("b-form-input",{staticStyle:{"max-width":"190px"},attrs:{readonly:"",size:"sm"},model:{value:this.form[10].var,callback:function(e){t.$set(this.form[10],"var",e)},expression:"this.form[10].var"}})],1)],1)],2)],1),a("br"),a("div",{staticClass:"footer-copyright text-center"},[a("b-button",{attrs:{href:"#/about"}},[t._v("\n      "+t._s(t.str_sponsor)+"\n      "),a("img",{attrs:{fluid:"",rounded:"",src:s("3c84"),width:"40",height:"40"}}),t._v(" \n      "),a("img",{attrs:{fluid:"",src:s("9b9b"),width:"40",height:"40"}}),t._v(" \n      "),a("img",{staticClass:"img-thumbnail",attrs:{src:s("abae"),width:"40",height:"40"}})])],1),a("br"),a("b-modal",{ref:"myModalRef",attrs:{centered:"","hide-footer":"",title:t.str_modaltitle,"header-bg-variant":t.headerBgVariant,"header-text-variant":"light"}},[a("div",{staticClass:"d-block text-center",staticStyle:{"white-space":"pre"}},[t._v("\n      "+t._s(t.str_modal)+"\n      "),a("span",{style:{color:this.str_modalcolor,"font-weight":"bold","font-size":"large"}},[t._v(t._s(t.str_modal2))]),t._v("\n      "+t._s(t.str_modal3)+"\n    ")]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{variant:"primary",block:""},on:{click:t.hideModal}},[t._v(t._s(t.str_modalbutton))])],1),a("b-modal",{ref:"myModalRef2",attrs:{"hide-footer":"",centered:"",title:"ข้อตกลงการใช้งาน (Terms of Use)"}},[a("div",{staticClass:"d-block text-center"},[a("div",[t._v("รูปภาพที่อัปโหลดถือว่าเป็นข้อมูลส่วนบุคคลโดยจะนำไปใช้ในการทดสอบเพื่อพัฒนาระบบเท่านั้น จะไม่มีการเปิดเผยข้อมูล")]),a("div",[t._v("Uploaded pictures are personal information will not be disclosed.")]),a("b-button",{attrs:{variant:"success"},on:{click:t.agreemodal}},[t._v("ตกลง (Agree)")]),t._v(" \n      "),a("b-button",{attrs:{variant:"danger"},on:{click:t.hideModal}},[t._v("ยกเลิก (Cancel)")])],1)])],1)},_=[],y={name:"home",data:function(){return{str_example1:"",str_example2:"",str_example3:"",str_upload1:"",str_upload2:"",str_upload3:"",str_verify:"",str_onlyface:"",str_sampledata:"",str_samepeople:"",str_notsamepeople:"",str_result:"",str_loading:" ",str_save:"",str_modaltitle:"",str_modal:"",str_modal2:"",str_modal3:"",str_modalcolor:"",str_modalbutton:"",str_sponsor:"",headerBgVariant:"",file:"",file2:"",file3:"",img1:"http://test.adulgun.com/pv/addperson.png",img2:"http://test.adulgun.com/pv/init2.jpg",img3:"http://test.adulgun.com/pv/init3.jpg",note:"",uploadPercentage:0,animate:!0,disVerify:!0,disOnlyFace:!0,uploading:!1,interval:null,variant_progress:"",e1:"",e2:"",e3:"",form:[{var:"",id:"similarity",ref:"similarity",name:"",kind:"text",readonly:!0},{var:"",id:"nameeng",ref:"nameeng",name:"",kind:"text",readonly:!1},{var:"",id:"name",ref:"name",name:"",kind:"text",readonly:!1},{var:"",id:"gender",ref:"gender",name:"",kind:"text",readonly:!1},{var:"",id:"idnumber",ref:"idnumber",name:"",kind:"text",readonly:!1},{var:"",id:"back",ref:"back",name:"",kind:"text",readonly:!1},{var:"",id:"hbd",ref:"hbd",name:"",kind:"text",readonly:!1},{var:"",id:"issueeng",ref:"issueeng",name:"",kind:"text",readonly:!1},{var:"",id:"exp",ref:"exp",name:"",kind:"text",readonly:!1},{var:"",id:"address",ref:"address",name:"",kind:"text",readonly:!1},{var:"",id:"time",ref:"time",name:"",kind:"text",readonly:!0}]}},mounted:function(){var t=this;this.setlanguage(),this.$store.watch(this.$store.getters.getLG,function(e){t.setlanguage()}),0==this.$store.state.agree&&this.$refs.myModalRef2.show()},watch:{file:{handler:function(t){this.checkfile()}},file2:{handler:function(t){this.checkfile()}},file3:{handler:function(t){this.checkfile()}}},methods:{checkfile:function(){""==this.file||""==this.file2||""==this.file3?this.disVerify=!0:this.disVerify=!1,""==this.file||""==this.file2?this.disOnlyFace=!0:this.disOnlyFace=!1},setlanguage:function(){var t=this.$store.state.language;"TH"==t?(this.str_example1="ตัวอย่างใบหน้า+บัตร",this.str_example2="ตัวอย่างหน้าบัตร",this.str_example3="ตัวอย่างหลังบัตร",this.str_upload1="1. อัปโหลดใบหน้า+บัตร",this.str_upload2="2. อัปโหลดหน้าบัตร",this.str_upload3="3. อัปโหลดหลังบัตร",this.str_verify="4. ยืนยันตัวตน",this.str_onlyface="เปรียบเทียบเฉพาะใบหน้า",this.str_sampledata="ตัวอย่างข้อมูล",this.str_samepeople="คนเดียวกัน",this.str_notsamepeople="ไม่ใช่คนเดียวกัน",this.note="หมายเหตุ: รูปภาพที่อัปโหลดถือว่าเป็นข้อมูลส่วนบุคคล จะไม่มีการเปิดเผยข้อมูล",this.str_save="บันทึก",this.str_sponsor="ผู้สนับสนุน",this.form[0].name="ความเหมือน",this.form[1].name="ชื่ออังกฤษ",this.form[2].name="ชื่อไทย",this.form[3].name="เพศ",this.form[4].name="รหัสบัตร",this.form[5].name="รหัสหลังบัตร",this.form[6].name="วันเกิด",this.form[7].name="วันออกบัตร",this.form[8].name="วันหมดอายุ",this.form[9].name="ที่อยู่",this.form[10].name="เวลาประมวลผล(วินาที)","Same"==this.form[0].var&&(this.form[0].var="เหมือน"),"Not same"==this.form[0].var&&(this.form[0].var="ไม่เหมือน"),"Non detect"==this.form[0].var&&(this.form[0].var="ตรวจจับใบหน้าไม่ได้"),"Male"==this.form[3].var&&(this.form[3].var="ชาย"),"Female"==this.form[3].var&&(this.form[3].var="หญิง"),"Finish"==this.str_loading&&(this.str_loading="เสร็จสิ้น"),"Uploading..."==this.str_loading&&(this.str_loading="กำลังอัปโหลดรูปภาพ..."),"Verifying..."==this.str_loading&&(this.str_loading="กำลังยืนยันตัวบุคคล...")):"ENG"==t&&(this.str_example1="Example face + ID Card",this.str_example2="Example front ID Card",this.str_example3="Example back ID Card",this.str_upload1="1. Upload new face + ID Card",this.str_upload2="2. Upload new front ID Card",this.str_upload3="3. Upload new back ID Card",this.str_verify="4. Verify",this.str_onlyface="Compare only face",this.str_sampledata="Sample data",this.str_samepeople="Same people",this.str_notsamepeople="Not same people",this.note="Note: Uploaded pictures are personal information which will not be disclosed.",this.str_save="Save",this.str_sponsor="Sponsor",this.form[0].name="Similarity",this.form[1].name="Name ENG",this.form[2].name="Name TH",this.form[3].name="Gender",this.form[4].name="ID number",this.form[5].name="ID number back",this.form[6].name="Birth Date",this.form[7].name="Issue",this.form[8].name="EXP",this.form[9].name="Address",this.form[10].name="Time(second)","เหมือน"==this.form[0].var&&(this.form[0].var="Same"),"ไม่เหมือน"==this.form[0].var&&(this.form[0].var="Not same"),"ตรวจจับใบหน้าไม่ได้"==this.form[0].var&&(this.form[0].var="Non detect"),"ชาย"==this.form[3].var&&(this.form[3].var="Male"),"หญิง"==this.form[3].var&&(this.form[3].var="Female"),"เสร็จสิ้น"==this.str_loading&&(this.str_loading="Finish"),"กำลังอัปโหลดรูปภาพ..."==this.str_loading&&(this.str_loading="Uploading..."),"กำลังยืนยันตัวบุคคล..."==this.str_loading&&(this.str_loading="Verifying..."))},handleFileUpload:function(t){this.e1=t,this.file=this.$refs.file.files[0],this.img1=URL.createObjectURL(t.target.files[0])},handleFileUpload2:function(t){this.e2=t,this.file2=this.$refs.file2.files[0],this.img2=URL.createObjectURL(t.target.files[0])},handleFileUpload3:function(t){this.e3=t,this.file3=this.$refs.file3.files[0],this.img3=URL.createObjectURL(t.target.files[0])},refreshImg:function(){try{this.file=this.$refs.file.files[0],this.img1=URL.createObjectURL(this.e1.target.files[0])}catch(t){this.file="",this.img1="http://test.adulgun.com/pv/addperson.png"}try{this.file2=this.$refs.file2.files[0],this.img2=URL.createObjectURL(this.e2.target.files[0])}catch(t){this.file2="",this.img2="http://test.adulgun.com/pv/init2.jpg"}try{this.file3=this.$refs.file3.files[0],this.img3=URL.createObjectURL(this.e3.target.files[0])}catch(t){this.file3="",this.img3="http://test.adulgun.com/pv/init3.jpg"}},clickVerify:function(){var t=this;if(this.refreshImg(),""==this.file||""==this.file2||""==this.file3){var e="กรุณาอัปโหลดทั้ง 3 ภาพ";return"ENG"==this.$store.state.language&&(e="Please upload 3 images"),void this.$parent.showAlert(e,"danger")}this.loadImg();var s=new FormData;s.append("face",this.file),s.append("front",this.file2),s.append("back",this.file3),axios.post(this.$store.state.api+"upload",s,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){this.showProgress(t)}.bind(this)}).then(function(e){t.showResult(e.data)}).catch(function(t){})},showProgress:function(t){this.variant_progress="warning",this.uploadPercentage=50*t.loaded/t.total,50==this.uploadPercentage&&this.showVerifying()},showVerifying:function(){this.variant_progress="success",this.uploadPercentage=50+1*Math.random();var t=this.$store.state.language;"TH"==t?this.str_loading="กำลังยืนยันตัวบุคคล...":"ENG"==t&&(this.str_loading="Verifying..."),this.interval=setInterval(this.incrementTime,400)},incrementTime:function(){var t=1*Math.random();t=t<=0?0:t,this.uploadPercentage+=t,this.uploadPercentage>=94&&this.stoptime()},stoptime:function(){clearInterval(this.interval)},compareOnlyFace:function(){var t=this;if(this.refreshImg(),""==this.file||""==this.file2){var e="กรุณาอัปโหลดทั้ง 2 ภาพ (ใบหน้า และ หน้าบัตร)";return"ENG"==this.$store.state.language&&(e="Please upload 2 images (Face and Front id card)"),void this.$parent.showAlert(e,"danger")}this.loadImg();var s=new FormData;s.append("face",this.file),s.append("front",this.file2),axios.post(this.$store.state.api+"onlyface",s,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){this.showProgress(t)}.bind(this)}).then(function(e){t.showResult(e.data)}).catch(function(t){})},test1:function(){var t=this;this.img1="http://test.adulgun.com/pv/1.jpg",this.img2="http://test.adulgun.com/pv/2.jpg",this.img3="http://test.adulgun.com/pv/3.jpg",this.loadImg(),this.showVerifying(),axios.post(this.$store.state.api+"test1").then(function(e){t.showResult(e.data)}).catch(function(t){})},test2:function(){var t=this;this.img1="http://test.adulgun.com/pv/4.jpg",this.img2="http://test.adulgun.com/pv/2.jpg",this.img3="http://test.adulgun.com/pv/3.jpg",this.loadImg(),this.showVerifying(),axios.post(this.$store.state.api+"test2").then(function(e){t.showResult(e.data)}).catch(function(t){})},saveold:function(){axios.post(this.$store.state.api+"saveold",this.form,{headers:{"Content-type":"application/json"}}).then(function(t){}).catch(function(t){})},save:function(){var t=this;axios.post(this.$store.state.api+"saveresult",this.form,{headers:{"Content-type":"application/json"}}).then(function(e){t.animate=!0,t.uploadPercentage=0}).catch(function(t){})},loadImg:function(){this.uploadPercentage=0,this.uploading=!0,this.disVerify=!0,this.disOnlyFace=!0,this.animate=!0;var t="",e=this.$store.state.language;"TH"==e?(t="กำลังยืนยันตัวตน...",this.str_loading="กำลังอัปโหลดรูปภาพ..."):"ENG"==e&&(t="Verifying...",this.str_loading="Uploading..."),this.str_result=t,this.toBottom()},showResult:function(t){this.stoptime(),this.uploading=!1,this.checkfile(),this.uploadPercentage=100,this.animate=!1;var e="",s=this.$store.state.language;this.form[1].var=t.firstnameeng+" "+t.lastnameeng,this.form[2].var=t.name,this.form[3].var=t.gender,this.form[4].var=t.idnumber,this.form[5].var=t.back,this.form[6].var=t.hbd,this.form[7].var=t.issueeng,this.form[8].var=t.exp,this.form[9].var=t.address.replace("ที่อยู่ ","").replace("\n"," ").trim(),this.form[10].var=t.time,this.form[10].id=t.runnumber,"TH"==s?(this.str_modalbutton="ตกลง",this.str_modaltitle="ผลลัพธ์การยืนยันตัวบุคคล",e+="ความเหมือน: ","same"==t.similarity?(e+="<font color='green'>เหมือน</font>",this.form[0].var="เหมือน",this.str_modal="รูปใบหน้าของเจ้าของบัตรกับ\nรูปใบหน้าบนบัตรประชาชน",this.str_modal2="พบว่ามีความคล้ายคลึงกัน",this.str_modal3="การยืนยันตัวบุคคลเสร็จสมบูรณ์",this.str_modalcolor="green",this.headerBgVariant="success"):"not same"==t.similarity?(e+="<font color='red'>ไม่เหมือน</font>",this.form[0].var="ไม่เหมือน",this.str_modal="รูปใบหน้าของเจ้าของบัตรกับ\nรูปใบหน้าบนบัตรประชาชน",this.str_modal2="พบว่าไม่มีความคล้ายคลึงกัน",this.str_modal3="",this.str_modalcolor="red",this.headerBgVariant="danger"):"non detect"==t.similarity&&(e+="<font color='red'>ตรวจจับใบหน้าไม่ได้</font>",this.form[0].var="ตรวจจับใบหน้าไม่ได้",this.str_modal="",this.str_modal2="ไม่สามารถตรวจจับ",this.str_modal3="รูปใบหน้าของเจ้าของบัตรหรือ\nรูปใบหน้าบนบัตรประชาชน",this.str_modalcolor="red",this.headerBgVariant="danger"),t.firstnameeng&&(e+="\nชื่ออังกฤษ: "+t.firstnameeng+" "+t.lastnameeng),t.name&&(e+="\nชื่อไทย: "+t.name),t.gender&&(e+="\nเพศ: ","Male"==t.gender?(e+="ชาย",this.form[3].var="ชาย"):"Female"==t.gender&&(e+="หญิง",this.form[3].var="หญิง")),t.idnumber&&(e+="\nรหัสบัตร: "+t.idnumber),t.back&&(e+="\nรหัสหลังบัตร: "+t.back),t.hbd&&(e+="\nวันเกิด: "+t.hbd),t.issueeng&&(e+="\nวันออกบัตร: "+t.issueeng),t.exp&&(e+="\nวันหมดอายุ: "+t.exp),this.str_loading="เสร็จสิ้น",this.saveold()):"ENG"==s&&(this.str_modalbutton="OK",this.str_modaltitle="Result",e+="Similarity: ","same"==t.similarity?(e+="<font color='green'>Same</font>",this.form[0].var="Same",this.str_modal="The face and face-id-card",this.str_modal2="are same.",this.str_modal3="",this.str_modalcolor="green",this.headerBgVariant="success"):"not same"==t.similarity?(e+="<font color='red'>Not same</font>",this.form[0].var="Not same",this.str_modal="The face and face-id-card",this.str_modal2="are different.",this.str_modal3="",this.str_modalcolor="red",this.headerBgVariant="danger"):"non detect"==t.similarity&&(e+="<font color='red'>Non detect</font>",this.form[0].var="Non detect",this.str_modal="The face and face-id-card",this.str_modal2="can not detect.",this.str_modal3="",this.str_modalcolor="red",this.headerBgVariant="danger"),t.firstnameeng&&(e+="\nName ENG: "+t.firstnameeng+" "+t.lastnameeng),t.name&&(e+="\nName TH: "+t.name),t.gender&&(e+="\nGender: "+t.gender),t.idnumber&&(e+="\nID number: "+t.idnumber),t.back&&(e+="\nID number back: "+t.back),t.hbd&&(e+="\nBirth Date: "+t.hbd),t.issueeng&&(e+="\nIssue: "+t.issueeng),t.exp&&(e+="\nEXP: "+t.exp),this.str_loading="Finish"),this.str_result=e,this.toBottom(),this.showModal()},toBottom:function(){setTimeout(function(){var t=document.scrollingElement||document.body;t.scrollTop=t.scrollHeight},10)},showModal:function(){this.$refs.myModalRef.show()},agreemodal:function(){this.$store.state.agree=!0,this.hideModal()},hideModal:function(){this.$refs.myModalRef.hide(),this.$refs.myModalRef2.hide()}}},x=y,w=(s("10a0"),Object(u["a"])(x,v,_,!1,null,null,null)),C=w.exports;a["a"].use(b["a"]);var k=new b["a"]({routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),$=s("2f62");a["a"].use($["a"]);var P=new $["a"].Store({state:{api:"https://api.facecom.site/",agree:!1,language:"TH"},getters:{getLG:function(t){return function(){return t.language}}},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:k,store:P,render:function(t){return t(g)}}).$mount("#app")},8554:function(t,e,s){t.exports=s.p+"img/1.862387f6.jpg"},"9b9b":function(t,e,s){t.exports=s.p+"img/t2p.2e944f7b.png"},abae:function(t,e,s){t.exports=s.p+"img/nsc.22dfbb57.png"},b9bd:function(t,e,s){}});
//# sourceMappingURL=app.1c3ae8ca.js.map