import { TUTORIAL_STEPS } from "components";

type TutorialTextType = {
  [key in TUTORIAL_STEPS]?: string | { [key: string]: string };
};

export const TUTORIAL_TEXTS: TutorialTextType = {
  [TUTORIAL_STEPS.WELCOME]: `안녕하세요! <br />
            럭키 데이에 오신 것을 환영해요. <br /> <br />
            제가 럭키 데이를 만드는 방법을 보여드릴까요? <br />
            아래 버튼을 한 번 더 클릭해 보세요.`,

  [TUTORIAL_STEPS.CREATE_CYCLE_BEFORE_BOARD]: `지금은 럭키보드가 비어있어요.<br />
            아래 플러스 버튼을 클릭하면<br />
            럭키 데이를 만들 수 있어요.`,
  [TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY]: {
    "1": `먼저, 다양한 활동 중<br />원하는 것을 선택하거나 직접 입력할 수 있어요.`,
    "2": `저는 이번 럭키데이에<br/><맛있는 음식>을 먹거나 <배움과 문화>를 경험하고 싶어요.<br/><br/>먼저 <맛있는 음식> 카테고리를 열어 활동을 확인해 보아요.`,
    "3": `맛있는 음식이 많네요!<br/>좋아하는 음식을 자유롭게 선택한 후<br/>말풍선 오른쪽의 화살표를 클릭해주세요. `,
    "4": `이어서 <배움과 문화>의 활동도 확인해볼까요?<br/>아래 버튼을 클릭해보세요.`,
    "5": `재밌는 활동들이 많네요!<br/>방금 전과 동일하게<br/><br/>주황색 네모로 되어있는 체크박스를 클릭하여<br/>활동 전체를 선택해주세요.`,
    "6": `혹시 나만의 활동을 입력하고 싶나요?<br/><br/>그렇다면 ‘직접 입력’ 카테고리를 활용해보세요!<br/>같이 확인해볼까요?`,
    "7": `짜잔! 이렇게 나만의 활동까지 입력하면서<br/>럭키데이에 할 수 있는 활동을 다 선택했어요.`,
    "8": `이제 기간을 선택하러 가요!`,
  },
  [TUTORIAL_STEPS.CREATE_CYCLE_SET_DATE]: `먼저, 다양한 활동 중<br />원하는 것을 선택하거나 직접 입력할 수 있어요.`,
  [TUTORIAL_STEPS.CREATE_CYCLE_SET_NUMBER]: `먼저, 다양한 활동 중<br />원하는 것을 선택하거나 직접 입력할 수 있어요.`,
  [TUTORIAL_STEPS.CREATE_CYCLE_EXCEPT_DATE]: `먼저, 다양한 활동 중<br />원하는 것을 선택하거나 직접 입력할 수 있어요.`,
  [TUTORIAL_STEPS.CREATE_CYCLE_CONFIRM]: `먼저, 다양한 활동 중<br />원하는 것을 선택하거나 직접 입력할 수 있어요.`,

  [TUTORIAL_STEPS.CHECK_AFTER_BOARD]: {
    "1": `짜잔~! 럭키 보드가 채워졌어요!<br />
          아직은 럭키 데이가 언제 올지 알 수 없어요.`,
    "2": `며칠 뒤,<br />
          이메일 알림을 받고 럭키 데이 당일에 접속해보면?`,
    "3": `럭키 볼이 보라색으로 바뀌었어요!<br /><br />
          럭키 볼을 클릭해서<br />
          오늘의 럭키 데이 활동을 확인해볼까요?`,
  },

  [TUTORIAL_STEPS.CHECK_VIEW_ACTIVITY]: `혼자 영화관 가기!<br />
              요즘 너무 바빴는데, 오랜만에 여유를 즐기러 가야겠어요.<br /><br />
              럭키 데이를 확인한 후,<br />
              아래 기록하기 버튼을 클릭하면 짧은 기록을 남길 수 있어요.`,

  [TUTORIAL_STEPS.CHECK_REVIEW]: `나의 기록은 [럭키 데이 보관함]에서<br />
              언제든지 찾아볼 수 있어요.<br /><br />
              럭키 데이 튜토리얼은 여기까지예요!`,

  [TUTORIAL_STEPS.FINISH]: `저와 함께해 주셔서 감사해요!<br /><br />
            이제 여러분만의<br />
            럭키 데이를 즐길 시간이에요.<br />
            <br />아래 로그인 버튼을 클릭하면 시작할 수 있어요.`,
};
