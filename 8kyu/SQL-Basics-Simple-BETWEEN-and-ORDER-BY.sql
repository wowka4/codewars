-- You are given a table of persons which includes their respective 
--age. Your task is to return the list of people, age 30 through 50,
-- using the BETWEEN keyword.

/*--SQL here--*/

SELECT name, age
FROM persons
WHERE age BETWEEN 30 AND 50
ORDER BY age DESC