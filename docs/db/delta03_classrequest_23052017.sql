-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2017 at 07:07 AM
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
-- Table structure for table `classrequest`
--

CREATE TABLE `classrequest` (
  `id` int(11) NOT NULL,
  `emailid` varchar(255) NOT NULL,
  `mobileno` varchar(15) NOT NULL,
  `technology` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `startdate` datetime DEFAULT NULL,
  `enddate` datetime DEFAULT NULL,
  `timing` varchar(255) DEFAULT NULL,
  `noofstudents` int(11) DEFAULT '1',
  `fee` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classrequest`
--
ALTER TABLE `classrequest`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `classrequest`
--
ALTER TABLE `classrequest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;
  
-- --------------------------------------------------------

--
-- Table structure for table `projectrequest`
--

CREATE TABLE `projectrequest` (
  `id` int(11) NOT NULL,
  `emailid` varchar(255) NOT NULL,
  `mobileno` varchar(15) NOT NULL,
  `technology` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `startdate` datetime DEFAULT NULL,
  `enddate` datetime DEFAULT NULL,
  `timing` varchar(255) DEFAULT NULL,
  `noofstudents` int(11) DEFAULT '1',
  `fee` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projectrequest`
--


--
-- Indexes for dumped tables
--

--
-- Indexes for table `projectrequest`
--
ALTER TABLE `projectrequest`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projectrequest`
--
ALTER TABLE `projectrequest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
