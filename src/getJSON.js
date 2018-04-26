// получить json файл с сервера
// https://gist.githubusercontent.com/webAnatoly/8c826fc11c3e13788cff6ccb0ebc2d5d/raw/f3c45ee451a06c1cabcc78a8ef1a3d6d472dbd1c/test.json


async function getJSON(url) {
  // получить json с сервера
  let response = await fetch(url); 

  if (response.ok) {
    return await response.json();
  } else {
    return 'data err';
  }
}



export default getJSON;