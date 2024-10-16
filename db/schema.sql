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

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

-- *not* creating schema, since initdb creates it


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: booking; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.booking (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "gausalaId" uuid NOT NULL,
    name character varying(100) NOT NULL,
    "phoneNumber" character varying(20) NOT NULL,
    date timestamp without time zone,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: donation; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.donation (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "gausalaId" uuid NOT NULL,
    name character varying(255),
    "phoneNumber" character varying(20),
    amount integer DEFAULT 0,
    date timestamp without time zone,
    address character varying(500),
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: gausala; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.gausala (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(500),
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: image; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.image (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "gausalaId" uuid NOT NULL,
    url character varying(2000),
    description character varying(500),
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: member; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.member (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "gausalaId" uuid NOT NULL,
    name character varying(255),
    "birthDate" timestamp without time zone,
    "phoneNumber" character varying(20),
    address character varying(500),
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: notice; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.notice (
    id uuid DEFAULT gen_random_uuid(),
    title character varying(255) NOT NULL,
    description text NOT NULL,
    date timestamp without time zone NOT NULL
);


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying(128) NOT NULL
);


--
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."user" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "gausalaId" uuid NOT NULL,
    name character varying(255),
    "phoneNumber" character varying(20) NOT NULL,
    password character varying(500) NOT NULL,
    description character varying(500),
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: gausala gausala_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gausala
    ADD CONSTRAINT gausala_name_key UNIQUE (name);


--
-- Name: booking pk_booking; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.booking
    ADD CONSTRAINT pk_booking PRIMARY KEY (id);


--
-- Name: donation pk_donation; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.donation
    ADD CONSTRAINT pk_donation PRIMARY KEY (id);


--
-- Name: gausala pk_gausala; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gausala
    ADD CONSTRAINT pk_gausala PRIMARY KEY (id);


--
-- Name: image pk_image; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.image
    ADD CONSTRAINT pk_image PRIMARY KEY (id);


--
-- Name: member pk_member; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT pk_member PRIMARY KEY (id);


--
-- Name: user pk_user; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT pk_user PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: user user_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_name_key UNIQUE (name);


--
-- Name: user user_phoneNumber_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "user_phoneNumber_key" UNIQUE ("phoneNumber");


--
-- Name: booking fk_booking_gausalaId; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.booking
    ADD CONSTRAINT "fk_booking_gausalaId" FOREIGN KEY ("gausalaId") REFERENCES public.gausala(id);


--
-- Name: donation fk_donation_gausalaId; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.donation
    ADD CONSTRAINT "fk_donation_gausalaId" FOREIGN KEY ("gausalaId") REFERENCES public.gausala(id);


--
-- Name: image fk_image_gausalaId; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.image
    ADD CONSTRAINT "fk_image_gausalaId" FOREIGN KEY ("gausalaId") REFERENCES public.gausala(id);


--
-- Name: member fk_member_gausalaId; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT "fk_member_gausalaId" FOREIGN KEY ("gausalaId") REFERENCES public.gausala(id);


--
-- Name: user fk_user_gausalaId; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "fk_user_gausalaId" FOREIGN KEY ("gausalaId") REFERENCES public.gausala(id);


--
-- PostgreSQL database dump complete
--


--
-- Dbmate schema migrations
--

INSERT INTO public.schema_migrations (version) VALUES
    ('20240723163245'),
    ('20241016165128');
