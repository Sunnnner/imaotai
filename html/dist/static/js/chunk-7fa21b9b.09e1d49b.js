(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fa21b9b","chunk-005cb0c7"],{"4b72":function(e,t,a){"use strict";a.d(t,"f",(function(){return i})),a.d(t,"e",(function(){return l})),a.d(t,"c",(function(){return r})),a.d(t,"i",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"g",(function(){return c})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"h",(function(){return d}));var n=a("b775");function i(e){return Object(n["a"])({url:"/tool/gen/list",method:"get",params:e})}function l(e){return Object(n["a"])({url:"/tool/gen/db/list",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/tool/gen/"+e,method:"get"})}function o(e){return Object(n["a"])({url:"/tool/gen",method:"put",data:e})}function s(e){return Object(n["a"])({url:"/tool/gen/importTable",method:"post",params:e})}function c(e){return Object(n["a"])({url:"/tool/gen/preview/"+e,method:"get"})}function u(e){return Object(n["a"])({url:"/tool/gen/"+e,method:"delete"})}function m(e){return Object(n["a"])({url:"/tool/gen/genCode/"+e,method:"get"})}function d(e){return Object(n["a"])({url:"/tool/gen/synchDb/"+e,method:"get"})}},"6f72":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"导入表",visible:e.visible,width:"800px",top:"5vh","append-to-body":""},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0}},[a("el-form-item",{attrs:{label:"表名称",prop:"tableName"}},[a("el-input",{attrs:{placeholder:"请输入表名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tableName,callback:function(t){e.$set(e.queryParams,"tableName",t)},expression:"queryParams.tableName"}})],1),a("el-form-item",{attrs:{label:"表描述",prop:"tableComment"}},[a("el-input",{attrs:{placeholder:"请输入表描述",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tableComment,callback:function(t){e.$set(e.queryParams,"tableComment",t)},expression:"queryParams.tableComment"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",[a("el-table",{ref:"table",attrs:{data:e.dbTableList,height:"260px"},on:{"row-click":e.clickRow,"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"tableName",label:"表名称","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{prop:"tableComment",label:"表描述","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleImportTable}},[e._v("确 定")]),a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")])],1)],1)},i=[],l=(a("a15b"),a("d81d"),a("4b72")),r={data:function(){return{visible:!1,tables:[],total:0,dbTableList:[],queryParams:{pageNum:1,pageSize:10,tableName:void 0,tableComment:void 0}}},methods:{show:function(){this.getList(),this.visible=!0},clickRow:function(e){this.$refs.table.toggleRowSelection(e)},handleSelectionChange:function(e){this.tables=e.map((function(e){return e.tableName}))},getList:function(){var e=this;Object(l["e"])(this.queryParams).then((function(t){200===t.code&&(e.dbTableList=t.rows,e.total=t.total)}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleImportTable:function(){var e=this,t=this.tables.join(",");""!=t?Object(l["d"])({tables:t}).then((function(t){e.$modal.msgSuccess(t.msg),200===t.code&&(e.visible=!1,e.$emit("ok"))})):this.$modal.msgError("请选择要导入的表")}}},o=r,s=a("2877"),c=Object(s["a"])(o,n,i,!1,null,null,null);t["default"]=c.exports},"82c8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"表名称",prop:"tableName"}},[a("el-input",{attrs:{placeholder:"请输入表名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tableName,callback:function(t){e.$set(e.queryParams,"tableName",t)},expression:"queryParams.tableName"}})],1),a("el-form-item",{attrs:{label:"表描述",prop:"tableComment"}},[a("el-input",{attrs:{placeholder:"请输入表描述",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tableComment,callback:function(t){e.$set(e.queryParams,"tableComment",t)},expression:"queryParams.tableComment"}})],1),a("el-form-item",{attrs:{label:"创建时间"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:code"],expression:"['tool:gen:code']"}],attrs:{type:"primary",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleGenTable}},[e._v("生成")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:import"],expression:"['tool:gen:import']"}],attrs:{type:"info",plain:"",icon:"el-icon-upload",size:"mini"},on:{click:e.openImportTable}},[e._v("导入")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:edit"],expression:"['tool:gen:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleEditTable}},[e._v("修改")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:remove"],expression:"['tool:gen:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tableList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"55"}}),a("el-table-column",{attrs:{label:"序号",type:"index",width:"50",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.queryParams.pageNum-1)*e.queryParams.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{label:"表名称",align:"center",prop:"tableName","show-overflow-tooltip":!0,width:"120"}}),a("el-table-column",{attrs:{label:"表描述",align:"center",prop:"tableComment","show-overflow-tooltip":!0,width:"120"}}),a("el-table-column",{attrs:{label:"实体",align:"center",prop:"className","show-overflow-tooltip":!0,width:"120"}}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"}}),a("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"updateTime",width:"160"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:preview"],expression:"['tool:gen:preview']"}],attrs:{type:"text",size:"small",icon:"el-icon-view"},on:{click:function(a){return e.handlePreview(t.row)}}},[e._v("预览")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:edit"],expression:"['tool:gen:edit']"}],attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(a){return e.handleEditTable(t.row)}}},[e._v("编辑")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:remove"],expression:"['tool:gen:remove']"}],attrs:{type:"text",size:"small",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:edit"],expression:"['tool:gen:edit']"}],attrs:{type:"text",size:"small",icon:"el-icon-refresh"},on:{click:function(a){return e.handleSynchDb(t.row)}}},[e._v("同步")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:code"],expression:"['tool:gen:code']"}],attrs:{type:"text",size:"small",icon:"el-icon-download"},on:{click:function(a){return e.handleGenTable(t.row)}}},[e._v("生成代码")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{staticClass:"scrollbar",attrs:{title:e.preview.title,visible:e.preview.open,width:"80%",top:"5vh","append-to-body":""},on:{"update:visible":function(t){return e.$set(e.preview,"open",t)}}},[a("el-tabs",{model:{value:e.preview.activeName,callback:function(t){e.$set(e.preview,"activeName",t)},expression:"preview.activeName"}},e._l(e.preview.data,(function(t,n){return a("el-tab-pane",{key:n,attrs:{label:n.substring(n.lastIndexOf("/")+1,n.indexOf(".vm")),name:n.substring(n.lastIndexOf("/")+1,n.indexOf(".vm"))}},[a("el-link",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t,expression:"value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],staticStyle:{float:"right"},attrs:{underline:!1,icon:"el-icon-document-copy"}},[e._v("复制")]),a("pre",[a("code",{staticClass:"hljs",domProps:{innerHTML:e._s(e.highlightedCode(t,n))}})])],1)})),1)],1),a("import-table",{ref:"import",on:{ok:e.handleQuery}})],1)},i=[],l=(a("d81d"),a("a9e3"),a("4b72")),r=a("6f72"),o=a("a70e"),s=a.n(o);a("b11d");s.a.registerLanguage("java",a("332f")),s.a.registerLanguage("xml",a("8dcb")),s.a.registerLanguage("html",a("8dcb")),s.a.registerLanguage("vue",a("8dcb")),s.a.registerLanguage("javascript",a("4dd1")),s.a.registerLanguage("sql",a("de09"));var c={name:"Gen",components:{importTable:r["default"]},data:function(){return{loading:!0,uniqueId:"",ids:[],tableNames:[],single:!0,multiple:!0,showSearch:!0,total:0,tableList:[],dateRange:"",queryParams:{pageNum:1,pageSize:10,tableName:void 0,tableComment:void 0},preview:{open:!1,title:"代码预览",data:{},activeName:"domain.java"}}},created:function(){this.getList()},activated:function(){var e=this.$route.query.t;null!=e&&e!=this.uniqueId&&(this.uniqueId=e,this.queryParams.pageNum=Number(this.$route.query.pageNum),this.getList())},methods:{getList:function(){var e=this;this.loading=!0,Object(l["f"])(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){e.tableList=t.rows,e.total=t.total,e.loading=!1}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleGenTable:function(e){var t=this,a=e.tableName||this.tableNames;""!=a?"1"===e.genType?Object(l["b"])(e.tableName).then((function(a){t.$modal.msgSuccess("成功生成到自定义路径："+e.genPath)})):this.$download.zip("/tool/gen/batchGenCode?tables="+a,"ruoyi"):this.$modal.msgError("请选择要生成的数据")},handleSynchDb:function(e){var t=this,a=e.tableName;this.$modal.confirm('确认要强制同步"'+a+'"表结构吗？').then((function(){return Object(l["h"])(a)})).then((function(){t.$modal.msgSuccess("同步成功")})).catch((function(){}))},openImportTable:function(){this.$refs.import.show()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.handleQuery()},handlePreview:function(e){var t=this;Object(l["g"])(e.tableId).then((function(e){t.preview.data=e.data,t.preview.open=!0,t.preview.activeName="domain.java"}))},highlightedCode:function(e,t){var a=t.substring(t.lastIndexOf("/")+1,t.indexOf(".vm")),n=a.substring(a.indexOf(".")+1,a.length),i=s.a.highlight(n,e||"",!0);return i.value||"&nbsp;"},clipboardSuccess:function(){this.$modal.msgSuccess("复制成功")},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.tableId})),this.tableNames=e.map((function(e){return e.tableName})),this.single=1!=e.length,this.multiple=!e.length},handleEditTable:function(e){var t=e.tableId||this.ids[0],a=e.tableName||this.tableNames[0],n={pageNum:this.queryParams.pageNum};this.$tab.openPage("修改["+a+"]生成配置","/tool/gen-edit/index/"+t,n)},handleDelete:function(e){var t=this,a=e.tableId||this.ids;this.$modal.confirm('是否确认删除表编号为"'+a+'"的数据项？').then((function(){return Object(l["a"])(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))}}},u=c,m=a("2877"),d=Object(m["a"])(u,n,i,!1,null,null,null);t["default"]=d.exports}}]);