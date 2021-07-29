   title,
    release_year,
    length,
    CASE
        WHEN length <= 60 THEN 'curto'
        WHEN length >= 60 THEN 'medio'
        ELSE 'longo'
    END AS 'tipo'
FROM
    film;
