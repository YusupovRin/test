const Router = require(`express`);

const { check } = require(`express-validator`);

const actionDataController = require(`../Controllers/ActionData.Controller`);

const router = new Router();

router.post(
  `/action-data/get-table`,
  [
    check(
      `table_name`,
      `Название таблицы от 1 до 50 символов (включительно)`
    ).isLength({
      min: 1,
      max: 50,
    }),

    check('date_from', `Дата-время начала должно быть правильным значением!`)
      .isISO8601()
      .toDate(),

    check('date_to', `Дата-время окончания должно быть правильным значением!`)
      .isISO8601()
      .toDate(),
  ],
  actionDataController.getData
);

module.exports = router;
