# Integrated React App in Salesforce Using Lightning Container

This guide explains how to integrate a React application into Salesforce using the Lightning Container component.

## Prerequisites
- Salesforce Developer Org
- React application
- Basic knowledge of Salesforce Lightning Components

## Steps to Integrate

1. **Clone the React Application**  
    Clone the pre-built React application from the repository:
    ```bash
    git clone https://github.com/ranjith-kumar-kuruba/react-copilot.git
    cd react-copilot
    npm install
    npm run build
    ```

2. **Host the React App**  
    Deploy the React app to a static hosting service (e.g., AWS S3, Netlify, or Heroku) or use Salesforce's static resources.

3. **Upload React App as a Static Resource**  
    - Zip the `build` folder of your React app.
    - Go to Salesforce Setup → Static Resources.
    - Upload the zipped file and name it (e.g., `ReactApp`).

4. **Create a Lightning Component**  
    Use the Lightning Container to embed the React app:
    ```xml
    <!-- reactAppContainer.cmp -->
    <aura:component>
         <lightning:container src="{!$Resource.ReactApp + '/index.html'}" 
                                     onmessage="{!c.handleMessage}" 
                                     style="width: 100%; height: 100%;">
         </lightning:container>
    </aura:component>
    ```

5. **Add Controller Logic**  
    Handle communication between Salesforce and the React app:
    ```javascript
    // reactAppContainerController.js
    ({
         handleMessage: function(component, event, helper) {
              const message = event.getParam("message");
              console.log("Message from React App: ", message);
         }
    })
    ```

6. **Embed the Component in Salesforce**  
    - Add the Lightning component to a Lightning page or app or utility items 
    - Open Copilot Assistant Lightning page
    

## Testing
- Navigate to the page where the Lightning component is added.
- Verify the React app is loaded and functional.

## Notes
- Ensure CORS is configured if hosting the React app externally.
- Use `postMessage` for communication between Salesforce and the React app.

## References
- [Salesforce Lightning Container Documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:container/documentation)
- [React Official Documentation](https://reactjs.org/docs/getting-started.html)