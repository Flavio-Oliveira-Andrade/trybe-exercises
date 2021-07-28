select * from sakila.actor
where first_name = 'PENELOPE' or first_name = 'NICK' or first_name = 'ED' or first_name = 'JENNIFER'
order by first_name desc;

select * from sakila.actor
where first_name In('PENELOPE', 'NICK','ED', 'jennifer')
