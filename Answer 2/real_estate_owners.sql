SELECT house.BUYER_ID, SUM(price.PRICE) AS TOTAL_WORTH
FROM house
JOIN price ON house.HOUSE_ID = price.HOUSE_ID
GROUP BY house.BUYER_ID
HAVING COUNT(house.HOUSE_ID) > 1 AND SUM(price.PRICE) >= 100;