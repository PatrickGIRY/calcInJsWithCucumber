"use strict";

const calc = values => values.map(value => Math.abs(value[0]) + Math.abs(value[1]))

module.exports = calc
