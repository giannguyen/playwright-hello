import oracledb from "oracledb";

async function executeQuery(query: string, params: any[] = []) {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: "your_username",
      password: "your_password",
      connectString: "your_connect_string",
    });

    const result = await connection.execute(query, params, {
      autoCommit: true,
    });
    return result;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection:", err);
      }
    }
  }
}

export async function queryDatabase(query: string, params: any[] = []) {
  return executeQuery(query, params);
}

// const insertQuery = 'INSERT INTO your_table (column1, column2) VALUES (:value1, :value2)';
// const params = ['value1', 'value2'];
// const result = await insertIntoDatabase(insertQuery, params);
export async function insertIntoDatabase(query: string, params: any[] = []) {
  return executeQuery(query, params);
}

export async function updateDatabase(query: string, params: any[] = []) {
  return executeQuery(query, params);
}

export async function deleteFromDatabase(query: string, params: any[] = []) {
  return executeQuery(query, params);
}
