# Integrated React App in Salesforce Using Lightning Container

## Overview
This guide explains how to integrate a React application into Salesforce using the Lightning Container component.

## Using React in Salesforce

The `lightning:container` component is a powerful tool that allows you to embed third-party applications, such as React apps, directly into Salesforce. Here's a detailed explanation of how it works and how to use it.

### What is `lightning:container`?

`lightning:container` is a Lightning Aura component that acts as a wrapper for hosting external applications. It uses an iframe to load the external app and provides a mechanism for two-way communication between Salesforce and the hosted app using the `postMessage` API.

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

## Deployment

### Option 1: Use the Pre-Built React App
1. **Deploy the Salesforce App**  
    Deploy the `force-app` folder to your Salesforce org using the Salesforce CLI:
    ```bash
    sfdx force:source:deploy -p force-app
    ```

2. **Verify Deployment**  
    - Log in to your Salesforce org.
    - Navigate to the Lightning page or app where the React app is embedded.
    - Ensure the React app is loaded and functional.

### Option 2: Clone and Build the React App
1. **Clone the React Application**  
    Clone the React app from the GitHub repository:
    ```bash
    git clone https://github.com/ranjith-kumar-kuruba/react-copilot.git
    cd react-copilot
    ```

2. **Install Dependencies**  
    Install the required dependencies for the React app:
    ```bash
    npm install
    ```

3. **Build the React App**  
    Build the React app to generate the production-ready files:
    ```bash
    npm run build
    ```

4. **Upload the Build Files to Salesforce**  
    - Zip the contents of the `build` folder.
    - Go to Salesforce Setup → Static Resources.
    - Upload the zipped file and name it (e.g., `ReactApp`).

5. **Deploy the Lightning Component**  
    Deploy the `force-app` folder to your Salesforce org using the Salesforce CLI:
    ```bash
    sfdx force:source:deploy -p force-app
    ```

6. **Test the Integration**  
    - Navigate to the Lightning page or app where the React app is embedded.
    - Verify the React app is loaded and functional.

## References
- [Salesforce Lightning Container Documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:container/documentation)
- [React Official Documentation](https://reactjs.org/docs/getting-started.html)

## Example Interactions

### Input and Expected Responses

#### General Greetings
| Input       | Expected Copilot Response                          |
|-------------|----------------------------------------------------|
| hello       | 👋 Hello! How can I assist you today?              |
| hi          | 👋 Hello! How can I assist you today?              |
| hey there   | 👋 Hello! How can I assist you today?              |

#### ❓ Help & Info Commands
| Input       | Expected Copilot Response                          |
|-------------|----------------------------------------------------|
| /help       | Try: /info, /plugin weather, or enter a Salesforce Record ID. |
| /info       | 🤖 I am your Salesforce Copilot Assistant.         |
| /unknown    | ❓ Unknown command. Try /help.                     |

#### 🌤️ Weather Plugin
| Input           | Expected Behavior                              |
|------------------|-----------------------------------------------|
| weather Delhi    | Fetches and shows current weather in Delhi    |
| /plugin weather  | Shows funny weather-themed response           |
| weather          | Does nothing or shows error (no city provided)|

#### 😂 Joke Plugin
| Input           | Expected Behavior                              |
|------------------|-----------------------------------------------|
| joke            | Fetches 3 two-part jokes using JokeAPI         |
| /plugin joke    | Not supported — returns ❓ Unknown command      |

#### 🔍 Salesforce Record ID
| Input                | Expected Copilot Response                 |
|-----------------------|-------------------------------------------|
| 001XXXXXXXXXXXXXXX    | Shows button to open record, logs ID      |
| 003ABCDEF123456XYZ    | Same as above                            |

#### 🧠 Other Text
| Input                | Expected Copilot Response                 |
|-----------------------|-------------------------------------------|
| random input text     | 🤖 You said: "random input text". Need help? Try /help. |