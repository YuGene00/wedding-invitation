import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">
            경기도 성남시 분당구 서현로 180번길 19<br />비전월드 8층
          </div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 분당선 <b>서현역 5번출구</b> 좌측으로 도보3분
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 서현역, AK프라자, 이매촌한신아파트 하차
            <br />
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>더메리든</b> 검색
            <br />
            판교 톨게이트 2.5km 직진 5분 소요
            <br />
            <br />
            - 주차 요금은 2시간 30분 무료입니다.
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
          <div />
        </div>
      </LazyDiv>
    </>
  )
}
