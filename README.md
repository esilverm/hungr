# hungr

# Backend Endpoint
## GET
`hungr.khanhng.com/restaurants/:id`

Return list of restaurants based on device id.

## POST
`hungr.khanhng.com/swiped`.

Example of body content
```
{
   "deviceID": 209858979,
   "name": "Pizza Hut",
   "address": "3000 Broadway",
   "city": "New York",
   "state": "NY",
   "zipcode": "10001"
}

```
