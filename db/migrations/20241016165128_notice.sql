-- migrate:up

create table notice (
  "id" UUID DEFAULT GEN_RANDOM_UUID(),
    "title" varchar(255) not null,
    "description" text not null,
    "date" timestamp not null
);
-- migrate:down


drop table notice;
