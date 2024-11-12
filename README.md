# Team-9
## Repository of the code for JPMC's Code for Good Hackathon made by team 9. 

### **Problem Statement**:
Designing an accessible, user-friendly solution where safety of employees and convenience are prioritized in features implemented

### **Teammates**: 
Casey Mak, Grace Kim, Gregory Marzano, Hayim Heron, Anjali Rajesh, Julian Chattopadhyay, Arya Utture

### **Vision**
We wanted to implement a software where it would ONLY allow the staffs(employees and supervisors) to login to the website

**supervisor login**: Where they are greeted a dashboard that allows the supervisor to check for all clients that doesn't have a staff assigned, all the clients, and all the staffs. Supervisors are able to see all the location of the employees in real time and depending on timesheets, the color of the markers will change and if they are in "danger", a notification will be sent to the supervisor.

**employee login**: They can see the the nearest clients and request to help them, they can see it on the map as well.
# Backend
## Endpoints and Purpose

### Client Route
` GET api/client/getAllClients`
```
Gets all clients information for dashboard
```

` GET api/client/clientsNoStaff`
```
Gets clients with no staff for assign/waitlist
```
#### Map Route
` GET api/map/getAllEmployeesPos`
```
Gets id, latitude, longitude in json for all employees
```
`GET api/map/getAllClientsPos`
```
Gets all id, latitude, longitude in json for all clients
```
`GET api/map/getClientPos/:id`
```
Get latitude, longitude in json specific client id
```
`api/map/getEmployeePos/:id`
```
Get latitude, longitude in json specific employee id
```
`PUT api/map/newEmployeePos` 
```	
req.body = {
    "id": 3,
    "latitude": "27.7749",
    "longitude": "-122.4193"
}
We wanted to implement a employee page where we coulld call an api which would update the employees latitude and longitude and save their new location in the database possibly through

https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

This would then update the employee's latitude and longitude in the database where the primarily use would be to getAllEmployeePos for the supervisor to see everything.
```

### Shortcuts and Add-ons
Employee Page is not done
We implemented the Supervisor Page

One of the main shortcuts we used is using dummy data and randomly moving the employee on the map for the **supervisor pov**

**Idealy** we would have the Employee Page be a specific instance that updates the employee position in newEmployeePos and in the supervisor page, we'd get the position of ALL employess in through that updated database.

Filter features in the dashboard