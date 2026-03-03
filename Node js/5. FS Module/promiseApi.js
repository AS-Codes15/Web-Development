import * as fs from "fs/promises";

// create directory/ folder
// try {
//     // await fs.mkdir("c:\\nodejs\\courses");
//     await fs.mkdir("c:\\nodejs\\courses", {recursive: true});
//     console.log("folder created")
// } catch (error) {
//     console.log(error);
// }


//Read The Content
// try {
//     const files = await fs.readdir("c:\\nodejs");
//     for (const file of files) {
//         console.log(file);
//     }
// } catch (error) {
//     console.log(error);
// }

//Remove directory                                        will remove only when the directory is empty
// try {
//     await fs.rmdir("c:\\nodejs\\courses");                              
// } catch (error) {
//     console.log(error);
// }


//CREATE & WRITE FILES
// try {
//      await fs.writeFile("README.md", "hello, read and learn more");
// } catch (error) {
//      console.log(error);
// }

// try {
//      //await fs.appendFile("README.md", "Reading is the sign of a good learner");
//      const data = await fs.readFile("README.md", "utf-8");
//      console.log(data);
// } catch (error) {
//      console.log(error);
// }


// Copy File
// try {
//     await fs.copyFile("README.md", "info.txt");
// } catch (error) {
//     console.log(error);
// }


//GET FILE INFORMATION
try {
    const info = await fs.stat("README.md", "info.txt");
    //console.log(info);
    console.log(info.isDirectory());
    console.log(info.isFile());
} catch (error) {
    console.log(error);
}