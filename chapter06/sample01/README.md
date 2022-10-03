# Sample 01

# Prerequisites
- [Apache Tomcat](https://tomcat.apache.org/tomcat-9.0-doc/) 8.x or 9.x.
> **NOTE**  
> If you are using Apache Tomcat 10 or a later version, use [this conversion](https://tomcat.apache.org/download-migration.cgi) tool to change the namespaces of the web application. This is necessary because of the namespace changes introduced in Tomcat 10.

### 1. Create an Application in Asgardeo
Here we are using Asgardeo as the OpenID Provider.

1. Navigate to [**Asgardeo Console**](https://console.asgardeo.io/login) and click on **Applications** under **Develop** tab
   
2. Click on **New Application** and then **Traditional Web Application**.
   
3. Select OIDC from the selection and enter any name as the name of the app and add the redirect URL(s).
   
4. Click on Register. You will be navigated to management page of the created application.
   
5. Add `https://localhost:8080` (or whichever the URL your app is hosted on) to **Allowed Origins** under **Protocol** tab.
   
6. Click on **Update** at the bottom.

# Running the sample apps
1. Download the [oidc-sample-app.war](https://github.com/asgardeo/asgardeo-tomcat-oidc-agent/releases/download/v0.1.25/oidc-sample-app.war).

2. Deploy the application, `oidc-sample-app.war` using Apache Tomcat.

3. Update the `consumerKey`, `consumerSecret`, `callBackURL`, `authorizeEndpoint`, `logoutEndpoint`, `tokenEndpoint`, `issuer` and `jwksEndpoint` values in the `oidc-sample-app.properties` file in `<APP_HOME>/WEB-INF/classes` directory using the value in the Asgardeo Console. These values can be found in the the **Info tab** of the Management settings of the OIDC application you created in Asgardeo.<img alt="Screenshot 2021-10-12 at 19 21 55" src="https://user-images.githubusercontent.com/42619922/136969300-1b811573-d80b-4c31-b028-95f983765643.png">
5. Restart the Tomcat server to allow the changes.
6. Try out the application by accessing the `http://localhost:8080/oidc-sample-app/index.html`.
