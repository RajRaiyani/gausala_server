exports.create = async (dbClient, gausalaId, data) => {
  const { name, phoneNumber, date } = data;

  const sqlQuery = `
    INSERT INTO "booking"
      ("gausalaId", "name", "phoneNumber", "date")
    VALUES
      ($1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [gausalaId, name, phoneNumber, date];

  const result = await dbClient.query(sqlQuery, values);

  return result.rows[0];
};

exports.findAll = async (dbClient, gausalaId) => {
  const sqlQuery = `
    SELECT
      "id",
      "name" as "name",
      "phoneNumber" as "phoneNumber",
      "date" as "date",
      "createdAt" as "CreatedAt"
    FROM
      "booking"
    WHERE
      "gausalaId" = $1;
  `;

  const values = [gausalaId];

  const result = await dbClient.query(sqlQuery, values);

  return result.rows;
};

exports.update = async (dbClient, gausalaId, id, data) => {
  const { name, phoneNumber, date } = data;

  const sqlQuery = `
    UPDATE
      "booking"
    SET
      "name" = $1,
      "phoneNumber" = $2,
      "date" = $3
    WHERE
      "gausalaId" = $4 AND
      "id" = $5;
  `;

  const values = [name, phoneNumber, date, gausalaId, id];

  const result = await dbClient.query(sqlQuery, values);

  return result.rows[0];
};

exports.delete = async (dbClient, gausalaId, id) => {
  const sqlQuery = `
    DELETE FROM
      "booking"
    WHERE
      "gausalaId" = $1 AND
      "id" = $2;
  `;

  const values = [gausalaId, id];

  const result = await dbClient.query(sqlQuery, values);

  return result.rows[0];
};
