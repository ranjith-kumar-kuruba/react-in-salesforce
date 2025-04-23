# Integrated React App in Salesforce Using Lightning Container

This guide explains how to integrate a React application into Salesforce using the Lightning Container component.
## Using React Container in Salesforce

The `lightning:container` component is a powerful tool that allows you to embed third-party applications, such as React apps, directly into Salesforce. Here's a detailed explanation of how it works and how to use it.

### What is `lightning:container`?

`lightning:container` is a Lightning Aura component that acts as a wrapper for hosting external applications. It uses an iframe to load the external app and provides a mechanism for two-way communication between Salesforce and the hosted app using the `postMessage` API.

### Example Code

Below is an example of how to use `lightning:container` to embed a React app in Salesforce.

#### Lightning Component Markup
```xml
<!-- reactAppContainer.cmp -->
<aura:component>
    <!-- Embed the React app using lightning:container -->
    <lightning:container 
        src="{!$Resource.ReactApp + '/index.html'}" 
        onmessage="{!c.handleMessage}" 
        style="width: 100%; height: 100%;">
    </lightning:container>
</aura:component>
```

**Explanation:**
- `src`: Specifies the URL of the React app. Here, the app is hosted as a Salesforce static resource (`$Resource.ReactApp`).
- `onmessage`: Defines the handler for messages sent from the React app to Salesforce.
- `style`: Sets the dimensions of the iframe.

#### Controller Logic
```javascript
// reactAppContainerController.js
({
    handleMessage: function(component, event, helper) {
        // Retrieve the message sent from the React app
        const message = event.getParam("message");
        console.log("Message from React App: ", message);

        // Perform any necessary actions based on the message
    }
})
```

**Explanation:**
- The `handleMessage` function listens for messages sent from the React app using the `postMessage` API.
- The `message` parameter contains the data sent from the React app.

#### React App Communication
To enable communication from the React app to Salesforce, use the `postMessage` API in your React app:
```javascript
// Inside your React app
window.parent.postMessage({ message: "Hello, Salesforce!" }, "*");
```

**Explanation:**
- `window.parent.postMessage`: Sends a message from the React app to the parent iframe (Salesforce).
- The message can be any JavaScript object.

### Key Points to Remember
1. **Static Resource Hosting**: Ensure the React app is uploaded as a static resource in Salesforce or hosted on a CORS-enabled external server.
2. **Two-Way Communication**: Use `postMessage` for communication between Salesforce and the React app.
3. **Security**: Always validate and sanitize messages to prevent security vulnerabilities.

By following these steps, you can seamlessly integrate a React app into Salesforce using the `lightning:container` component.
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