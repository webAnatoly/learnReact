// получить json файл с сервера
// https://gist.githubusercontent.com/webAnatoly/8c826fc11c3e13788cff6ccb0ebc2d5d/raw/f3c45ee451a06c1cabcc78a8ef1a3d6d472dbd1c/test.json

let path = 'https://gist.githubusercontent.com/webAnatoly/8c826fc11c3e13788cff6ccb0ebc2d5d/raw/f3c45ee451a06c1cabcc78a8ef1a3d6d472dbd1c/test.json';
let result = '';
async function getJSON2() {
  // получить json с сервера
  let response = await fetch(path);
  if (response.ok) {
    let jsonAsObj = await response.json();
    result = jsonAsObj;
  }
}

export default result