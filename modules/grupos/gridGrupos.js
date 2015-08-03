
Ext.define("Admin.view.modules.grupos.gridGrupos",{
    extend: "Admin.utils.com.Grilla",
    alias:"widget.gridgrupos",
    requires: [
        "Admin.view.modules.grupos.gridGruposController",
        "Admin.view.modules.grupos.gridGruposModel"
    ],
    forceFit:true,
    flex:1,
    controller: "modules-grupos-gridgrupos",
    viewModel: {
        type: "modules-grupos-gridgrupos"
    },
    initComponent:function(){
        var me=this;
        Ext.apply(me,{
            
        });
        me.callParent(arguments);
    }
    html: "Hello, World!!"
});
