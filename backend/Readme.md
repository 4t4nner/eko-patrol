##### Экран текущих эвентов
http://192.168.88.235:8000/location/?<table_prop>
- table_prop = id, geotag, creation_date, start_date, end_date, org, status, reward, square, availability

пример:

- http://192.168.88.235:8000/location/?org=1
- `http://192.168.88.235:8000/location/?org=1&participantId=1` - participantId - зареганый на локаци пользователь


#####images
get<br>
http://192.168.88.235:8000/public/<image_name>
- ?participantId=number -- 



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
        status: 'start', // end or whatever
        reward: 1.4, // награда
        square: 1.4, // площадь
        availability: 5
    })
})

```


####### add user
- post
- `/user`
'photo','name','phone','email','rating','score'

####### edit user
- post
- `/user`
