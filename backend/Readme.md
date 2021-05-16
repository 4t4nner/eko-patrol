##### Экран текущих эвентов, получение локации
http://192.168.88.235:8000/location/?<table_prop>
- table_prop = id, geotag, creation_date, start_date, end_date, org, status, reward, square, availability

пример:

- http://192.168.88.235:8000/location/?org=1
- `http://192.168.88.235:8000/location/?org=1&participant_id=1` - participant_id - зареганый на локацию пользователь

<b>status of location</b>
- prepare
- active
- finish
- history

#####images
get<br>
http://192.168.88.235:8000/public/<image_name> 



####### @return confirmers of location
get<br>
/location/confirmers/:locationId

####### добавление / изменение локации 
- post
- `/location/:id?`

```js
fetch('/location', {
    body: JSON.stringify({
        geotag: 'geotag',
        start_date: new Date(),
        end_date: new Date(),
        org: 1,
        contamination: 1,
        status: 'start', // end or whatever
        reward: 1.4, // награда
        square: 1.4, // площадь
        availability: 'something'
    })
})

```


####### add user
- get
- `/user`

####### add user
- post
- `/user`
'photo','name','phone','email','rating','score'

####### edit user
- post
- `/user/:id`
'photo','name','phone','email',
'rating' = 1.4
'score' = 5

####### add participant to location
- `/location/participant`
- PUT !!!
- return id of inserted row in participant table
- body: {participant_id, location_id}