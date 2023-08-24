--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

-- Started on 2023-08-22 11:44:06

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16409)
-- Name: directors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.directors (
    directorid integer NOT NULL,
    name character varying(50) NOT NULL,
    bio character varying(1000),
    birthyear date,
    deathyear date
);


ALTER TABLE public.directors OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16408)
-- Name: directors_directorid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.directors_directorid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.directors_directorid_seq OWNER TO postgres;

--
-- TOC entry 3369 (class 0 OID 0)
-- Dependencies: 216
-- Name: directors_directorid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.directors_directorid_seq OWNED BY public.directors.directorid;


--
-- TOC entry 215 (class 1259 OID 16400)
-- Name: genres; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.genres (
    genreid integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(1000)
);


ALTER TABLE public.genres OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16399)
-- Name: genres_genreid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.genres_genreid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.genres_genreid_seq OWNER TO postgres;

--
-- TOC entry 3370 (class 0 OID 0)
-- Dependencies: 214
-- Name: genres_genreid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.genres_genreid_seq OWNED BY public.genres.genreid;


--
-- TOC entry 219 (class 1259 OID 16426)
-- Name: movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies (
    movieid integer NOT NULL,
    title character varying(50) NOT NULL,
    description character varying(1000),
    directorid integer NOT NULL,
    genreid integer NOT NULL,
    imageurl character varying(300),
    featured boolean
);


ALTER TABLE public.movies OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16425)
-- Name: movies_movieid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movies_movieid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movies_movieid_seq OWNER TO postgres;

--
-- TOC entry 3371 (class 0 OID 0)
-- Dependencies: 218
-- Name: movies_movieid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movies_movieid_seq OWNED BY public.movies.movieid;


--
-- TOC entry 223 (class 1259 OID 16452)
-- Name: user_movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_movies (
    usermovieid integer NOT NULL,
    userid integer,
    movieid integer
);


ALTER TABLE public.user_movies OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16451)
-- Name: user_movies_usermovieid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_movies_usermovieid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_movies_usermovieid_seq OWNER TO postgres;

--
-- TOC entry 3372 (class 0 OID 0)
-- Dependencies: 222
-- Name: user_movies_usermovieid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_movies_usermovieid_seq OWNED BY public.user_movies.usermovieid;


--
-- TOC entry 221 (class 1259 OID 16445)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    userid integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    birthdate date
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16444)
-- Name: users_userid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_userid_seq OWNER TO postgres;

--
-- TOC entry 3373 (class 0 OID 0)
-- Dependencies: 220
-- Name: users_userid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_userid_seq OWNED BY public.users.userid;


--
-- TOC entry 3194 (class 2604 OID 16412)
-- Name: directors directorid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.directors ALTER COLUMN directorid SET DEFAULT nextval('public.directors_directorid_seq'::regclass);


--
-- TOC entry 3193 (class 2604 OID 16403)
-- Name: genres genreid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genres ALTER COLUMN genreid SET DEFAULT nextval('public.genres_genreid_seq'::regclass);


--
-- TOC entry 3195 (class 2604 OID 16429)
-- Name: movies movieid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies ALTER COLUMN movieid SET DEFAULT nextval('public.movies_movieid_seq'::regclass);


--
-- TOC entry 3197 (class 2604 OID 16455)
-- Name: user_movies usermovieid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_movies ALTER COLUMN usermovieid SET DEFAULT nextval('public.user_movies_usermovieid_seq'::regclass);


--
-- TOC entry 3196 (class 2604 OID 16448)
-- Name: users userid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN userid SET DEFAULT nextval('public.users_userid_seq'::regclass);


--
-- TOC entry 3357 (class 0 OID 16409)
-- Dependencies: 217
-- Data for Name: directors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.directors (directorid, name, bio, birthyear, deathyear) VALUES (1, 'Hayao Miyazaki', ' Hayao Miyazaki is 1 of Japan''s greatest animation directors. The entertaining plots, compelling characters & breathtaking animation in his films have earned him international renown from critics as well as public recognition within Japan.', '1941-01-05', NULL);
INSERT INTO public.directors (directorid, name, bio, birthyear, deathyear) VALUES (2, 'Hiroyuki Morita', '  Hiroyuki Morita was born on 26 June 1964 in Fukuoka, Japan. He is a director, known for The Cat Returns (2002), Akira (1988) and Perfect Blue (1997).', '1964-06-26', NULL);
INSERT INTO public.directors (directorid, name, bio, birthyear, deathyear) VALUES (3, 'Gorô Miyazaki', 'Graduated from Shinshu University, Faculty of Agriculture, Goro Miyazaki started his career as a construction consultant, and he designed parks and public institutions. To avoid to be compared to his father, the world-famous filmmaker Hayao Miyazaki, he initially didn''t want to work on anything related to animation. However, the turning point came in 1990s when he got involved in the construction of the Studio Ghibli Museum in Mitaka, Tokyo.', '1967-01-21', NULL);
INSERT INTO public.directors (directorid, name, bio, birthyear, deathyear) VALUES (4, 'Hiromasa Yonebayashi', ' HHiromasa Yonebayashi was born on 10 July 1973 in Nonoichi, Japan. He is a director and writer, known for When Marnie Was There (2014), Arrietty (2010) and Mary and the Witch''s Flower (2017).', '1973-07-10', NULL);


--
-- TOC entry 3355 (class 0 OID 16400)
-- Dependencies: 215
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.genres (genreid, name, description) VALUES (1, 'Biography', 'A biographical film or biopic is a film that dramatizes the life of a non-fictional or historically-based person or people. Such films show the life of a historical person and the central character''s real name is used. They differ from docudrama films and historical drama films in that they attempt to comprehensively tell a single person''s life story or at least the most historically important years of their lives.');
INSERT INTO public.genres (genreid, name, description) VALUES (2, 'Fantasy', 'Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and usually inspired by mythology or folklore. The term "fantasy" can also be used to describe a "work of this genre",[1] usually literary.');
INSERT INTO public.genres (genreid, name, description) VALUES (3, 'Drama', 'The term "drama" comes from a Greek word meaning "deed" or "act" (Classical Greek: δρᾶμα, drâma), which is derived from "I do" (Classical Greek: δράω, dráō). The two masks associated with drama represent the traditional generic division between comedy and tragedy. ');
INSERT INTO public.genres (genreid, name, description) VALUES (4, 'Adventure', 'Setting plays an important role in an adventure film, sometimes itself acting as a character in the narrative. They are typically set in far away lands, such as lost continents or other exotic locations. They may also be set in a period background and may include adapted stories of historical or fictional adventure heroes within the historical context. Such struggles and situations that confront the main characters include things like battles, piracy, rebellion, and the creation of empires and kingdoms.');


--
-- TOC entry 3359 (class 0 OID 16426)
-- Dependencies: 219
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.movies (movieid, title, description, directorid, genreid, imageurl, featured) VALUES (22, 'Spirited Away', 'During her family''s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.', 1, 4, 'https://www.imdb.com/title/tt0245429/mediaviewer/rm4207852801/?ref_=tt_ov_i', true);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imageurl, featured) VALUES (23, 'The Wind Rises', 'A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II.', 1, 1, 'https://www.imdb.com/title/tt2013293/mediaviewer/rm2695221760/?ref_=tt_ov_i', false);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imageurl, featured) VALUES (24, 'My Neighbour Totoro', 'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.
', 1, 2, 'https://www.imdb.com/title/tt0096283/mediaviewer/rm2982441728/?ref_=tt_ov_i
', true);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imageurl, featured) VALUES (25, 'Tales from Earthsea', 'In a mythical land, a man and a young boy investigate a series of unusual occurrences.', 3, 4, 'https://www.imdb.com/title/tt0495596/mediaviewer/rm601537793/?ref_=tt_ov_i', true);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imageurl, featured) VALUES (26, 'Kiki''s Delivery Service', 'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.', 1, 2, 'https://www.imdb.com/title/tt0097814/mediaviewer/rm315211009/?ref_=tt_ov_i', true);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imageurl, featured) VALUES (27, 'Princess Mononoke', 'On a journey to find the cure for a Tatarigami''s curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.', 1, 4, 'https://www.imdb.com/title/tt0119698/mediaviewer/rm2697706753/?ref_=tt_ov_i', true);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imageurl, featured) VALUES (28, 'Howl''s Moving Castle', 'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.', 1, 4, 'https://www.imdb.com/title/tt0347149/mediaviewer/rm2426685696/?ref_=tt_ov_i', true);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imageurl, featured) VALUES (29, 'When Marnie Was There', 'Due to 12-year-old Anna''s asthma, she''s sent to stay with relatives of her guardian in the Japanese countryside. She likes to be alone, sketching. She befriends Marnie. Who is the mysterious, blonde Marnie?', 4, 3, 'https://www.imdb.com/title/tt3398268/mediaviewer/rm2969050624/?ref_=tt_ov_i', true);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imageurl, featured) VALUES (31, 'The Cat Returns', 'After helping a cat, a seventeen-year-old girl finds herself involuntarily engaged to a cat Prince in a magical world where her only hope of freedom lies with a dapper cat statuette come to life.', 2, 2, 'https://www.imdb.com/title/tt0347618/mediaviewer/rm4040736001/?ref_=tt_ov_i', true);


--
-- TOC entry 3363 (class 0 OID 16452)
-- Dependencies: 223
-- Data for Name: user_movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (8, 2, 22);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (9, 3, 27);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (10, 4, 31);


--
-- TOC entry 3361 (class 0 OID 16445)
-- Dependencies: 221
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (userid, username, password, email, birthdate) VALUES (2, 'bruna123', '2803451983', 'bruna@email.com', '2010-01-01');
INSERT INTO public.users (userid, username, password, email, birthdate) VALUES (3, 'mark01', '2801983', 'mark@email.com', '1965-10-05');
INSERT INTO public.users (userid, username, password, email, birthdate) VALUES (4, 'mark01', 'jgns748hdf', 'felix@email.com', '1980-03-04');


--
-- TOC entry 3374 (class 0 OID 0)
-- Dependencies: 216
-- Name: directors_directorid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.directors_directorid_seq', 4, true);


--
-- TOC entry 3375 (class 0 OID 0)
-- Dependencies: 214
-- Name: genres_genreid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.genres_genreid_seq', 4, true);


--
-- TOC entry 3376 (class 0 OID 0)
-- Dependencies: 218
-- Name: movies_movieid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movies_movieid_seq', 31, true);


--
-- TOC entry 3377 (class 0 OID 0)
-- Dependencies: 222
-- Name: user_movies_usermovieid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_movies_usermovieid_seq', 10, true);


--
-- TOC entry 3378 (class 0 OID 0)
-- Dependencies: 220
-- Name: users_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_userid_seq', 4, true);


--
-- TOC entry 3201 (class 2606 OID 16416)
-- Name: directors directors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.directors
    ADD CONSTRAINT directors_pkey PRIMARY KEY (directorid);


--
-- TOC entry 3199 (class 2606 OID 16407)
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (genreid);


--
-- TOC entry 3203 (class 2606 OID 16433)
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (movieid);


--
-- TOC entry 3207 (class 2606 OID 16457)
-- Name: user_movies user_movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_movies
    ADD CONSTRAINT user_movies_pkey PRIMARY KEY (usermovieid);


--
-- TOC entry 3205 (class 2606 OID 16450)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (userid);


--
-- TOC entry 3208 (class 2606 OID 16439)
-- Name: movies directorkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT directorkey FOREIGN KEY (directorid) REFERENCES public.directors(directorid);


--
-- TOC entry 3209 (class 2606 OID 16434)
-- Name: movies genrekey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT genrekey FOREIGN KEY (genreid) REFERENCES public.genres(genreid);


--
-- TOC entry 3210 (class 2606 OID 16463)
-- Name: user_movies moviekey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_movies
    ADD CONSTRAINT moviekey FOREIGN KEY (movieid) REFERENCES public.movies(movieid);


--
-- TOC entry 3211 (class 2606 OID 16458)
-- Name: user_movies userkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_movies
    ADD CONSTRAINT userkey FOREIGN KEY (userid) REFERENCES public.users(userid);


-- Completed on 2023-08-22 11:44:06

--
-- PostgreSQL database dump complete
--

