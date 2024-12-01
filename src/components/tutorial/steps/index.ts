import Welcome from "./00_welcome/Welcome";
import BeforeBoard from "./01_createCycle/01_beforeBoard/BeforeBoard";
import SelectActivity from "./01_createCycle/02_selectActivity/SelectActivity";
// import SetDate from "./01_createCycle/03_setDate/SetDate";
// import SetNumber from "./01_createCycle/04_setNumber/SetNumber";
// import ExceptDate from "./01_createCycle/05_exceptDate/ExceptDate";
// import Confirm from "./01_createCycle/06_confirm/Confirm";
import AfterBoard from "./02_check/01_afterBoard/AfterBoard";
import ViewActivity from "./02_check/02_viewActivity/ViewActivity";
import Review from "./02_check/03_review/Review";
import Finish from "./03_finish/Finish";

export const TutorialSteps = [
  Welcome,
  BeforeBoard,
  SelectActivity,
  // SetDate,
  // SetNumber,
  // ExceptDate,
  // Confirm,
  AfterBoard,
  ViewActivity,
  Review,
  Finish,
];
