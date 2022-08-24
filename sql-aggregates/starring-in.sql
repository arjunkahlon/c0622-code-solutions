SELECT "g"."name" as "genre",
  COUNT(*)
FROM "genres" as "g"
JOIN "filmGenre" USING ("genreId")
JOIN "genres" USING ("genreId")
JOIN "castMembers" USING ("filmId")
JOIN "actors" USING ("actorId")
WHERE "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
GROUP BY "g"."name";
