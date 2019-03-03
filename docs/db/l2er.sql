-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2017 at 09:54 AM
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
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `timing` varchar(50) DEFAULT NULL,
  `teacher` int(11) DEFAULT NULL,
  `fee` varchar(50) DEFAULT NULL,
  `class_code` varchar(50) DEFAULT NULL,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `title`, `description`, `start_date`, `end_date`, `timing`, `teacher`, `fee`, `class_code`, `create_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(1, 'JavaScript', 'JavaScript', '2017-03-05 10:00:00', '2017-07-11 13:00:00', '10:00 AM - 1:00 PM\nEvery Sunday', 2, '500', 'js20170001', '2017-05-11 22:15:55', '2017-05-11 22:15:55', NULL, NULL),
(2, 'Linux OS', 'Basic Command of linux', '2017-05-21 14:00:00', '2017-05-28 16:00:00', '2:00 PM - 4:00 PM Every Sunday', 2, '100', 'linux_2017_0001', '2017-05-11 22:19:22', '2017-05-11 22:19:22', NULL, NULL),
(3, 'PHP ', 'Core PHP And Wordpress framework', '2017-05-09 07:30:00', '2017-08-15 07:30:00', '7:30 AM - 8:30 AM\nMonday, Wednesday', 2, '500', 'php_2017_0001', '2017-05-11 22:22:38', '2017-05-11 22:22:38', NULL, NULL),
(4, 'PYTHON', 'Core Python and Django framework', '2017-05-10 07:30:00', '2017-08-15 07:30:00', '7:30 AM - 8:30 AM\nTuesday, Thursday', 2, '500', 'python_2017_0001', '2017-05-11 22:24:53', '2017-05-11 22:24:53', NULL, NULL),
(5, 'ANGULARJS', 'Angularjs 1.* And Jquery', '2017-06-06 09:00:00', '2017-08-08 11:00:00', '9:00 AM - 11:00 AM, Every Sunday', 2, '500', 'angularjs_2017_0001', '2017-05-11 22:28:41', '2017-05-11 22:28:41', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `timing` varchar(50) DEFAULT NULL,
  `project_code` varchar(50) DEFAULT NULL,
  `teacher` int(11) DEFAULT NULL,
  `fee` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobileno` varchar(15) NOT NULL,
  `qualification` varchar(50) DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `skills` varchar(255) DEFAULT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `mobileno`, `qualification`, `created_date`, `modified_date`, `created_by`, `modified_by`, `skills`, `role`) VALUES
(1, 'Admin', 'admin@learn2earnbyrajnish.com', NULL, '8892804623', NULL, '2017-05-02 00:34:27', '2017-05-02 00:34:27', NULL, NULL, NULL, 1),
(2, 'Rajnish Kumar', 'rajnishkumar9250@learn2earnbyrajnish.com', NULL, '8892804623', 'B Tech in Information Technology', '2017-05-02 00:37:54', '2017-05-02 00:37:54', 1, 1, 'Linux, Angularjs, JavaScript, Android, Nodejs, Expressjs, PHP, MongoDb, MySql', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
