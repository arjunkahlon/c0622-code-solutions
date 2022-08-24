SELECT "c"."name" AS "country",
  COUNT("cty".*)
FROM "countries" as "c"
JOIN "cities" as "cty" using ("countryId")
GROUP BY "c"."countryId";
