# node-openshift

# How to use this project:
1. If you do not already have one, provison an OpenShift Container Platform environment.
2. Navigate to the OpenShift Web Console.
3. Create a new project in OpenShift.
4. Select the JavaScript category from the catalog and then select the Node.js builder image.
5. Enter a name for the application and specify the URL for the repository (https://github.com/jwechsler10/node-openshift or your own fork).
6. (Optional) Click the advanced options to enable any additional features you might like (Scaling, Resource Limits, Routing, etc).
7. Our Node.js Application will now build and launch. Make a note of the webhook, as this is used to trigger a new build anytime a change is checked into the repository.
8. Navigate to the Settings page of your repository and select the Webhooks option.
9. Click the Add Webhook button 
10. Click the link to proceed to overview and watch as the pod(s) are created.
11. Next, create the MongoDB pod by clicking Add to Project and selecting the Browse Catalog option.
12. Enter MongoDB into the search bar and choose the appropriate option under Data Stores.
   * If using the ephemeral storage option, set any additional options if desired and click create.
   * If using the persistent storage option, a persistent volume with the requested amount of free space will need to be available.
   * A persistent volume claim will be created automatically.
13. MongoDB will now build and launch. Make a note the specified connection string, as this will needed to connect the Node server to MongoDB.
14. Open connectToDB.js and replace ('mongodb://jared:r3dh4t1!@mongodb-test/test') with the specified connection string.
15. Commit these changes to git, watch as a new build for your Node pod(s) will begin. 
16. Once the pod(s) are active, check the logs for them, it should say connection successful.
17. Your node pods and MongoDB pods are now talking to each other.
