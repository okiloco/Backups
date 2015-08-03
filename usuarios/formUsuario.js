Ext.define('Admin.view.usuarios.formUsuario',{
	extend:'Ext.form.Panel',
	alias: ['widget.formusuario'],
	bodyPadding: 10,	
    layout:'column',
    fieldDefaults:{
    	margin:5,
    	labelAlign: 'left',
    	labelWidth: 80,
    },
    defaults:{
     xtype: 'container',
     layout: 'form',
     columnWidth: 0.5
    },
    requires:[
    	'Ext.form.field.Hidden',
    	'Admin.usuarios.usuarioController'
    ],
    controller: "usuarios-formusuario",
    items: [
    	{
    		xtype: 'hiddenfield',
    		name: 'id'
    	},
    	{
    		xtype: 'textfield',
    		name: 'usuario',
    		allowBlank:false,
    		fieldLabel: 'Usuario'
    	},
    	{
			xtype: 'listBox',
			name: 'perfil_id',
			fieldLabel: 'Perfil',
			store:Ext.create("Admin.utils.com.Store",{
	            url:constants.URL_LISTAR_PERFILES,
				fields:[
					'id',
					'nombre'
				]
			}),
		    displayField: 'nombre',
		    valueField: 'id'
		},
    	{
    		xtype: 'textfield',
    		name: 'clave',
    		allowBlank:false,
    		inputType: 'password',
    		fieldLabel: 'Contraseña'
    	},
    	{
    		xtype: 'textfield',
    		name: 'email',
    		allowBlank:false,
    		fieldLabel: 'Email',
    		vtype:'email'
    	} 
    ],
    buttons: [
    	{
    		text: 'Guardar',
    		formBind: true,
        	disabled: true,
        	handler:'guardar'
		}
	],
	listeners:{
		afterrender:'onRender'
	}
});