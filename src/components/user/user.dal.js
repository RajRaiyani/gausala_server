exports.findUserByPhoneNumber = async (dbClient, phoneNumber) => {
  const sqlQuery = `
    SELECT *
    FROM "user"
    WHERE
      "phoneNumber" = $1;
  `;
  const values = [phoneNumber];
  const result = await dbClient.query(sqlQuery, values);
  return result.rows[0];
};
