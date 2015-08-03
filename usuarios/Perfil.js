
Ext.define("Admin.view.usuarios.Perfil",{
    extend: "Ext.panel.Panel",

    requires: [
        "Admin.view.usuarios.PerfilController",
        "Admin.view.usuarios.PerfilModel"
    ],

    controller: "usuarios-perfil",
    viewModel: {
        type: "usuarios-perfil"
    },

    html: "Hello, World!!"
});
