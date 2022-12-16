-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 16, 2022 at 06:09 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

-- Database: `Intenque_Singh`

CREATE TABLE `Company` (
  `companyId` int(11)PRIMARY KEY NOT NULL,
  `Name` varchar(20) DEFAULT NULL
);

INSERT INTO `Company` (`companyId`, `Name`) VALUES
(1, 'Apple'),
(2, 'Microsoft');


CREATE TABLE `Product` (
  `ProductId` int(11) PRIMARY KEY NOT NULL,
  `Name` varchar(20) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `CompanyId` int(11) DEFAULT NULL,
  FOREIGN KEY ([CompanyId]) REFERENCES [Company] ([CompanyId])
  On DELETE CASCADE
);


INSERT INTO `Product` (`ProductId`, `Name`, `Quantity`, `CompanyId`) VALUES
(1, 'MacbookPro', 5, 1),
(2, 'MacbookAir', 5, 1),
(3, 'IpadPro', 10, 1),
(4, 'IpadMini', 10, 1),
(5, 'Iphone14', 20, 1),
(6, 'Iphone13', 20, 1),
(7, '1stGenAirPods', 25, 1),
(8, '2stGenAirPods', 25, 1),
(9, 'Surface5', 7, 2),
(10, 'SurfaceGoPro', 10, 2),
(11, 'SurfaceGo3', 9, 2),
(12, 'SurfaceGo2', 9, 2),
(13, 'Samsung', 15, 2),
(14, 'Zenfone', 5, 2),
(15, 'Raycon17', 17, 2),
(16, 'SurfaceEarbuds', 10, 2);

/*ALTER TABLE `Company`
  ADD PRIMARY KEY (`companyId`); 


ALTER TABLE `Product`
  ADD PRIMARY KEY (`ProductId`),
  ADD KEY `com_fk` (`CompanyId`);


ALTER TABLE `Product`
  ADD CONSTRAINT `com_fk` FOREIGN KEY (`CompanyId`) REFERENCES `Company` (`companyId`) ON DELETE CASCADE; */
