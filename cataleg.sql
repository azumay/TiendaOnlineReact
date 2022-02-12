-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 11-03-2019 a las 20:41:00
-- Versión del servidor: 10.1.38-MariaDB-0ubuntu0.18.04.1
-- Versión de PHP: 7.2.15-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cataleg`
--
CREATE DATABASE IF NOT EXISTS `cataleg` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `cataleg`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emmagatzematge`
--

DROP TABLE IF EXISTS `emmagatzematge`;
CREATE TABLE IF NOT EXISTS `emmagatzematge` (
  `eid` int(11) NOT NULL AUTO_INCREMENT,
  `capacitat` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`eid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `emmagatzematge`
--

INSERT INTO `emmagatzematge` (`eid`, `capacitat`) VALUES
(1, '256'),
(2, '500'),
(3, '750'),
(4, '1000'),
(5, '1500'),
(6, '2000'),
(7, '32 SSD'),
(8, '64 SSD'),
(9, '128 SSD'),
(10, '256 SSD'),
(11, '512 SSD');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grafica`
--

DROP TABLE IF EXISTS `grafica`;
CREATE TABLE IF NOT EXISTS `grafica` (
  `gid` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `grafica`
--

INSERT INTO `grafica` (`gid`, `model`) VALUES
(1, 'Geforce 920M'),
(2, 'GeForce 930M'),
(3, 'GeForce 940MX'),
(4, 'GeForce 945M'),
(5, 'GeForce GTX 1050'),
(6, 'GeForce GTX 1060'),
(7, 'GeForce GTX 1080'),
(8, 'GeForce GTX 940M'),
(9, 'GeForce GTX 950M'),
(10, 'GeForce GTX 960M'),
(11, 'GeForce GTX 970M'),
(12, 'GeForce GTX 980M'),
(13, 'GeForce MX150'),
(14, 'Radeon HD 530v'),
(15, 'Radeon R5 M430'),
(16, 'Radeon R7 M440'),
(17, 'Radeon R7 M445');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

DROP TABLE IF EXISTS `marca`;
CREATE TABLE IF NOT EXISTS `marca` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`mid`, `nom`) VALUES
(1, 'Acer'),
(2, 'Apple'),
(3, 'Asus'),
(4, 'Dell'),
(5, 'HP'),
(6, 'Lenovo'),
(7, 'LG'),
(8, 'Toshiba'),
(9, 'MSI'),
(10, 'Bq'),
(11, 'Samsung'),
(12, 'Medion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `polzades`
--

DROP TABLE IF EXISTS `polzades`;
CREATE TABLE IF NOT EXISTS `polzades` (
  `polid` int(11) NOT NULL AUTO_INCREMENT,
  `polzades` decimal(5,2) NOT NULL,
  PRIMARY KEY (`polid`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `polzades`
--

INSERT INTO `polzades` (`polid`, `polzades`) VALUES
(1, '10.00'),
(2, '10.10'),
(3, '11.60'),
(4, '12.00'),
(5, '12.20'),
(6, '13.00'),
(13, '0.00'),
(14, '11.60'),
(15, '12.00'),
(16, '12.20'),
(17, '13.00'),
(18, '13.30'),
(19, '13.90'),
(20, '14.00'),
(21, '15.00'),
(22, '15.60'),
(23, '17.00'),
(24, '17.30'),
(25, '15.40'),
(26, '0.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `processador`
--

DROP TABLE IF EXISTS `processador`;
CREATE TABLE IF NOT EXISTS `processador` (
  `procid` int(11) NOT NULL AUTO_INCREMENT,
  `descripcio` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`procid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `processador`
--

INSERT INTO `processador` (`procid`, `descripcio`) VALUES
(1, 'Intel I7'),
(2, 'Intel I5'),
(3, 'AMD 10'),
(4, 'AMD 12'),
(5, 'AMD 6'),
(6, 'AMD 8'),
(7, 'AMD E'),
(8, 'AMD Ryzen'),
(9, 'Intel I3'),
(10, 'Intel Pentiun'),
(11, 'Intel Xenon'),
(12, 'Intel Celeron');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producte`
--

DROP TABLE IF EXISTS `producte`;
CREATE TABLE IF NOT EXISTS `producte` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `marca` int(11) NOT NULL,
  `tipus` int(11) NOT NULL,
  `preu` decimal(7,2) NOT NULL,
  `src` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `href` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `processador` int(11) NOT NULL,
  `ram` int(11) NOT NULL,
  `grafica` int(11) NOT NULL,
  `emmagatzematge` int(11) NOT NULL,
  `polzades` int(11) DEFAULT NULL,
  `valoracio` int(11) NOT NULL,
  `stock` decimal(6,2) NOT NULL,
  PRIMARY KEY (`pid`),
  KEY `marca` (`marca`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `producte`
--

INSERT INTO `producte` (`pid`, `model`, `marca`, `tipus`, `preu`, `src`, `href`, `processador`, `ram`, `grafica`, `emmagatzematge`, `polzades`, `valoracio`, `stock`) VALUES
(1, 'Notebook', 5, 1, '599.00', '1373200.jpg', '', 2, 8, 14, 10, 22, 0, '0.00'),
(2, 'GL62M', 9, 1, '999.00', '1369500.jpg', '', 1, 4, 13, 4, 22, 0, '0.00'),
(3, '15-BS512NS', 5, 1, '609.00', 'l1-copia.jpg', '', 2, 5, 10, 10, 22, 0, '0.00'),
(4, 'Essential V110-15ISK', 6, 1, '365.00', '7.jpg', '', 9, 1, 2, 2, 22, 0, '0.00'),
(5, 'Stream 14-AX003NS', 5, 1, '269.00', '2-1.jpg', '', 12, 1, 1, 1, 14, 0, '0.00'),
(6, 'Ideapad 320-15ISK', 6, 1, '509.59', '1.jpg', '', 9, 1, 3, 2, 22, 0, '0.00'),
(9, 'GL62M 7RDX-2203XES', 9, 1, '799.00', '1393140.jpg', '', 2, 4, 12, 4, 22, 0, '0.00'),
(10, 'PL62 7RC-051XES', 9, 1, '799.00', '1a.jpg', '', 1, 4, 11, 4, 22, 0, '0.00'),
(13, '80TG00VYSP V110-15IAP', 6, 1, '259.00', '1387310.jpg', '', 12, 1, 2, 2, 22, 0, '0.00'),
(14, 'Notebook 250 G6', 5, 1, '535.00', '1373110.jpg', '', 9, 3, 10, 10, 22, 0, '0.00'),
(15, 'Yoga 300-11IBR', 6, 1, '399.00', '10.jpg', '', 12, 1, 2, 2, 3, 0, '0.00'),
(18, 'Pavilion 15-BC302NS', 5, 1, '649.00', 'c05700804-1750x1285.jpg', '', 2, 4, 11, 4, 22, 0, '0.00'),
(19, 'Satellite Pro R40-C-13V', 8, 1, '324.00', '1417610.jpg', '', 12, 1, 4, 2, 20, 0, '0.00'),
(20, 'Legion Y720-15IKB', 6, 1, '1339.00', 'lenovo-idea-legion-y720-01.jpg', '', 1, 8, 17, 4, 22, 0, '0.00'),
(23, 'K541UA-GO1205T', 3, 1, '639.00', '1348530.jpg', '', 1, 4, 16, 4, 22, 0, '0.00'),
(24, 'ES1-132-C61W', 1, 1, '225.00', '1378900.jpg', '', 12, 1, 1, 7, 14, 0, '0.00'),
(25, 'Vostro 5568', 4, 1, '746.59', 'dell-jmcy8-1-1.jpg', '', 2, 4, 16, 10, 22, 0, '0.00'),
(26, 'K541UJ-GO280T', 3, 1, '529.00', '1348350.jpg', '', 9, 3, 9, 4, 22, 0, '0.00'),
(29, 'Aspire VX5-591G-73J6', 1, 1, '1192.59', '1381680.jpg', '', 1, 4, 17, 4, 22, 0, '0.00'),
(30, 'GL753VD-GC185T', 3, 1, '1185.00', '1290130.jpg', '', 1, 8, 17, 4, 24, 0, '0.00'),
(31, 'Rog GL502VS-GZ289T', 3, 1, '2010.34', 'h1.jpg', '', 1, 14, 17, 11, 22, 0, '0.00'),
(32, 'Gram 15Z970', 7, 1, '1099.01', '15z970-g-1.jpg', '', 1, 3, 11, 11, 22, 0, '0.00'),
(33, 'MacBook Air', 2, 1, '999.00', '96327-gimp.jpg', '', 2, 3, 13, 9, 6, 0, '0.00'),
(34, 'MacBook Pro Retina Display', 2, 1, '1999.00', 'apple-macbook-pro-retina-display-intel-i7-16gb-256gb-15-4.jpg', '', 1, 7, 17, 10, 25, 0, '0.00'),
(35, 'MacBook Pro Plata Con Touch Bar', 2, 1, '2729.00', '1111.jpg', '', 1, 8, 16, 11, 25, 0, '0.00'),
(36, 'GRAM', 7, 1, '1381.25', '15z970-product-image-12-desk.jpg', '', 1, 3, 14, 10, 22, 0, '0.00'),
(37, 'Pavilion Desktop 570-P066NS', 5, 2, '599.00', 'd2.jpg', '', 3, 5, 13, 4, 26, 0, '0.00'),
(39, '260-a108ns ', 5, 2, '235.59', '105716.jpg', '', 7, 1, 6, 4, 26, 0, '0.00'),
(40, 'Trident 3 7RB-074EU', 9, 2, '799.00', '1343430.jpg', '', 2, 3, 12, 4, 26, 0, '0.00'),
(41, 'OMEN 880-021NS', 5, 2, '2005.59', '1456540.jpg', '', 1, 8, 17, 4, 26, 0, '0.00'),
(42, 'IdeaCentre 310S-08IAP', 6, 2, '329.00', '4.jpg', '', 12, 1, 5, 4, 26, 0, '0.00'),
(44, 'Infinite 7RB-068XEU', 9, 2, '799.00', 'f1.jpg', '', 2, 3, 13, 4, 26, 0, '0.00'),
(46, 'Predator G3-710', 1, 2, '1415.64', '91cnf2ti-cl-sl1500.jpg', '', 1, 14, 17, 4, 26, 0, '0.00'),
(47, 'G11CD-K-SP012T', 3, 2, '1192.69', '1319740.jpg', '', 1, 8, 13, 4, 26, 0, '0.00'),
(48, 'Mac Pro ', 2, 2, '3369.00', 'apple-mac-pro-quad-core-3-7-ghz.jpg', '', 11, 8, 17, 10, 26, 0, '0.00');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `productes`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `productes`;
CREATE TABLE IF NOT EXISTS `productes` (
`pid` int(11)
,`marca` varchar(256)
,`model` varchar(128)
,`preu` decimal(7,2)
,`tipus` varchar(256)
,`processador` varchar(256)
,`ram` varchar(128)
,`gràfica` varchar(64)
,`polzades` decimal(5,2)
,`emmagatzematge` varchar(128)
,`imatge` varchar(512)
,`href` varchar(2048)
,`valoracio` int(11)
,`stock` decimal(6,2)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ram`
--

DROP TABLE IF EXISTS `ram`;
CREATE TABLE IF NOT EXISTS `ram` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `capacitat` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ram`
--

INSERT INTO `ram` (`rid`, `capacitat`) VALUES
(1, '4GB DDR3'),
(2, '4GB DDR4'),
(3, '8GB DDR3'),
(4, '8GB DDR4'),
(5, '12GB DDR3'),
(6, '12GB DDR4'),
(7, '16GB DDR3'),
(8, '16GB DDR4'),
(9, '20GB DDR3'),
(10, '20GB DDR4'),
(11, '24GB DDR3'),
(12, '24GB DDR4'),
(13, '32GB DDR3'),
(14, '32GB DDR4'),
(15, '64GB DDR3'),
(16, '64GB DDR4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipus`
--

DROP TABLE IF EXISTS `tipus`;
CREATE TABLE IF NOT EXISTS `tipus` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `descripcio` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tipus`
--

INSERT INTO `tipus` (`tid`, `descripcio`) VALUES
(1, 'Portàtils'),
(2, 'Sobretaula'),
(3, 'Tablets');

-- --------------------------------------------------------

--
-- Estructura para la vista `productes`
--
DROP TABLE IF EXISTS `productes`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `productes`  AS  select `p`.`pid` AS `pid`,`m`.`nom` AS `marca`,`p`.`model` AS `model`,`p`.`preu` AS `preu`,`t`.`descripcio` AS `tipus`,`pr`.`descripcio` AS `processador`,`r`.`capacitat` AS `ram`,`g`.`model` AS `gràfica`,`po`.`polzades` AS `polzades`,`e`.`capacitat` AS `emmagatzematge`,`p`.`src` AS `imatge`,`p`.`href` AS `href`,`p`.`valoracio` AS `valoracio`,`p`.`stock` AS `stock` from (((((((`producte` `p` join `marca` `m`) join `tipus` `t`) join `processador` `pr`) join `ram` `r`) join `grafica` `g`) join `emmagatzematge` `e`) join `polzades` `po` on(((`p`.`ram` = `r`.`rid`) and (`p`.`marca` = `m`.`mid`) and (`p`.`tipus` = `t`.`tid`) and (`p`.`processador` = `pr`.`procid`) and (`p`.`grafica` = `g`.`gid`) and (`p`.`emmagatzematge` = `e`.`eid`) and (`p`.`polzades` = `po`.`polid`)))) ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
