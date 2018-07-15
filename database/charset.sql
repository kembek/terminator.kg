ALTER TABLE `tm_db`.`accesses` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`adonis_schema` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`attributes` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`attribute_groups` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`categories_posts` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`categories` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`colors` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`customers` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`faqs` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`faq_categories` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`groups` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`menus` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`orders` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`order_products` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`posts` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`post_categories` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`products` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`product_attributes` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`product_category` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`product_colors` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`product_images` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`product_prices` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`questions` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`reviews` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`sliders` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`stock_statuses` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`tokens` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`users` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`user_customers` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`user_orders` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`user_questions` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;
ALTER TABLE `tm_db`.`user_reviews` CONVERT TO CHARACTER SET utf8 COLLATE utf8mb4_0900_ai_ci;

SELECT
  ENGINE
FROM
  information_schema.TABLES
WHERE
  TABLE_SCHEMA = 'tm_db' AND TABLE_NAME = 'products';
