-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 16, 2022 at 06:09 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6
  --CONSTRAINT `PK_product` PRIMARY KEY(`ProductId`)
-- Database: `Intenque_Singh`

CREATE TABLE `Company` (
  `CompanyId` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `CompanyName` varchar(20) DEFAULT NULL
);

CREATE TABLE `Product` (
  `ProductId` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `ProductName` varchar(20) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `CompanyId` int(11) DEFAULT NULL,
  FOREIGN KEY ([CompanyId]) REFERENCES [Company] ([CompanyId])
  On DELETE CASCADE
);


-- INSERT into Company Table
INSERT INTO `Company` (`CompanyName`) VALUES
('Apple'),
('Microsoft');

--INSERT into Product Table
INSERT INTO `Product` (`ProductName`, `Quantity`, `CompanyId`) VALUES 
('MacbookPro', 5, 1),
('MacbookAir', 5, 1),
('IpadPro', 10, 1),
('IpadMini', 10, 1),
('Iphone14', 20, 1),
('Iphone13', 20, 1),
('1stGenAirPods', 25, 1),
('2stGenAirPods', 25, 1),
('Surface5', 7, 2),
('SurfaceGoPro', 10, 2),
('SurfaceGo3', 9, 2),
('SurfaceGo2', 9, 2),
('Samsung', 15, 2),
('Zenfone', 5, 2),
('Raycon17', 17, 2),
('SurfaceEarbuds', 10, 2);