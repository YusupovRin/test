import Toast from './../../Toast';

import createEntityService from './CreateEntity.Service';

const createEntityController = async (
  setStatusMountCreateEntity,
  setStatusMountLoader,
  { bdate, bdatetime, param1, param2, param3 }
) => {
  const tempBDate = bdate;
  const tempBDateTime = `${bdate} ${bdatetime}`;
  const tempParam1 = param1;
  const tempParam2 = param2;
  const tempParam3 = param3;

  setStatusMountLoader(true);

  if (!tempParam1.length || !Number.isFinite(Number(tempParam1))) {
    new Toast({
      title: 'Ошибка',
      text: 'Param1 должен быть числом!',
      theme: 'danger',
      autohide: true,
      interval: 5000,
    });

    setStatusMountLoader(false);
    return;
  }

  if (!tempParam2.length || !Number.isFinite(Number(tempParam2))) {
    new Toast({
      title: 'Ошибка',
      text: 'Param2 должен быть числом!',
      theme: 'danger',
      autohide: true,
      interval: 5000,
    });

    setStatusMountLoader(false);
    return;
  }

  if (tempParam3.length < 1 || tempParam3.length > 30) {
    new Toast({
      title: 'Ошибка',
      text: 'Строка с Param3 от 1 до 30 символов (включительно).',
      theme: 'danger',
      autohide: true,
      interval: 5000,
    });

    setStatusMountLoader(false);
    return;
  }

  new Toast({
    title: 'Создание аккаунта',
    text: 'На сервер был отправлен запрос на создание сущности, ждите...',
    theme: 'light',
    autohide: true,
    interval: 1000,
  });

  const { ok, status, responseFetch } = await createEntityService(
    tempBDate,
    tempBDateTime,
    tempParam1,
    tempParam2,
    tempParam3
  );

  if (!ok && status === 400) {
    new Toast({
      title: 'Ошибка при создании сущности',
      text: responseFetch,
      theme: 'danger',
      autohide: true,
      interval: 3000,
    });
    return;
  }

  new Toast({
    title: 'Вас ждет успех!',
    text: `${responseFetch}`,
    theme: 'success',
    autohide: true,
    interval: 3000,
  });

  setStatusMountLoader(false);
  setStatusMountCreateEntity(false);
};

export default createEntityController;
