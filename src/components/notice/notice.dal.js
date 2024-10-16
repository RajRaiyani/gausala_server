exports.create = async (dbClient, data) => {
  const { title, description, date } = data;
  const query = `
    INSERT INTO "notice" ("title", "description", "date")
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [title, description, date];
  const { rows } = await dbClient.query(query, values);
  return rows[0];
};

exports.read = async (dbClient) => {
  const query = `
    SELECT * FROM "notice";
  `;
  const { rows } = await dbClient.query(query);
  return rows[0];
};

exports.update = async (dbClient, id, data) => {
  const { title, description, date } = data;
  const query = `
    UPDATE "notice"
    SET "title" = $1, "description" = $2, "date" = $3
    WHERE "id" = $4
    RETURNING *;
  `;
  const values = [title, description, date, id];
  const { rows } = await dbClient.query(query, values);
  return rows[0];
};

exports.delete = async (dbClient, id) => {
  const query = `
    DELETE FROM "notice"
    WHERE "id" = $1;
  `;
  const values = [id];
  await dbClient.query(query, values);
};
