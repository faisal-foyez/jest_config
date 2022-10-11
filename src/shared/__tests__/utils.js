import {getFormattedValue} from '../utils';

test('formats the value',()=>{
  //setup
  const inputValue = '1234.0';
  const expectedValue = '1,234.0';
  //execute
  const result = getFormattedValue(inputValue);
  //verify
  expect(result).toBe(expectedValue);
  //cleanup
})

