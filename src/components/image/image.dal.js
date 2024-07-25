exports.create = async (dbClient, data) => {
  const { gausalaId, image, description } = data;

  const sqlQuery = `
      INSERT INTO "image"
        ("gausalaId", "image", "description")
      VALUES
        ($1, $2, $3)
      RETURNING *;
    `;

  const values = [gausalaId, image, description];

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

exports.update = async (dbClient, gausalaId, id, timeStamp, data) => {
  const { image, description } = data;

  const sqlQuery = `
      UPDATE "image"
      SET
        "image" = $1,
        "description" = $2,
        "updatedAt" = $3
      WHERE
        "id" = $4 AND
        "gausalaId" = $5;
    `;

  const values = [image, description, timeStamp, id, gausalaId];

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
