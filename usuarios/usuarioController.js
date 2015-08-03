Ext.define('Admin.usuarios.usuarioController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.usuarios-formusuario',
	guardar:function(self){
		var form=self.up('form');
        console.log(form.grid);
        if (form.getForm().isValid()) {
            form.submit({
            	waitMsg: 'Procesando solicitud...',
                success: function(f, action) {
                    self.up('window').close();
                    form.grid.getStore().reload();
					Ext.Msg.show({
						title: 'Información',
						msg: action.result.msg,
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.INFO                    
					});
                },
                failure: function(f, action) {

                    Ext.Msg.show({
                        title: 'Error',
                        msg: action.result.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR                    
                    });
                }
            });
        }
	},
    onRender:function(self){
        if(typeof(self.record)!='undefined'){
            self.loadRecord(self.record);
        }
    },
    abrirRegistrar:function(self){
        var grid =self.up('grid');
        Ext.create('Ext.window.Window', {
            title: 'Registar Usuario',
            height: 200,
            width: 600,
            layout: 'fit',
            modal: true,
            constrainHeader: true,
            resizable: false,
            items: [
                {
                    xtype:'formusuario',
                    url:constants.URL_GUARDAR_USUARIO,
                    grid:grid
                }
            ]
        }).show();
    }
});