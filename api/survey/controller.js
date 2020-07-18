import db from '../../models'
import { Sequelize } from '../../models'
import Parametrizer from '../../utils/parametrizer'
import RESPONSES from '../../utils/responses'
import _ from 'lodash'

class SurveyController {

  static Update(req, res) {
    const survey = JSON.stringify(req.body)
    const id = +req.params.id

    db.Appointment.update(
      { survey },
      {
        where: {
          id,
        },
      },
    )
      .then((result) => {
        if (result[0] === 0) {
          return res.status(404).json({
            ok: false,
            err: RESPONSES.RECORD_NOT_FOUND_ERROR.message,
          })
        }
        res.status(201).json({
          ok: true,
          description: RESPONSES.RECORD_UPDATED_SUCCESS.message,
        })
      })
      .catch((err) =>
        res
          .status(400)
          .json({ message: RESPONSES.DB_CONNECTION_ERROR.message }),
      )
  }
}

export default SurveyController
