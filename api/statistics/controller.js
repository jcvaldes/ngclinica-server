import db from '../../models'
import { Sequelize, sequelize } from '../../models'
import Parametrizer from '../../utils/parametrizer'
import RESPONSES from '../../utils/responses'
import _ from 'lodash'

class StatisticsController {
  static Fetch(req, res) {
    const { Op } = Sequelize
    db.Appointment.findAndCountAll({
      attributes: ['Category.id', [sequelize.fn('count', sequelize.col('Category.id')), 'cnt']],
      include: [{
        model: db.Category
      }],
      group: ['CategoryId', 'Category.id'],
    })
      .then(data => {
        res.status(200).json(data.rows)
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: RESPONSES.DB_CONNECTION_ERROR.message, err })
      })
  }

}
export default StatisticsController
