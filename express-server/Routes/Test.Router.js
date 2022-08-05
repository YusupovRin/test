const Router = require(`express`);
const { check } = require(`express-validator`);

const testController = require(`../Controllers/Test.Controller`);

const router = new Router();

router.post(
  `/test/create`,
  [
    check(`bdate`, `Дата 10 символов (2022-08-05)`).isLength({
      min: 10,
      max: 10,
    }),

    check(`bdatetime`, `Дата-Время 19 символов (2022-08-05 11:03:11)`).isLength(
      {
        min: 19,
        max: 19,
      }
    ),

    check(`param1`, `Третье это число!`).isFloat(),

    check(`param2`, `Четвертое это число!`).isInt(),

    check(
      `param3`,
      `Пятое значение от 1 до 30 символов включительно!`
    ).isLength({
      min: 1,
      max: 30,
    }),
  ],
  testController.createRowTest
);

router.get(`/tests/read`, testController.readRowsTest);

router.get(`/test/read/:id`, testController.readRowTest);

router.put(
  `/test/update`,
  [
    check(`bdate`, `Дата 10 символов (2022-08-05)`).isLength({
      min: 10,
      max: 10,
    }),

    check(`bdatetime`, `Дата-Время 19 символов (2022-08-05 11:03:11)`).isLength(
      {
        min: 19,
        max: 19,
      }
    ),

    check(`param1`, `Третье это число!`).isFloat(),

    check(`param2`, `Четвертое это число!`).isInt(),

    check(
      `param3`,
      `Пятое значение от 1 до 30 символов включительно!`
    ).isLength({
      min: 1,
      max: 30,
    }),
  ],
  testController.updateRowTest
);

router.delete(`/test/delete/:id`, testController.deleteRowTest);

module.exports = router;
