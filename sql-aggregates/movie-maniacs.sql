SELECT "c"."firstName",
       "c"."lastName",
       SUM("amount") AS "totalPaid"
  FROM "payments"
  JOIN "customers" AS "c" USING ("customerId")
  GROUP BY "c"."customerId"
  ORDER BY "totalPaid" desc;
