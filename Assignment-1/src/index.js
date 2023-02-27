const fs = require('fs/promises')
const { resolve } = require('path')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve, reject) => {
		fs.writeFile(fileName, fileContent, (err) => {
			if(err){
				reject(err);
			}
			resolve(fileContent);
		});
		resolve(console.log(fileContent));
	});
}

myFileWriter(`Dhananjai.txt`,`hello`);

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve, reject) =>{
		fs.readFile(fileName, fileContent, (err) => {
			if(err){
				reject(err);
			}
			resolve(fileContent);
		});
		resolve(console.log(fileContent));
	});
}

myFileReader(`Dhananjai.txt`);


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve, reject)=>{
		fs.appendFile(fileName, fileContent, (err) =>{
			if(err){
				reject(err);
			}
			resolve(fileContent);
		});
		resolve(console.log(fileContent));
	});
}
myFileUpdater(`Dhananjai.txt`, `hii`)

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve, reject) =>{
		fs.unlink(fileName,(err) =>{
			if(err){
				reject(err);
			}
			resolve(console.log(`Deleted`));
		});
	})
}
myFileDeleter(`Dhananjai.txt`);



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }