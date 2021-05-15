##### Экран текущих эвентов
http://192.168.88.235:8000/location/<table_prop>
- table_prop = id, geotag, creation_date, start_date, end_date, org, status, reward, square, availability

пример:

http://192.168.88.235:8000/location/?org=1

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


####### add user
- post
- `/user`

####### edit user
- post
- `/user`
