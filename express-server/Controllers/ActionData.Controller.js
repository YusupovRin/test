const { validationResult } = require(`express-validator`);

const actionDataService = require(`../Services/ActionData.Service`);

class ActionDataController {
  getData(req, res) {
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

    const { table_name, date_from, date_to } = req.body;

    console.log(table_name, JSON.stringify(date_from), JSON.stringify(date_to));

    res.status(200).json(`ok`);

    // actionDataService.getData();
  }
}

module.exports = new ActionDataController();
