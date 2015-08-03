Ext.define('Admin.view.usuarios.usuariosView', {
	extend: 'Ext.panel.Panel',
	alias: ['widget.usuariosview'],
	requires:[
		'Admin.view.usuarios.gridUsuarios'
	],
	layout:{
		type:'vbox',
		align:'stretch'
	},

	// cls: 'shadow-panel',
	// cls: 'social-panel shadow-panel',
	margin: 20,
	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			items:[
				{
					xtype:'gridusuarios',
					flex:1
				}
			]
		});

		me.callParent(arguments);
	}
});	