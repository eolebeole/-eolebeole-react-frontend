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

export const PlaceView = observer(({ place }) => {
    return <span>Visible: {place.dbInfoVisible}</span>
})
