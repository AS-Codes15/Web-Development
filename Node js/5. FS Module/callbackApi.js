import { error } from 'console';
import * as fs from 'fs';

// fs.mkdir("c:\\nodejs\\courses", (error) => {
//     if (error) throw error;
//     console.log("derectory create...")
// });

fs.mkdir("c:\\nodejs\\courses", function (error) {
    if (error) throw error;
    console.log("derectory created...");
});