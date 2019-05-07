-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2017 at 04:43 AM
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
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(11) NOT NULL,
  `appointmenttime` datetime NOT NULL,
  `appointmentendtime` datetime NOT NULL,
  `doctorid` int(11) NOT NULL,
  `patientid` int(11) NOT NULL,
  `createddate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `problem_description` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`id`, `appointmenttime`, `appointmentendtime`, `doctorid`, `patientid`, `createddate`, `problem_description`) VALUES
(1, '2017-05-31 17:25:00', '2017-05-31 18:00:00', 1, 1, '2017-05-30 16:27:35', NULL),
(2, '2017-05-31 07:25:00', '2017-05-31 02:15:00', 1, 1, '2017-05-30 16:59:35', 'testing patient case');

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
(1, 'JavaScript', 'JavaScript', '2017-10-22 23:45:00', '2017-07-11 13:00:00', '10:00 AM - 1:00 PM\nEvery Sunday', 2, '500', 'js20170001', '2017-05-11 22:15:55', '2017-05-11 22:15:55', NULL, NULL),
(2, 'Linux OS', 'Basic Command of linux', '2017-05-21 14:00:00', '2017-05-28 16:00:00', '2:00 PM - 4:00 PM Every Sunday', 2, '100', 'linux_2017_0001', '2017-05-11 22:19:22', '2017-05-11 22:19:22', NULL, NULL),
(3, 'PHP ', 'Core PHP And Wordpress framework', '2017-05-09 07:30:00', '2017-08-15 07:30:00', '7:30 AM - 8:30 AM\nMonday, Wednesday', 2, '500', 'php_2017_0001', '2017-05-11 22:22:38', '2017-05-11 22:22:38', NULL, NULL),
(4, 'PYTHON', 'Core Python and Django framework', '2017-05-10 07:30:00', '2017-08-15 07:30:00', '7:30 AM - 8:30 AM\nTuesday, Thursday', 2, '500', 'python_2017_0001', '2017-05-11 22:24:53', '2017-05-11 22:24:53', NULL, NULL),
(5, 'ANGULARJS', 'Angularjs 1.* And Jquery', '2017-06-06 09:00:00', '2017-08-08 11:00:00', '9:00 AM - 11:00 AM, Every Sunday', 2, '500', 'angularjs_2017_0001', '2017-05-11 22:28:41', '2017-05-11 22:28:41', NULL, NULL),
(6, 'PYTHON', 'Core Python and Django framework', '2017-06-11 10:00:00', '2017-08-13 10:00:00', '10:00 AM - 1:00 AM\r\nEvery Sunday', 2, '500', 'python_2017_0002', '2017-05-11 22:24:53', '2017-05-11 22:24:53', NULL, NULL);

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
-- Dumping data for table `classrequest`
--

INSERT INTO `classrequest` (`id`, `emailid`, `mobileno`, `technology`, `description`, `startdate`, `enddate`, `timing`, `noofstudents`, `fee`) VALUES
(24, 'rajnishkumar9250@yahoo.com', '08892804623', 'aws', 'hi testing class request', '2017-02-12 00:00:00', '2017-12-11 00:00:00', '12:00AM', 3, '100'),
(23, 'rajnishkumar9250@yahoo.com', '08892804623', 'wrewerw', '56575', NULL, NULL, NULL, NULL, NULL),
(25, 'rajnishkumar9250@gmail.com', '8892804623', 'angularjs', 'angularjs', '2017-06-02 00:00:00', '2017-07-20 00:00:00', NULL, NULL, NULL),
(26, 'rajnishkumar9250@yahoo.com', '08892804623', 'android', 'hi testing', '2017-06-28 00:00:00', '2017-06-30 00:00:00', NULL, NULL, NULL),
(27, 'rajnishkumar9250@gmail.com', '08892804623', '7687', 'test for javascript', '2017-08-30 00:00:00', '2017-08-31 00:00:00', NULL, NULL, NULL);

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

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `speciality` varchar(50) NOT NULL,
  `qualification` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`id`, `name`, `speciality`, `qualification`) VALUES
(1, 'John Doe', 'Eye Specialist', 'MBBS'),
(2, 'test xyz', 'card Specialist', 'MBBS');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `problem` varchar(255) NOT NULL,
  `phonenumber` varchar(15) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`, `name`, `problem`, `phonenumber`) VALUES
(1, 'Rajnish', 'test problem', '8892804623'),
(2, 'Test xyz', 'test problem', '88926564623');

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

INSERT INTO `projectrequest` (`id`, `emailid`, `mobileno`, `technology`, `description`, `startdate`, `enddate`, `timing`, `noofstudents`, `fee`) VALUES
(24, 'rajnishkumar9250@yahoo.com', '08892804623', 'angular2', 'I want do a project on angular2', '2017-02-02 00:00:00', '2017-05-04 00:00:00', '10:30AM', 1, '100'),
(25, 'rajnishkumar9250@yahoo.com', '08892804623', 'aws proje', 'testing project request', '2017-06-01 00:00:00', '2017-08-08 00:00:00', '9:30AAM', 33, NULL),
(26, 'rajnishkumar9250@yahoo.com', '08892804623', 'aws', 'two receipients', NULL, NULL, NULL, NULL, NULL);

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

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `start_date`, `end_date`, `timing`, `project_code`, `teacher`, `fee`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(1, 'Student Management System', 'Core JavaScript, JQuery, Html And CSS', '2017-10-22 23:43:00', '2017-07-23 12:00:00', '10:00 AM- 12:00AM, Every Sunday', 'JS_0001', 2, 500, '2017-05-20 00:21:18', '2017-05-20 00:21:18', 1, 1),
(2, 'Email Filter', 'Python, Django framework, Html And CSS', '2017-05-23 10:00:00', '2017-08-01 12:00:00', '10:00 AM - 12:00AM, Every Tuesday AND Thursday', 'PY_0001', 2, 500, '2017-05-20 00:26:18', '2017-05-20 00:26:18', 1, 1),
(3, 'Grocery Management System', 'PHP, CakePhp Framework, Html And CSS', '2017-05-22 07:30:00', '2017-07-24 08:30:00', '07:30 AM- 08:30AM, Every Monday And Wednesday', 'PHP_0001', 2, 500, '2017-05-20 00:34:02', '2017-05-20 00:34:02', 1, 1);

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
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classrequest`
--
ALTER TABLE `classrequest`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `class_topic`
--
ALTER TABLE `class_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projectrequest`
--
ALTER TABLE `projectrequest`
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
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `classrequest`
--
ALTER TABLE `classrequest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `class_topic`
--
ALTER TABLE `class_topic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `projectrequest`
--
ALTER TABLE `projectrequest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
