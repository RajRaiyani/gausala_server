-- migrate:up

alter table "donation" add column "isPaid" boolean not null default false;

-- migrate:down

alter table "donation" drop column "isPaid";

