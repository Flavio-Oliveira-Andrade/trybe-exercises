SELECT * FROM hotel.Customers as c
where exists(
select * from hotel.Reservations
where c.CustomerId = Reservations.CustomerId
);

SELECT * FROM hotel.Customers as c
where not exists(
select * from hotel.Reservations
where c.CustomerId = Reservations.CustomerId
);

SELECT `Name` FROM praticando.manufacturers as m
where not exists (
select  * from praticando.products
where manufacturer = m.Code
);
