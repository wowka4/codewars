/*Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466*/

-- # write your SQL statement here: you are given a table 'ntheven' with column 'n', return a table with column 'n' and your result in a column named 'res'.
select n, n * 2 - 2 AS res FROM ntheven;