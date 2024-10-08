/*Given a demographics table in the following format:

** demographics table schema **

id
name
birthday
race
you need to return the same table where all letters are lowercase in the race column.

*/

/*  SQL  */
SELECT 
    id,
    name,
    birthday,
    lower(race) AS race
FROM demographics