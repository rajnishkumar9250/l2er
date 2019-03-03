-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2017 at 04:27 PM
-- Server version: 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `l2er`
--

-- --------------------------------------------------------

--
-- Table structure for table `class_topic`
--

CREATE TABLE `class_topic` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `classid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class_topic`
--

INSERT INTO `class_topic` (`id`, `description`, `duration`, `classid`) VALUES
(1, 'SPA', '1 hr', 5),
(2, 'DI', '1 hr', 5),
(3, 'Controller', '1 hr', 5),
(4, 'Scope', '1 hr', 5),
(5, 'rootScope', '1 hr', 5),
(6, 'compiler', '1 hr', 5),
(7, 'Directives', '1 hr', 5),
(8, 'factory', '1 hr', 5),
(9, 'Services', '1 hr', 5),
(10, 'Jqlite', '1 hr', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class_topic`
--
ALTER TABLE `class_topic`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class_topic`
--
ALTER TABLE `class_topic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
