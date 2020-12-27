const emptyarr = []
const numArr = [1, 2, 3, 4, 5]
const arrLength = numArr.length

const firstItem = numArr[0]
const secondItem = numArr[2]
const lastItem = numArr[4]
console.log(firstItem, secondItem, lastItem)

const mixedDataTypes = ['a', 1, true, null, 1.1, [1]]
/* console.log(mixedDataTypes.length) */

const itCompanies = [
 'Facebook',
 'Google',
 'Microsolft',
 'Apple',
 'IBM',
 'Oracle',
 'Amazon',
]
/* console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0],itCompanies[3],itCompanies[6]) */
itCompanies.map((com) => {
 /* console.log(com.join(',')) */
})
/* console.log(itCompanies.join(', ') + ' are big IT companies')
 */
/* if(itCompanies.indexOf('Nokie') == -1) {
console.log('Not found')
} else {
console.log('Not found')
}
 */

/* itCompanies.map((com) => {
console.log()
if(com.indexOf('oo') !== -1) {
console.log(com)
}
}) */

/* Slide sort and reverse */
itCompanies.sort()
console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)

/* Slice slice out the last 3 companies*/
/* itCompanies.splice(0,3)
console.log(itCompanies)

itCompanies.splice(1,3)
console.log(itCompanies)
 */
itCompanies.splice(2, 1)
itCompanies.splice(0, 1)
itCompanies.splice(4, 1)
itCompanies.splice(0, 4)
console.log(itCompanies)
