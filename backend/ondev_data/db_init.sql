create table location
(
  id int unsigned auto_increment primary key ,
  geotag varchar(255) null,
  creation_date datetime null,
  start_date datetime null,
  end_date datetime null,
  org int unsigned null,
  status varchar(255) null,
  reward float unsigned null
);
create table photo
(
  id int unsigned auto_increment primary key ,
  path varchar(511),
  type varchar(255)
);

create table photo_location
(
  id int unsigned auto_increment primary key ,
  location_id int unsigned,
  photo_id int unsigned,
  CONSTRAINT `fk_photo_location_location`
    FOREIGN KEY (location_id) REFERENCES location (id),
  CONSTRAINT `fk_photo_location_photo`
    FOREIGN KEY (photo_id) REFERENCES photo (id)
);


create table user
(
  id int unsigned auto_increment primary key ,
  photo varchar(511) null, # path
  name varchar(255) null,
  phone varchar(255) null,
  email varchar(255) null,
  raiting float unsigned null

);


create table participant
(
  id int unsigned auto_increment primary key,
  user_id int unsigned,
  photo_id int unsigned,

  FOREIGN KEY (user_id) REFERENCES user (id),
  FOREIGN KEY (photo_id) REFERENCES photo (id)
);

create table location_confirmer
(
  id int unsigned auto_increment primary key,
  user_id int unsigned,
  photo_id int unsigned,

  FOREIGN KEY (user_id) REFERENCES user (id),
  FOREIGN KEY (photo_id) REFERENCES photo (id)
);

