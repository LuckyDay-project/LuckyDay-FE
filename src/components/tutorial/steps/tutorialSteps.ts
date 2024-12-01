import React from "react";

export enum TUTORIAL_STEPS {
  // Welcome
  WELCOME = 0,

  // Create Cycle
  CREATE_CYCLE_BEFORE_BOARD = 101,
  CREATE_CYCLE_SELECT_ACTIVITY = 102,
  CREATE_CYCLE_SET_DATE = 103,
  CREATE_CYCLE_SET_NUMBER = 104,
  CREATE_CYCLE_EXCEPT_DATE = 105,
  CREATE_CYCLE_CONFIRM = 106,

  // Check
  CHECK_AFTER_BOARD = 201,
  CHECK_VIEW_ACTIVITY = 202,
  CHECK_REVIEW = 203,

  // Finish
  FINISH = 300,
}

export const TUTORIAL_STEP_ORDER = [
  TUTORIAL_STEPS.WELCOME,
  TUTORIAL_STEPS.CREATE_CYCLE_BEFORE_BOARD,
  TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY,
  TUTORIAL_STEPS.CREATE_CYCLE_SET_DATE,
  TUTORIAL_STEPS.CREATE_CYCLE_SET_NUMBER,
  TUTORIAL_STEPS.CREATE_CYCLE_EXCEPT_DATE,
  TUTORIAL_STEPS.CREATE_CYCLE_CONFIRM,
  TUTORIAL_STEPS.CHECK_AFTER_BOARD,
  TUTORIAL_STEPS.CHECK_VIEW_ACTIVITY,
  TUTORIAL_STEPS.CHECK_REVIEW,
  TUTORIAL_STEPS.FINISH,
];

// 컴포넌트 매핑
export const TUTORIAL_COMPONENTS: Record<TUTORIAL_STEPS, React.ComponentType> =
  {
    [TUTORIAL_STEPS.WELCOME]: React.lazy(() => import("./00_welcome/Welcome")),
    [TUTORIAL_STEPS.CREATE_CYCLE_BEFORE_BOARD]: React.lazy(
      () => import("./01_createCycle/01_beforeBoard/BeforeBoard")
    ),
    [TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY]: React.lazy(
      () => import("./01_createCycle/02_selectActivity/SelectActivity")
    ),
    [TUTORIAL_STEPS.CREATE_CYCLE_SET_DATE]: React.lazy(
      () => import("./01_createCycle/03_setDate/SetDate")
    ),
    [TUTORIAL_STEPS.CREATE_CYCLE_SET_NUMBER]: React.lazy(
      () => import("./01_createCycle/04_setNumber/SetNumber")
    ),
    [TUTORIAL_STEPS.CREATE_CYCLE_EXCEPT_DATE]: React.lazy(
      () => import("./01_createCycle/05_exceptDate/ExceptDate")
    ),
    [TUTORIAL_STEPS.CREATE_CYCLE_CONFIRM]: React.lazy(
      () => import("./01_createCycle/06_confirm/Confirm")
    ),
    [TUTORIAL_STEPS.CHECK_AFTER_BOARD]: React.lazy(
      () => import("./02_check/01_afterBoard/AfterBoard")
    ),
    [TUTORIAL_STEPS.CHECK_VIEW_ACTIVITY]: React.lazy(
      () => import("./02_check/02_viewActivity/ViewActivity")
    ),
    [TUTORIAL_STEPS.CHECK_REVIEW]: React.lazy(
      () => import("./02_check/03_review/Review")
    ),
    [TUTORIAL_STEPS.FINISH]: React.lazy(() => import("./03_finish/Finish")),
  };

export const TOTAL_STEPS = TUTORIAL_STEP_ORDER.length;
export type TutorialStepKey = (typeof TUTORIAL_STEP_ORDER)[number];
