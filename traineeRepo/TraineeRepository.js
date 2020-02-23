const {createDatabaseConnection, DB_NAME} = require('../database/config');

function checkTraineeEmailExists(email, callback) {
    const sql = `SELECT COUNT(*) as count from ${DB_NAME}.trainee WHERE email = "${email}"`;
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                if (callback) {
                    callback(error,result[0].count>0);
                }
        
                connection.end();
            });
        }
    });
}
function addTraineeAccount(name,email,password,address,phone,callback){
const sql="INSERT INTO `ngos_courses`.`trainee` (`name`, `email`, `password`, `address`, `mobile`) VALUES"+`('${name}', '${email}', '${password}', '${address}', '${phone}');`
createDatabaseConnection((connectError, connection) => {
    console.log(connectError);
    if (connectError) {
        callback(connectError, null);
    } else {
        connection.query(sql, (error, result) => {
         
                callback(error,result);

            connection.end()
        });
    }
});
}

function checkPasswordDB(email , callback) {
    const sql = "select password from `ngos_courses`.`trainee` where email ="+`'${email}'`
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
             
                    callback(error,result);
    
                connection.end();
            });
        }
    });
}

function showNameWithLogIn(email , callback){
    const sql = `select name,id, password from ${DB_NAME}.trainee where email ='${email}'`
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
             
                    callback(error,result);

                connection.end();
            });
        }
    });
}


function UpdatePasswordTrainee(id , newPassword , callback){
    const sql = `UPDATE ${DB_NAME}.trainee SET password = '${newPassword}' WHERE (id = '${id}')`;
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
             
                    callback(error,result);

                connection.end();
            });
        }
    });
}


function UpdateInformationTrainee(id ,imgpath, traineeName , phone , address , callback){

    let params = `name = '${traineeName}', address = '${address}', mobile = '${phone}'`;

    if (imgpath !== '') {
        params += `,picture='${imgpath}'`
    }
    
    const sql = `UPDATE ${DB_NAME}.trainee SET ${params} WHERE (id = '${id}')`;
    console.log(sql)
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
             
                    callback(error,result);

                connection.end();
            });
        }
    });
}


function getmyprofile(id , callback) {
const sql = `select id,name,address,mobile,email,picture from ${DB_NAME}.trainee where id=${id}` ;
createDatabaseConnection((connectError, connection) => {
    if (connectError) {
        callback(connectError, null);
    } else {
        connection.query(sql, (error, result) => {
         
                callback(error,result);

            connection.end();
        });
    }
});
}

function addcoursestrainee(idcourses,idtrainee,callback){
   let sql= "INSERT INTO ngos_courses.courses_trainee (`id_course`, `id_trainee`)VALUES"+`(${idcourses}, ${idtrainee});`;
   createDatabaseConnection((connectError, connection) => {
    if (connectError) {
        callback(connectError, null);
    } else {
        connection.query(sql, (error, result) => {
         
                callback(error,result);

            connection.end();
        });
    }
});
}
function checkenroll(callback){
    let sql= "select e.id ,e.title,o.id_trainee from courses e   join courses_trainee o on e.id=o.id_course ;";
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
             
                    callback(error,result);
    
                connection.end();
            });
        }
    });
}
module.exports = {
    checkTraineeEmailExists,addTraineeAccount,checkPasswordDB,showNameWithLogIn,UpdatePasswordTrainee,
    getmyprofile,UpdateInformationTrainee,addcoursestrainee,checkenroll


};