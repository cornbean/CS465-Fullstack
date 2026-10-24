# CS465-Fullstack

Architecture
•	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
    o	Express is built using the traditional multi-page framework. The web-pages are rendered on the backend server using templates and then serves        them to the client for the user to see. Angular however is client-side rendered. What this means is that the client renders the page not the         backend, and is able to dynamically update the page when a change is detected without having to fully refresh the page. This gives the user a        fluid interface that provides immediate feedback for the user.    

•	Why did the backend use a NoSQL MongoDB database?
    o	NoSQL was used for the backend due to the document-based schema offering dynamic flexibility, which are then stored as JSON-like documents on        the MongoDB. This also provides high performance scaling, allowing the entire trip structures to be called at once.

Functionality
•	How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
    o	JSON is used strictly for data exchanges and is language independent, whereas Javascript is a programming language used to execute logic and         control app behavior.
    
•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
    o	UI components were refactored to be reusable, allowing for greater scalability in case the core layout of the card was changed. If you have           multiple cards, instead of having to update the layout of each one, the component is updated itself so the change only has to be made once.

Testing
•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
    o	Endpoints act as gateways exposed by the server, a path of where to go. Methods are a defined actions intended for those endpoints, i.e. GET         for retrieval, POST for creation, PUT for updates, and DELETE for deletion. Testing was conducted using Postman along with the actual live           website, making sure to monitor the console using F12 for any errors that would crop up. 
    o	For the security portion, that was a little different than just making sure the trip information was updated. I used the JwtInterceptor class        to monitor outgoing traffic and add the Authorization header onto any requests altering data. The backend processes the header and verifies          the signature of the login to make sure it is valid before updating the record.

Reflection
•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
    o	I have enjoyed my time in this course, even during the trying times and the occasional frustration. I have learned a lot and have a better           understanding of how a simple website works and didn’t realize how much goes into it before. I will use the knowledge learned here to elevate        my skills as a Computer Science major, start my career, and build projects at home.
<img width="468" height="634" alt="image" src="https://github.com/user-attachments/assets/a5739e32-11bd-49d5-84ce-19ff7af7c494" />
