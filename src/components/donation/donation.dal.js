exports.create = async (dbClient, gausalaId, data) => {
  const { name, phoneNumber, amount, date, address, isPaid } = data;

  const sqlQuery = `
    INSERT INTO "donation"
      ("gausalaId", "name", "phoneNumber", "amount", "date", "address", "isPaid")
    VALUES
      ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;

  const values = [gausalaId, name, phoneNumber, amount, date, address, isPaid];
  const result = await dbClient.query(sqlQuery, values);
  return result.rows[0];
};

exports.findAll = async (dbClient, gausalaId) => {
  const sqlQuery = `
    SELECT
      "id",
      "name" as "name",
      "phoneNumber" as "phoneNumber",
      "amount" as "amount",
      "date" as "date",
      "address" as "address",
      "createdAt" as "CreatedAt",
      "isPaid" as "isPaid"
    FROM
      "donation"
    WHERE
      "gausalaId" = $1;
  `;

  const values = [gausalaId];
  const result = await dbClient.query(sqlQuery, values);
  return result.rows;
};

exports.update = async (dbClient, gausalaId, id, data) => {
  const { name, phoneNumber, amount, date, address, isPaid } = data;

  const sqlQuery = `
    UPDATE
      "donation"
    SET
      "name" = $1,
      "phoneNumber" = $2,
      "amount" = $3,
      "date" = $4,
      "address" = $5,
      "hasPaid" = $8
    WHERE
      "gausalaId" = $6 AND
      "id" = $7;
  `;

  const values = [
    name,
    phoneNumber,
    amount,
    date,
    address,
    gausalaId,
    id,
    isPaid,
  ];
  const result = await dbClient.query(sqlQuery, values);
  return result.rows[0];
};

exports.delete = async (dbClient, gausalaId, id) => {
  const sqlQuery = `
    DELETE FROM "donation"
    WHERE
      "id" = $1 AND
      "gausalaId" = $2;
  `;

  const values = [id, gausalaId];
  await dbClient.query(sqlQuery, values);
};
