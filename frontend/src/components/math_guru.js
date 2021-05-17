import React, { Component } from 'react';
import { render } from 'react-dom';
import { ApiHelper } from '../APIHelper'


export function MathGuru () {
    return(
        <div>{ApiHelper.getMathGuru}</div>
    )
}
