# Find the milk a cafe has

This project is to give Wellingtonians a view of what milks are available at what cafes in their cities. 


## Database Tables:

### Cafes

Column_name | Datatype
--- | ---
id | integer
cafe_name | string
latitude | float
longitude | float
website | string

### Milks

Column_name | Datatype
--- | ---
id | integer
milk_type | string


### Cafes_and_Milks

Column_name | Datatype
--- | ---
id | integer
cafe_id | integer
milk_id | integer


## API doc: request and response format

### GET /api/cafes
Returns the full list of cafes
#### Response

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

### GET /api/cafes/:id
Returns a single cafe
#### Response

```


    
{
    "id" : 4001,
    "cafe_name" : "Milk Crate",
    "latitude" : -41.2936,
    "longitude" : 174.7764,
    "website" : "www.milkcrate.co.nz"
 }
    
```

### GET /api/milks
Returns a full list of milks
#### Response

```
{
    [
        {
            "id" : 2001,
            "milk_type" : "Cow"
        },
        {
            "id" : 2002,
            "milk_type" : "Soy"
        }
    ]
}

```

### GET /api/milks/:id
Returns a single milk
#### Response

```

{
    "id" : 2001,
    "milk_type" : "Cow"
}


```

### GET /api/milk/:id/cafes
Retrieves the array of cafes that serve a certain milk
#### Response

```

[
    {
        "id": 8001,
        "cafe_name": "Milk Crate",
        "latitude": -41.2936,
        "longitude": 174.7764,
        "website": "www.milkcrate.co.nz",
        "cafe_id": 4001,
        "milk_id": 2001
    },
    {
        "id": 8004,
        "cafe_name": "Deluxe Espresso Bar",
        "latitude": -41.2943,
        "longitude": 174.7841,
        "website": "www.facebook.com/deluxecafewgtn",
        "cafe_id": 4002,
        "milk_id": 2001
    }
]



```