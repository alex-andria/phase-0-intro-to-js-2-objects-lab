// Write your solution in this file!

const employee = {
    name : "Alex",
    streetAdress : "1234 Cutty Drive",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key] : value, //make sure it's [key] and not just key
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {
        ...employee,
    }
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}






















// const employee = {
//     name : "alex", 
//     streetAddress : "123 Gardenia Avenue"
// };

// function updateEmployeeWithKeyAndValue(employee, key, value){
//     const newEmployee = {...employee};
//     newEmployee[key] = value;

//     return newEmployee;
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee[key] = value;

//     return employee;
// }

// function deleteFromEmployeeByKey(employee, key){
//     const newEmployee = {...employee};
//     delete newEmployee[key]; //using delete newEmployee.key does not work

//     return newEmployee;
// }

// function destructivelyDeleteFromEmployeeByKey(employee,key){
//     delete employee[key];

//     return employee;
// }