<aura:component implements="lightning:availableForFlowActions,force:hasRecordId">
    <!-- no markup needed -->
</aura:component>


({
    invoke : function(component, event, helper) {
        $A.get('e.force:refreshView').fire();
        $A.get('e.force:refreshView').trigger();
	$A.get("e.force:closeQuickAction").fire();
	
    }
})
