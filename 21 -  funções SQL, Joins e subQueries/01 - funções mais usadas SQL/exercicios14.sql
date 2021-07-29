    SELECT rating, AVG(length)
    FROM sakila.film
    GROUP BY rating;
    
        SELECT rating, SUM(replacement_cost)
    FROM sakila.film
    GROUP by rating;
