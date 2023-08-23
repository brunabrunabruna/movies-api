
-- GENRES

INSERT INTO genres (name, description) VALUES ('Adventure', 'Setting plays an important role in an adventure film, sometimes itself acting as a character in the narrative. They are typically set in far away lands, such as lost continents or other exotic locations. They may also be set in a period background and may include adapted stories of historical or fictional adventure heroes within the historical context. Such struggles and situations that confront the main characters include things like battles, piracy, rebellion, and the creation of empires and kingdoms.')

INSERT INTO genres (name, description) VALUES ('Biography', 'A biographical film or biopic is a film that dramatizes the life of a non-fictional or historically-based person or people. Such films show the life of a historical person and the central character''s real name is used. They differ from docudrama films and historical drama films in that they attempt to comprehensively tell a single person''s life story or at least the most historically important years of their lives.')

INSERT INTO genres (name, description) VALUES ('Fantasy', 'Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and usually inspired by mythology or folklore. The term "fantasy" can also be used to describe a "work of this genre",[1] usually literary.')

INSERT INTO genres (name, description) VALUES ('Drama', 'The term "drama" comes from a Greek word meaning "deed" or "act" (Classical Greek: δρᾶμα, drâma), which is derived from "I do" (Classical Greek: δράω, dráō). The two masks associated with drama represent the traditional generic division between comedy and tragedy. ')









-- DIRECTORS

INSERT INTO directors(name, bio, birthyear) VALUES('Hayao Miyazaki', ' Hayao Miyazaki is 1 of Japan''s greatest animation directors. The entertaining plots, compelling characters & breathtaking animation in his films have earned him international renown from critics as well as public recognition within Japan.', '05-01-1941');

INSERT INTO directors(name, bio, birthyear) VALUES('Hiroyuki Morita', '  Hiroyuki Morita was born on 26 June 1964 in Fukuoka, Japan. He is a director, known for The Cat Returns (2002), Akira (1988) and Perfect Blue (1997).', '26-06-1964');

INSERT INTO directors(name, bio, birthyear) VALUES('Gorô Miyazaki', 'Graduated from Shinshu University, Faculty of Agriculture, Goro Miyazaki started his career as a construction consultant, and he designed parks and public institutions. To avoid to be compared to his father, the world-famous filmmaker Hayao Miyazaki, he initially didn''t want to work on anything related to animation. However, the turning point came in 1990s when he got involved in the construction of the Studio Ghibli Museum in Mitaka, Tokyo.', '21-01-1967');

INSERT INTO directors(name, bio, birthyear) VALUES('Hiromasa Yonebayashi', ' HHiromasa Yonebayashi was born on 10 July 1973 in Nonoichi, Japan. He is a director and writer, known for When Marnie Was There (2014), Arrietty (2010) and Mary and the Witch''s Flower (2017).', '10-07-1973');





-- MOVIES

INSERT INTO movies(title, description, genreid, directorid ,imageurl,featured) VALUES('Spirited Away','During her family''s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.',4,1,'https://www.imdb.com/title/tt0245429/mediaviewer/rm4207852801/?ref_=tt_ov_i',true);

INSERT INTO movies(title, description, genreid, directorid ,imageurl,featured) VALUES('The Wind Rises','A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II.',1,1,'https://www.imdb.com/title/tt2013293/mediaviewer/rm2695221760/?ref_=tt_ov_i',false);

INSERT INTO movies(title, description, genreid, directorid ,imageurl,featured) VALUES('My Neighbour Totoro','When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.
',2,1,'https://www.imdb.com/title/tt0096283/mediaviewer/rm2982441728/?ref_=tt_ov_i
',true);

INSERT INTO movies(title, description, genreid, directorid ,imageurl,featured) VALUES('Tales from Earthsea','In a mythical land, a man and a young boy investigate a series of unusual occurrences.',4,3,'https://www.imdb.com/title/tt0495596/mediaviewer/rm601537793/?ref_=tt_ov_i',true);

INSERT INTO movies(title, description, genreid, directorid ,imageurl,featured) VALUES('Kiki''s Delivery Service','A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.',2,1,'https://www.imdb.com/title/tt0097814/mediaviewer/rm315211009/?ref_=tt_ov_i',true);

INSERT INTO movies(title, description, genreid, directorid ,imageurl,featured) VALUES('Princess Mononoke','On a journey to find the cure for a Tatarigami''s curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.',4,1,'https://www.imdb.com/title/tt0119698/mediaviewer/rm2697706753/?ref_=tt_ov_i',true);

INSERT INTO movies(title, description, genreid, directorid ,imageurl,featured) VALUES('Howl''s Moving Castle','When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',4,1,'https://www.imdb.com/title/tt0347149/mediaviewer/rm2426685696/?ref_=tt_ov_i',true);

INSERT INTO movies(title, description, genreid, directorid ,imageurl,featured) VALUES('When Marnie Was There','Due to 12-year-old Anna''s asthma, she''s sent to stay with relatives of her guardian in the Japanese countryside. She likes to be alone, sketching. She befriends Marnie. Who is the mysterious, blonde Marnie?',3,4,'https://www.imdb.com/title/tt3398268/mediaviewer/rm2969050624/?ref_=tt_ov_i',true);

INSERT INTO movies(title, description, genreid, directorid ,imageurl,featured) VALUES('Nausicaä of the Valley of the Wind','Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.',4,1,'https://www.imdb.com/title/tt0087544/mediaviewer/rm2150611969/?ref_=tt_ov_i',true);

INSERT INTO movies(title, description, genreid, directorid ,imageurl,featured) VALUES('The Cat Returns','After helping a cat, a seventeen-year-old girl finds herself involuntarily engaged to a cat Prince in a magical world where her only hope of freedom lies with a dapper cat statuette come to life.',2,2,'https://www.imdb.com/title/tt0347618/mediaviewer/rm4040736001/?ref_=tt_ov_i',true);






INSERT INTO users(username,password,email,birthdate) VALUES('bruna123', '2803451983', 'bruna@email.com', '2010-01-01') ;

INSERT INTO users(username,password,email,birthdate) VALUES('mark01', '2801983', 'mark@email.com', '1965-10-05') ;

INSERT INTO users(username,password,email,birthdate) VALUES('mark01', 'jgns748hdf', 'felix@email.com', '1980-03-04') ;



INSERT INTO user_movies(userid,movieid) VALUES (2,22);
INSERT INTO user_movies(userid,movieid) VALUES (3,27);
INSERT INTO user_movies(userid,movieid) VALUES (4,31);


