import numeral from 'numeral'

/** @returns {string} '000' | '0.0K' | '0.0M' | '0.0B' | '0,000B' */
export const toAbbrev = (n: number): string => {
  return n >= 1000
    ? numeral(n).format('0.0a').toUpperCase()
    : n
}

/** @returns {string} '000' | '0,000' | '0,000,000' | ... */
export const toFormatted = (n: number): string => numeral(n).format('0,0')