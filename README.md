# Find the milk a cafe has

This project is to give Wellingtonians a view of what milks are available at what cafes in their cities. 


## Database Tables:

####Cafes
Column_name | Datatype
--- | ---
id | integer
cafe_name | string
latitude | float
longitude | float
website | string

####Milks
Column_name | Datatype
--- | ---
id | integer
milk_type | string


####Cafes_and_Milks
Column_name | Datatype
--- | ---
id | integer
cafe_id | integer
milk_id | integer


##API doc: request and response format

###GET /api/cafes
####Request
```
{
    [
        {
            "id" : 4001,
            "cafe_name" : "Milk Crate",
            "latitude" : -41.2936,
            "longitude" : 174.7764,
            "website" : "www.milkcrate.co.nz"
        },
        {
            "id" : 4002,
            "cafe_name" : "Deluxe Espresso Bar",
            "latitude" : -41.2943,
            "longitude" : 174.7841,
            "website" : "www.facebook.com/deluxecafewgtn"
        }
    ]
}
```

###GET /api/cafes/:id
####Request
```
{
    [
        {
            "id" : 4001,
            "cafe_name" : "Milk Crate",
            "latitude" : -41.2936,
            "longitude" : 174.7764,
            "website" : "www.milkcrate.co.nz"
        }
    ]
}
```