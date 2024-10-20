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

exports.read = async (dbClient, date) => {
  let where = '';
  let values = [];
  if (date) {
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);
    where = 'WHERE "date" >= $1 AND "date" <= $2';
    values = [startDate, endDate];
  }

  const query = `
    SELECT * FROM "notice"
    ${where};
  `;
  const { rows } = await dbClient.query(query, values);
  return rows;
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
