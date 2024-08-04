exports.create = async (dbClient, gausalaId, url) => {
  const sqlQuery = `
      INSERT INTO "image"
        ("gausalaId", "url")
      VALUES
        ($1, $2)
      RETURNING *;
    `;

  const values = [gausalaId, url];

  const result = await dbClient.query(sqlQuery, values);

  return result.rows[0];
};

exports.findAll = async (dbClient, gausalaId) => {
  const sqlQuery = `
      SELECT *
      FROM "image"
      WHERE
        "gausalaId" = $1;
    `;

  const values = [gausalaId];

  const result = await dbClient.query(sqlQuery, values);

  return result.rows;
};

exports.findById = async (dbClient, gausalaId, id) => {
  const sqlQuery = `
      SELECT *
      FROM "image"
      WHERE
        "id" = $1 AND
        "gausalaId" = $2;
    `;

  const values = [id, gausalaId];

  const result = await dbClient.query(sqlQuery, values);

  return result.rows[0];
};

exports.update = async (dbClient, gausalaId, id, url) => {
  const sqlQuery = `
      UPDATE "image"
      SET
        "url" = $1
      WHERE
        "id" = $2 AND
        "gausalaId" = $3
      RETURNING *;
    `;

  const values = [url, id, gausalaId];

  const result = await dbClient.query(sqlQuery, values);

  return result.rows[0];
};

exports.delete = async (dbClient, gausalaId, id) => {
  const sqlQuery = `
      DELETE FROM "image"
      WHERE
        "id" = $1 AND
        "gausalaId" = $2;
    `;

  const values = [id, gausalaId];

  const result = await dbClient.query(sqlQuery, values);

  return result.rows[0];
};
