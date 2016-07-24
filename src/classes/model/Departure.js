/**
 * Created by moh on 7/24/16.
 */

import Wassy from 'wassy'
import Config from 'config'

export default Wassy.Model.extends({

  config: {
    baseUrl: Config.API_HOST,
    url: '/stations/{id}/schedules',

    statusCode: {

      500: function (resp) {
        console.log(resp)
      }
    }
  }

})
