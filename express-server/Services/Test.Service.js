class TestService {
  async createRowTest(bdate, bdatetime, param1, param2, param3) {
    try {
      const [createRow] = await global.connectMySQL.execute(
        'INSERT INTO test (bdate, bdatetime, param1, param2, param3) VALUES (?, ?, ?, ?, ?)',
        [bdate, bdatetime, param1, param2, param3]
      );

      if (createRow[`affectedRows`]) return true;
      else return false;
    } catch (err) {
      return false;
    }
  }

  async readRowsTest() {
    const [readRows] = await global.connectMySQL.execute(`SELECT * FROM test`);

    return readRows;
  }

  async readRowTest(id) {
    const [readRows] = await global.connectMySQL.execute(
      `SELECT * FROM test WHERE id = ${id}`
    );

    return readRows[0];
  }

  async updateRowTest(id, bdate, bdatetime, param1, param2, param3) {
    const [updateRow] = await global.connectMySQL.execute(
      `UPDATE test SET bdate = '${bdate}', bdatetime = '${bdatetime}', param1 = '${param1}', param2 = '${param2}', param3 = '${param3}' WHERE id = ${id}`
    );

    if (updateRow[`affectedRows`]) return true;
    else return false;
  }

  async deleteRowTest(id) {
    let [deleteRow] = await global.connectMySQL.execute(
      `DELETE FROM test WHERE id = ${id}`
    );

    if (deleteRow[`affectedRows`]) return true;
    else return false;
  }
}

module.exports = new TestService();
