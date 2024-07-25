-- migrate:up
create table if not exists "gausala"(
	"id" UUID DEFAULT GEN_RANDOM_UUID(),
	"name" varchar(255) unique not null,
	"address" varchar(500),
	"createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "pk_gausala" PRIMARY KEY ("id")
);

create table if not exists "user"(
	"id" UUID DEFAULT GEN_RANDOM_UUID(),
	"gausalaId" UUID not null,
	"name" varchar(255) unique,
	"phoneNumber" varchar(20) unique not null,
	"password" VARCHAR(500) NOT NULL,
	"description" varchar(500),
	"createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "pk_user" PRIMARY KEY ("id"),
	CONSTRAINT "fk_user_gausalaId" FOREIGN KEY ("gausalaId") REFERENCES "gausala" ("id")
);

create table if not exists "booking"(
	"id" UUID DEFAULT GEN_RANDOM_UUID(),
	"gausalaId" UUID not null,
	"name" varchar(100) not null,
	"phoneNumber" varchar(20) not null,
	"date" TIMESTAMP WITHOUT TIME ZONE,
	"createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "pk_booking" PRIMARY KEY ("id"),
	CONSTRAINT "fk_booking_gausalaId" FOREIGN KEY ("gausalaId") REFERENCES "gausala" ("id")
);


create table if not exists "image"(
	"id" UUID DEFAULT GEN_RANDOM_UUID(),
	"gausalaId" UUID not null,
	"url" varchar(2000),
	"description" varchar(500),
	"createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "pk_image" PRIMARY KEY ("id"),
	CONSTRAINT "fk_image_gausalaId" FOREIGN KEY ("gausalaId") REFERENCES "gausala" ("id")
);



create table if not exists "member"(
	"id" UUID DEFAULT GEN_RANDOM_UUID(),
	"gausalaId" UUID not null,
	"name" varchar(255),
	"birthDate" TIMESTAMP WITHOUT TIME zone,
	"phoneNumber" varchar(20),
	"address" varchar(500),
	"createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "pk_member" PRIMARY KEY ("id"),
	CONSTRAINT "fk_member_gausalaId" FOREIGN KEY ("gausalaId") REFERENCES "gausala" ("id")
);

create table if not exists "donation"(
	"id" UUID DEFAULT GEN_RANDOM_UUID(),
	"gausalaId" UUID not null,
	"name" varchar(255),
	"phoneNumber" varchar(20),
	"amount" integer default 0,
	"date" TIMESTAMP WITHOUT TIME zone,
	"address" varchar(500),
	"createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "pk_donation" PRIMARY KEY ("id"),
	CONSTRAINT "fk_donation_gausalaId" FOREIGN KEY ("gausalaId") REFERENCES "gausala" ("id")
);




-- migrate:down

drop table if exists "donation";
drop table if exists "member";
drop table if exists "booking";
drop table if exists "image";
drop table if exists "user";
drop table if exists "gausala";
