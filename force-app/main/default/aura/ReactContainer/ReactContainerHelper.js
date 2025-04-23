({
    getObjectApiName: function(recordId) {
        const prefixMap = {
            '001': 'Account',
            '003': 'Contact',
            '005': 'User',
            '006': 'Opportunity',
            '500': 'Case'
            // Add more as needed
        };
        
        const prefix = recordId.substring(0, 3);
        return prefixMap[prefix] || 'Record';
    }
})