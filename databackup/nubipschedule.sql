--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: nubipschedule; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE nubipschedule WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';


ALTER DATABASE nubipschedule OWNER TO postgres;

\connect nubipschedule

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Academics; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Academics" (
    "AcademicId" integer NOT NULL,
    "Title" text
);


ALTER TABLE public."Academics" OWNER TO nubip;

--
-- Name: Academics_AcademicId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Academics_AcademicId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Academics_AcademicId_seq" OWNER TO nubip;

--
-- Name: Academics_AcademicId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Academics_AcademicId_seq" OWNED BY public."Academics"."AcademicId";


--
-- Name: AuditoriumTypes; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."AuditoriumTypes" (
    "AuditoriumTypeId" integer NOT NULL,
    "Title" text,
    "Computer" boolean NOT NULL
);


ALTER TABLE public."AuditoriumTypes" OWNER TO nubip;

--
-- Name: AuditoriumTypes_AuditoriumTypeId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."AuditoriumTypes_AuditoriumTypeId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."AuditoriumTypes_AuditoriumTypeId_seq" OWNER TO nubip;

--
-- Name: AuditoriumTypes_AuditoriumTypeId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."AuditoriumTypes_AuditoriumTypeId_seq" OWNED BY public."AuditoriumTypes"."AuditoriumTypeId";


--
-- Name: Auditoriums; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Auditoriums" (
    "AuditoriumId" integer NOT NULL,
    "Number" integer NOT NULL,
    "BuildingId" integer NOT NULL,
    "SeatseCount" integer NOT NULL,
    "AuditoriumTypeId" integer NOT NULL
);


ALTER TABLE public."Auditoriums" OWNER TO nubip;

--
-- Name: Auditoriums_AuditoriumId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Auditoriums_AuditoriumId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Auditoriums_AuditoriumId_seq" OWNER TO nubip;

--
-- Name: Auditoriums_AuditoriumId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Auditoriums_AuditoriumId_seq" OWNED BY public."Auditoriums"."AuditoriumId";


--
-- Name: Buildings; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Buildings" (
    "BuildingId" integer NOT NULL,
    "Latitude" text,
    "Longitude" text,
    "Number" integer DEFAULT 0 NOT NULL
);


ALTER TABLE public."Buildings" OWNER TO nubip;

--
-- Name: Buildings_BuildingId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Buildings_BuildingId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Buildings_BuildingId_seq" OWNER TO nubip;

--
-- Name: Buildings_BuildingId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Buildings_BuildingId_seq" OWNED BY public."Buildings"."BuildingId";


--
-- Name: Curriculums; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Curriculums" (
    "CurriculumId" integer NOT NULL,
    "DepartamentId" integer NOT NULL,
    "SubjectId" integer NOT NULL,
    "LectionCount" integer NOT NULL,
    "LabaratorCount" integer NOT NULL,
    "Semester" integer NOT NULL,
    "SpecialityId" integer
);


ALTER TABLE public."Curriculums" OWNER TO nubip;

--
-- Name: Curriculums_CurriculumId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Curriculums_CurriculumId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Curriculums_CurriculumId_seq" OWNER TO nubip;

--
-- Name: Curriculums_CurriculumId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Curriculums_CurriculumId_seq" OWNED BY public."Curriculums"."CurriculumId";


--
-- Name: Degrees; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Degrees" (
    "DegreeId" integer NOT NULL,
    "Title" text
);


ALTER TABLE public."Degrees" OWNER TO nubip;

--
-- Name: Degrees_DegreeId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Degrees_DegreeId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Degrees_DegreeId_seq" OWNER TO nubip;

--
-- Name: Degrees_DegreeId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Degrees_DegreeId_seq" OWNED BY public."Degrees"."DegreeId";


--
-- Name: Departaments; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Departaments" (
    "DepartamentId" integer NOT NULL,
    "Title" text,
    "Dean" text,
    "FacultyId" integer NOT NULL,
    "Email" text
);


ALTER TABLE public."Departaments" OWNER TO nubip;

--
-- Name: Departaments_DepartamentId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Departaments_DepartamentId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Departaments_DepartamentId_seq" OWNER TO nubip;

--
-- Name: Departaments_DepartamentId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Departaments_DepartamentId_seq" OWNED BY public."Departaments"."DepartamentId";


--
-- Name: EducationForms; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."EducationForms" (
    "EducationFormId" integer NOT NULL,
    "Title" text
);


ALTER TABLE public."EducationForms" OWNER TO nubip;

--
-- Name: EducationForm_EducationFormId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."EducationForm_EducationFormId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."EducationForm_EducationFormId_seq" OWNER TO nubip;

--
-- Name: EducationForm_EducationFormId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."EducationForm_EducationFormId_seq" OWNED BY public."EducationForms"."EducationFormId";


--
-- Name: EducationLevels; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."EducationLevels" (
    "EducationLevelId" integer NOT NULL,
    "Title" text
);


ALTER TABLE public."EducationLevels" OWNER TO nubip;

--
-- Name: EducationLevel_EducationLevelId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."EducationLevel_EducationLevelId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."EducationLevel_EducationLevelId_seq" OWNER TO nubip;

--
-- Name: EducationLevel_EducationLevelId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."EducationLevel_EducationLevelId_seq" OWNED BY public."EducationLevels"."EducationLevelId";


--
-- Name: Facultys; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Facultys" (
    "FacultyId" integer NOT NULL,
    "Title" text,
    "Dean" text,
    "BuildingId" integer NOT NULL,
    "ShortName" text,
    "Address" text,
    "Phone" text,
    "Email" text,
    "Site" text
);


ALTER TABLE public."Facultys" OWNER TO nubip;

--
-- Name: Facultys_FacultyId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Facultys_FacultyId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Facultys_FacultyId_seq" OWNER TO nubip;

--
-- Name: Facultys_FacultyId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Facultys_FacultyId_seq" OWNED BY public."Facultys"."FacultyId";


--
-- Name: Groups; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Groups" (
    "GroupId" integer NOT NULL,
    "Title" text,
    "SpecialityId" integer NOT NULL,
    "TeacherId" integer NOT NULL,
    "StudentCount" integer NOT NULL,
    "IsActive" boolean NOT NULL,
    "EducationFormId" integer DEFAULT 0 NOT NULL,
    "EducationLevelId" integer DEFAULT 0 NOT NULL
);


ALTER TABLE public."Groups" OWNER TO nubip;

--
-- Name: Groups_GroupId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Groups_GroupId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Groups_GroupId_seq" OWNER TO nubip;

--
-- Name: Groups_GroupId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Groups_GroupId_seq" OWNED BY public."Groups"."GroupId";


--
-- Name: Lessons; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Lessons" (
    "LessonId" integer NOT NULL,
    "CurriculumId" integer NOT NULL,
    "GroupId" integer NOT NULL,
    "TeacherId" integer NOT NULL,
    "AuditoriumId" integer NOT NULL,
    "TimeId" integer NOT NULL,
    "Day" text,
    "Week" integer NOT NULL,
    "SubGroup" integer NOT NULL
);


ALTER TABLE public."Lessons" OWNER TO nubip;

--
-- Name: Lessons_LessonId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Lessons_LessonId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Lessons_LessonId_seq" OWNER TO nubip;

--
-- Name: Lessons_LessonId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Lessons_LessonId_seq" OWNED BY public."Lessons"."LessonId";


--
-- Name: Requests; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Requests" (
    "RequestId" integer NOT NULL,
    "LessonId" integer NOT NULL,
    "TimeId" integer NOT NULL,
    "From" timestamp without time zone NOT NULL,
    "To" timestamp without time zone NOT NULL,
    "RequestTime" timestamp without time zone NOT NULL,
    "Status" boolean NOT NULL
);


ALTER TABLE public."Requests" OWNER TO nubip;

--
-- Name: Requests_RequestId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Requests_RequestId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Requests_RequestId_seq" OWNER TO nubip;

--
-- Name: Requests_RequestId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Requests_RequestId_seq" OWNED BY public."Requests"."RequestId";


--
-- Name: Specialitys; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Specialitys" (
    "SpecialityId" integer NOT NULL,
    "Title" text,
    "FacultyId" integer NOT NULL
);


ALTER TABLE public."Specialitys" OWNER TO nubip;

--
-- Name: Specialitys_SpecialityId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Specialitys_SpecialityId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Specialitys_SpecialityId_seq" OWNER TO nubip;

--
-- Name: Specialitys_SpecialityId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Specialitys_SpecialityId_seq" OWNED BY public."Specialitys"."SpecialityId";


--
-- Name: SubjectTypes; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."SubjectTypes" (
    "SubjectTypeId" integer NOT NULL,
    "Title" text
);


ALTER TABLE public."SubjectTypes" OWNER TO nubip;

--
-- Name: SubjectTypes_SubjectTypeId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."SubjectTypes_SubjectTypeId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."SubjectTypes_SubjectTypeId_seq" OWNER TO nubip;

--
-- Name: SubjectTypes_SubjectTypeId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."SubjectTypes_SubjectTypeId_seq" OWNED BY public."SubjectTypes"."SubjectTypeId";


--
-- Name: Subjects; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Subjects" (
    "SubjectId" integer NOT NULL,
    "Title" text,
    "SubjectTypeId" integer NOT NULL
);


ALTER TABLE public."Subjects" OWNER TO nubip;

--
-- Name: Subjects_SubjectId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Subjects_SubjectId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Subjects_SubjectId_seq" OWNER TO nubip;

--
-- Name: Subjects_SubjectId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Subjects_SubjectId_seq" OWNED BY public."Subjects"."SubjectId";


--
-- Name: Teachers; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Teachers" (
    "TeacherId" integer NOT NULL,
    "Name" text,
    "LastName" text,
    "Middlename" text,
    "IsActive" boolean NOT NULL,
    "DepartamentId" integer NOT NULL,
    "Email" text,
    "Site" text,
    "DegreeId" integer NOT NULL,
    "AcademicId" integer NOT NULL
);


ALTER TABLE public."Teachers" OWNER TO nubip;

--
-- Name: Teachers_TeacherId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Teachers_TeacherId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Teachers_TeacherId_seq" OWNER TO nubip;

--
-- Name: Teachers_TeacherId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Teachers_TeacherId_seq" OWNED BY public."Teachers"."TeacherId";


--
-- Name: Times; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."Times" (
    "TimeId" integer NOT NULL,
    "Number" integer NOT NULL,
    "Start" interval NOT NULL,
    "End" interval NOT NULL
);


ALTER TABLE public."Times" OWNER TO nubip;

--
-- Name: Times_TimeId_seq; Type: SEQUENCE; Schema: public; Owner: nubip
--

CREATE SEQUENCE public."Times_TimeId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Times_TimeId_seq" OWNER TO nubip;

--
-- Name: Times_TimeId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nubip
--

ALTER SEQUENCE public."Times_TimeId_seq" OWNED BY public."Times"."TimeId";


--
-- Name: __EFMigrationsHistory; Type: TABLE; Schema: public; Owner: nubip
--

CREATE TABLE public."__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL
);


ALTER TABLE public."__EFMigrationsHistory" OWNER TO nubip;

--
-- Name: Academics AcademicId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Academics" ALTER COLUMN "AcademicId" SET DEFAULT nextval('public."Academics_AcademicId_seq"'::regclass);


--
-- Name: AuditoriumTypes AuditoriumTypeId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."AuditoriumTypes" ALTER COLUMN "AuditoriumTypeId" SET DEFAULT nextval('public."AuditoriumTypes_AuditoriumTypeId_seq"'::regclass);


--
-- Name: Auditoriums AuditoriumId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Auditoriums" ALTER COLUMN "AuditoriumId" SET DEFAULT nextval('public."Auditoriums_AuditoriumId_seq"'::regclass);


--
-- Name: Buildings BuildingId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Buildings" ALTER COLUMN "BuildingId" SET DEFAULT nextval('public."Buildings_BuildingId_seq"'::regclass);


--
-- Name: Curriculums CurriculumId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Curriculums" ALTER COLUMN "CurriculumId" SET DEFAULT nextval('public."Curriculums_CurriculumId_seq"'::regclass);


--
-- Name: Degrees DegreeId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Degrees" ALTER COLUMN "DegreeId" SET DEFAULT nextval('public."Degrees_DegreeId_seq"'::regclass);


--
-- Name: Departaments DepartamentId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Departaments" ALTER COLUMN "DepartamentId" SET DEFAULT nextval('public."Departaments_DepartamentId_seq"'::regclass);


--
-- Name: EducationForms EducationFormId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."EducationForms" ALTER COLUMN "EducationFormId" SET DEFAULT nextval('public."EducationForm_EducationFormId_seq"'::regclass);


--
-- Name: EducationLevels EducationLevelId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."EducationLevels" ALTER COLUMN "EducationLevelId" SET DEFAULT nextval('public."EducationLevel_EducationLevelId_seq"'::regclass);


--
-- Name: Facultys FacultyId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Facultys" ALTER COLUMN "FacultyId" SET DEFAULT nextval('public."Facultys_FacultyId_seq"'::regclass);


--
-- Name: Groups GroupId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Groups" ALTER COLUMN "GroupId" SET DEFAULT nextval('public."Groups_GroupId_seq"'::regclass);


--
-- Name: Lessons LessonId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Lessons" ALTER COLUMN "LessonId" SET DEFAULT nextval('public."Lessons_LessonId_seq"'::regclass);


--
-- Name: Requests RequestId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Requests" ALTER COLUMN "RequestId" SET DEFAULT nextval('public."Requests_RequestId_seq"'::regclass);


--
-- Name: Specialitys SpecialityId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Specialitys" ALTER COLUMN "SpecialityId" SET DEFAULT nextval('public."Specialitys_SpecialityId_seq"'::regclass);


--
-- Name: SubjectTypes SubjectTypeId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."SubjectTypes" ALTER COLUMN "SubjectTypeId" SET DEFAULT nextval('public."SubjectTypes_SubjectTypeId_seq"'::regclass);


--
-- Name: Subjects SubjectId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Subjects" ALTER COLUMN "SubjectId" SET DEFAULT nextval('public."Subjects_SubjectId_seq"'::regclass);


--
-- Name: Teachers TeacherId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Teachers" ALTER COLUMN "TeacherId" SET DEFAULT nextval('public."Teachers_TeacherId_seq"'::regclass);


--
-- Name: Times TimeId; Type: DEFAULT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Times" ALTER COLUMN "TimeId" SET DEFAULT nextval('public."Times_TimeId_seq"'::regclass);


--
-- Data for Name: Academics; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Academics" ("AcademicId", "Title") FROM stdin;
1	Доцент
5	Професор
6	Академік
\.


--
-- Data for Name: AuditoriumTypes; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."AuditoriumTypes" ("AuditoriumTypeId", "Title", "Computer") FROM stdin;
1	Лабораторна	t
2	Лекційна	f
3	Лабораторна	f
\.


--
-- Data for Name: Auditoriums; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Auditoriums" ("AuditoriumId", "Number", "BuildingId", "SeatseCount", "AuditoriumTypeId") FROM stdin;
1	213	1	25	1
2	214	1	25	1
3	230	1	100	2
4	231	1	100	2
5	232	1	60	2
6	233	1	30	1
7	225	1	15	1
8	222	1	15	1
9	223	1	15	1
10	224	1	15	1
11	501	2	20	1
12	111	2	60	2
13	75	3	30	3
\.


--
-- Data for Name: Buildings; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Buildings" ("BuildingId", "Latitude", "Longitude", "Number") FROM stdin;
2	50.383603	30.494751	10
1	50.381384	30.495908	15
3	50.3806934	30.4935234	11
4	50.3837013	30.4925839	8
5	50.3840249	30.4944395	4
6	50.3837277	30.4991737	3
7	50.3839224	30.5022808	2
8	50.3837617	30.5043997	1
9	50.3803984	30.4857473	12
10	50.382367	30.493346	7
11	50.383000	30.496637	9
12	50.3941886	30.4976719	6
13	50.381927	30.4942113	5
\.


--
-- Data for Name: Curriculums; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Curriculums" ("CurriculumId", "DepartamentId", "SubjectId", "LectionCount", "LabaratorCount", "Semester", "SpecialityId") FROM stdin;
1	1	5	15	15	1	1
\.


--
-- Data for Name: Degrees; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Degrees" ("DegreeId", "Title") FROM stdin;
1	Кандидат економічних наук
2	Доктор педагогічних наук
3	Кандидат технічних наук
4	Кандидат економічних наук
5	Кандидат юридичних наук
6	Доктор сільськогосподарських наук
\.


--
-- Data for Name: Departaments; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Departaments" ("DepartamentId", "Title", "Dean", "FacultyId", "Email") FROM stdin;
1	Компютерних наук	Голуб Белла Львівна	1	\N
2	Кафедра банківської справи	Олійник-Данн Олена Олександрівна	4	banking_chair@nubip.edu.ua
3	Кафедра економічної теорії	Талавиря Микола Петрович	2	ekteor_chair@nubip.edu.ua
\.


--
-- Data for Name: EducationForms; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."EducationForms" ("EducationFormId", "Title") FROM stdin;
1	Денна
2	Заочна
\.


--
-- Data for Name: EducationLevels; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."EducationLevels" ("EducationLevelId", "Title") FROM stdin;
1	Молодший спеціаліст
2	Бакалавр
3	Магістр
\.


--
-- Data for Name: Facultys; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Facultys" ("FacultyId", "Title", "Dean", "BuildingId", "ShortName", "Address", "Phone", "Email", "Site") FROM stdin;
1	Інформаційних технологій	Глазунова Олена Григорівна	1	ІТ	вул. Героїв Оборони 15	\N	\N	\N
2	Аграрного менеджменту	Остапчук Анатолій Дмитрович	2	АМ	вул. Героїв Оборони 11	(044) 527-85-73	agroman_dean@nubip.edu.ua	agroman_dean@nubip.edu.ua
3	Агробіологічний	Тонха Оксана Леонідівна	5	АБ	вул. Героїв Оборони 13	(044) 527-82-13	agro_dek@i.ua	\N
4	Економічний	Діброва Анатолій Дмитрович	11	ЕК	вул. Героїв Оборони 11	(044) 527-85-40	dibrova@nubip.edu.ua	\N
\.


--
-- Data for Name: Groups; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Groups" ("GroupId", "Title", "SpecialityId", "TeacherId", "StudentCount", "IsActive", "EducationFormId", "EducationLevelId") FROM stdin;
4	ПІ-1506	1	3	17	t	1	2
5	КІ-1504	3	1	7	t	1	2
6	КН-1503	2	3	20	t	1	2
7	КН-1502	2	1	20	t	1	2
8	КН-1701	2	2	20	t	1	2
9	ПІ-1701	1	3	20	t	1	2
10	ПІ-1601	1	1	20	t	1	2
11	ПІ-1602	1	2	20	t	1	2
12	ЕП-1701	4	3	20	t	1	2
\.


--
-- Data for Name: Lessons; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Lessons" ("LessonId", "CurriculumId", "GroupId", "TeacherId", "AuditoriumId", "TimeId", "Day", "Week", "SubGroup") FROM stdin;
4	1	4	2	3	5	2	0	0
3	1	4	3	3	4	2	0	0
5	1	4	3	3	1	5	0	0
\.


--
-- Data for Name: Requests; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Requests" ("RequestId", "LessonId", "TimeId", "From", "To", "RequestTime", "Status") FROM stdin;
\.


--
-- Data for Name: Specialitys; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Specialitys" ("SpecialityId", "Title", "FacultyId") FROM stdin;
1	Інженерія програмного забезпечення	1
2	Комп'ютерні науки	1
3	Комп'ютерна інженерія	1
4	Економіка (Економіка підприємства)	4
5	Менеджмент	2
6	Маркетинг	2
\.


--
-- Data for Name: SubjectTypes; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."SubjectTypes" ("SubjectTypeId", "Title") FROM stdin;
1	Лекція
2	Лабораторна
\.


--
-- Data for Name: Subjects; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Subjects" ("SubjectId", "Title", "SubjectTypeId") FROM stdin;
5	Бази даних	1
6	Бази даних	2
7	Об'єктно орієнтоване програмування	1
8	Об'єктно орієнтоване програмування	2
9	Менеджмент	1
10	Економічна теорія	1
11	Економічна теорія	2
12	Менеджмент	2
13	Проектний практикум	1
14	Проектний практикум	2
15	Професійна практика	1
16	Професійна практика	2
17	Економіка програмного забезпечення	1
18	Економіка програмного забезпечення	2
19	Менеджмент проектів програмного забезпечення	1
20	Менеджмент проектів програмного забезпечення	2
21	Технології веб-програмування	1
22	Технології веб-програмування	2
23	Архітектура та проектування програмного забезпечення	1
24	Архітектура та проектування програмного забезпечення	2
25	Методи об'єктно-орієнтованого проектування програмних систем	1
26	Методи об'єктно-орієнтованого проектування програмних систем	2
\.


--
-- Data for Name: Teachers; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Teachers" ("TeacherId", "Name", "LastName", "Middlename", "IsActive", "DepartamentId", "Email", "Site", "DegreeId", "AcademicId") FROM stdin;
1	Олексій	Ткаченко	Миколайович	t	1	\N	\N	3	1
2	Ірина	Ясенова	Сергіївна	t	1	yasenova@it.nubip.edu.ua	\N	3	1
3	Белла	Голуб	Львівна	t	1	\N	\N	3	1
\.


--
-- Data for Name: Times; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."Times" ("TimeId", "Number", "Start", "End") FROM stdin;
1	1	08:30:00	09:50:00
2	2	10:05:00	11:25:00
3	3	11:40:00	13:00:00
4	4	13:15:00	14:35:00
5	5	14:50:00	16:10:00
6	6	16:25:00	17:45:00
7	7	18:00:00	19:20:00
8	8	19:35:00	20:55:00
\.


--
-- Data for Name: __EFMigrationsHistory; Type: TABLE DATA; Schema: public; Owner: nubip
--

COPY public."__EFMigrationsHistory" ("MigrationId", "ProductVersion") FROM stdin;
20180521114924_Initial	2.1.0-rc1-32029
20180524062126_UpdateNaming	2.1.0-rc1-32029
20180524081906_AddNormalization	2.1.0-rc1-32029
20180531172717_AddSToName	2.1.0-rc1-32029
20180609132830_FixAuditoriumTable	2.1.0-rc1-32029
20180609163518_FixBuilding	2.1.0-rc1-32029
\.


--
-- Name: Academics_AcademicId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Academics_AcademicId_seq"', 6, true);


--
-- Name: AuditoriumTypes_AuditoriumTypeId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."AuditoriumTypes_AuditoriumTypeId_seq"', 3, true);


--
-- Name: Auditoriums_AuditoriumId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Auditoriums_AuditoriumId_seq"', 13, true);


--
-- Name: Buildings_BuildingId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Buildings_BuildingId_seq"', 13, true);


--
-- Name: Curriculums_CurriculumId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Curriculums_CurriculumId_seq"', 1, true);


--
-- Name: Degrees_DegreeId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Degrees_DegreeId_seq"', 6, true);


--
-- Name: Departaments_DepartamentId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Departaments_DepartamentId_seq"', 3, true);


--
-- Name: EducationForm_EducationFormId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."EducationForm_EducationFormId_seq"', 2, true);


--
-- Name: EducationLevel_EducationLevelId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."EducationLevel_EducationLevelId_seq"', 3, true);


--
-- Name: Facultys_FacultyId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Facultys_FacultyId_seq"', 4, true);


--
-- Name: Groups_GroupId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Groups_GroupId_seq"', 12, true);


--
-- Name: Lessons_LessonId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Lessons_LessonId_seq"', 5, true);


--
-- Name: Requests_RequestId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Requests_RequestId_seq"', 1, false);


--
-- Name: Specialitys_SpecialityId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Specialitys_SpecialityId_seq"', 6, true);


--
-- Name: SubjectTypes_SubjectTypeId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."SubjectTypes_SubjectTypeId_seq"', 3, true);


--
-- Name: Subjects_SubjectId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Subjects_SubjectId_seq"', 26, true);


--
-- Name: Teachers_TeacherId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Teachers_TeacherId_seq"', 3, true);


--
-- Name: Times_TimeId_seq; Type: SEQUENCE SET; Schema: public; Owner: nubip
--

SELECT pg_catalog.setval('public."Times_TimeId_seq"', 8, true);


--
-- Name: Academics PK_Academics; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Academics"
    ADD CONSTRAINT "PK_Academics" PRIMARY KEY ("AcademicId");


--
-- Name: AuditoriumTypes PK_AuditoriumTypes; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."AuditoriumTypes"
    ADD CONSTRAINT "PK_AuditoriumTypes" PRIMARY KEY ("AuditoriumTypeId");


--
-- Name: Auditoriums PK_Auditoriums; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Auditoriums"
    ADD CONSTRAINT "PK_Auditoriums" PRIMARY KEY ("AuditoriumId");


--
-- Name: Buildings PK_Buildings; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Buildings"
    ADD CONSTRAINT "PK_Buildings" PRIMARY KEY ("BuildingId");


--
-- Name: Curriculums PK_Curriculums; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Curriculums"
    ADD CONSTRAINT "PK_Curriculums" PRIMARY KEY ("CurriculumId");


--
-- Name: Degrees PK_Degrees; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Degrees"
    ADD CONSTRAINT "PK_Degrees" PRIMARY KEY ("DegreeId");


--
-- Name: Departaments PK_Departaments; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Departaments"
    ADD CONSTRAINT "PK_Departaments" PRIMARY KEY ("DepartamentId");


--
-- Name: EducationForms PK_EducationForms; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."EducationForms"
    ADD CONSTRAINT "PK_EducationForms" PRIMARY KEY ("EducationFormId");


--
-- Name: EducationLevels PK_EducationLevels; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."EducationLevels"
    ADD CONSTRAINT "PK_EducationLevels" PRIMARY KEY ("EducationLevelId");


--
-- Name: Facultys PK_Facultys; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Facultys"
    ADD CONSTRAINT "PK_Facultys" PRIMARY KEY ("FacultyId");


--
-- Name: Groups PK_Groups; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Groups"
    ADD CONSTRAINT "PK_Groups" PRIMARY KEY ("GroupId");


--
-- Name: Lessons PK_Lessons; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Lessons"
    ADD CONSTRAINT "PK_Lessons" PRIMARY KEY ("LessonId");


--
-- Name: Requests PK_Requests; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Requests"
    ADD CONSTRAINT "PK_Requests" PRIMARY KEY ("RequestId");


--
-- Name: Specialitys PK_Specialitys; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Specialitys"
    ADD CONSTRAINT "PK_Specialitys" PRIMARY KEY ("SpecialityId");


--
-- Name: SubjectTypes PK_SubjectTypes; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."SubjectTypes"
    ADD CONSTRAINT "PK_SubjectTypes" PRIMARY KEY ("SubjectTypeId");


--
-- Name: Subjects PK_Subjects; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Subjects"
    ADD CONSTRAINT "PK_Subjects" PRIMARY KEY ("SubjectId");


--
-- Name: Teachers PK_Teachers; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Teachers"
    ADD CONSTRAINT "PK_Teachers" PRIMARY KEY ("TeacherId");


--
-- Name: Times PK_Times; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Times"
    ADD CONSTRAINT "PK_Times" PRIMARY KEY ("TimeId");


--
-- Name: __EFMigrationsHistory PK___EFMigrationsHistory; Type: CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."__EFMigrationsHistory"
    ADD CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId");


--
-- Name: IX_Auditoriums_AuditoriumTypeId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Auditoriums_AuditoriumTypeId" ON public."Auditoriums" USING btree ("AuditoriumTypeId");


--
-- Name: IX_Auditoriums_BuildingId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Auditoriums_BuildingId" ON public."Auditoriums" USING btree ("BuildingId");


--
-- Name: IX_Curriculums_DepartamentId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Curriculums_DepartamentId" ON public."Curriculums" USING btree ("DepartamentId");


--
-- Name: IX_Curriculums_SpecialityId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Curriculums_SpecialityId" ON public."Curriculums" USING btree ("SpecialityId");


--
-- Name: IX_Curriculums_SubjectId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Curriculums_SubjectId" ON public."Curriculums" USING btree ("SubjectId");


--
-- Name: IX_Facultys_BuildingId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Facultys_BuildingId" ON public."Facultys" USING btree ("BuildingId");


--
-- Name: IX_Groups_EducationFormId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Groups_EducationFormId" ON public."Groups" USING btree ("EducationFormId");


--
-- Name: IX_Groups_EducationLevelId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Groups_EducationLevelId" ON public."Groups" USING btree ("EducationLevelId");


--
-- Name: IX_Groups_SpecialityId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Groups_SpecialityId" ON public."Groups" USING btree ("SpecialityId");


--
-- Name: IX_Groups_TeacherId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Groups_TeacherId" ON public."Groups" USING btree ("TeacherId");


--
-- Name: IX_Lessons_AuditoriumId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Lessons_AuditoriumId" ON public."Lessons" USING btree ("AuditoriumId");


--
-- Name: IX_Lessons_CurriculumId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Lessons_CurriculumId" ON public."Lessons" USING btree ("CurriculumId");


--
-- Name: IX_Lessons_GroupId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Lessons_GroupId" ON public."Lessons" USING btree ("GroupId");


--
-- Name: IX_Lessons_TeacherId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Lessons_TeacherId" ON public."Lessons" USING btree ("TeacherId");


--
-- Name: IX_Lessons_TimeId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Lessons_TimeId" ON public."Lessons" USING btree ("TimeId");


--
-- Name: IX_Requests_LessonId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Requests_LessonId" ON public."Requests" USING btree ("LessonId");


--
-- Name: IX_Requests_TimeId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Requests_TimeId" ON public."Requests" USING btree ("TimeId");


--
-- Name: IX_Specialitys_FacultyId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Specialitys_FacultyId" ON public."Specialitys" USING btree ("FacultyId");


--
-- Name: IX_Subjects_SubjectTypeId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Subjects_SubjectTypeId" ON public."Subjects" USING btree ("SubjectTypeId");


--
-- Name: IX_Teachers_AcademicId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Teachers_AcademicId" ON public."Teachers" USING btree ("AcademicId");


--
-- Name: IX_Teachers_DegreeId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Teachers_DegreeId" ON public."Teachers" USING btree ("DegreeId");


--
-- Name: IX_Teachers_DepartamentId; Type: INDEX; Schema: public; Owner: nubip
--

CREATE INDEX "IX_Teachers_DepartamentId" ON public."Teachers" USING btree ("DepartamentId");


--
-- Name: Auditoriums FK_Auditoriums_AuditoriumTypes_AuditoriumTypeId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Auditoriums"
    ADD CONSTRAINT "FK_Auditoriums_AuditoriumTypes_AuditoriumTypeId" FOREIGN KEY ("AuditoriumTypeId") REFERENCES public."AuditoriumTypes"("AuditoriumTypeId") ON DELETE CASCADE;


--
-- Name: Auditoriums FK_Auditoriums_Buildings_BuildingId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Auditoriums"
    ADD CONSTRAINT "FK_Auditoriums_Buildings_BuildingId" FOREIGN KEY ("BuildingId") REFERENCES public."Buildings"("BuildingId") ON DELETE CASCADE;


--
-- Name: Curriculums FK_Curriculums_Departaments_DepartamentId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Curriculums"
    ADD CONSTRAINT "FK_Curriculums_Departaments_DepartamentId" FOREIGN KEY ("DepartamentId") REFERENCES public."Departaments"("DepartamentId") ON DELETE CASCADE;


--
-- Name: Curriculums FK_Curriculums_Specialitys_SpecialityId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Curriculums"
    ADD CONSTRAINT "FK_Curriculums_Specialitys_SpecialityId" FOREIGN KEY ("SpecialityId") REFERENCES public."Specialitys"("SpecialityId") ON DELETE RESTRICT;


--
-- Name: Curriculums FK_Curriculums_Subjects_SubjectId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Curriculums"
    ADD CONSTRAINT "FK_Curriculums_Subjects_SubjectId" FOREIGN KEY ("SubjectId") REFERENCES public."Subjects"("SubjectId") ON DELETE CASCADE;


--
-- Name: Facultys FK_Facultys_Buildings_BuildingId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Facultys"
    ADD CONSTRAINT "FK_Facultys_Buildings_BuildingId" FOREIGN KEY ("BuildingId") REFERENCES public."Buildings"("BuildingId") ON DELETE CASCADE;


--
-- Name: Groups FK_Groups_EducationForms_EducationFormId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Groups"
    ADD CONSTRAINT "FK_Groups_EducationForms_EducationFormId" FOREIGN KEY ("EducationFormId") REFERENCES public."EducationForms"("EducationFormId") ON DELETE CASCADE;


--
-- Name: Groups FK_Groups_EducationLevels_EducationLevelId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Groups"
    ADD CONSTRAINT "FK_Groups_EducationLevels_EducationLevelId" FOREIGN KEY ("EducationLevelId") REFERENCES public."EducationLevels"("EducationLevelId") ON DELETE CASCADE;


--
-- Name: Groups FK_Groups_Specialitys_SpecialityId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Groups"
    ADD CONSTRAINT "FK_Groups_Specialitys_SpecialityId" FOREIGN KEY ("SpecialityId") REFERENCES public."Specialitys"("SpecialityId") ON DELETE CASCADE;


--
-- Name: Groups FK_Groups_Teachers_TeacherId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Groups"
    ADD CONSTRAINT "FK_Groups_Teachers_TeacherId" FOREIGN KEY ("TeacherId") REFERENCES public."Teachers"("TeacherId") ON DELETE CASCADE;


--
-- Name: Lessons FK_Lessons_Auditoriums_AuditoriumId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Lessons"
    ADD CONSTRAINT "FK_Lessons_Auditoriums_AuditoriumId" FOREIGN KEY ("AuditoriumId") REFERENCES public."Auditoriums"("AuditoriumId") ON DELETE CASCADE;


--
-- Name: Lessons FK_Lessons_Curriculums_CurriculumId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Lessons"
    ADD CONSTRAINT "FK_Lessons_Curriculums_CurriculumId" FOREIGN KEY ("CurriculumId") REFERENCES public."Curriculums"("CurriculumId") ON DELETE CASCADE;


--
-- Name: Lessons FK_Lessons_Groups_GroupId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Lessons"
    ADD CONSTRAINT "FK_Lessons_Groups_GroupId" FOREIGN KEY ("GroupId") REFERENCES public."Groups"("GroupId") ON DELETE CASCADE;


--
-- Name: Lessons FK_Lessons_Teachers_TeacherId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Lessons"
    ADD CONSTRAINT "FK_Lessons_Teachers_TeacherId" FOREIGN KEY ("TeacherId") REFERENCES public."Teachers"("TeacherId") ON DELETE CASCADE;


--
-- Name: Lessons FK_Lessons_Times_TimeId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Lessons"
    ADD CONSTRAINT "FK_Lessons_Times_TimeId" FOREIGN KEY ("TimeId") REFERENCES public."Times"("TimeId") ON DELETE CASCADE;


--
-- Name: Requests FK_Requests_Lessons_LessonId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Requests"
    ADD CONSTRAINT "FK_Requests_Lessons_LessonId" FOREIGN KEY ("LessonId") REFERENCES public."Lessons"("LessonId") ON DELETE CASCADE;


--
-- Name: Requests FK_Requests_Times_TimeId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Requests"
    ADD CONSTRAINT "FK_Requests_Times_TimeId" FOREIGN KEY ("TimeId") REFERENCES public."Times"("TimeId") ON DELETE CASCADE;


--
-- Name: Specialitys FK_Specialitys_Facultys_FacultyId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Specialitys"
    ADD CONSTRAINT "FK_Specialitys_Facultys_FacultyId" FOREIGN KEY ("FacultyId") REFERENCES public."Facultys"("FacultyId") ON DELETE CASCADE;


--
-- Name: Subjects FK_Subjects_SubjectTypes_SubjectTypeId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Subjects"
    ADD CONSTRAINT "FK_Subjects_SubjectTypes_SubjectTypeId" FOREIGN KEY ("SubjectTypeId") REFERENCES public."SubjectTypes"("SubjectTypeId") ON DELETE CASCADE;


--
-- Name: Teachers FK_Teachers_Academics_AcademicId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Teachers"
    ADD CONSTRAINT "FK_Teachers_Academics_AcademicId" FOREIGN KEY ("AcademicId") REFERENCES public."Academics"("AcademicId") ON DELETE CASCADE;


--
-- Name: Teachers FK_Teachers_Degrees_DegreeId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Teachers"
    ADD CONSTRAINT "FK_Teachers_Degrees_DegreeId" FOREIGN KEY ("DegreeId") REFERENCES public."Degrees"("DegreeId") ON DELETE CASCADE;


--
-- Name: Teachers FK_Teachers_Departaments_DepartamentId; Type: FK CONSTRAINT; Schema: public; Owner: nubip
--

ALTER TABLE ONLY public."Teachers"
    ADD CONSTRAINT "FK_Teachers_Departaments_DepartamentId" FOREIGN KEY ("DepartamentId") REFERENCES public."Departaments"("DepartamentId") ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

