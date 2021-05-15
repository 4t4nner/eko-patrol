-- MySQL dump 10.19  Distrib 10.3.29-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: eko_patrol
-- ------------------------------------------------------
-- Server version	10.3.29-MariaDB-1:10.3.29+maria~bionic-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `location` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `geotag` varchar(255) DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `org` int(10) unsigned DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `reward` float unsigned DEFAULT NULL,
  `square` float unsigned DEFAULT NULL,
  `availability` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` (`id`, `geotag`, `creation_date`, `start_date`, `end_date`, `org`, `status`, `reward`, `square`, `availability`) VALUES (1,'test_geotag','2021-05-15 04:08:07','2021-05-15 04:07:00','2021-05-15 04:08:00',1,'test',2.4,NULL,NULL),(2,'test_geotag','2021-05-15 04:11:12','2021-05-15 04:07:00','2021-05-15 04:08:00',1,'test',2.4,NULL,NULL),(3,'test_geotag','2021-05-15 04:12:31','2021-05-15 04:07:00','2021-05-15 04:08:00',1,'test',2.4,NULL,NULL),(4,'test_geotag','2021-05-15 04:14:50','2021-05-15 04:07:00','2021-05-15 04:08:00',1,'test',2.4,NULL,NULL);
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location_confirmer`
--

DROP TABLE IF EXISTS `location_confirmer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `location_confirmer` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `location_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_user_location` (`user_id`,`location_id`),
  KEY `location_id` (`location_id`),
  CONSTRAINT `location_confirmer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `location_confirmer_ibfk_2` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location_confirmer`
--

LOCK TABLES `location_confirmer` WRITE;
/*!40000 ALTER TABLE `location_confirmer` DISABLE KEYS */;
INSERT INTO `location_confirmer` (`id`, `user_id`, `location_id`) VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,1),(5,3,1);
/*!40000 ALTER TABLE `location_confirmer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participant`
--

DROP TABLE IF EXISTS `participant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `participant` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `location_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_user_location` (`user_id`,`location_id`),
  KEY `location_id` (`location_id`),
  CONSTRAINT `participant_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `participant_ibfk_2` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participant`
--

LOCK TABLES `participant` WRITE;
/*!40000 ALTER TABLE `participant` DISABLE KEYS */;
INSERT INTO `participant` (`id`, `user_id`, `location_id`) VALUES (1,1,1),(2,2,1),(3,3,1);
/*!40000 ALTER TABLE `participant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(511) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` (`id`, `path`, `type`) VALUES (13,'/public/2019-05-15_22-19.png','start'),(14,'/public/2020-06-02_23-03.png','start'),(15,'/public/photo_2020-07-08_11-30-44.jpg','end'),(16,'/public/Снимок экрана от 2019-02-11 20-42-11.png','end'),(17,'/public/2019-05-15_22-19.png','start'),(18,'/public/2020-06-02_23-03.png','start'),(19,'/public/photo_2020-07-08_11-30-44.jpg','end'),(20,'/public/Снимок экрана от 2019-02-11 20-42-11.png','end'),(21,'/public/2019-05-15_22-19.png','start'),(22,'/public/2020-06-02_23-03.png','start'),(23,'/public/photo_2020-07-08_11-30-44.jpg','end'),(24,'/public/Снимок экрана от 2019-02-11 20-42-11.png','end'),(25,'/public/2019-05-15_22-19.png','start'),(26,'/public/2020-06-02_23-03.png','start'),(27,'/public/photo_2020-07-08_11-30-44.jpg','end'),(28,'/public/Снимок экрана от 2019-02-11 20-42-11.png','end'),(29,'/public/2019-05-15_22-19.png','start'),(30,'/public/2020-06-02_23-03.png','start'),(31,'/public/photo_2020-07-08_11-30-44.jpg','end'),(32,'/public/Снимок экрана от 2019-02-11 20-42-11.png','end');
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo_location`
--

DROP TABLE IF EXISTS `photo_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photo_location` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `location_id` int(10) unsigned DEFAULT NULL,
  `photo_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_photo_location_location` (`location_id`),
  KEY `fk_photo_location_photo` (`photo_id`),
  CONSTRAINT `fk_photo_location_location` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  CONSTRAINT `fk_photo_location_photo` FOREIGN KEY (`photo_id`) REFERENCES `photo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo_location`
--

LOCK TABLES `photo_location` WRITE;
/*!40000 ALTER TABLE `photo_location` DISABLE KEYS */;
INSERT INTO `photo_location` (`id`, `location_id`, `photo_id`) VALUES (1,1,13),(2,1,14),(3,1,15);
/*!40000 ALTER TABLE `photo_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `photo` varchar(511) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `rating` float unsigned DEFAULT NULL,
  `score` float unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `photo`, `name`, `phone`, `email`, `rating`, `score`) VALUES (1,'/public/1b329264-75a0-413a-9d64-65c04d9b44da_photo_2020-07-08_11-30-44.jpg','test1','+71231232222','name@mail.com',2.1,30),(2,'/public/1b329264-75a0-413a-9d64-65c04d9b44da_photo_2020-07-08_11-30-44.jpg','test2','+71231232222','name@mail.com',2.1,NULL),(3,'/public/1b329264-75a0-413a-9d64-65c04d9b44da_photo_2020-07-08_11-30-44.jpg','test3','+71231232222','name@mail.com',2.1,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-15 12:17:30
