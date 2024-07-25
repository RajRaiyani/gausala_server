exports.create = async (dbClient, gausalaId, data) => {
  const { name, phoneNumber, birthDate } = data;

  const sqlQuery = `
    INSERT INTO "member"
      ("gausalaId", "name", "phoneNumber", "birthDate")
    VALUES
      ($1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [gausalaId, name, phoneNumber, birthDate];

  const result = await dbClient.query(sqlQuery, values);

  return result.rows[0];
};

exports.findAll = async (dbClient, gausalaId) => {
  const sqlQuery = `
    SELECT
      "id",
      "name" as "name",
      "phoneNumber" as "phoneNumber",
      "birthDate" as "birthDate",
      "createdAt" as "CreatedAt"
    FROM
      "member"
    WHERE
      "gausalaId" = $1;
  `;

  const values = [gausalaId];

  const result = await dbClient.query(sqlQuery, values);

  return result.rows;
};

exports.update = async (dbClient, gausalaId, id, data) => {
  const { name, phoneNumber, birthDate } = data;

  const sqlQuery = `
    UPDATE
      "member"
    SET
      "name" = $1,
      "phoneNumber" = $2,
      "birthDate" = $3
    WHERE
      "gausalaId" = $4 AND
      "id" = $5;
  `;

  const values = [name, phoneNumber, birthDate, gausalaId, id];

  const result = await dbClient.query(sqlQuery, values);

  return result.rows[0];
};

exports.delete = async (dbClient, gausalaId, id) => {
  const sqlQuery = `
    DELETE FROM
      "member"
    WHERE
      "gausalaId" = $1 AND
      "id" = $2;
  `;

  const values = [gausalaId, id];

  await dbClient.query(sqlQuery, values);
};
