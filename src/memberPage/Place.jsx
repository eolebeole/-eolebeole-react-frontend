import React from "react"
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"

export class Place {
    dbInfoVisible = false;

    constructor(place) {
        makeAutoObservable(this)
        this.place = place;
    }

    show() {
        this.dbInfoVisible = true;
    }

    hide() {
        this.dbInfoVisible = false;
    }
}

// `observer`로 감싸진 함수 컴포넌트는
// 이전에 사용했던 observable의 향후 변경 사항에 반응합니다.
export const PlaceView = observer(({ place }) => {
    return <span>Visible: {place.dbInfoVisible}</span>
})
