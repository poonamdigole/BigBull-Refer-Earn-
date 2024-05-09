-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2024 at 04:27 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bigbull`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `plan` varchar(100) NOT NULL,
  `balance` varchar(100) NOT NULL,
  `profit` varchar(100) NOT NULL,
  `refferal` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `username`, `mobile`, `email`, `address`, `plan`, `balance`, `profit`, `refferal`, `password`, `date`) VALUES
(6, '6636705cd7722', 'shivam', '7387130102', 'shivam@gmail.com', 'at.parad tq.murtijapur dist.akola', 'Gold', '3750', '500', '66367e9543449', ' 12345678', '2024-05-04'),
(11, '663673f2176ff', 'rohit', '9011131709', 'client@example.com', 'ghunshi', 'Platinum', '22500', '17500', '6636705cd7722', ' 4354554', '2024-05-04'),
(12, '66367e9543449', 'pravin ', '984589475', 'pravin@gmail.com', 'pune', 'Platinum', '5000', '0', '', ' 985479487', '2024-05-04'),
(35, '66368d21dc0c8', 'ram', '7387130102', 'ram@gmail.com', 'at.parad tq.murtijapur dist.akola', 'Diamond', '8750', '1750', '663673f2176ff', ' 8743564875', '2024-05-05'),
(36, '6636fb009419d', 'viraj', '87434746746', 'viraj@gmail.com', 'nagpur', 'Gold', '2000', '0', '6636705cd7722', ' 8748384647', '2024-05-05'),
(37, '6638958ab8897', 'arpit ', '9873487564', 'arpit@gmail.com', 'Shelubajar', 'Diamond', '7000', '0', '66368d21dc0c8', ' 987654321', '2024-05-06'),
(38, '6639bf11732d3', 'jonnny', '9857495744', 'jonny@gmail.com', 'new york', 'Platinum', '6250', '1250', '', ' 9854757845', '2024-05-07'),
(39, '6639c3f5b457a', 'aarav', '8987834658', 'aarav@gmail.com', 'delhi', 'Platinum', '6250', '1250', '6639bf11732d3', ' 874348575', '2024-05-07'),
(40, '6639c611d30d6', 'raju', '8723104598', 'raju@gmail.com', 'mumbai', 'Platinum', '5000', '0', '6639c3f5b457a', ' 83738643874', '2024-05-07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
