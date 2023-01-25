
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
  faBell,
  faBookOpen,
  faChevronDown,
  faChevronUp,
  faChalkboardTeacher,
  faCheck,
  faCheckCircle,
  faCircle,
  faClock,
  faCog,
  faCogs,
  faCopy,
  faCut,
  faDiceD20,
  faDownload,
  faEdit,
  faExternalLinkAlt,
  faEye,
  faFilePdf,
  faGraduationCap,
  faHammer,
  faHandHoldingMedical,
  faHeartbeat,
  faHospital,
  faHourglassEnd,
  faHourglassStart,
  faInfoCircle,
  faFilter,
  faList,
  faMedkit,
  faMagic,
  faMinus,
  faNotesMedical,
  faPlus,
  faPrescription,
  faPen,
  faSignOutAlt,
  faStethoscope,
  faStickyNote,
  faTable,
  faTag,
  faTimes,
  faTimesCircle,
  faTrash,
  faUpload,
  faUser,
  faUserClock,
  faUserFriends,
  faUserInjured,
  faUndo,
  faBars, faUnlock, faLock, faThLarge
} from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookMedical } from '@fortawesome/free-solid-svg-icons/faBookMedical'

export default function (Vue) {
  library.add(
    faAngleLeft,
    faAngleDown,
    faAngleRight,
    faArrowLeft,
    faArrowRight,
    faBell,
    faBookOpen,
    faChevronDown,
    faChevronUp,
    faChalkboardTeacher,
    faCheck,
    faCheckCircle,
    faCircle,
    faClock,
    faCog,
    faCogs,
    faCopy,
    faCut,
    faDiceD20,
    faDownload,
    faEdit,
    faExternalLinkAlt,
    faEye,
    faFilter,
    faFilePdf,
    faGraduationCap,
    faHammer,
    faHandHoldingMedical,
    faHeartbeat,
    faHospital,
    faHourglassEnd,
    faHourglassStart,
    faInfoCircle,
    faList,
    faMagic,
    faMedkit,
    faMinus,
    faNotesMedical,
    faBookMedical,
    faPlus,
    faPrescription,
    faPen,
    faSignOutAlt,
    faStethoscope,
    faStickyNote,
    faTable,
    faTag,
    faTimes,
    faTimesCircle,
    faTrash,
    faUpload,
    faUser,
    faUserClock,
    faUserInjured,
    faBars,
    faUserFriends,
    faUndo,
    faUnlock,
    faLock,
    faThLarge
  )
  library.add(
    faFontAwesome,
    faCanadianMapleLeaf
  )
  // IN CODE sample usage is:
  // fas-icon(class="fa", icon="graduation-cap")
  Vue.component('fas-icon', FontAwesomeIcon)
}
