import PP from '../../inside/defs-grid/patient-profile'
import CV1 from '../../inside/defs-grid/current-visit-1'
import CV2 from '../../inside/defs-grid/current-visit-2'
import CV3 from '../../inside/defs-grid/current-visit-3'
import PC from '../../inside/defs-grid/patient-chart'
import ER from '../../inside/defs-grid/external-resources'
import TP from '../../inside/defs-grid/test-page'

export default Object.assign({},
  PP(),
  CV1(),
  CV2(),
  CV3(),
  PC(),
  ER(),
  TP()
)