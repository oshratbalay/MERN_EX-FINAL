const model = require("../model/studentModel");

const gerData = async () => {
  const student = await model.find({});
  return student;
};

const addStudent = async (obj) => {
  try {
    const student = new model(obj);
    await student.save();
    return "created";
  } catch (e) {
    throw e;
  }
};

const updateStudent =async (id,obj) =>{
    try{
     await model.findByIdAndUpdate(id,obj)
     return'updated'
    }catch(e){
    throw e
    }
}

const deleteStudent =async (id) =>{
    try{
     await model.findByIdAndDelete(id)
     return'delete'
    }catch(e){
    throw e
    }
}

module.exports = { gerData ,addStudent ,deleteStudent ,updateStudent};
