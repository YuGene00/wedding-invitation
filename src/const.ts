import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-02-07 18:30", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 8월 -> 8월 15일 광복절
export const HOLIDAYS = [16, 17, 18]

export const LOCATION = "더 메리든"
export const LOCATION_ADDRESS = "경기도 성남시 분당구 서현로 180번길 19 비전월드 8층"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
// LOCATION 과 동일하게 설정해도 무방하나, 필요에 따라 좀 더 상세히 작성 가능.
export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const WEDDING_HALL_POSITION = [127.122394, 37.387428]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
// 예: https://map.naver.com/p/entry/place/13321741 -> 13321741
export const NMAP_PLACE_ID = 34329597

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
// 예: https://place.map.kakao.com/8634826 -> 8634826
export const KMAP_PLACE_ID = 1905917949

export const BRIDE_FULLNAME = "박가인"
export const BRIDE_FIRSTNAME = "가인"
export const BRIDE_TITLE = "차녀"
export const BRIDE_FATHER = "이경훈"
export const BRIDE_MOTHER = "이숙진"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-6898-0337",
    account: "신한은행 110-544-123184",
  },
  {
    relation: "신부측",
    name: BRIDE_FATHER,
    phone: "010-5728-2442",
    account: "우리은행 1002-2629-04462",
  },
    {
    relation: "신부측",
    name: BRIDE_MOTHER,
    phone: "010-5728-7407",
    account: "",
  },
]

export const GROOM_FULLNAME = "이영민"
export const GROOM_FIRSTNAME = "영민"
export const GROOM_TITLE = "장남"
export const GROOM_FATHER = "이근우"
export const GROOM_MOTHER = "설경미"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-2908-3218",
    account: "하나은행 748-910765-34807",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-4514-3218",
    account: "농협은행 770-02-209381",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-4522-3218",
    account: "농협은행 312-0116-9639-11",
  },
]
