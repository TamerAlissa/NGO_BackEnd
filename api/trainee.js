const
    express = require("express"),
    bcrypt = require("../database/hash"),
    jwt = require("jsonwebtoken"),
    router = express.Router(),
    {checkTraineeEmailExists,checkenroll,getmyprofile,addTraineeAccount,checkPasswordDB,showNameWithLogIn,UpdatePasswordTrainee,UpdateInformationTrainee,addcoursestrainee} = require('../traineeRepo/TraineeRepository'),
    routeBase = '/trainee',
    fs = require("fs")
;
//.....................................
const key = "iwearft54aw7eg6yq3urt4jy4567idfhjgkuiyut";
router.post(routeBase + '/registerTrainee', (req, res) => {
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;
    let address = req.body.address;
    let phone = req.body.phone;
    const checkName = /^[a-z]|[0-9]/i;
    const checkEmail = /[a-z0-9_\.\-]+@+[a-z_\.\-]+\.+[a-z]/i;
    const checkPassword = /[a-z]+|[0-9]+|\!+|\@+|\#+|\$+|\%+|\&/i;
    const checkAdress = /[0-9]|[a-z]/i;
    const checkPhone = /[0-9]/;
if(checkName.test(name) == true && checkEmail.test(email) == true &&
 checkPassword.test(password) == true && checkAdress.test(address) == true && checkPhone.test(phone)==true) {
    checkTraineeEmailExists(email, (EmailDidNotExisit, EmailExisted) => {
        
        if(EmailExisted==0){
            bcrypt.hashPassword(password,8,(HashingDidNotWork,HashingPasswordWorked)=>{
             
                if(HashingDidNotWork){
                    res.status(500);
                }else{
                    addTraineeAccount(name,email,HashingPasswordWorked,address,phone,(addNgoAccountFiled,addNgoAccountSuccessed)=>{
                        console.log(addNgoAccountFiled);
                        if(addNgoAccountFiled){
                            res.status(500);
                        }else{   
                            let id = addNgoAccountSuccessed.insertId
                            let tokenSignUp = jwt.sign({id:id,email:email,password:HashingPasswordWorked,address:address,phone:phone},key)
                           res.send({status:201 , id:id,token:tokenSignUp}); 
                        }
                       
                    });
                }
            })
        }else{
            res.send({status:226})
        }
    })
}else{

    res.status(400)
}
});
// "name":"name",
// "email":"email",
// "password":"password",
// "address":"address",
// "phone":"phone"
//...........................
router.post(routeBase + '/loginTrainee', (req, res) => {
let email = req.body.email;
let password = req.body.password;
checkPasswordDB(email,(err,FindPasswordByEmail)=>{
    console.log(err);
    console.log(FindPasswordByEmail);
    if(FindPasswordByEmail.length>0){
        bcrypt.comparePassword(password,FindPasswordByEmail[0].password,(err,CompareDone)=>{
          console.log(FindPasswordByEmail[0].password);
            if(CompareDone == true){ 
                showNameWithLogIn(email , (error , NameUser)=>{
                    console.log(error)
                    let idToken = NameUser[0].id
                    console.log(idToken)
                    let passwordToken = NameUser[0].password
                    let tokenLogIn = jwt.sign({id:idToken, email:email , password:passwordToken},key)
                    console.log(tokenLogIn)
                    // jwt.verify(tokenLogIn , key , (err , resylt)=>{
                    //     if(err) {
                    //         console.log(err)
                    //     }else{
                    //         console.log(resylt)
                    //     }
                    // })
                res.send({status:200, token:tokenLogIn , id:idToken})
            })
            }else{
                res.send({status:400})
            }
    })
    }else{
        res.send({status:404})
    }
})
})

router.put(routeBase + '/EditePasswordTrainee', (req, res) => {
    let token =  req.headers.authorization.split(" ")[1];
    console.log(token)
    let old_password = req.body.old_password;
    let new_password = req.body.new_password;
    console.log(old_password)
    console.log(new_password)

    jwt.verify(token, key, (TokenIndefind, InfoByToken) => {
        console.log(TokenIndefind)
        if (TokenIndefind) {
            res.send({status:404})
        }
        let id = InfoByToken.id;
        let email = InfoByToken.email;
        let password = InfoByToken.password;
        bcrypt.comparePasswordTrainee(old_password , password , (CompairFiled , compiesDone)=>{
            console.log(compiesDone)
            if(compiesDone == false) {
                res.send({status : 404})
            }else{
                bcrypt.hashPasswordTrainee(new_password , 8 , (HashingFiled , HashingSuccessed)=>{
                    UpdatePasswordTrainee(id,HashingSuccessed,(FiledUpdate , SuccssedUpdate)=>{
                        if(FiledUpdate) {
                            res.send({status : 400})
                        }else{
                            let token = jwt.sign({id:id,email:email,password:password},key);
                        res.send({status:200 , result : SuccssedUpdate , token:token})
                        }
                    })
                })
         
            }
        })


    })
});

router.put(routeBase + '/EditeInformation' , (req , res)=>{
    let name = req.body.name;
    let phone = req.body.phone;
    let address = req.body.address;
    let token = req.headers.authorization.split(" ")[0];
    jwt.verify(token , key , (tokenFiled , resultOfToken)=>{
        console.log(tokenFiled)
        console.log(resultOfToken)
    let id = resultOfToken.id
    let trainerphoto = req.body.photo || ''; 
    console.log(trainerphoto)
    let imgpath = "";

    if(trainerphoto !== ""){
      let base64Image = trainerphoto.split(';base64,').pop();
      console.log(base64Image);
      imgpath = "/imeges/trainee/"+Math.floor(Math.random()*10000)+".png";
  
      fs.writeFile(process.cwd() + imgpath, base64Image, {encoding: 'base64'}, function(err) {
      });
    }
        if(tokenFiled) {
            res.send({status : 400})
        }else{
            UpdateInformationTrainee(id ,imgpath,name , phone , address , (EditeFiled , EditeSuccssed)=>{
                console.log(EditeFiled)
                if(EditeFiled){
                    res.send({status:404})
                }else{
            let tokenTrainee = jwt.sign({id:id,name:name,phone:phone,address:address},key)
            res.send({
                id:id , result:EditeSuccssed , token:tokenTrainee
            })
                }
            })
        }
    })

    

})
router.post(routeBase +'/addcourse', (req , res)=>{
    let idcourses = req.body.idcourses;
let idtrainee = req.body.idtrainee;
addcoursestrainee(idcourses,idtrainee,(faildadd,successadd)=>{

    if(faildadd) {
        console.log(faildadd)
        res.send({status : 404})
    }else{
    
        res.send(successadd)
    }
})
})
router.get(routeBase ,(req , res)=>{
    checkenroll((erro,result)=>{
        if(erro) {
            res.send({status : 404})
        }else{
        
            res.send(result)
        }
    })
    })
// let pagesize = 9;
router.get(routeBase + '/id/:id' ,(req , res)=>{
    let id = req.params.id;
    getmyprofile(id ,(FiledGetTrainee , FoundTrainee)=>{
        console.log(FoundTrainee)
        if(FiledGetTrainee) {
            console.log(FiledGetTrainee)
            res.send({status : 404})
        }else{
            res.send(FoundTrainee)
        }
    })
})

module.exports = router;