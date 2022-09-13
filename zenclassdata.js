[
  {
    "user": "a",
    "codekata": "10",
    "date": "15 oct",
    "attendence": "present",
    "topic": "html",
    "task": "create resume",
    "task_submission": "true"
  },
  {
    "user": "b",
    "codekata": "15",
    "date": "16 oct",
    "attendence": "present",
    "topic": "api",
    "task": "fetch api",
    "task_submission": "false"
  },
  {
    "user": "c",
    "codekata": "17",
    "date": "17 oct",
    "attendence": "present",
    "company_drive": "tcs",
    "topic": "css",
    "task": "position",
    "task_submission": "true"
  },
  {
    "user": "d",
    "codekata": "8",
    "date": "18 oct",
    "attendence": "present",
    "topic": "bootsrtap",
    "task": "flex",
    "task_submission": "false"
  },
  {
    "user": "e",
    "codekata": "25",
    "date": "19 oct",
    "attendence": "present",
    "topic": "grid",
    "task": "tables",
    "task_submission": "true"
  },
  {
    "user": "f",
    "codekata": "27",
    "date": "20 oct",
    "attendence": "present",
    "company_drive": "infosys",
    "topic": "promise",
    "task": "task on promise",
    "task_submission": "true"
  },
  {
    "user": "g",
    "codekata": "31",
    "date": "21 oct",
    "attendence": "absent",
    "topic": "function",
    "task": "arrow function",
    "task_submission": "false"
  },
  {
    "user": "h",
    "codekata": "11",
    "date": "22 oct",
    "attendence": "present",
    "topic": "callback",
    "task": "callback hell",
    "task_submission": "true"
  },
  {
    "user": "i",
    "codekata": "2",
    "date": "23 oct",
    "attendence": "present",
    "topic": "async",
    "task": "async-await",
    "task_submission": "true"
  },
  {
    "user": "j",
    "codekata": "3",
    "date": "24 oct",
    "attendence": "absent",
    "topic": "reactjs",
    "company_drive": "wipro",
    "task": "react hooks functionality",
    "task_submission": "true"
  },
  {
    "user": "k",
    "codekata": "55",
    "date": "25 oct",
    "attendence": "present",
    "topic": "aws",
    "task": "aws intro",
    "task_submission": "true"
  },
  {
    "user": "l",
    "codekata": "31",
    "date": "26 oct",
    "attendence": "absent",
    "topic": "nodejs",
    "task": "create server",
    "task_submission": "true"
  },
  {
    "user": "m",
    "codekata": "16",
    "date": "27 oct",
    "attendence": "present",
    "topic": "expresjs",
    "task": "create server",
    "task_submission": "false"
  },
  {
    "user": "n",
    "codekata": "19",
    "date": "28 oct",
    "attendence": "absent",
    "topic": "dsa",
    "task": "solve problems",
    "task_submission": "true"
  },
  {
    "user": "o",
    "codekata": "10",
    "date": "29 oct",
    "attendence": "present",
    "topic": "system design",
    "company_drive": "zoho",
    "task_submission": "true"
  },
  {
    "user": "p",
    "codekata": "10",
    "date": "30 oct",
    "attendence": "present",
    "topic": "recap",
    "task": "hackathon",
    "task_submission": "false"
  },
  {
    "user": "q",
    "codekata": "10",
    "date": "31 oct",
    "attendence": "present",
    "topic": "fetch",
    "task": "practice",
    "task_submission": "true"
  }
]


// Find all the topics and tasks which are taught

db.collection.find({},
{
  topic: 1,
  task: 1,
  _id: 0
})

//Find all the company drives
db.collection.find({
  company_drive: {
    "$exists": true
  }
},
{
  company_drive: 1,
  _id: 0,
  date: 1
})

//Find all the company drives and students who are appeared for the placement.
db.collection.find({
  company_drive: {
    "$exists": true
  }
},
{
  company_drive: 1,
  _id: 0,
  user: 1,
  attendence: "present"
})


//Find the number of problems solved by the users in codekata

db.collection.find({},
  {
    codekata: 1,
    user: 1,
    _id: 0
  })


  //Find the  users who are absent and task is not submitted
  db.collection.find({
    attendence: "absent",
    "task_submission": "false"
  },
  {
    _id: 0
  })