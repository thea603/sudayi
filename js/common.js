// JavaScript Document

//网站的主域名
var serverURL = 'http://192.168.1.113/';

/*
写入loclstorage缓存
 * @param key
 * @param data
*/
function setItem(key,data){
	// alert(key);
	localStorage.setItem(key,data);
}
/*
读取localstorage缓存
  * @param key 
  * @returns
*/
function getItem(key){
	// var a = localStorage.getItem(key)
	// alert(a);
	return localStorage.getItem(key);
}