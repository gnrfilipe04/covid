import numeral from 'numeral'

export const numberFormat = x => numeral(x).format('0,0')
