({
    doInit: function (component, event, helper) {
        window.addEventListener('message', function (event) {
            const message = event.data;
            console.log('Aura (doInit): received message:', message);

            if (message && message.type === 'openRecord') {
                const recordId = message.recordId;
                console.log('Aura (doInit): handling openRecord with ID:', recordId);
                const navService = component.find("navService");
                const pageRef = {
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: message.recordId,
                        objectApiName: helper.getObjectApiName(message.recordId),
                        actionName: 'view'
                    }
                };

                console.log('Aura Copilot: Navigating to record:', pageRef);
                navService.navigate(pageRef);
            }
        });
    },

    handleMessage: function (component, event, helper) {
        // Optional — this won't work for iframe postMessage unless it's lightning:messageChannel
        const message = event.getParam('message');
        console.log('Aura (handleMessage): message param:', message);
    }
})