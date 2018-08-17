# Controllers
Controllers should be the functions called once a route's request has traversed through all middleware. 
Controllers should call a single service and transform that services response into a response for the request.

Guidlines:
* Controllers should be tested (mock services should be used)
* Controllers should return the utility functions (See example)