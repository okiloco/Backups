Ext.define('Admin.view.usuarios.gridUsuarios', {
	extend: 'Admin.utils.com.Grilla',
	alias: ['widget.gridusuarios'],
	title:'Usuarios',
	cls: 'allRecordsCls',
	forceFit:true,
	flex:1,
	// hideHeaders: true,
    // cls: 'social-panel shadow-panel',
    // cls:'grilla',
    requires:[
		'Admin.view.usuarios.formUsuario',
		
		'Ext.window.Window'
    ],

	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store:Ext.create("Admin.utils.com.Store",{
	            url:constants.URL_LISTAR_USUARIOS,
				fields:[

					'usuario',
					{
						name:'nombre',
						mapping:'primer_nombre',
						convert:function(v,record){
							return v+" "+record.get("primer_apellido")+" "+record.get("segundo_apellido");
						}
					},
					'primer_nombre',
					'segundo_nombre',
					'primer_apellido',
					'segundo_apellido',
					'identificacion',
					'telefono',
					'celular',
					'email',
					'direccion',
					'barrio',
					'padre_id',
					"perfil",
					'id',
				]
			}),
			columns:[
				{
					text:'Nombre',
					dataIndex:'nombre',
					width:120
				},
				{
					text:'Usuario',
					dataIndex:'usuario'
				},
				{
					text:'Identificacion',
					dataIndex:'identificacion'
				},
				{
					text:'Telefono',
					dataIndex:'telefono'
				},
				{
					text:'Celular',
					dataIndex:'celular'
				},
				{
					text:'Dirección',
					dataIndex:'direccion'
				},
				{
					text:'Barrio',
					dataIndex:'barrio'
				},
				{
					text:'Perfil',
					dataIndex:'perfil'
				},
				{
				    xtype: 'actioncolumn',
				    cls: 'content-column',
				    dataIndex: 'bool',
				    align:'center',
				    text: 'Actions',
				    tooltip: 'edit ',
				    items: [

				    // ui: 'soft-cyan',
				   
				    // ui: 'soft-purple',
				        {
				            xtype: 'button',
				            iconCls: 'x-fa fa-pencil',
				             ui: 'blue',
				             tooltip:'Editar',
				             handler:function(grid,rowIndex){
				             	var record=grid.getStore().getAt(rowIndex);
				             	Ext.create('Ext.window.Window', {
				             	    title: 'Editar Usuario',
				             	    height: 200,
				             	    width: 600,
				             	    layout: 'fit',
				             	    modal: true,
				             	    constrainHeader: true,
				             	    resizable: false,
				             	    items: [
				             	        {
				             	            xtype:'formusuario',
				             	            url:constants.URL_EDITAR_USUARIO,
				             	            grid:grid,
				             	            record:record
				             	        }
				             	    ]
				             	}).show();
				             }
				        },
				        {
				            xtype: 'button',
				            iconCls: 'x-fa fa-close',
				             ui: 'soft-red',
				             scope:me,
				             tooltip:'Eliminar',
				             handler:me.eliminar
				        }/*,
				        {
				            xtype: 'button',
				            iconCls: 'x-fa fa-ban',
				            ui: 'soft-purple',
				            tooltip:''
				        }*/
				    ]
				}
			],
			tbar:[
				{
					xtype: 'textfield',
					name: 'identificacion',
					emptyText: 'Identificación'
				},
				{
					xtype: 'textfield',
					name: 'primer_nombre',
					emptyText: 'Nombre'
				},
				{
					xtype: 'textfield',
					name: 'primer_apellido',
					emptyText: 'Apellido'
				},
				{
					xtype: 'listBox',
					name: 'perfil',
					emptyText: 'Perfil',
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
					xtype: 'button',
					text: 'Filtrar',
					name: 'filtrar',
					margin:2,
					// style:"background-color:##e9e9e9;color:color:#fff!important;",
					// scale:'small',
					iconCls: 'x-fa fa-search',
				},
				{
					xtype: 'button',
					text: 'Limpiar',
					name: 'limpiar',
					margin:2,
					// style:"background-color:#fc8999;color:#fff!important;",
					// scale:'small',
				    iconCls: 'x-fa fa-close',
				},
				'->',
				{
					xtype: 'button',
					text: 'Registar',
					name: 'registrar',
					scale:'medium',
				    iconCls: 'add',
				    scope:me,
				    listeners:{
				    	click:function(self){
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
		    		}
				}

			]
		});

		me.callParent(arguments);
	},
	eliminar:function(grid,rowIndex){
		var record=grid.getStore().getAt(rowIndex);
		Ext.Msg.confirm('Atención', 'Desea eliminar el usuario?', function(buttonId, text, v) {
			if(buttonId == 'yes') {
				Ext.Ajax.request({
					scope: this,
					url: constants.URL_ELIMINAR_USUARIO,
					params: {
						id:record.get("id")
					},
					success: function(response) {
						var responseObject = Ext.decode(response.responseText);
						grid.getStore().reload();
						
					},
					failure: function(response) {
				
						Ext.Msg.show({
							title: 'Error',
							msg: 'Error al procesar la petición.',
							buttons: Ext.Msg.OK,
							icon: Ext.Msg.ERROR
						});
					}
				});
			}
		}, this);
	}
})