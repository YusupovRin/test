// __________________________________________________ ИМПОРТЫ
const express = require(`express`);
const mysql = require(`mysql2/promise`);
const cors = require(`cors`);

const {
  SERVER_START_ON_PORT,
  SERVER_MYSQL_SETTINGS,
} = require(`./ServerConfig.json`);

const testRouter = require(`./Routes/Test.Router`);

// __________________________________________________ ОБЪЕКТЫ
const app = express();

// __________________________________________________ ЗАПУСК СЕРВЕРА
const startThisApp = async () => {
  try {
    global.connectMySQL = await mysql.createPool(SERVER_MYSQL_SETTINGS);

    app.listen(SERVER_START_ON_PORT, () => {
      console.log(
        `Приложение Express JS запущено на порту "${SERVER_START_ON_PORT}"!`
      );
    });
  } catch (err) {
    console.log(
      `________________________________________________________________________________________________________________________`
    );
    console.log(`Конфиг подключения к СуБД MySQL:`);
    console.log(SERVER_MYSQL_SETTINGS);
    console.log(`Информация о ошибке:`);
    console.log(err);
    console.log(
      `________________________________________________________________________________________________________________________`
    );
  }
};

startThisApp();

// __________________________________________________ НАСТРОЙКА
app.use(cors());
app.use(express.json());

// __________________________________________________ РОУТИНГ API
app.use(`/api`, testRouter); // Автомобильные базы
