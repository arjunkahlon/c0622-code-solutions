SELECT count(*) AS "totalDVDS"
  FROM "inventory"
JOIN "stores" USING ("storeId");
