const { validationResult } = require(`express-validator`);

const actionDataService = require(`../Services/ActionData.Service`);

class ActionDataController {
  getData(req, res) {
    actionDataService.getData();
  }
}

module.exports = new ActionDataController();
