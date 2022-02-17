-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 17, 2022 at 07:55 AM
-- Server version: 8.0.27
-- PHP Version: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `digitalops`
--

-- --------------------------------------------------------

--
-- Table structure for table `Chronos`
--

CREATE TABLE `Chronos` (
  `id` int NOT NULL,
  `taskId` int DEFAULT NULL,
  `githubLink` varchar(255) NOT NULL,
  `time` time DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `id` int NOT NULL,
  `roleName` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Roles`
--

INSERT INTO `Roles` (`id`, `roleName`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2022-02-15 21:52:42', '2022-02-15 21:52:42'),
(2, 'user', '2022-02-15 21:52:58', '2022-02-15 21:52:58');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20220212063128-create-user.js'),
('20220212063237-create-role.js'),
('20220212063308-create-userrole.js'),
('20220212063354-create-task.js'),
('20220212063427-create-chrono.js');

-- --------------------------------------------------------

--
-- Table structure for table `Tasks`
--

CREATE TABLE `Tasks` (
  `id` int NOT NULL,
  `userId` int DEFAULT NULL,
  `taskName` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Userroles`
--

CREATE TABLE `Userroles` (
  `id` int NOT NULL,
  `userId` int DEFAULT NULL,
  `roleId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Userroles`
--

INSERT INTO `Userroles` (`id`, `userId`, `roleId`, `createdAt`, `updatedAt`) VALUES
(1, 2, 2, '2022-02-15 21:53:24', '2022-02-15 21:53:24'),
(2, 3, 2, '2022-02-15 21:55:29', '2022-02-15 21:55:29'),
(3, 4, 2, '2022-02-16 02:51:22', '2022-02-16 02:51:22'),
(4, 5, 2, '2022-02-17 06:18:14', '2022-02-17 06:18:14'),
(5, 6, 2, '2022-02-17 06:27:18', '2022-02-17 06:27:18'),
(6, 7, 2, '2022-02-17 06:45:39', '2022-02-17 06:45:39'),
(7, 8, 2, '2022-02-17 06:53:47', '2022-02-17 06:53:47');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `birthday` datetime DEFAULT NULL,
  `speciality` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `surname`, `email`, `password`, `nationality`, `birthday`, `speciality`, `createdAt`, `updatedAt`) VALUES
(1, 'SALANON', 'richard', 'richard@gmail.com', '$2a$10$8CsgxSubayr5IYmavHWvCO.X.khY9tiTnlxtly1f429FhsIog3IUK', 'Benin', '1995-07-09 00:00:00', 'Fullstack', '2022-02-15 21:45:43', '2022-02-15 21:45:43'),
(2, 'SALANON', 'richard', 'richard1@gmail.com', '$2a$10$VkpQCBtzVkZnsXwsCbld1e00y0r3Fw5JFJOZf/5k7/bn0wRLNLOPu', 'Benin', '1995-07-09 00:00:00', 'Fullstack', '2022-02-15 21:53:24', '2022-02-15 21:53:24'),
(3, 'DANHIN', 'Elie', 'elie@gmail.com', '$2a$10$bWEail4XNW08s1/1cNVipuHbEZnujPVFnOyeKi3bgy2DtboNDSm6S', 'Benin', '1995-07-09 00:00:00', 'Fullstack', '2022-02-15 21:55:29', '2022-02-15 21:55:29'),
(4, 'Jolie', 'Don', 'don@gmail.com', '$2a$10$Cp7biNOe.zAhQapTGp5N5uNs0hhG4t6cKMVEAbfo7N9tTKJ/01Kku', 'Cuba', '2022-02-08 00:00:00', 'Backend', '2022-02-16 02:51:22', '2022-02-16 02:51:22'),
(5, 'iiulkgjyhfbds', 'dqfrtjuyikoi', 'dfvghytujik@gvj.colm', '$2a$10$2MNFc6Iauek9JpFdhy2LU.tGyf3eOm2cLwj6QKi1lc.NxTIBlhISq', 'cvjhkl,', '2022-02-15 00:00:00', 'Fullstack', '2022-02-17 06:18:13', '2022-02-17 06:18:13'),
(6, 'vsfbg', 'dfsgh', 'b@gmail.com', '$2a$10$6ZjxIO4k/SC44Sp3wgTLGu44byUlUXaEVcK25A8gky41fDsJwlPL2', 'dzefr', '2022-02-15 00:00:00', 'Frontend', '2022-02-17 06:27:18', '2022-02-17 06:27:18'),
(7, 'papa', 'mam', 'mam@gmail.com', '$2a$10$LLBozD/a3EjLo/Jp1w7mi.bTdtggRweaSlbw5QqaNQBSTPhGlk5DW', 'fdgh', '2022-02-15 00:00:00', 'Backend', '2022-02-17 06:45:38', '2022-02-17 06:45:38'),
(8, 'bien', 'dsfg', 'fdsghn@juchriste.com', '$2a$10$ooylUWgYR5E/JsFPLKg1mOCpH7OWyS7IxRXFyshp//FtTTS30EpCu', 'fgthj', '2022-02-15 00:00:00', 'Frontend', '2022-02-17 06:53:47', '2022-02-17 06:53:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Chronos`
--
ALTER TABLE `Chronos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `taskId` (`taskId`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Tasks`
--
ALTER TABLE `Tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Userroles`
--
ALTER TABLE `Userroles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `roleId` (`roleId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Chronos`
--
ALTER TABLE `Chronos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Tasks`
--
ALTER TABLE `Tasks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `Userroles`
--
ALTER TABLE `Userroles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Chronos`
--
ALTER TABLE `Chronos`
  ADD CONSTRAINT `Chronos_ibfk_1` FOREIGN KEY (`taskId`) REFERENCES `Tasks` (`id`);

--
-- Constraints for table `Tasks`
--
ALTER TABLE `Tasks`
  ADD CONSTRAINT `Tasks_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);

--
-- Constraints for table `Userroles`
--
ALTER TABLE `Userroles`
  ADD CONSTRAINT `Userroles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`),
  ADD CONSTRAINT `Userroles_ibfk_2` FOREIGN KEY (`roleId`) REFERENCES `Roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
