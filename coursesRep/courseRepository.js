const { createDatabaseConnection, DB_NAME } = require('../database/config');
function AddNewCourses(title, dateBegin, dateEnd, locations, range_weight, desc,trainerName,id_ngo ,callback) {
    let sql = `INSERT INTO ${DB_NAME}.courses (title,start_date,end_datel,location,number_of_seats,description,trainer,id_ngo ) VALUES(
'${title}','${dateBegin}','${dateEnd}','${locations}','${range_weight}','${desc}','${trainerName}','${id_ngo}')`;

    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                if (callback) {
                    callback(error, result);
                }

                connection.end();
            });
        }
    });
}

function getAllCourses(callback) {
    let sql = `SELECT e.id,e.title  , e.description ,e.trainer, a.name
    FROM ngos_courses.courses e
    LEFT JOIN ngos_courses.trainers a ON e.trainer=a.id `;

    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                if (callback) {
                    callback(error, result);
                }

                connection.end();
            });
        }
    });
}
function deleteCourse(id,id_ngo, callback) {
    let sql = `DELETE FROM ${DB_NAME}.courses WHERE id_ngo = ${id_ngo} and ${DB_NAME}.courses.id=${id}`;

    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                if (callback) {
                    callback(error, result);
                }

                connection.end();
            });
        }
    });
}
function getALLtrainer(id_ngo,callback){

    sql = `SELECT * FROM ${DB_NAME}.trainers where id_ngo=`+id_ngo+`;`;


    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                if (callback) {
                    callback(error, result);
                }
                connection.end();
            });
        }
    });

}
function updataInfromationCOurses(id,title, dateBegin, dateEnd, locations, range_weight, desc,callback){
    let sql=` UPDATE  ${DB_NAME}.courses SET title='${title}', start_date='${dateBegin}',end_datel='${dateEnd}',location='${locations}',number_of_seats='${range_weight}',description ='${desc}' WHERE id= `+id+``;
        createDatabaseConnection((connectError, connection) => {
            if (connectError) {
                callback(connectError, null);
            } else {
                connection.query(sql, (error, result) => {
                    if (callback) {
                        callback(error, result);
                    }
    
                    connection.end();
                });
            }
        });
}
function getOneCourse(id,callback){
    let sql = ` select e.id  , e.title  , e.description ,e.start_date , e.location,e.number_of_seats,e.trainer,e.end_datel,e.id_ngo,a.name,o.logo  from courses e   join trainers a on e.trainer=a.id join ngos o on e.id_ngo=o.id  where e.id= `+id+` `;
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                if (callback) {
                    callback(error, result);
                }

                connection.end();
            });
        }
    });
}
function SearchCourse(title,callback){
    let sql=`select trainers.name , courses.trainer, courses.id , courses.description , courses.title
    from trainers inner join courses on trainers.id = courses.trainer where courses.title like '${title}';`;
     createDatabaseConnection((connectError, connection) => {
         if (connectError) {
            console.log(connectError);
             callback(connectError, null);
         } else {
             connection.query(sql, (error, result) => {

                 if (callback) {
                     console.log(result);
                     callback(error,result);
                 }
                 connection.end();
             });
         }
     });
 
 }
 function getAllCoursesNgo(id_ngo, callback) {
   const sql = `select e.id  , e.title  , e.description ,e.trainer, a.name  from courses e   join trainers a on e.trainer=a.id 

   join ngos o on e.id_ngo=o.id where e.id_ngo= `+id_ngo+`;`;
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                if (callback) {
                    callback(error,result);
                }
                connection.end();
            });
        }
    });
}
function GetRegisteredTrainees(callback){
    let sql=`SELECT * FROM ${DB_NAME}.courses INNER JOIN ${DB_NAME}.courses_trainee on ${DB_NAME}.courses.id= ${DB_NAME}.courses_trainee.id_course INNER JOIN ${DB_NAME}.trainee on ${DB_NAME}.courses_trainee.id_trainee=${DB_NAME}.trainee.id;`
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                if (callback) {
                    callback(error,result);
                }
                connection.end();
            });
        }
    });
}
function registerTrainee(id_course,callback){
    const sql =`SELECT courses_trainee.id_course,courses_trainee.id_trainee,courses_trainee.id,courses.title,courses.id,courses.description,trainers.name
    FROM   courses_trainee
     JOIN courses  
    ON courses.id = courses_trainee.id_course
    JOIN trainee
    ON trainee.id  = courses_trainee.id_trainee
    JOIN trainers
    on courses.trainer=trainers.id
    where courses_trainee.id_trainee=${id_course};`
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                if (callback) {
                    console.log(result)
                    callback(error,result);
                }
                connection.end();
            });
        }
    });
}

function UNRegisterTrainee(id_trainee,callback){
  
    const sql= `delete from ngos_courses.courses_trainee where id = ${id}`;
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                if (callback) {
                    callback(error,result);
                }
                connection.end();
            });
        }
    });
}
function getAllCoursestrainee(id_trainee,callback){
    sql = `SELECT * FROM ${DB_NAME}.courses_trainee where id_trainee= `+id_trainee+`;`;
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                if (callback) {
                    callback(error, result);
                }
                connection.end();
            });
        }
    });
}
module.exports = {
    AddNewCourses,getAllCoursestrainee, getAllCourses, deleteCourse,getALLtrainer,updataInfromationCOurses,getOneCourse,SearchCourse,getAllCoursesNgo,registerTrainee,UNRegisterTrainee,GetRegisteredTrainees
};

