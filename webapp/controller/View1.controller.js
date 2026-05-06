sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.project1.controller.View1", {
        onInit() {
        },
        onClearPress: function() {
            this.byId("idName").setValue("");
            this.byId("idStreet").setValue("");
            this.byId("idHouseNumber").setValue("");
            this.byId("idZipCode").setValue("");
            this.byId("idCity").setValue("");
            this.byId("idCountry").setSelectedKey(null);
        }
    });
});