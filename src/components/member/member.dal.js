exports.create = async (dbClient, gausalaId, data) => {
  const { name, phoneNumber, birthDate, address } = data;

  const sqlQuery = `
    INSERT INTO "member"
      ("gausalaId", "name", "phoneNumber", "birthDate", "address")
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [gausalaId, name, phoneNumber, birthDate, address];

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
      "address" as "address",
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
  const { name, phoneNumber, birthDate, address } = data;

  const sqlQuery = `
    UPDATE
      "member"
    SET
      "name" = $1,
      "phoneNumber" = $2,
      "birthDate" = $3,
      "address" = $4
    WHERE
      "gausalaId" = $5 AND
      "id" = $6;
  `;

  const values = [name, phoneNumber, birthDate, address, gausalaId, id];

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
