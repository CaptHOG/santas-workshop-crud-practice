CREATE TABLE "children" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
	"gift" VARCHAR(200),
	"naughty_or_nice" BOOLEAN NOT NULL,
	"notes" VARCHAR(200)
);

INSERT INTO "children"
	("name", "gift", "naughty_or_nice", "notes")
	VALUES
	('Billy', 'Teddy bear', true, 'Goat boy'),
	('Karen', 'Coal', false, 'Very picky'),
	('Micah', 'Dinosaur toy', true, 'Crazy boy');