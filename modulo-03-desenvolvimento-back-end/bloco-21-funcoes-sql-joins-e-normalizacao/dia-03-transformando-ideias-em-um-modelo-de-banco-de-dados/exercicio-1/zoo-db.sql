CREATE DATABASE IF NOT EXISTS `zoo`;
USE `zoo`;

CREATE TABLE IF NOT EXISTS `zoo`.`locations` (
  `location_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `location` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`location_id`)
);

CREATE TABLE IF NOT EXISTS `zoo`.`species` (
  `specie_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `specie` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`specie_id`)
);

CREATE TABLE IF NOT EXISTS `zoo`.`managers` (
  `manager_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`manager_id`)
);

CREATE TABLE IF NOT EXISTS `zoo`.`caregivers` (
  `caregiver_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `manager_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`caregiver_id`),
  FOREIGN KEY (`manager_id`) REFERENCES `zoo`.`managers` (`manager_id`)
);

CREATE TABLE IF NOT EXISTS `zoo`.`animals` (
  `animal_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `gender` VARCHAR(10) NOT NULL,
  `age` TINYINT NOT NULL,
  `specie_id` INT UNSIGNED NOT NULL,
  `location_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`animal_id`),
  FOREIGN KEY (`specie_id`) REFERENCES `zoo`.`species` (`specie_id`),
  FOREIGN KEY (`location_id`) REFERENCES `zoo`.`locations` (`location_id`)
);

CREATE TABLE IF NOT EXISTS `zoo`.`animals_caregivers` (
  `animal_id` INT UNSIGNED NOT NULL,
  `caregiver_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`animal_id`, `caregiver_id`),
  FOREIGN KEY (`animal_id`) REFERENCES `zoo`.`animals` (`animal_id`),
  FOREIGN KEY (`caregiver_id`) REFERENCES `zoo`.`caregivers` (`caregiver_id`)
);
