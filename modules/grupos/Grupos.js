
Ext.define("Admin.view.modules.grupos.Grupos",{
    extend: "Ext.panel.Panel",

    requires: [
        "Admin.view.modules.grupos.GruposController",
        "Admin.view.modules.grupos.GruposModel"
    ],

    controller: "modules-grupos-grupos",
    viewModel: {
        type: "modules-grupos-grupos"
    },

    html: "Hello, World!!"
});
