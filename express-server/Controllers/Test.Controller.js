const { validationResult } = require(`express-validator`);
const testService = require(`../Services/Test.Service`);

class TestController {
  async createRowTest(req, res) {
    const errors = validationResult(req);

    let errMessages = ``;

    if (!errors.isEmpty()) {
      for (let i = 0; i < errors.errors.length; i++) {
        errMessages += `${errors.errors[i].msg} | `;
      }

      return res.status(400).json({
        error: true,
        message: `Ошибка при создании записи. Подробная информация: ${errMessages}`,
      }); // Возвращаем на клиент статус 400 и строку с ошибками валидации данных
    }

    const { bdate, bdatetime, param1, param2, param3 } = req.body;

    const result = await testService.createRowTest(
      bdate,
      bdatetime,
      param1,
      param2,
      param3
    );

    if (result) res.status(200).json(`Запись создана успешно`);
    else
      res.status(400).json({
        error: true,
        message: `Создать запись не получилось`,
      });
  }

  async readRowsTest(req, res) {
    const result = await testService.readRowsTest();

    res.status(200).json(result);
  }

  async readRowTest(req, res) {
    const id = req.params.id;

    const result = await testService.readRowTest(id);

    if (result === undefined)
      res.status(400).json({
        error: true,
        message: `Записи с ID "${id}" не существует`,
      });
    else res.status(200).json(result);
  }

  async updateRowTest(req, res) {
    const errors = validationResult(req);

    let errMessages = ``;

    if (!errors.isEmpty()) {
      for (let i = 0; i < errors.errors.length; i++) {
        errMessages += `${errors.errors[i].msg} | `;
      }

      return res.status(400).json({
        error: true,
        message: `Ошибка при измении записи. Подробная информация: ${errMessages}`,
      }); // Возвращаем на клиент статус 400 и строку с ошибками валидации данных
    }

    const { id, bdate, bdatetime, param1, param2, param3 } = req.body;

    const result = await testService.updateRowTest(
      id,
      bdate,
      bdatetime,
      param1,
      param2,
      param3
    );

    if (result) res.status(200).json(`Запись с ID: "${id}" обновилась`);
    else res.status(400).json(`Обновить запись с ID "${id}" не получилось`);
  }

  async deleteRowTest(req, res) {
    const id = req.params.id;

    try {
      const result = await testService.deleteRowTest(id);

      if (result) res.status(200).json(`Запись с ID "${id}" успешно удалена`);
      else
        res.status(400).json({
          error: true,
          message: `Запись с ID "${id}" удалить не получилось. Проверьте правильно ли указан ID`,
        });
    } catch (err) {
      if (
        err.sqlMessage.indexOf(`Cannot delete or update a parent row`) !== -1
      ) {
        res.status(400).json({
          error: true,
          message: `Запись с ID "${id}" удалить не получилось. Она является родительской. Оригинальное сообщение: "${err.sqlMessage}"`,
        });
      }
    }
  }
}

module.exports = new TestController();
