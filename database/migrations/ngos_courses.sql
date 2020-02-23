-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: localhost    Database: ngos_courses
-- ------------------------------------------------------
-- Server version	5.7.28-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `description` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `start_date` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `location` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `trainer` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `number_of_seats` int(11) DEFAULT NULL,
  `id_ngo` int(11) DEFAULT NULL,
  `end_datel` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (2,'HTML','test','3-3-2020','mafraq','21',20,60,'5-3-2020'),(4,'Dss','decision support system (DSS) is a computerized program used to support determinations...','3-6-2020','mafraq','19',10,59,'8-9-2000'),(5,'Java','java is a general-purpose programming language that is class-based...','6-6-2020','irbid','19',40,59,'4-7-2020'),(8,'Html','Test Course','6-9-2020','mafraq','24',5,59,'5-9-2020'),(18,'ert','test course','1/1/1111','wret','21',12,59,'1/1/1111'),(26,'math','mathematics includes the study of such topics as quantity (number theory)..','6-9-2020','mafraq','42',5,59,'6-8-2020'),(27,'nodejs',' is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser..','6-6-2000','aaa','44',6,59,'6-6-2000'),(29,'arabic','is a Semitic language that first emerged in the 1st to 4th centuries CE. It is now the lingua franca of the Arab world..','2/2/2222','mafraq','42',10,59,'2/2/2222'),(51,'javaScript','javaScript often abbreviated as JS, is an interpreted programming language ..','6-2-0200','ggg','42',55,59,'6-2-0200'),(58,'aaaaaaa','33333333','6-9-2020','aaaaaaaa','Select name of trainers',3333,66,'6-9-2020'),(60,'marketing','test course','6-1-2020','amman','71',10,66,'7-2-2020');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses_trainee`
--

DROP TABLE IF EXISTS `courses_trainee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses_trainee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_course` int(11) DEFAULT NULL,
  `id_trainee` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses_trainee`
--

LOCK TABLES `courses_trainee` WRITE;
/*!40000 ALTER TABLE `courses_trainee` DISABLE KEYS */;
INSERT INTO `courses_trainee` VALUES (60,26,50),(61,29,50),(62,4,52);
/*!40000 ALTER TABLE `courses_trainee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses_traines`
--

DROP TABLE IF EXISTS `courses_traines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses_traines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_course` int(11) DEFAULT NULL,
  `id_traines` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses_traines`
--

LOCK TABLES `courses_traines` WRITE;
/*!40000 ALTER TABLE `courses_traines` DISABLE KEYS */;
INSERT INTO `courses_traines` VALUES (20,1,1),(30,2,1),(33,4,18);
/*!40000 ALTER TABLE `courses_traines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ngos`
--

DROP TABLE IF EXISTS `ngos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ngos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `logo` varchar(245) DEFAULT NULL,
  `email` varchar(245) DEFAULT NULL,
  `website` varchar(245) DEFAULT NULL,
  `password` varchar(245) DEFAULT NULL,
  `bio` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ngos`
--

LOCK TABLES `ngos` WRITE;
/*!40000 ALTER TABLE `ngos` DISABLE KEYS */;
INSERT INTO `ngos` VALUES (59,'ABC','/imeges/ngos/ABC ngo.png','tahany.shraa@gmail.com','','$2a$08$OvQqL62ByK9mAWU5.0bFjexGlEQemKB04XWJ9s1nTvrqAP/eetLvm','non-governmental organizations (NGOs) often form to address this need. However, many NGOs do not have the resources or skills to effect lasting change'),(66,'johud','/imeges/ngos/johud.png','joud@gmail.com','','$2a$08$1rI1ggBVZMUT.zUPRV3H8ux1eSEsJQNXtYOgnorK4EQJgseIC951S','The Jordanian Hashemite Fund for Human Development (JOHUD) is the largest and oldest development NGO in Jordan.');
/*!40000 ALTER TABLE `ngos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trainee`
--

DROP TABLE IF EXISTS `trainee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trainee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `password` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `email` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `mobile` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `address` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `picture` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainee`
--

LOCK TABLES `trainee` WRITE;
/*!40000 ALTER TABLE `trainee` DISABLE KEYS */;
INSERT INTO `trainee` VALUES (50,'mlak','12345678','m@gmail.com','0136549874','mafraq',NULL),(51,'ali','12345678','l.@gmail.com','1234567893','irbid',NULL),(52,'lara','12345678','lara@gmail.com','0789654123','zarqa',NULL);
/*!40000 ALTER TABLE `trainee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trainers`
--

DROP TABLE IF EXISTS `trainers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trainers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `picture` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `email` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `mobile` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `address` varchar(245) CHARACTER SET latin1 DEFAULT NULL,
  `short_bio` varchar(1000) CHARACTER SET latin1 DEFAULT NULL,
  `id_ngo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainers`
--

LOCK TABLES `trainers` WRITE;
/*!40000 ALTER TABLE `trainers` DISABLE KEYS */;
INSERT INTO `trainers` VALUES (19,'maram ','/imeges/trainers/m@gmail.com.png','m@gmail.com','0123466789 ','mafraq','test Bio   4444              ',65),(40,'ahmad','','a@a.a','0782152417','dscdec','daxex',65),(42,'lama','/imeges/trainers/lama@gmail.com.png','lama@gmail.com','0785555555','Amman','English language at Al-albayt Unvirsity',59),(44,'mohammad','/imeges/trainers/mohammad@gmail.com.png','mohammad@gmail.com','0781565983','amman','computer science at Al-albayt university',59),(69,'qais','/imeges/trainers/qais@gamil.com.png','qais@gamil.com','0781565983','mafraq','Digital Marketing Trainer\n\nChartered Marketer and Accredited Customer Service and Digital Marketing and Sales Skills Trainer',59),(70,'alaa','/imeges/trainers/aa@yahoo.com.png','aa@yahoo.com','0788888888','Amman','Civil Enginnering at hashimate university',59),(71,'tahany','','a@gmail.com','0781565983','mafraq','Network trainer',66);
/*!40000 ALTER TABLE `trainers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-17 22:41:41
