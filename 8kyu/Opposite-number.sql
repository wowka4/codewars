/*Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34
You will be given a table: opposite, with a column: number. Return a table with a column: res.*/

-- You will be given a table: "opposite", with a column: "number". 
-- Return a table with a column: "res".
SELECT (0 - number) AS res FROM opposite