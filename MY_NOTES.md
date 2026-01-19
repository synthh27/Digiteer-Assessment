# **Task Manager**

## **BACKEND \[.NET 9 | PostgreSQL | EF Core | Swagger]**

### **Initial Assessment**

###### **FEATURES TO ADD**

1. USER REGISTER
2. USER LOGIN
3. USER AUTH
4. GET TASK BY ID
5. GET TASKS BY USER


###### **MISC TO ADD**

1. Guard Clauses
2. authRequire Middleware


## **FRONTEND \[ReactJS | Vite | Axios | Tailwind]**


### **Initial Assessment**

###### **SCREENS TO ADD**

1. USER REGISTER
2. USER LOGIN

###### **SCREENS TO FIX**

1. TASKS

###### **COMPONENTS TO ADD (From scratch or Shadcn/ui)**

1. NAVBAR
2. TASKS TABLE
3. INPUT FIELDS
4. FORM BOXES



###### **FINAL CHANGES**

1. Added Auth Controller in the Backend
2. Updated and Added Auth require for the '/tasks' method
3. Configured JWT as the default authentication service
4. Configured SwaggerUI to require authorization
5. Configured CORS services and middleware to resolve CORS issues
6. Created new screens (Login and Register)
7. Create new components (Navbar, Modal, Create, Update, and Delete Modals)
8. Created Helpers for email format and password length validation
9. Implemented all Auth APIs
10. Implemented all Tasks APIs
11. Added Protected routes to restrict unauthorized access to the Tasks page
