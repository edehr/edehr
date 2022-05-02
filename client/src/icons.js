
/*
Import font awesome icons
*/
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleLeft,
  faAngleDown,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
  faBookOpen,
  faChevronDown,
  faChevronUp,
  faChalkboardTeacher,
  faCheckCircle,
  faCircle,
  faClock,
  faDiceD20,
  faDownload,
  faEdit,
  faFilePdf,
  faGraduationCap,
  faHammer,
  faHandHoldingMedical,
  faHeartbeat,
  faHospital,
  faHourglassEnd,
  faHourglassStart,
  faInfoCircle,
  faMedkit,
  faMinus,
  faNotesMedical,
  faPlus,
  faPrescription,
  faPen,
  faStethoscope,
  faStickyNote,
  faTimes,
  faTimesCircle,
  faTrash,
  faUpload,
  faUserClock,
  faUserInjured,
  faUndo,
  faBars
} from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default function (Vue) {
  library.add(
    faAngleLeft,
    faAngleDown,
    faAngleRight,
    faArrowLeft,
    faArrowRight,
    faBookOpen,
    faChevronDown,
    faChevronUp,
    faChalkboardTeacher,
    faCheckCircle,
    faCircle,
    faClock,
    faDiceD20,
    faDownload,
    faEdit,
    faFilePdf,
    faGraduationCap,
    faHammer,
    faHandHoldingMedical,
    faHeartbeat,
    faHospital,
    faHourglassEnd,
    faHourglassStart,
    faInfoCircle,
    faMedkit,
    faMinus,
    faNotesMedical,
    faPlus,
    faPrescription,
    faPen,
    faStethoscope,
    faStickyNote,
    faTimes,
    faTimesCircle,
    faTrash,
    faUpload,
    faUserClock,
    faUserInjured,
    faBars,
    faUndo
  )
  library.add(
    faFontAwesome,
    faCanadianMapleLeaf
  )
  // IN CODE sample usage is:
  // fas-icon(class="fa", icon="graduation-cap")
  Vue.component('fas-icon', FontAwesomeIcon)
}